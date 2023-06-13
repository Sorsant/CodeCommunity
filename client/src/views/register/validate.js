const validate = (register) => {
    let errors={}
    if(!/\S+@\S+\.\S+/.test(register.email)){
      
    errors.email= 'Debe ser un correo electrónico con @ y .com'
        }
    if(register.email.length >25){
        errors.email= 'Debe ser menor a 35'
    }
   if(register.email.length ===''){
    errors.email= 'Se requiere el correo electrónico'
   }
  
   if(register.password.length < 6 ){
    errors.password= 'Debe ser mayor a 6 digitos'
 } else if(register.password.length > 10) {
     errors.password= 'Debe ser menor a 10 digitos'
 }
    if(!/\d/.test(register.password)){
        errors.password='Debe tener minimo un caracter numerico'
    }
    return errors
}
export default validate