const content = document.querySelector('#contain').children;
const list = []
document.querySelector('html').style.scrollBehavior = "smooth"
for (let i = 0; i < content.length; i++) {
    list.push(content[i].firstElementChild.textContent);
    content[i].style.cssText = "padding : 55px"
}
const ul = document.createElement('ul');
ul.style.columnGap = "30px"
const menu = document.querySelector('#menubar');
let y = -50;
for (let i = 0; i < list.length; i++) {
    const li = document.createElement('li');
    const an = document.createElement('a');
    an.style.cssText = "padding : 9px";
    an.addEventListener("mouseover", function (event) {
        event.target.parentElement.style.backgroundColor = "green";
        event.target.parentElement.style.border = "2px solid green";
    })
    an.addEventListener("mouseout", function (event) {
        event.target.parentElement.style.backgroundColor = "grey";
        event.target.parentElement.style.border = "2px solid grey";
    })
    an.textContent = list[i];
    li.appendChild(an);
    li.style.cssText = "margin-top : 5px ; font-weight : bold ; border : 2px solid grey ; padding-bottom : 5px ; background-color : grey ; color : red ;  box-shadow: 2px 2px 2px 2px lightgreen; cursor : pointer"
    li.addEventListener('mouseover', function (event) {
        event.target.style.backgroundColor = "green";
    })
    li.addEventListener('mouseout', function (event) {
        event.target.style.backgroundColor = "grey";
    })
    var e = ".section-" + (i + 1);
    li.setAttribute("id", e);
    li.addEventListener('click', function (event) {
        const element = document.querySelector(event.target.parentElement.id);
        event.preventDefault();
        element.scrollIntoView(true);
    })
    ul.appendChild(li)
}
menu.style.cssText = "position : sticky ; top : 0"
menu.append(ul)

