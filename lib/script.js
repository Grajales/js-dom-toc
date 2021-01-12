let tocListH1 = document.querySelector("h1");
let tocListH2 = document.querySelectorAll("h2");
let tocWindow = document.querySelector("aside")

tocWindow.textContent += tocListH1.innerText
tocList = document.createElement("ul");  

for (let i=0;i<tocListH2.length; i++) {
    tocListItem = document.createElement("li");
    let textItem = document.createTextNode(tocListH2[i].innerText);
    tocListItem.appendChild(textItem);
    tocList.appendChild(tocListItem);
}
tocWindow.appendChild(tocList )
/*
tocWindow.textContent += tocListH1.innerText + "<br>"
linebreak = document.createElement("<br>");
for (let i=0;i<tocListH2.length; i++) {
    tocWindow.textContent += tocListH2[i].innerText + "<br>"
}
let text = document.createTextNode("This just got added <br> plus this ");
tocWindow.appendChild(text);

https://projectcodeed.blogspot.com/2020/04/an-automatic-table-of-contents.html*/
