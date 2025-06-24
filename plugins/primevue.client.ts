import { defineNuxtPlugin } from '#app'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

// Import all the components you need
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Card from 'primevue/card'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Dropdown from 'primevue/dropdown'
import Calendar from 'primevue/calendar'
import Checkbox from 'primevue/checkbox'
import RadioButton from 'primevue/radiobutton'
import Textarea from 'primevue/textarea'
import Dialog from 'primevue/dialog'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, {
    theme: {
      preset: Aura,
      options: {
        prefix: 'p',
        darkModeSelector: 'system',
        cssLayer: false
      }
    }
  })

  nuxtApp.vueApp.use(ToastService)

  // Register components globally
  nuxtApp.vueApp.component('PButton', Button)
  nuxtApp.vueApp.component('PInputText', InputText)
  nuxtApp.vueApp.component('PPassword', Password)
  nuxtApp.vueApp.component('PCard', Card)
  nuxtApp.vueApp.component('PDataTable', DataTable)
  nuxtApp.vueApp.component('PColumn', Column)
  nuxtApp.vueApp.component('PDropdown', Dropdown)
  nuxtApp.vueApp.component('PCalendar', Calendar)
  nuxtApp.vueApp.component('PCheckbox', Checkbox)
  nuxtApp.vueApp.component('PRadioButton', RadioButton)
  nuxtApp.vueApp.component('PTextarea', Textarea)
  nuxtApp.vueApp.component('PDialog', Dialog)
  nuxtApp.vueApp.component('PToast', Toast)
})
