const counts = document.querySelectorAll('.countNum');
let animationStarted = false;

const startCountAnimation = () => {
    if (animationStarted) {
        return;
    }

    counts.forEach((count, index) => {
        const targetCount = +count.dataset.count;
        const animationDuration = 2000; 
        const steps = 100;
        const stepDuration = animationDuration / steps;
        const step = targetCount / steps;

        let currentCount = 0;

        const updateCount = () => {
            if (currentCount < targetCount) {
                currentCount += step;
                count.innerText = "+" + Math.ceil(currentCount);
                setTimeout(updateCount, stepDuration);
            } else {
                count.innerText = "+" + targetCount;
            }
        };

        updateCount();
    });

    animationStarted = true; 
};


window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY || window.pageYOffset;

   
    if (counts[0].getBoundingClientRect().top < windowHeight) {
        startCountAnimation();
    }
});


document.addEventListener('DOMContentLoaded', function() {
    var scrollToTopButton = document.getElementById('scrollToTop');

    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
