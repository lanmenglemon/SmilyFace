var canvas  = document.getElementById("canvas_elem");
if (canvas.getContext) {
    var canvas_context = canvas.getContext('2d');
} else {
    console.log('Sorry your browser does not support canvas');
}