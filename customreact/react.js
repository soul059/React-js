const root = document.getElementById("root");

const reactElemant = {
    type:'a',
    props:{
        href:"http://www.google.com",
        target:"_blank"
    },
    childern:"google web page"
}

function rander(reactElemant,root){
    const element = document.createElement(reactElemant.type);
    element.innerHTML= reactElemant.childern
    for (const prop in reactElemant.props) {
        
        element.setAttribute(prop,reactElemant.props[prop])
    }

    root.appendChild(element)

}

rander(reactElemant,root)