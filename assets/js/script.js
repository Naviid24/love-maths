
document.addEventListener("DOMContentLoaded", function(){
    //add event listener for buttons
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function(){
            if(this.getAttribute("data-type") === "submit"){
                alert("You clicked submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                 alert(`You clicked ${gameType}`);
            }
        })
        
    }       
    
})