import { createApp } from 'vue'
import App1 from './components/index_head.vue'
import App2 from './components/index_gallery.vue'
import App3 from './components/drop_down.vue'
import App4 from './components/index_foot.vue'
import App5 from './components/home_page_announcement.vue'
import App6 from './components/index_calendar.vue'

createApp(App1).mount('#banner')
createApp(App2).mount('#photos')
createApp(App3).mount('#drop_down')
createApp(App4).mount('#foot')
createApp(App5).mount('#part_ann')
createApp(App6).mount('#my_calendar')