    //variables
    var numSquares = 6;
    var colors = [];
    var pickedColor;
    
    //document object variables
    var squares = document.querySelectorAll(".square");
    var colorDisplay = document.getElementById("colorDisplay");
    var messageDisplay = document.getElementById("message");
    var h1 = document.querySelector("h1");
    var resetButton = document.getElementById("reset");
    var btn = document.querySelectorAll(".mode");

    //initialize
    init();
    function init(){
        reset();
        //add event listeners to the buttons
        addButtonListeners();
        //add event listeners to squares
        addSquareListeners();
        //add event listener to reset button
        resetButton.addEventListener("click", reset);
    }

    //functions over here 
    function addButtonListeners(){
        for(var i = 0 ; i < btn.length ; i++){
            btn[i].addEventListener("click", function(){
                btn[0].classList.remove("selected");
                btn[1].classList.remove("selected");
                this.classList.add("selected");
                numSquares = (this === btn[0]) ? 3 : 6;
                reset();
            })
        }
    }

    function addSquareListeners(){
        for(var i = 0 ; i < squares.length ; i++){
            //add event listeners
            squares[i].addEventListener("click", function(){
                var clickedColor = this.style.backgroundColor;
                console.log(pickedColor , clickedColor);
                if(clickedColor === pickedColor){
                    messageDisplay.textContent = "Correct";
                    messageDisplay.style.backgroundColor = "green";
                    changeColors(clickedColor);
                    h1.style.backgroundColor = clickedColor;
                    resetButton.textContent = "Play Again";
                }
                else{
                    this.style.backgroundColor = "#232323";
                    messageDisplay.textContent = "Try Again";
                    messageDisplay.style.backgroundColor = "red";
                }
            })
        }
    }

    function changeColors(color){
        for(var i = 0 ; i < colors.length ; i++){
            squares[i].style.backgroundColor = color;
        }
    }

    function pickColor(){
        return colors[Math.floor(Math.random()*colors.length)];
    }

    function generateRandomColors(num){
        //make an array
        var arr = [];
        //add num random colors
        for(var i = 0 ; i < num ; i++){
            arr.push(randomColor());
        }
        //return the array
        return arr;
    }

    function randomColor(){
        var r = Math.floor(Math.random()*256);
        var g = Math.floor(Math.random()*256);
        var b = Math.floor(Math.random()*256);
        return "rgb(" + r + ", " + g + ", "+ b + ")"; 
    }

    function reset(){
        resetButton.textContent = "New Colors";
        h1.style.backgroundColor = "steelblue";
        messageDisplay.textContent = "";
        colors = generateRandomColors(numSquares);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        for(var j = 0 ; j < squares.length ; j++){
            if(j < numSquares){
                squares[j].style.backgroundColor = colors[j];
                squares[j].style.display = "block";
            }
            else{
                squares[j].style.display = "none";
            }
        }
    }
