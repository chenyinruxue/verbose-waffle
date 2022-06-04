const ACTIVE = 'active';
let panel = document.querySelectorAll('.panel');
panel.forEach((item, i) => {
    item.addEventListener('click', function () {
        panel.forEach((v) => {
            v.classList.remove(ACTIVE);
        })
        this.classList.add(ACTIVE);
    })
})