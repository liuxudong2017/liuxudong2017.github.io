<template>
    <yd-tab :callback='clickChangeActiveItem'>
        <yd-tab-panel v-for='(obj,index) in classifyData' :label="obj.title" :active='index==activeItem' :tabkey='index'>
			<classify-details :index='index' @changeActiveItem='changeActiveItem'></classify-details>
        </yd-tab-panel>
      
    </yd-tab>
</template>

<script type="text/babel">
import classifyDetails from './classifyDetails';
    export default {
    	name:'classify',
    	props:['classifyData'],
    	components:{classifyDetails},
    	methods:{
    		changeActiveItem(val){
    			if(val=='top'){
    				--this.activeItem <0?this.activeItem=0:'';
    			}else{
    				var maxValue=this.classifyData.length-1;
    				++this.activeItem >maxValue?this.activeItem=maxValue:'';
    			}
    		},
    		clickChangeActiveItem(label,tabkey){
    			this.activeItem=tabkey;
    		}
    	},
    	data(){
    		return {
    			activeItem:0
    		}
    	}
    	
    }
</script>
<style scoped>
	.yd-tab-nav:after{
		border:0;
	}
</style>