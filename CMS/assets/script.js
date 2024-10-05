let jsDrop = document.querySelectorAll(".js-drop");

//element.addEventListener("event", callback_function())
jsDrop.forEach(drop => { //Fat-arrow function: let func_name = () => { ... }
    drop.parentNode.classList.add("drop-wrapper");
    drop.nextElementSibling.classList.add("dropdown");
    drop.addEventListener("click", function(e) {
        e.preventDefault();//stops page reload and link acess or form submit events etc.
        if(this.parentNode.classList.contains("expand") == true) {
            this.parentNode.classList.remove('expand');
        } else {
            this.parentNode.classList.add('expand');
        }
    }); 
});

/*let profile_icon = document.querySelector(".js-drop");

profile_icon.addEventListener("click",function(){
    //console.log(this.parentNode.classlist);
    if(this.parentNode.classList.contains("expand") == true){
        this.parentNode.classList.remove('expand');
    }
    else{
        this.parentNode.classList.add('expand');
    }
});
let product_icon = document.querySelector(".js-drop");
product_icon.addEventListener("click",function(){
   // console.log(this.parentNode.classlist);
    if(this.parentNode.classList.contains("expand") == true){
        this.parentNode.classList.remove('expand');
    }
    else{
        this.parentNode.classList.add('expand');
    }
});
*/

