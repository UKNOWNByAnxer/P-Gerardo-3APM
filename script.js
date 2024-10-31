const app = Vue.createApp({
    data() {
        return {
            clientId: "178b5f82a1064fc5a9b3d4554f468b63",
            clientSecret: "d30428b02ff3481aabb4bdd95afba76b",
            canciones: ["Necesito una Mujer", "Miguel Gritar", "THE DRIVER", "HONEY (ARE U COMING?)", "Alien Blues"],
            editingIndex: null,
            tempSong: "",
            showModal: false,
            add: "",
            accessToken: null,
            audio: null,
            songDetails: null,
            isPlaying: false,
            currentPlayingIndex: null,
            // New alerts-related properties
            alerts: [],
            alertTypes: {
                success: {
                    class: 'bg-green-100 dark:bg-green-900 border-l-4 border-green-500 dark:border-green-700 text-green-900 dark:text-green-100',
                    icon: 'text-green-600'
                },
                info: {
                    class: 'bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 dark:border-blue-700 text-blue-900 dark:text-blue-100',
                    icon: 'text-blue-600'
                },
                warning: {
                    class: 'bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 dark:border-yellow-700 text-yellow-900 dark:text-yellow-100',
                    icon: 'text-yellow-600'
                },
                error: {
                    class: 'bg-red-100 dark:bg-red-900 border-l-4 border-red-500 dark:border-red-700 text-red-900 dark:text-red-100',
                    icon: 'text-red-600'
                }
            }
        };
    },
    methods: {
        // New method to show alerts
        showAlert(type, message, duration = 3000) {
            const id = Date.now();
            this.alerts.push({ id, type, message });

            // Automatically remove the alert after specified duration
            setTimeout(() => {
                this.removeAlert(id);
            }, duration);
        },

        // Method to remove specific alert
        removeAlert(id) {
            this.alerts = this.alerts.filter(alert => alert.id !== id);
        },

        async fetchAccessToken() {
            try {
                const response = await fetch('https://accounts.spotify.com/api/token', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': 'Basic ' + btoa(this.clientId + ':' + this.clientSecret)
                    },
                    body: 'grant_type=client_credentials'
                });
                const data = await response.json();
                this.accessToken = data.access_token;
                this.showAlert('success', 'Access token successfully retrieved');
            } catch (error) {
                console.error("Error fetching access token:", error);
                this.showAlert('error', 'Failed to retrieve access token');
            }
        },

        async playSong(query, index) {
            // If clicking the same song that's currently playing
            if (index === this.currentPlayingIndex && this.audio) {
                if (this.isPlaying) {
                    this.audio.pause();
                    this.isPlaying = false;
                    this.showAlert('info', 'Song paused');
                } else {
                    this.audio.play();
                    this.isPlaying = true;
                    this.showAlert('info', 'Song resumed');
                }
                return;
            }

            // If playing a different song
            if (!this.accessToken) await this.fetchAccessToken();

            try {
                const response = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=track&limit=1`, {
                    headers: {
                        'Authorization': `Bearer ${this.accessToken}`
                    }
                });
                const data = await response.json();
                const track = data.tracks.items[0];

                if (track) {
                    this.songDetails = {
                        name: track.name,
                        artist: track.artists.map(artist => artist.name).join(", "),
                        album: track.album.name,
                        duration: track.duration_ms,
                        popularity: Math.round((Number(track.popularity) / 2 / 10))
                    };

                    const previewUrl = track.preview_url;
                    if (previewUrl) {
                        if (this.audio !== null) {
                            this.audio.pause();
                        }
                        this.audio = new Audio(previewUrl);
                        
                        this.audio.addEventListener('ended', () => {
                            this.isPlaying = false;
                            this.currentPlayingIndex = null;
                            this.showAlert('info', 'Song finished playing');
                        });
                        
                        this.audio.play();
                        this.isPlaying = true;
                        this.currentPlayingIndex = index;
                        this.showAlert('success', `Now playing: ${track.name}`);
                    } else {
                        this.showAlert('warning', 'This song has no preview available');
                    }
                }
            } catch (error) {
                console.error("Error playing song:", error);
                this.showAlert('error', 'Failed to play song');
            }
        },

        addItem() {
            const cancionExistente = this.canciones.some(c => c.toLowerCase() === this.add.trim().toLowerCase());
            if (this.add.trim() !== "" && !cancionExistente) {
                this.canciones.push(this.add.trim());
                this.showAlert('success', `Song "${this.add.trim()}" added successfully`);
                this.add = "";
            } else if (cancionExistente) {
                this.showAlert('warning', 'Song already exists in the list');
            }
        },

        removeItem(index) {
            const removedSong = this.canciones[index];
            if (index === this.currentPlayingIndex && this.audio) {
                this.audio.pause();
                this.audio = null;
                this.isPlaying = false;
                this.currentPlayingIndex = null;
            }
            this.canciones.splice(index, 1);
            this.showAlert('info', `Song "${removedSong}" removed from the list`);
        },

        modifyItem(index) {
            this.editingIndex = index;
            this.tempSong = this.canciones[index];
            this.showModal = true;
        },

        saveItem() {
            const cancionExistente = this.canciones.some((c, i) =>
                c.toLowerCase() === this.tempSong.trim().toLowerCase() && i !== this.editingIndex
            );
            if (this.tempSong.trim() !== "" && !cancionExistente) {
                const oldSongName = this.canciones[this.editingIndex];
                this.canciones[this.editingIndex] = this.tempSong.trim();
                
                if (this.isPlaying) {
                    this.audio.pause();
                    this.isPlaying = false;
                }
                this.showAlert('success', `Song renamed from "${oldSongName}" to "${this.tempSong.trim()}"`);
                this.closeModal();
            } else if (cancionExistente) {
                this.showAlert('warning', 'Song already exists');
            }
        },

        closeModal() {
            this.showModal = false;
        }
    },
    mounted() {
        this.fetchAccessToken();
        
        this.$nextTick(() => {
            Sortable.create(this.$refs.sortableList, {
                handle: '.handle',
                onEnd: (event) => {
                    const movedItem = this.canciones.splice(event.oldIndex, 1)[0];
                    this.canciones.splice(event.newIndex, 0, movedItem);
                    this.showAlert('info', 'Song order updated');
                },
                animation: 150
            });
        });
    }
}).mount("#appVue");
