document.addEventListener('DOMContentLoaded', () => {
    const typingElement = document.querySelector('.typing');
    const text = "안녕하세요, 김정학입니다.";
    let index = 0;

    function type() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 150);
        } else {
            // Reset and re-type
            setTimeout(() => {
                typingElement.textContent = '';
                index = 0;
                type();
            }, 3000);
        }
    }

    type();

    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    const githubLink = document.getElementById('github-link');
    const emailLink = document.getElementById('email-link');

    const githubAddress = 'https://github.com/wjdgkr3386';
    const emailAddress = 'wjdgkr3386@gmail.com';

    githubLink.addEventListener('click', () => {
        if (githubLink.textContent === 'GitHub') {
            githubLink.textContent = githubAddress;
        } else {
            window.open(githubAddress, '_blank');
        }
    });

    emailLink.addEventListener('click', () => {
        const emailText = document.createElement('span');
        emailText.textContent = emailAddress;
        emailLink.parentNode.replaceChild(emailText, emailLink);
    });
});
