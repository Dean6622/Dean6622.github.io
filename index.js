document.addEventListener('DOMContentLoaded', function() {
    const images = [
        './docs/image/download.jpg',
        './docs/image/download1.jpeg',
        './docs/image/download2.jpeg',
        './docs/image/download3.jpeg',
        './docs/image/download4.jpeg',
        './docs/image/download5.jpeg'
    ];

    const carouselContainer = document.querySelector('.carousel-items');

    vedio.forEach((vedioSrc) => {
        const vedElement = document.createElement('img');
        vedElement.src = vedioSrc;
        const carouselItem = document.createElement('div');
        carouselItem.className = 'carousel-item';
        carouselItem.appendChild(vedElement);
        carouselContainer.appendChild(carouselItem);
    });

    let index = 0;
    const items = document.querySelectorAll('.carousel-item');
    const total = items.length;

    function switchItem() {
        index = (index + 1) % total;
        const offset = -index * 100 + '%';
        document.querySelector('.carousel-items').style.transform = 'translateX(' + offset + ')';
    }

    setInterval(switchItem, 3000);
});
