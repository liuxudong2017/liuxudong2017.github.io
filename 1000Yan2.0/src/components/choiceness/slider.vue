<template>
	<div>
		 <yd-slider autoplay="4000">
	        <yd-slider-item v-for="(item,index) in imgUrlArr">
	            <a :href="hrefUrlArr[index]">
	                <img :src="imgUrlArr[index]">
	            </a>
	        </yd-slider-item>
	       
	    </yd-slider>
	</div>
   
</template>
<script>
    export default {
    	name:'slider',
    	props:['sliderData'],
    	data(){
    		return{
    			imgUrlArr:this.sliderData.imgUrlArr,
    			hrefUrlArr:this.sliderData.hrefUrlArr
    		}
    	}
        
    }
</script>