import { createApp } from 'vue'
import App from './App.vue'

// TailwindCSS
import './index.css'

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faVuejs } from '@fortawesome/free-brands-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faFontAwesomeFlag } from '@fortawesome/free-brands-svg-icons';


library.add(faVuejs, faBolt, faCss3Alt, faFontAwesomeFlag)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
