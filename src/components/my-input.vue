<template>
<div style="padding: 10px">
  <div style="font-size: 14px">{{ label }}</div>
  <input 
    type="text"
    @blur="modelValue.onBlur(fieldName)"
    v-model="modelValue.fields[fieldName].value"
  >
  <div style="font-size: 11px; color: red" v-if="modelValue.showFieldError(fieldName)">{{ modelValue.fields[fieldName].errorMessage }}</div>
</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';


export default defineComponent({
  name: 'my-imput',
  props: {
    label: {
      type: String,
      required: false,
      default: ''
    },
    fieldName: {
      type: String,
      required: true
    },    
    modelValue: {
      type: Object,
      required: true
    }
  }
});
</script>