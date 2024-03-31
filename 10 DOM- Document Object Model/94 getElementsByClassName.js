//get multiple elements using getElement  by class name
//get multiple elements using querySelecterAll

const navitems=document.getElementsByClassName('nav-item');
//it gives us HTML collection
//this is array like object
//we can use indexing
console.log(navitems)
console.log(typeof navitems [1])

const navitems2=document.querySelectorAll('.nav-item');
console.log(navitems2[1]);
//querryselecteraall gives us Nodelist in return
//this is also Array like object
//we can use indexing


