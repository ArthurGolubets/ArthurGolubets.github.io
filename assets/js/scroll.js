let menu = document.getElementById('Category');

menu.addEventListener('wheel', function (e) {
    e.preventDefault()
    if (e.deltaY > 0) {
        this.scrollLeft += e.deltaY;
    } else {
        this.scrollLeft -= -e.deltaY;
    }
})