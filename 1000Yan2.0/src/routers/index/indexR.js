import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
 const Choiceness = ()=>import('components/choiceness/choiceness.vue');
 const Books = ()=>import('components/books/books.vue');
 const Bookrack = ()=>import('components/bookrack/bookrack.vue');
 const Ranking = ()=>import('components/ranking/ranking.vue');
 const PK = ()=>import('components/pk/pk.vue');
var router=new VueRouter({
	routes:[
		{path:'/',redirect:'/choiceness'},
		{path:'/books',component:Books},
		{path:'/bookrack',component:Bookrack},
		{path:'/ranking',component:Ranking},
		{path:'/choiceness',component:Choiceness},
		{path:'/pk',component:PK}
	]
});
export default router;