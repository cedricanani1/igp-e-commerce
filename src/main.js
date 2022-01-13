import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './axios.js'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import {DataTable} from "datatables.net";
import JwPagination from 'jw-vue-pagination';

const app = createApp(App)

app.component('jw-pagination', JwPagination);

app.use(store)
app.use(router)
app.use(VueSweetalert2)
app.use(DataTable)
app.use(JwPagination);

app.mount('#app')
