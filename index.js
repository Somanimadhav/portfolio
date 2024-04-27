let darkmode = document.querySelector('#darkmode');
darkmode.onclick = () => {
    darkmode.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};