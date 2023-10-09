function addlangauge(langName){
    const li = document.createElement('li');
    li.innerHTML= `${langName}`

    document.querySelector('.language').append(li);
}
addlangauge("python")
addlangauge("C")
addlangauge("Ruby")
addlangauge("TypeScript")



function addOptiLang(langName){
    const li = document.createElement('li');
    // li.innerHTML= `${langName}`
    li.appendChild(document.createTextNode(langName))
    document.querySelector('.language').appendChild(li)
}

addOptiLang("GoLang")
addOptiLang("Swift")




//Edit the Value
const secondLang = document.querySelector("li:nth-child(2)");
const newli= document.createElement('li');
newli.textContent= "Mojo";

secondLang.replaceWith(newli)


//edit language one MoreExample
const lastKang = document.querySelector("li:last-child")
lastKang.remove()