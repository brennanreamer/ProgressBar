var i = 0;
var perc;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        console.log(width);
        elem.style.width = width + "%";
      }
    }
  }
}

function update(){
    total = getValue("Total");
    current = getValue("Current");
    console.log('total', total);
    console.log('current', current);
    if (current == null && total == null){
        current=0;
        total=0;
    }
    
    if ((total == 0 || total == null) && (current == 0 || current == null)){
        perc = 0;
        document.getElementById("myProgress").style.opacity = 0;
    }
    else{
        
        document.getElementById("myProgress").style.opacity = 1;
        if (current == total) {
            perc = current/total;
            document.getElementById("myBar").style.backgroundColor = "#65AC5B"; //Set bar color to green
            document.getElementById("myProgress").style.color = "#65AC5B"; // Set text color to green
        } else if (current > total) {
            perc = 1;
            document.getElementById("myBar").style.backgroundColor = "#C33D36"; //Set bar color to green
            document.getElementById("myProgress").style.color = "#C33D36"; // Set text color to green
        } else {
            perc = current/total;
            document.getElementById("myBar").style.backgroundColor = "#2A3545"; //Set bar color to default
            document.getElementById("myProgress").style.color = "#2A3545"; // Set text color to default
        }
        
    }
    var elem = document.getElementById("myBar");
    elem.style.width = (perc*85) + "%";
    console.log("Update set", perc);
    //label.appendChild(document.createTextNode(current));
    label.innerHTML = current;
    
    //.insertAdjacentText('afterend', current)//.style.font-size = 30px;

}
const label = document.createElement('span');
label.style.cssText = "font-size:45px; margin-left:10px; font-family: Inter; top: 50%;";
document.getElementById("myBar").insertAdjacentElement('afterend', label);
    
//Do something anytime a prop value changes
getValue('Current', (internalVariable) => {    
    update();
});

//move()
