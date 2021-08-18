let nextBtn = document.querySelector(".create-fighting__next-btn");
let textarea = document.querySelector("textarea");
let inputs = document.querySelectorAll("input");

inputs.forEach(input => {
    input.addEventListener("focusout", function(){
        if(this.value == ""){
            this.classList.add("invalid");
        }else{
            this.classList.remove("invalid")
        }
    });
});
textarea.addEventListener("focusout", function(){

    if(this.value == ""){
        this.classList.add("invalid");
    }else{
        this.classList.remove("invalid")
    }

})

// nextBtn.addEventListener("click", function(e){
//     inputs.forEach(input =>{
//         if(input.value == ""){
//             e.preventDefault()
//             input.style.border = "1px solid red"
//             input.addEventListener("focus", function(e){
//                 inputs.forEach(input =>{
//                     input.style = "";
//                     textarea.style = "";
//                 })
//             });
//             textarea.addEventListener("focus", function(e){
//                 inputs.forEach(input =>{
//                     input.style = "";
//                     textarea.style = "";
//                 })
//             });
//         }
//     })
//     if(textarea.value == ""){
//         textarea.style.border = "1px solid red";
//     }

// })
console.log(nextBtn)