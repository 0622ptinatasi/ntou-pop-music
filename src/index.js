import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import { createApp } from 'vue'
import App1 from './components/index_head.vue'
import App2 from './components/index_gallery.vue'
import App3 from './components/drop_down.vue'

createApp(App1).mount('#banner')
createApp(App2).mount('#photos')
createApp(App3).mount('#drop_down')