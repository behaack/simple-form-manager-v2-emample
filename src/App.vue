<template>
<div>
  <form @submit.prevent="onSubmit">
    <div>Form with a light wrapper around the input control to make adding new controls WAY easy</div>
    <my-input 
      label="First Name"
      field-name="firstName"
      :model-value="fm"    
    />
    <my-input 
      label="Last Name"
      field-name="lastName"
      :model-value="fm"    
    />
    <my-input 
      label="Email Address"
      field-name="emailAddress"
      :model-value="fm"    
    />    
    <div style="padding: 10px">
      <input
        :disabled="!fm.formSubmittable"
        type="submit"
        label="Submit"
      />
    </div>
  </form>
  <br />
  <form @submit.prevent="onSubmit">
    <div>Form with a light wrapper around the input control to make adding new controls WAY easy</div>
    <my-input 
      label="Password"
      field-name="password"
      :model-value="fm2"    
      @update:modelValue="onPasswordUpdate"
    />
    <my-input 
      label="Password Confirmation"
      field-name="passwordConfirmation"
      :model-value="fm2"  
      @update:modelValue="onPasswordUpdate"  
    />
    <div style="padding: 10px">
      <input
        :disabled="!fm2.formSubmittable"
        type="submit"
        label="Submit"
      />
    </div>
  </form>  
  <br />
  <pre>{{ fm2.fields }}</pre>
</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue';
import FM from 'simple-form-manager-v2'
import myInput from './components/my-input.vue'
import myFormSchema from './assets/myFormSchema'
import passwordFormSchema from './assets/passwordFormSchema'

export default defineComponent({
  name: 'App',
  components: {
    myInput
  },
  setup () {
    const fm = ref(new FM(myFormSchema))
    const fm2 = ref(new FM(passwordFormSchema))

    onMounted(() => {
      fm.value.fields.firstName.value = ""
      fm.value.fields.lastName.value = "Draper"
      fm.value.fields.emailAddress.value = "bdraper@gmail.com"
      fm.value.start(100)

      fm2.value.fields.password.value = ""
      fm2.value.fields.passwordConfirmation.value = ""
      fm.value.start()
    })

    onUnmounted(() => {
      fm.value.stop()
      fm2.value.stop()
    }) 

    const onPasswordUpdate = () => {
      const isMatch = (fm2.value.fields.password.value === fm2.value.fields.passwordConfirmation.value)
      fm2.value.setFieldValidationStatus('passwordConfirmation', 'mustMatch', isMatch)
    }
    
    const onSubmit = () => {
      window.alert(JSON.stringify(fm.value.data))
    }

    return {
      fm,
      fm2,
      onSubmit,
      onPasswordUpdate
    }    
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
