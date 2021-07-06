const b = document.getElementById("changeBackground");
let count = 0;
function backgroundChange() {
    if(count === 0){
        document.body.style.backgroundColor = "purple";
        count = 1; 
    } else {
        document.body.style.backgroundColor = "aqua";
        count = 0;
    };
};

b.addEventListener("click", function(e){
    e.preventDefault();
    backgroundChange();
});