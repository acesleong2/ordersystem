// import './bootstrap';
import { createApp } from 'vue';
import app from '../js/components/app.vue';

import Swal from 'sweetalert2';
window.Swal = Swal;

const CustomerLayout = createApp(app)
CustomerLayout.mount('#app')
