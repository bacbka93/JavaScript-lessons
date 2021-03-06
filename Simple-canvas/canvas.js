function showBtnAnimated(){
    var canvas      = document.querySelector('#play-btn').getContext("2d");  
    var radius      = 40;
    var start_angle = 0;
    var color       = 255;
    // canvas.moveTo(0,0);
    // canvas.lineTo(50,50);
    // canvas.lineTo(0,100);
    // canvas.lineTo(50,50);
    // canvas.lineTo(100,0);
    // canvas.lineTo(50,50);
    // canvas.lineTo(100,100);
    var timer = setInterval(function(){
        canvas.strokeStyle = 'rgb(0, ' + color + ',0)';
            for( var angle = 0; angle < 2; angle+=0.2 ){
                canvas.lineWidth = 3;
                canvas.beginPath();
                canvas.arc(50, 50, radius, (0.0+angle+start_angle)* Math.PI, (0.15+angle+start_angle)* Math.PI);
                // canvas.closePath();
                canvas.stroke();
            }
            radius -= 5;
            start_angle += 0.03;
            color -= 30;
            if( radius < 15 ) clearInterval(timer);
        }, 30);
    

}


//onemouseout
function hideBtnAnimated(){
    // .arc() + white() interval
    var canvas      = document.querySelector('#play-btn').getContext("2d");  
    var radius      = 15;
    var timer = setInterval(function(){
            canvas.strokeStyle = 'rgb(255, 255, 255)';
            for( var angle = 0; angle <= 2; angle+=0.2 ){
                canvas.lineWidth = 5;
                canvas.beginPath();
                canvas.arc(50, 50, radius, 0, (0.15+angle)* Math.PI);
                canvas.stroke();
            }
            radius += 5;
            if( radius == 45 ) clearInterval(timer);
        }, 30);
    
}