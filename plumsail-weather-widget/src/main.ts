import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faArrowsToCircle,
    faCloudSun, faCommentDots,
    faDroplet,
    faEye,
    faGear, faBars,
    faHouse,
    faTemperatureHigh, faWind, faTrashCan
} from "@fortawesome/free-solid-svg-icons";

library.add([faGear,faHouse,faTemperatureHigh,faCloudSun,faEye,faDroplet,faArrowsToCircle,faWind,faCommentDots,faBars,faTrashCan])

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')
