//if we want to know that how much classes are available in section todo
const sectiontodo=document.querySelector('.section-todo')
// console.log(sectiontodo.classList)

//how to add class with javascript
// sectiontodo.classList.add('bg-dark')

//how to remove class
// sectiontodo.classList.remove('container')
// console.log(sectiontodo.classList)

//how check that one class exist or not

const calss= sectiontodo.classList.contains('container')
console.log(calss)

//toggle use kerny sy agar wo class pehly sy ho gi to remove hagai gi or agar nahi hogi to add ho jai gi
sectiontodo.classList.toggle('bg-dark')