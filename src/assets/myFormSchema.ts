import { required, maxLength, email } from 'vuelidate/lib/validators'
export default {
  firstName: {
    required: {
      validator: required,
      errorMessage: 'First name is required'
    },
    maxLength: {
      validator: maxLength(30),
      errorMessage: 'First name may not exceed 30 charaxters'      
    }
  },
  lastName: {
    required: {
      validator: required,
      errorMessage: 'Last name is required'
    },
    maxLength: {
      validator: maxLength(30),
      errorMessage: 'Last name may not excees 30 characters'      
    }
  },
  emailAddress: {
    required: {
      validator: required,
      errorMessage: 'Must provide an email address'
    },
    maxLength: {
      validator: maxLength(100),
      errorMessage: 'Email address may not exceed 100 chacters'
    },    
    email: {
      validator: email,
      errorMessage: 'Email is not properly formated'
    }
  }    
}