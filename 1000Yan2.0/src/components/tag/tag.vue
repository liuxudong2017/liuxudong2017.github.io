<!-- 底部导航栏组件 传入 要给 默认值选中值 -->
<template>
    <yd-tabbar :fixed='true'>
        <yd-tabbar-item title="书架" link="/bookrack" :dot='mess[0]!=0' :class='{active:activeIndex==0}'>
             <img v-if='activeIndex==0' slot="icon" src="./icon_toolbar_shujia_h_01.png" alt="">
            <img v-else slot="icon" src="./icon_toolbar_shujia_n_01.png" alt="">
        </yd-tabbar-item>
        <yd-tabbar-item title="精选" link="/choiceness" :dot='mess[1]!=0' :class='{active:activeIndex==1}'>
            <img v-if='activeIndex==1' slot="icon" src="./icon_toolbar_jingxuan_h_01.png" alt="">
            <img v-else slot="icon" src="./icon_toolbar_jingxuan_n_01.png" alt="">
        </yd-tabbar-item>
         <yd-tabbar-item title="书库" link="/books" :dot='mess[2]!=0' :class='{active:activeIndex==2}'>
             <img v-if='activeIndex==2' slot="icon" src="./icon_toolbar_shuku_h_01.png" alt="">
            <img v-else slot="icon" src="./icon_toolbar_shuku_n_01.png" alt="">
        </yd-tabbar-item>
        <yd-tabbar-item title="排行" link="/ranking" :dot='mess[3]!=0' :class='{active:activeIndex==3}'>
             <img v-if='activeIndex==3' slot="icon" src="./icon_toolbar_paihang_h_01.png" alt="">
            <img v-else slot="icon" src="./icon_toolbar_paihang_n_01.png" alt="">
        </yd-tabbar-item>
        <yd-tabbar-item title="PK榜" link="/pk" :dot='mess[4]!=0' :class='{active:activeIndex==4}'>
            <span slot="icon" class="qy-pk-icon">PK</span>
            
        </yd-tabbar-item>
    </yd-tabbar>
</template>
<script type="text/babel">
    export default {
        name:'Tag',
        props:['newMess'],
        methods:{
        	getActiveIndex(str){
                switch(str){
                    case '/bookrack':return 0;
                    case '/choiceness':return 1;
                    case '/books':return 2;
                    case '/ranking':return 3;
                    case '/pk':return 4;
                    case '/':return 1;
                }
            }
        },
        data(){
            return{
                mess:this.newMess,
                activeIndex:1
            }
        },
        watch:{
            '$route':function(to,from){
                let index=this.getActiveIndex(to.path);
                this.activeIndex=index;
            }
        }
    }
</script>
<style scoped>
	.active{
		color:#f78cb1 !important;
	}
    .router-link-active{
        color:#f78cb1!important;
    }
    .yd-tabbar-icon img {
        height: 80%;
    }
    .qy-pk-icon{
        font-size:.4rem;
        font-family: '华文行楷';
    }
</style>
