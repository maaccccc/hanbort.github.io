var fullImgBox = document.getElementById("fullImgBox");
            var fullImg = document.getElementById("fullImg");

            function openFullImg(pic){
                fullImgBox.style.display = "flex";
                fullImg.src = pic
            }
            function closeFullImg(){
                fullImgBox.style.display = "none";
            }
function myAlert() {
    return alerto("You are about to visit a new Website!");
}

// Pag ginawa niya ung certain action which is pag-load ng website mag popup ung message/content
window.addEventListener('load', () => {
    const popup = document.querySelector('.popup-auto');
    const x = document.querySelector('.popup-auto-content h1');
    // sa Java && means both is false
    if (popup && x) {
        popup.classList.add('showPopup');

        // Checking kung tama ung element class
        if (popup.firstElementChild) {
            popup.firstElementChild.classList.add('showPopup');
        }

        x.addEventListener('click', () => {
            popup.classList.remove('showPopup');

            // Tangal ung element class kung ipipindot ung X mark
            if (popup.firstElementChild) {
                popup.firstElementChild.classList.remove('showPopup');
            }
        });
    }
});
// Pop up na siya
function togglePopup() {
    const popup = document.getElementById("popup-1");
    if (popup) {
        popup.classList.toggle('active');
    }
}
