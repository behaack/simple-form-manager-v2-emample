<template>
<div style="padding: 10px">
  <div style="font-size: 14px">{{ label }}</div>
  <input 
    v-model="value"  
    :name="fieldName"
    @blur="onBlur"
    @update:model-value="onUpdate"  
  >
  <div style="font-size: 11px; color: red" v-if="modelValue.showFieldError(fieldName)">{{ modelValue.fields[fieldName].errorMessage }}</div>
</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';


export default defineComponent({
  name: 'my-imput',
  props: {
    fieldName: {
      type: String,
      required: true
    },    
    modelValue: {
      type: Object,
      required: true
    },
    label: {
      type: String,
      required: false,
      default: ''
    },    
  },
  setup(props, context) {
    watch(() => props.modelValue.running, () => {
      value.value = props.modelValue.fields[props.fieldName].value 
    })  
  
    const onBlur = (): void => {
      props.modelValue.onBlur(props.fieldName) 
      context.emit('blur')
    }

    const onUpdate = (value: any): void => {
      props.modelValue.onUpdateValue(props.fieldName, value)
      context.emit('update:modelValue', value)
    }

    const value = ref()    
    
    return {
      onBlur,
      onUpdate,      
      value
    }
  }
});
</script>
