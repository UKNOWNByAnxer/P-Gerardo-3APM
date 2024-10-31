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
            isPlaying: false,  // New state to track if audio is playing
            currentPlayingIndex: null  // New state to track which song is playing
        };
    },
    methods: {
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
            } catch (error) {
                console.error("Error fetching access token:", error);
            }
        },

        // Updated playSong method with toggle functionality
        async playSong(query, index) {
            // If clicking the same song that's currently playing
            if (index === this.currentPlayingIndex && this.audio) {
                if (this.isPlaying) {
                    this.audio.pause();
                    this.isPlaying = false;
                } else {
                    this.audio.play();
                    this.isPlaying = true;
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
                        
                        // Add ended event listener to reset playing state
                        this.audio.addEventListener('ended', () => {
                            this.isPlaying = false;
                            this.currentPlayingIndex = null;
                        });
                        
                        this.audio.play();
                        this.isPlaying = true;
                        this.currentPlayingIndex = index;
                    } else {
                        alert('Esta canción no tiene vista previa disponible');
                    }
                }
            } catch (error) {
                console.error("Error playing song:", error);
            }
        },

        addItem() {
            const cancionExistente = this.canciones.some(c => c.toLowerCase() === this.add.trim().toLowerCase());
            if (this.add.trim() !== "" && !cancionExistente) {
                this.canciones.push(this.add.trim());
                this.add = "";
            }
        },

        removeItem(index) {
            if (index === this.currentPlayingIndex && this.audio) {
                this.audio.pause();
                this.audio = null;
                this.isPlaying = false;
                this.currentPlayingIndex = null;
            }
            this.canciones.splice(index, 1);
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
                this.canciones[this.editingIndex] = this.tempSong.trim();
                this.closeModal();
            } else if (cancionExistente) {
                this.$refs.modalText.innerHTML = 'Modificar Canción <span style="color:red;">Ya Existe</span>';
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
                },
                animation: 150
            });
        });
    }
}).mount("#appVue");
