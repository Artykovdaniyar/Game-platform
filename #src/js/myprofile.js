const moreReviewBtn = document.querySelector(".profile__review-more");
const reviewList = document.querySelector(".profile__review-wrapper");

moreReviewBtn.addEventListener("click", () => {
    reviewList.classList.toggle("opened");
})