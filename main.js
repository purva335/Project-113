function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110,250);
    video = createCapture (VIDEO);
    video.hide();
    
    
}


    function draw() {
        image(video,100,80,300,250);
    
        stroke(143, 237, 81);
        fill(143, 237, 81);
        
        circle(40,40,50);
        circle(460,40,50);
        circle(40,360,50);
        circle(460,360,50);
    
    
        stroke(34, 186, 105);
        fill(34, 186, 105);
        rect(63, 27, 375, 25);
        rect(63, 347, 375, 25);
        rect(27, 63, 25, 275);
        rect(448, 63, 25, 275);
    }
    

    
    
    




function take_snapshot(){
    save('student_name.png');
}

