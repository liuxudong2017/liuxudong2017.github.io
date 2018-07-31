import Vue from 'vue';
import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.rem.css';
import VueTouch from 'vue-touch';
Vue.use(VueTouch,{name:'v-touch'});
Vue.use(YDUI);
import App from './App';
new Vue({
	el:'.app',
	template:'<App/>',
	components:{App}
})