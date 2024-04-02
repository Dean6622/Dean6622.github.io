document.addEventListener('DOMContentLoaded', function() {
    const media = [
        { src: './docs/vedio/Reader_Login.webm', info: 'Reader Login' },
        { src: './docs/vedio/Reader_Booklist.webm', info: 'Reader Booklist' },
        { src: './docs/image/download3.jpeg', info: 'Search Filter' },
        { src: './docs/vedio/Library_Login.webm', info: 'Librarian Login' },
        { src: './docs/vedio/Librarian_ModifyLibrary.webm', info: 'Librarian Modify book' }
    ];

    const carouselContainer = document.querySelector('.carousel-items');
    const inforDisplay = document.getElementById('recording_infor');

    media.forEach((mediaSrc, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.className = 'carousel-item';


        if (mediaSrc.src.endsWith('.webm')) {
            const videoElement = document.createElement('video');

            videoElement.setAttribute('controls', '');
            videoElement.setAttribute('muted', '');
            videoElement.setAttribute('loop', '');

            const sourceElement = document.createElement('source');
            sourceElement.src = mediaSrc.src;
            sourceElement.type = 'video/webm';

            videoElement.appendChild(sourceElement);
            carouselItem.appendChild(videoElement);
        } else {
            const imgElement = document.createElement('img');
            imgElement.src = mediaSrc.src;
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
        document.querySelectorAll('video').forEach(function(video) {
            video.pause();
        });
        inforDisplay.textContent = media[index].info;
    }

    nextBtn.addEventListener('click', function() { switchItem('next'); });
    prevBtn.addEventListener('click', function() { switchItem('prev'); });
    inforDisplay.textContent = media[0].info;
});

