import { createApp } from 'vue'
import App1 from './components/index_head.vue'
import App2 from './components/drop_down.vue'
import App3 from './components/club_introduction.vue'
import App4 from './components/index_foot.vue'

createApp(App1).mount('#banner')
createApp(App2).mount('#drop_down')
createApp(App3).mount('#introduction')
createApp(App4).mount('#foot')