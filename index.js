const projects = [
    {
        title: "Recipe Blog",
        img: "./images/recipe-blog.jpg",
        link: "https://recipe-pagechallenge.netlify.app/",
        description: "In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
        id: "Responsive",
        hasTag: "#HTML #CSS #responsive",
        github: "https://github.com/19alema/Recipe-Blog.git",
        category: "react"
    },
    {
        title: "Checkout",
        img: "./images/my-team.jpg",
        link: "https://devc-checkout-page.netlify.app/",
        description: "In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
        id: "Responsive",
        hasTag: "#HTML #CSS #responsive",
        github: "https://github.com/19alema/Dev-Checkout-Page.git",
         category: "responsive"
    },
    {
        title: "My Gallery",
        img: "./images//my-gallery.jpg",
        link: "https://my-team-page-app.netlify.app/",
        description: "In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
        id: "Responsive",
        hasTag: "#HTML #CSS #responsive",
        github: "https://github.com/19alema/My-Gallery-Page.git",
         category: "responsive"
    },
     {
        title: "Interior Designs",
        img: "./images/interior-consultant.jpg",
        link: "https://interior-homepage.netlify.app/",
        description: "In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
        id: "Responsive",
         hasTag: "#HTML #CSS #responsive",
         github: "https://github.com/19alema/Interior-Design.git",
        category: "vue"
    },
      {
        title: "Eddie Homepage",
        img: "./images/edie.jpg",
        link: "https://eddie-hompage.netlify.app/",
        description: "In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
        id: "Responsive",
        hasTag: "#HTML #CSS #responsive",
        github: "https://github.com/19alema/Eddie-Homepage.git",
        category: "responsive"
    }
]

let total_projects = document.querySelector(".total_projects")
const projectContainer = document.querySelector(".project-container")
window.addEventListener("DOMContentLoaded", function () {
    displayProjects(projects)
})


function displayProjects(projectItem) {
      let displayContent = projectItem.map((project) => {
            return `
            <div class="project">
              <img src="${project.img}" alt="project-img" class="project_img">
              <div class="project-information">
                <p class="project_hasTags">${project.hasTag}</p>
                <h2 class="project_name">${project.title}</h2>
                <p class="project_description">
                   ${project.description}
                </p>
                <div class="ptoject-btn">
                  <button class="btn btn_white">
                    <a href="${project.link}" class="btn_demo">Demo</a>
                  </button>
          
                  <button class="btn btn_blue">
                    <a href="${project.github}" class="btn_code">code</a>
                  </button>
                </div>
              </div>
            </div>
          `
        })

    total_projects.innerText = `Project: ${displayContent.length}`;
    displayContent = displayContent.join("");
    projectContainer.innerHTML = displayContent;
}
// const reactBtn = document.querySelector(".react_btn");
// const vueBtn = document.querySelector(".vue_btn");
const filterBtn = document.querySelectorAll(".btn-toggle");

filterBtn.forEach((e) => {
    e.addEventListener('click', function (btn) {
        let categoryOne = btn.currentTarget.dataset.id;
        let catergoryTwo = projects.filter((item) => {
            if (item.category === categoryOne) {
                return item;
            } 
        })

        if (categoryOne === 'all') {
            displayProjects(projects)
        } else {
             displayProjects(catergoryTwo)
        }
        
     
      
   })
})
