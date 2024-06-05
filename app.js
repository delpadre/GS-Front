const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
});


document.addEventListener("alpine:init", () => {
    Alpine.data("imageSlider", () => ({
        currentIndex: 1,
        images: [
            "https://unsplash.it/640/425?image=30",
            "https://unsplash.it/640/425?image=40",
            "https://unsplash.it/640/425?image=50",
        ],
        previous() {
            if (this.currentIndex > 1) {
                this.currentIndex = this.currentIndex - 1;
            }
        },
        forward() {
            if (this.currentIndex < this.images.length) {
                this.currentIndex = this.currentIndex + 1;
            }
        },
    }));
});