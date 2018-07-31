import Vue from 'vue';
import VueRouter from 'vue-router';
import VueTouch from 'vue-touch';
import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.rem.css';
Vue.use(VueTouch,{name:'v-touch'});
Vue.use(VueRouter);
Vue.use(YDUI);
import App from './App';
import router from 'routers/index/indexR';
new Vue({
	el:'.app',
	template:'<App/>',
	components:{App},
	 router:router
})