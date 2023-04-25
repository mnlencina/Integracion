const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const Pass = {
      mayor: /(?=.{8,})/, //La cadena debe tener ocho caracteres o más.
      mayus: /(?=.*[A-Z])/, //La cadena debe contener al menos 1 carácter alfabético en mayúscula
      minus: /(?=.*[a-z])/, //La cadena debe contener al menos 1 carácter alfabético en minúscula
      num: /(?=.*[0-9])/, //La cadena debe contener al menos 1 carácter numérico
      };

export const validate = (inputs)=>{
  
      const errors = {};
      let user;
      let passw;
      
      if(inputs.userName) {
        const {length} = inputs.userName.split('');
        user = length;
      }
      if(inputs.password) {
        const {length} = inputs.password.split('');
        passw = length
      }
      console.log(user, passw);
        
      if (!inputs.userName) errors.userName = '*Se requiere un Usuario';
      if (!regexEmail.test(inputs.userName)) errors.userName = '*Debe ser un correo electrónico';
      if (!Pass.mayor.test(inputs.password)) errors.password = '*Debe tener mas de 8 caracteres';
      if (!Pass.minus.test(inputs.password)) errors.password = '*Debe contener al menos 1 carácter en minúscula';
      if (!Pass.mayus.test(inputs.password)) errors.password = '*Debe contener al menos 1 carácter en mayúscula';
      if (!Pass.num.test(inputs.password)) errors.password = '*Debe contener al menos 1 carácter numérico';     
      if (user > 35) errors.userName = '*Debe tener menos de 35 caracteres';
      if (passw > 10) errors.password = '*Debe tener menos de 10 caracteres';    
      
      return errors;  
    }