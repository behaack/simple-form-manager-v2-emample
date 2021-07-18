<template>
<div>
  <form @submit.prevent="onSubmit">
    <div>Form with wrapper around the input control</div>
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
  <br />
  <form @submit.prevent="onSubmit">
    <div>Form using the same FormManager instance but without a wrapper around the inputs. Same results, but a lot more tedious and repetitive.</div>
    <div style="padding: 10px">
      <div style="font-size: 14px">First Name</div>
      <input 
        @blur="fm.onBlur('firstName')"
        v-model="fm.fields.firstName.value"    
      />
      <div style="font-size: 11px; color: red" v-if="fm.showFieldError('firstName')">{{ fm.fields.firstName.errorMessage }}</div>      
    </div>      
    <div style="padding: 10px">
      <div style="font-size: 14px">Last Name</div>      
      <input 
        @blur="fm.onBlur('lastName')"
        v-model="fm.fields.lastName.value"    
      />
      <div style="font-size: 11px; color: red" v-if="fm.showFieldError('lastName')">{{ fm.fields.firstName.errorMessage }}</div>      
    </div>
    <div style="padding: 10px">    
      <div style="font-size: 14px">Email Address</div>      
      <input 
        @blur="fm.onBlur('emailAddress')"
        v-model="fm.fields.emailAddress.value"
      />
      <div style="font-size: 11px; color: red" v-if="fm.showFieldError('emailAddress')">{{ fm.fields.firstName.errorMessage }}</div>        
    </div>
    <div style="padding: 10px">
      <input
        :disabled="!fm.formSubmittable"
        type="submit"
        label="Submit"
      />   
    </div>
  </form>
  <br />
  <div>fm.data</div>
  <pre>{{ fm.data }}</pre>
  <div>fm.fields</div>
  <pre>{{ fm.fields }}</pre>  
</div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onUnmounted, ref } from 'vue';
import FM from 'simple-form-manager-v2'
import myInput from './components/my-input.vue'
import myFormSchema from './assets/myFormSchema'

export default defineComponent({
  name: 'App',
  components: {
    myInput
  },
  setup () {
    const fm = ref(new FM(myFormSchema))

    onBeforeMount(() => {
      fm.value.fields.firstName.value = ""
      fm.value.fields.lastName.value = "Draper"
      fm.value.fields.emailAddress.value = "bdraper@gmail.com"
      fm.value.start(100)
    })

    onUnmounted(() => {
      fm.value.stop()
    }) 
    
    const onSubmit = () => {
      window.alert(JSON.stringify(fm.value.data))
    }

    return {
      fm,
      onSubmit
    }    
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
