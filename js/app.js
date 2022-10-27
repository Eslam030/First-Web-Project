const content = document.querySelector('#contain').children;
const list = []
/*document.addEventListener("click", function () {
    scrollTo(0, 0);
    console.log("fdfd")
})*/
document.querySelector('html').style.scrollBehavior = "smooth"
for (let i = 0; i < content.length; i++) {
    list.push(content[i].firstElementChild.textContent);
}
const ul = document.createElement('ul');
ul.style.columnGap = "30px"
const menu = document.querySelector('#menubar');
let y = -50;
for (let i = 0; i < list.length; i++) {
    const li = document.createElement('li');
    const an = document.createElement('a');
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
        console.log((element.getBoundingClientRect().y))
        scrollTo(0, Math.round(element.getBoundingClientRect().y) + y);
        if (Math.round(scrollY + innerHeight) + 4 != document.body.offsetHeight) {
            y += Math.round(element.getBoundingClientRect().y) - 50;
        }
        console.log((element.getBoundingClientRect().y))
        console.log(element.offsetHeight)
        console.log(y);

    })
    ul.appendChild(li)
}
menu.style.cssText = "position : sticky ; top : 0"
menu.append(ul)

