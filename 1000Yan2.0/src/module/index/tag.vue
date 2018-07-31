<!-- 底部导航栏组件 传入 要给 默认值选中值 -->
<template>
    <yd-tabbar :fixed='true'>
        <yd-tabbar-item v-for='(obj,index) in eleArr' :title='obj.title' :link='obj.link' type="a" :class='{active:data.item==index}' v-on:click.native='changeColor(index,obj.title)' :dot='data.itemMessNum[index]!=0' :key='index'>
            <yd-icon :name='obj.name' custom slot='icon' size='0.54rem'></yd-icon>
        </yd-tabbar-item>
    </yd-tabbar>
</template>
<script type="text/babel">
    export default {
        name:'Tag',
        props:['data'],
        methods:{
        	changeColor(i,t){
        		let obj={num:i,title:t};
        		this.$emit('custom',obj);
	        	console.log('0000---'+i)
        	}
        },
        data(){
        	return {
        		eleArr:
        		[
	        		{'title':"书架",'num':0,'link':'#','name':'shujia'},
	        		{'title':"精选",'num':0,'link':'#','name':'jingxuan'},
	        		{'title':"书库",'num':0,'link':'#','name':'shuku'},
	        		{'title':"排行",'num':0,'link':'#','name':'paihang'}
        		]
        	}
        	
        }
    }
</script>
<style scoped>
	.active{
		color:#f78cb1 !important;
	}
</style>
