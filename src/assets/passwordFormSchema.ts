import { required, maxLength } from 'vuelidate/lib/validators'
export default {
  password: {
    required: {
      validator: required,
      errorMessage: 'First name is required'
    },
    maxLength: {
      validator: maxLength(30),
      errorMessage: 'First name may not exceed 30 charaxters'      
    }
  },
  passwordConfirmation: {
    mustMatch: {
      validator: null,
      errorMessage: 'Password and Password Confirmation must match'      
    }
  }  
}