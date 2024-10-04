
const App = (() =>{

 const htmlELements = {
   form :  document.querySelector('form'),
   input:  document.querySelector('#cadena'),
   response: document.querySelector('#response')
 }

 const handlers = {
  
     onFormSubmit(e){
     
     e.preventDefault();

     const cadena = htmlELements.input.value;

     const response = htmlELements.response;
 
     const responseText = `<span style = "color: red"> ${cadena.split('').reverse().join('')}</span>`
    
     response.innerHTML = responseText;

     }
 } 

 const bindingEVents = () => {
     htmlELements.form.addEventListener('input',handlers.onFormSubmit)
 };

  return {
     htmlELements,
     init(){
        bindingEVents();
     },
  }

})();

App.init();