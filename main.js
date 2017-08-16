window.onload = function() {
    var parallaxHeader = document.querySelector(".parallax-header");
    var prevPosX = 0;
    var prevPosY = 0;
    var massiveOfKvadratiks = document.querySelectorAll(".kvadratik");
    var mokPosX = new Array(); 
    var mokPosY = new Array(); 
    
    for(var i = 0; i < massiveOfKvadratiks.length; i++) {
        mokPosX[i] = massiveOfKvadratiks[i].offsetLeft;
        mokPosY[i] = massiveOfKvadratiks[i].offsetTop;
    }
    parallaxHeader.addEventListener('mousemove', parallaxSquare);
    
    function parallaxSquare(e) {
        var currentPosX = e.clientX;
        var currentPosY = e.clientY;
        if(currentPosX < prevPosX) {
            for(var i = 0; i < massiveOfKvadratiks.length; i++) {
              var leftPos = massiveOfKvadratiks[i].offsetLeft;
              leftPos -= 1;
                if(leftPos >= mokPosX[i] - 2) {
                      massiveOfKvadratiks[i].style.left = leftPos + "px";
                }
            }
        }
        if(currentPosX > prevPosX) {
            for(var i = 0; i < massiveOfKvadratiks.length; i++) {
              var leftPos = massiveOfKvadratiks[i].offsetLeft;
              leftPos += 1;
             if(leftPos <= mokPosX[i] + 2) {
                      massiveOfKvadratiks[i].style.left = leftPos + "px";
                }
            }
        }  
                if(currentPosY < prevPosY) {
            for(var i = 0; i < massiveOfKvadratiks.length; i++) {
              var topPos = massiveOfKvadratiks[i].offsetTop;
              topPos -= 1;
                if(topPos >= mokPosY[i] - 2) {
                      massiveOfKvadratiks[i].style.top = topPos + "px";
                }
            }
        }
        if(currentPosY > prevPosY) {
            for(var i = 0; i < massiveOfKvadratiks.length; i++) {
              var topPos = massiveOfKvadratiks[i].offsetTop;
              topPos += 1;
             if(topPos <= mokPosY[i] + 2) {
                      massiveOfKvadratiks[i].style.top = topPos + "px";
                }
            }
        }  
        prevPosX = currentPosX;
        prevPosY = currentPosY;
    }

}