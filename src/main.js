import { createApp } from 'vue';
import { Quasar } from 'quasar'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue';
import router from './router';
import VueApexCharts from 'vue3-apexcharts';

const myApp = createApp(App)

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})

// Assumes you have a <div id="app"></div> in your index.html
myApp.use(router).use(VueApexCharts).mount('#app');

/*createApp(App)
  .use(router)
    .use(VueApexCharts)
  .mount('#app');*/
