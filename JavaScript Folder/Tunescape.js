
















    document.addEventListener("DOMContentLoaded", function() {
            var songItems = document.querySelectorAll(".songItem");
            var currentAudio = null;
            var playPauseBtn = document.getElementById("playPause");
            var masterTitle = document.getElementById("masterTitle");
            var masterSubtitle = document.getElementById("masterSubtitle");


//event listener for each song item
            songItems.forEach(function(item) {
                item.addEventListener("click", function() {
                    var audio = this.querySelector("audio");
                    var title = this.querySelector("h5").textContent;
                    var subtitle = this.querySelector(".subtitle").textContent;
					
					//pauses currently playing audio if another is played
                    if (currentAudio && currentAudio !== audio) {
                        currentAudio.pause();
                        currentAudio = null;
                        playPauseBtn.classList.remove("bi-pause-fill");
                        playPauseBtn.classList.add("bi-play-fill");
                    }
					
					//play/pause button styling functionality
                    if (audio.paused) {
                        audio.play();
                        playPauseBtn.classList.remove("bi-play-fill");
                        playPauseBtn.classList.add("bi-pause-fill");
                        
                        masterTitle.textContent = title; // Otherwise, only set the title
                      
                        masterTitle.style.paddingTop = '16px'; // Add padding to masterTitle
                        masterSubtitle.style.display = 'none'; // Hide masterSubtitle
                    } else {
                        audio.pause();
                        playPauseBtn.classList.remove("bi-pause-fill");
                        playPauseBtn.classList.add("bi-play-fill");
                    }
                    currentAudio = audio;
                    updateProgressBar(audio);
                });
            });

            playPauseBtn.addEventListener("click", function() {
                if (currentAudio) {
                    if (currentAudio.paused) {
                        currentAudio.play();
                        playPauseBtn.classList.remove("bi-play-fill");
                        playPauseBtn.classList.add("bi-pause-fill");
                    } else {
                        currentAudio.pause();
                        playPauseBtn.classList.remove("bi-pause-fill");
                        playPauseBtn.classList.add("bi-play-fill");
                    }
                }
            });
        });
		
		//progress bar tracker
        function updateProgressBar(audio) {
            var seekBar = document.getElementById("seek");
            var progressBar = document.getElementById("bar2");
            var dot = document.getElementById("dot");
            var currentStart = document.getElementById("currentStart");
            var currentEnd = document.getElementById("currentEnd");

            audio.addEventListener("timeupdate", function() {
                var currentTime = audio.currentTime;
                var duration = audio.duration;

                var progress = (currentTime / duration) * 100;
                progressBar.style.width = progress + "%";
                dot.style.left = progress + "%";

				//formats current time and duration
                var minutes = Math.floor(currentTime / 60);
                var seconds = Math.floor(currentTime % 60);
                currentStart.textContent = minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);

                var durationMinutes = Math.floor(duration / 60);
                var durationSeconds = Math.floor(duration % 60);
                currentEnd.textContent = durationMinutes + ":" + (durationSeconds < 10 ? "0" + durationSeconds : durationSeconds);
            });

            seekBar.addEventListener("input", function() {
                var seekTime = (audio.duration / 100) * seekBar.value;
                audio.currentTime = seekTime;
            });
        }
		
		
		
		
		
		
	//volume bar script
let vol_icon = document.getElementById('vol_icon');
    let vol = document.getElementById('vol');
    let vol_dot = document.getElementById('vol_dot');
    let vol_bar = document.getElementsByClassName('vol_bar')[0];

    vol.addEventListener('input', () => {
        let vol_a = vol.value;
        console.log('Volume slider value:', vol_a);
        vol_bar.style.width = vol_a + '%';
        vol_dot.style.left = vol_a + '%';
        currentAudio.volume = vol_a / 100;

        if (vol_a == 0) {
            vol_icon.classList.remove('bi-volume-down-fill');
            vol_icon.classList.remove('bi-volume-up-fill');
            vol_icon.classList.add('bi-volume-mute-fill');
        } else if (vol_a > 50) {
            vol_icon.classList.remove('bi-volume-down-fill');
            vol_icon.classList.remove('bi-volume-mute-fill');
            vol_icon.classList.add('bi-volume-up-fill');
        } else {
            vol_icon.classList.remove('bi-volume-mute-fill');
            vol_icon.classList.remove('bi-volume-up-fill');
            vol_icon.classList.add('bi-volume-down-fill');
        }
    });

		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		//hit albums scroll
    document.addEventListener("DOMContentLoaded", function() {
    let left_scrolls = document.getElementById('left_scrolls');
    let right_scrolls = document.getElementById('right_scrolls');
    let list = document.querySelector('.list');

    left_scrolls.addEventListener('click', function() {
        scrollSmoothly(list, -185.5);
    });

    right_scrolls.addEventListener('click', function() {
        scrollSmoothly(list, 185.5);
    });
	

	
//allows for a smooth scrolling effect
    function scrollSmoothly(element, amount) {
        let start = element.scrollLeft;
        let target = start + amount;
        let duration = 500; // Adjust duration as needed
        let startTime = performance.now();

        function step(timestamp) {
            let progress = timestamp - startTime;
            element.scrollLeft = start + (target - start) * Math.min(progress / duration, 1);

            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        }

        window.requestAnimationFrame(step);
    }
});


// scroll controls for Popular Artists section
document.addEventListener("DOMContentLoaded", function() {
    
    let left_scroll_artist = document.getElementById('left_scroll_artist');
    let right_scroll_artist = document.getElementById('right_scroll_artist');
    let popularartistlist = document.querySelector('.popularartistlist');

    left_scroll_artist.addEventListener('click', function() {
        scrollSmoothly(popularartistlist, -187.1);
    });

    right_scroll_artist.addEventListener('click', function() { 
        scrollSmoothly(popularartistlist, 187.4);
    });

    function scrollSmoothly(element, amount) {
        let start = element.scrollLeft;
        let target = start + amount;
        let duration = 500; // Adjust time duration as needed
        let startTime = performance.now();

        function step(timestamp) {
            let progress = timestamp - startTime;
            element.scrollLeft = start + (target - start) * Math.min(progress / duration, 1);

            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        }

        window.requestAnimationFrame(step);
    }
});
	
	
	
	

// Scroll cotrol for trending playlist
document.addEventListener("DOMContentLoaded", function() {

        // For Trending Playlists section
        let left_scrolly = document.getElementById('left_scrolly');
        let right_scrolly = document.getElementById('right_scrolly');
        let trendinglist = document.querySelector('.trendinglist');

        left_scrolly.addEventListener('click', function() {
            scrollSmoothly(trendinglist, -200);
        });

        right_scrolly.addEventListener('click', function() {
            scrollSmoothly(trendinglist, 200);
        });

//Function to scroll smoothly 
        function scrollSmoothly(element, amount) {
            let start = element.scrollLeft;
            let target = start + amount;
            let duration = 500; // Adjust duration as needed
            let startTime = performance.now();

            function step(timestamp) {
                let progress = timestamp - startTime;
                element.scrollLeft = start + (target - start) * Math.min(progress / duration, 1);

                if (progress < duration) {
                    window.requestAnimationFrame(step);
                }
            }

            window.requestAnimationFrame(step);
        }
    });


//allows for history navigation between windows
document.getElementById('previous').addEventListener('click', function() {
      window.history.back();
    });

    document.getElementById('next').addEventListener('click', function() {
      window.history.forward();
	  });
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		




