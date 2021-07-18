<template>
<form @submit.prevent="onSubmit">
  <my-input 
    label="First Name"
    field-name="firstName"
    v-model="fm"    
  />
  <my-input 
    label="Last Name"
    field-name="lastName"
    v-model="fm"    
  />
  <my-input 
    label="Email Address"
    field-name="emailAddress"
    v-model="fm"    
  />    
  <input
    :disabled="!fm.formSubmittable"
    type="submit"
    label="Submit"
  />    
  <pre>{{ fm.data }}</pre>
  <pre>{{ fm.running }}</pre>
</form>
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
