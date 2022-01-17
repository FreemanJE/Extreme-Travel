//  Header Border
let head = document.querySelector("h1")
let header = head.closest("header")
header.style.border = '5px solid ';

let info = document.querySelector(".info")
let infoPackage = document.querySelector(".info-package")
let packageTitles = document.querySelectorAll(".package-title")

if(info.contains(infoPackage)) {
    packageTitles.forEach(element => {
        element.previousElementSibling.style.border = '5px solid grey';
        element.previousElementSibling.style.boxShadow = "3px 2px 10px 5px grey"

    })
}
// No. 3 Give borders to label
let labels = document.querySelectorAll("label")
labels.forEach(element => {
    if(element.matches(".mild")) {
        element.style.borderBottom = '5px solid yellow'
    }else if 
    (element.matches(".intense")) {
        element.style.borderBottom = '5px solid orange'
    } else {
        element.style.borderBottom = '5px solid red'
    }
    
})

//No. 4
// const siteMap = document.querySelector(".site-map");
// const navList = document.querySelector(".nav-list");

// for (i = 0; i < navList.children.length; i++) {
//     let li = document.createElement(navList.children[i].tagName);
//     li.textContent = navList.children[i].textContent;
//     li.style.color = "white";
//     siteMap.appendChild(li);
// }

// 4 2nd option with clone
let children = document.querySelector(".nav-list").children
let siteMap = document.querySelector('.site-map')

for (let i = 0; i < children.length; i++){
    siteMap.appendChild(children[i].cloneNode(true))
}