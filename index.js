/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
// step1 Define Global Variables
//const section1 = "<li>Section1</li>";
//const section2 = "<li>Section2</li>";

const navbarList = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section")
// step2  a function tocreate the list and anchors.

function createListElement(){
    for (const section of sections) {
    const listElement = document.createElement('li');
    const anchorElement = document.createElement('a');
    console.log(section);
    anchorElement.textContent= section.id;
    anchorElement.id= "anchor_list" ;
    anchorElement.className = "menu__link";
    anchorElement.href= "#"+section.id;
    listElement.appendChild(anchorElement);
    navbarList.appendChild(listElement);
    navbarList.style.color = "black";
    scrollToEvent(listElement, section)
}
}
createListElement();

// Scroll to anchor ID using scrollTO event
function scrollToEvent(target, sectionToTarget){
  target.addEventListener("click", function(event){
    event.preventDefault();
    for (const section of sections) {
      console.log(sectionToTarget);
      console.log(section);
      sectionToTarget.scrollIntoView({behavior:"smooth"});
    }

  })
}

// Add a scroll to top button on the page
const scrollTOTop = document.getElementById('button');
scrollTOTop.addEventListener("click", function(){
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
})
