document.addEventListener("DOMContentLoaded", function() {
    const icons = document.querySelectorAll(".favorite-action");
    icons.forEach((icon)=>{
        icon.onclick = () => {
            icon.classList.toggle("filled");
            const article = icon.closest("article");
            if (article) {
                article.classList.toggle("activated");
            }
        };
    })
});
