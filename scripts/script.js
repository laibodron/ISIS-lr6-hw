setInterval(() => {
    function getRandomHexColor() {
        return "#" + (Math.floor(Math.random()*256).toString(16) + "0").slice(0, 2).toUpperCase()
        + (Math.floor(Math.random()*256).toString(16) + "0").slice(0, 2).toUpperCase()
        + (Math.floor(Math.random()*256).toString(16) + "0").slice(0, 2).toUpperCase();
    }
    document.querySelectorAll(".r").forEach((el) => el.style.color = getRandomHexColor());
}, 500);
