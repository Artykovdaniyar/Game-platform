const politenessMarks = document.querySelector(".review__mark-politeness")
const punctualityMarks = document.querySelector(".review__mark-punctuality")
const adequacyMarks = document.querySelector(".review__mark-adequacy")





const politenessBtns = Array.from(document.querySelector(".review__mark-politeness").children);
const punctualityBtns = Array.from(document.querySelector(".review__mark-punctuality").children);
const adequacyBtns = Array.from(document.querySelector(".review__mark-adequacy").children);
const reviewSubmitBtn = document.querySelector(".review__submit-btn");
const reviewComment = document.querySelector(".review__comment-textarea");
const popupWindow = document.querySelector(".popup")

import formValidChecker from "./modules/formValidChecker";
import openPopup from "./modules/openPopup";



function fillStarMark(array, character, marks){
    array.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault()
            if(e.target.getAttribute(character) == "5"){
                array.forEach(btn => {
                    btn.innerHTML = `
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.40002 11.75L2.99152 14.4425L4.19002 9.4175L0.267517 6.0575L5.41627 5.645L7.40002 0.875L9.38377 5.645L14.5333 6.0575L10.61 9.4175L11.8085 14.4425L7.40002 11.75ZM7.40002 9.992L9.51277 11.282L8.93827 8.8745L10.8185 7.26425L8.35102 7.06625L7.40002 4.781L6.44902 7.06625L3.98152 7.26425L5.86177 8.8745L5.28727 11.282L7.40002 9.99275V9.992Z" fill="#FFBB3D"></path>
                    </svg>
                    `
                })
                for(let i = 0; i < 5; i++){
                    array[i].innerHTML = `
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.29998 11.75L2.89148 14.4425L4.08998 9.4175L0.16748 6.0575L5.31623 5.645L7.29998 0.875L9.28373 5.645L14.4332 6.0575L10.51 9.4175L11.7085 14.4425L7.29998 11.75Z" fill="#FFBB3D"/>
                        </svg>
                    `
                }
                marks.dataset.marks = "5";
            }else if(e.target.getAttribute(character) == "4"){
                array.forEach(btn => {
                    btn.innerHTML = `
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.40002 11.75L2.99152 14.4425L4.19002 9.4175L0.267517 6.0575L5.41627 5.645L7.40002 0.875L9.38377 5.645L14.5333 6.0575L10.61 9.4175L11.8085 14.4425L7.40002 11.75ZM7.40002 9.992L9.51277 11.282L8.93827 8.8745L10.8185 7.26425L8.35102 7.06625L7.40002 4.781L6.44902 7.06625L3.98152 7.26425L5.86177 8.8745L5.28727 11.282L7.40002 9.99275V9.992Z" fill="#FFBB3D"></path>
                    </svg>
                    `
                })
                for(let i = 0; i < 4; i++){
                array[i].innerHTML = `
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.29998 11.75L2.89148 14.4425L4.08998 9.4175L0.16748 6.0575L5.31623 5.645L7.29998 0.875L9.28373 5.645L14.4332 6.0575L10.51 9.4175L11.7085 14.4425L7.29998 11.75Z" fill="#FFBB3D"/>
                    </svg>
                `
                }
                marks.dataset.marks = "4";
            }else if(e.target.getAttribute(character) == "3"){
                array.forEach(btn => {
                    btn.innerHTML = `
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.40002 11.75L2.99152 14.4425L4.19002 9.4175L0.267517 6.0575L5.41627 5.645L7.40002 0.875L9.38377 5.645L14.5333 6.0575L10.61 9.4175L11.8085 14.4425L7.40002 11.75ZM7.40002 9.992L9.51277 11.282L8.93827 8.8745L10.8185 7.26425L8.35102 7.06625L7.40002 4.781L6.44902 7.06625L3.98152 7.26425L5.86177 8.8745L5.28727 11.282L7.40002 9.99275V9.992Z" fill="#FFBB3D"></path>
                    </svg>
                    `
                })
                for(let i = 0; i < 3; i++){
                array[i].innerHTML = `
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.29998 11.75L2.89148 14.4425L4.08998 9.4175L0.16748 6.0575L5.31623 5.645L7.29998 0.875L9.28373 5.645L14.4332 6.0575L10.51 9.4175L11.7085 14.4425L7.29998 11.75Z" fill="#FFBB3D"/>
                    </svg>
                `
                }
                marks.dataset.marks = "3";
            }else if(e.target.getAttribute(character) == "2"){
                array.forEach(btn => {
                    btn.innerHTML = `
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.40002 11.75L2.99152 14.4425L4.19002 9.4175L0.267517 6.0575L5.41627 5.645L7.40002 0.875L9.38377 5.645L14.5333 6.0575L10.61 9.4175L11.8085 14.4425L7.40002 11.75ZM7.40002 9.992L9.51277 11.282L8.93827 8.8745L10.8185 7.26425L8.35102 7.06625L7.40002 4.781L6.44902 7.06625L3.98152 7.26425L5.86177 8.8745L5.28727 11.282L7.40002 9.99275V9.992Z" fill="#FFBB3D"></path>
                    </svg>
                    `
                })
                for(let i = 0; i < 2; i++){
                array[i].innerHTML = `
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.29998 11.75L2.89148 14.4425L4.08998 9.4175L0.16748 6.0575L5.31623 5.645L7.29998 0.875L9.28373 5.645L14.4332 6.0575L10.51 9.4175L11.7085 14.4425L7.29998 11.75Z" fill="#FFBB3D"/>
                    </svg>
                `
                }
                marks.dataset.marks = "2";
            }else if(e.target.getAttribute(character) == "1"){
                array.forEach(btn => {
                    btn.innerHTML = `
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.40002 11.75L2.99152 14.4425L4.19002 9.4175L0.267517 6.0575L5.41627 5.645L7.40002 0.875L9.38377 5.645L14.5333 6.0575L10.61 9.4175L11.8085 14.4425L7.40002 11.75ZM7.40002 9.992L9.51277 11.282L8.93827 8.8745L10.8185 7.26425L8.35102 7.06625L7.40002 4.781L6.44902 7.06625L3.98152 7.26425L5.86177 8.8745L5.28727 11.282L7.40002 9.99275V9.992Z" fill="#FFBB3D"></path>
                    </svg>
                    `
                })
                for(let i = 0; i < 1; i++){
                array[i].innerHTML = `
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.29998 11.75L2.89148 14.4425L4.08998 9.4175L0.16748 6.0575L5.31623 5.645L7.29998 0.875L9.28373 5.645L14.4332 6.0575L10.51 9.4175L11.7085 14.4425L7.29998 11.75Z" fill="#FFBB3D"/>
                    </svg>
                `
                }
                marks.dataset.marks = "1";
            }
    
        })
    })
}


formValidChecker(reviewComment)


reviewSubmitBtn.addEventListener("click", (e) => {
    if(reviewComment.value == ""){
        e.preventDefault()
        reviewComment.classList.add("invalid__input")
    }else{
        e.preventDefault()
        openPopup(popupWindow, "Отзыв отправлен")
    }
});


fillStarMark(politenessBtns, "data-politeness", politenessMarks);
fillStarMark(punctualityBtns, "data-punctuality", punctualityMarks);
fillStarMark(adequacyBtns, "data-adequacy", adequacyMarks);


