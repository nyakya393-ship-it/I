// ======================================
// Router
// ======================================

const pages = document.querySelectorAll(".page");

const navLinks = document.querySelectorAll(".sidebar nav a");

const pageTitle = document.getElementById("pageTitle");

// ================================

function showPage(pageId){

    pages.forEach(page=>{

        page.classList.remove("active");

    });

    const target = document.getElementById(pageId);

    if(target){

        target.classList.add("active");

    }

    navLinks.forEach(link=>{

        link.classList.remove("active");

    });

    const activeLink = document.querySelector(

        `.sidebar nav a[data-page="${pageId}"]`

    );

    if(activeLink){

        activeLink.classList.add("active");

    }

    if(pageTitle && activeLink){

        pageTitle.textContent =
            activeLink.querySelector("span").textContent;

    }

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

// ================================

navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        const page = link.dataset.page;

        showPage(page);

    });

});

// ================================

window.showPage = showPage;
