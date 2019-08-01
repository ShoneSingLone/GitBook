
function testToBlob() {
    let canvas = document.getElementById("canvas");
    let d = canvas.width;
    let ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(d / 2, 0);
    ctx.lineTo(d, d);
    ctx.lineTo(0, d);
    ctx.closePath();
    ctx.fillStyle = "green";
    ctx.strokeStyle = "black";
    ctx.strokeWidth = "10";
    ctx.stroke();
    ctx.fill();

    function blobCallback(iconName) {
        return function (b) {
            var a = document.createElement("a");
            a.textContent = "Download";
            document.body.appendChild(a);
            a.style.display = "block";
            a.download = iconName + ".ico";
            a.href = window.URL.createObjectURL(b);
        };
    }
    canvas.toBlob(blobCallback("passThisString"), "image/vnd.microsoft.icon",
        "-moz-parse-options:format=bmp;bpp=32");
}

window.testToBlob = testToBlob;