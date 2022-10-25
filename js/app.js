const content = document.querySelector('#contain').children;
const list = []
for (var i = 0; i < content.length; i++) {
    list.push(content[i].firstElementChild.textContent);
}
const ul = document.createElement('ul');
ul.style.columnGap = "30px"
const menu = document.querySelector('#menubar');
for (var i = 0; i < list.length; i++) {
    const li = document.createElement('li');
    li.textContent = list[i];
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
        const element = document.querySelector(event.target.id);
        element.scrollIntoView(true);
    })
    ul.appendChild(li)
}
menu.append(ul)

