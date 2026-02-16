const body = document.querySelector('body');

body.addEventListener('click', (e) => {

    const cirElem = document.createElement('div');
    cirElem.textContent = "HI";

    // circle styling
    cirElem.style.position = "absolute";
    cirElem.style.width = "50px";
    cirElem.style.height = "50px";
    cirElem.style.borderRadius = "50%";
    cirElem.style.display = "flex";
    cirElem.style.alignItems = "center";
    cirElem.style.justifyContent = "center";
    cirElem.style.color = "white";

    const colors = [
        "red","blue","green","yellow","orange","purple","pink","brown",
        "gray","cyan","magenta","lime","maroon","navy","olive","teal"
    ];

    // random color
    cirElem.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];

    // set position
    cirElem.style.top = `${e.clientY - 25}px`;
    cirElem.style.left = `${e.clientX - 25}px`;

    body.append(cirElem);

    // remove after 5 seconds
    setTimeout(() => {
        cirElem.remove();
    }, 5000);
});
