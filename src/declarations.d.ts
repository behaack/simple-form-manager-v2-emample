/* eslint-disable */
declare module 'vuelidate/lib/validators'
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
