
const circles = document.querySelectorAll('.circle-card');

let triggered = false;

window.addEventListener('scroll', () => {
    const section = document.querySelector('.personal-skills');
    const trigger = section.offsetTop - window.innerHeight + 100;

    if (!triggered && window.scrollY > trigger) {
        triggered = true;

        circles.forEach(card => {
            const percent = parseFloat(card.getAttribute('data-percent'));
            const circle = card.querySelector('.progress');
            const text = card.querySelector('.percent');

            const radius = 50;
            const circumference = 2 * Math.PI * radius;

            const offset = circumference - (percent / 100) * circumference;
            circle.style.strokeDashoffset = offset;

            // COUNTING ANIMATION (DESIMAL)
            let count = 0;
            const interval = setInterval(() => {
                count += 0.5; // step desimal
                text.textContent = count.toFixed(1) + "%";

                if (count >= percent) {
                    text.textContent = percent + "%";
                    clearInterval(interval);
                }
            }, 20);
        });
    }
});
