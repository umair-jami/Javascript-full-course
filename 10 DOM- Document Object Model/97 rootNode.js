const rootNode=document.getRootNode();
// console.log(rootNode)
const htmlRootNode=rootNode.childNodes[0]
const headelement=htmlRootNode.childNodes[0]
const textelement=htmlRootNode.childNodes[1]
const bodyelement=htmlRootNode.childNodes[2]


//for checking parents
console.log(textelement.parentNode)
//sibling relationship
console.log(headelement.nextSibling.nextSibling)

//agar hum spaces (text) ko ignore kerna chahy to hum ye property use ker sakty hai
console.log(headelement.nextElementSibling)
 