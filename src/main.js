import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import 'axios'

import ToastService from "primevue/toastservice";
import PrimeVue from "primevue/config";

// PrimeVue Material Design Theme
import "primevue/resources/themes/md-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

// PrimeVue Components
import Toolbar from 'primevue/toolbar';
import Toast from 'primevue/toast';
import Button from 'primevue/button';
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import InputNumber from "primevue/inputnumber";
import Divider from 'primevue/divider';
import FocusTrap from 'primevue/focustrap';
import Password from "primevue/password";
import Checkbox from "primevue/checkbox";
import CascadeSelect from 'primevue/cascadeselect';
import Calendar from 'primevue/calendar';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import SelectButton from 'primevue/selectbutton';
import Dialog from 'primevue/dialog';
import Dropdown from 'primevue/dropdown';
import router from "@/router";
import store from "@/global/store";

const app = createApp(App)
app.use(createPinia())

// Toast Service
app.use(ToastService);
app.use(router)
app.use(store)
// PrimeVue Configuration
app.use(PrimeVue, {ripple: true});
app.component("Toast", Toast);
app.component("Toolbar", Toolbar);
app.component('Button', Button);
app.component('Card', Card);
app.component('InputText', InputText);
app.component('InputNumber', InputNumber);
app.component('Divider', Divider);
app.component('Password', Password);
app.component('Checkbox', Checkbox);
app.directive('focustrap', FocusTrap);
app.component('CascadeSelect', CascadeSelect);
app.component('Dropdown', Dropdown);
app.component('Calendar', Calendar);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('SelectButton', SelectButton);
app.component('Dialog', Dialog);
app.mount('#app')