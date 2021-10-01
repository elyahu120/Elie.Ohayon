function changeTitle () {
    document.title="New Elie Ohayon";
}
function animation() {
    var stopButton = document.createElement("BUTTON");
    document.body.appendChild(stopButton);
    stopButton.id="stopButton";
    stopButton.innerHTML="Stop";
    stopButton.style.position="absolute";
    stopButton.style.padding="3vh";
    stopButton.style.fontsize="3vh";
    stopButton.style.top="50vh";
    stopButton.style.left="50vh";
    let id = null;
    const elem = document.getElementById("ball");
    let pos=0;
    clearInterval(id);
    id = setInterval(frame, 0.01);
    function frame() {
        if (pos == 800) {
            pos--;
            elem.style.bottom = pos + 'px';
            elem.stylez.right = pos + 'px';
        }
        pos++;
        elem.style.top = pos + 'px';
        elem.style.left = pos + 'px';

    }
}
