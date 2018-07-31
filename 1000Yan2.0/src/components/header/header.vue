<!-- navBarMess.title:标头; -->
	<template>
		<div>
    	    <yd-navbar class='wrap-border' :title='navBarMess' bgcolor="#f46094" color='#fff' fontsize='.5rem'>
                 <img v-if="loginState" slot="left" :src="userImg" @click='showP'/>
    	    	 <img v-else slot="left" src="./pic_touxiang_unlog@3x.png" @click='showP'/>
                 <a href="" slot="right" class="book-list">书单</a>
    	    </yd-navbar>
             <div class="search" @click='goSearch'>
                 <yd-icon name="search" size='0.36rem'></yd-icon>
                 <span>搜索</span>
             </div>
	    </div>
	</template>
<script>
import {goSearchPage} from 'common/url';
    export default {
    	name:'navBar',
        props:['navBarMess','loginMess'],
        data(){
            return {
                userImg:this.loginMess.userImg,
                loginState:this.loginMess.loginState
                // loginState:false
            }
        },
        methods:{
            showP(){
               
                this.$emit('showP');
            }
            ,goSearch(){
                console.log(goSearchPage+'--');
                location.href=goSearchPage;
            }
        },
        created(){
            
        }
    	
    }
</script>
<style scoped>
	img{
		width:55%;
        border-radius:50%;
	}
    .search{
        color:#b9c1c8;
        text-align: center;
        width:90%;
        margin:0.16rem auto;
        height: .7rem;
        line-height: .7rem;
        background:#f0f3f6;
        border-radius:.7rem

    }
    .search span{
        font-size:.3rem;
    }
    .wrap-border{
        border-top:1px solid red;
    }
    .book-list{
        display:block;
        line-height: 1rem;
        text-align: center;
    }
</style>