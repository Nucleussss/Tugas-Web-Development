const container = document.querySelector(".container");

container.addEventListener("click",function (e) {
    if (e.target.className == "thumb") {
        let imgJumbo = document.querySelector("img");
        let srcThumb = e.target.getAttribute("src");
        imgJumbo.setAttribute("src",srcThumb);
        imgJumbo.classList.add("fade");

        setTimeout(function () {
            imgJumbo.classList.remove("fade");    
        },500)
        
        const thumb = document.querySelectorAll(".thumb");
        console.log(thumb)
        thumb.forEach(function (elmnt) {
            elmnt.classList.remove("active");
        })

        e.target.classList.add("active");
    }
    
});


