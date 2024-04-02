document.addEventListener('DOMContentLoaded', function() {
    const media = [
        './docs/vedio/Reader_Login.webm',
        './docs/vedio/Reader_Booklist.webm',
        './docs/image/download3.jpeg',
        './docs/image/download4.jpeg',
        './docs/image/download5.jpeg'
    ];

    const carouselContainer = document.querySelector('.carousel-items');

    media.forEach((mediaSrc, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.className = 'carousel-item';

        if (mediaSrc.endsWith('.webm')) {
            const videoElement = document.createElement('video');

            if (index === 0) {
                const playPauseBtn = document.getElementById('play-pause');
                const icon = playPauseBtn.querySelector('i');

                playPauseBtn.addEventListener('click', function() {
                    if (videoElement.paused || videoElement.ended) {
                        videoElement.play();
                        icon.classList.remove('fa-play');
                        icon.classList.add('fa-pause');
                    } else {
                        videoElement.pause();
                        icon.classList.remove('fa-pause');
                        icon.classList.add('fa-play');
                    }
                });
            }

            videoElement.setAttribute('controls', ''); // 可选，添加控件
            videoElement.setAttribute('muted', ''); // 静音
            videoElement.setAttribute('loop', ''); // 循环播放

            const sourceElement = document.createElement('source');
            sourceElement.src = mediaSrc;
            sourceElement.type = 'video/webm';

            videoElement.appendChild(sourceElement);
            carouselItem.appendChild(videoElement);
        } else {
            const imgElement = document.createElement('img');
            imgElement.src = mediaSrc;
            carouselItem.appendChild(imgElement);
        }

        carouselContainer.appendChild(carouselItem);
    });

    const prevBtn = document.getElementById('playback-backward');
    const nextBtn = document.getElementById('playback-forward');
    let index = 0;
    const items = document.querySelectorAll('.carousel-item');
    const total = items.length;

    function switchItem(direction) {
        if (direction === 'next') {
            index = (index + 1) % total;
        } else if (direction === 'prev') {
            index = (index - 1 + total) % total;
        }
        const offset = -index * 100 + '%';
        document.querySelector('.carousel-items').style.transform = 'translateX(' + offset + ')';
        document.querySelector('.carousel-items').style.transform = 'translateX(' + offset + ')';
    }

    nextBtn.addEventListener('click', function() { switchItem('next'); });
    prevBtn.addEventListener('click', function() { switchItem('prev'); });
});

