<template>
<div class="qy-wrap">
	<header-tag title='帮助中心'></header-tag>
	 <yd-accordion>
	 	<yd-accordion-item :title="item.title">
            <div class='qy-text'>
                {{item.text}}
            </div>
            </yd-accordion-item>
            <yd-accordion-item :title="item.title">
            <div class='qy-text'>
                {{item.text}}
            </div>
            </yd-accordion-item>
	 </yd-accordion>
</div>		
</template>
<script>
import HeaderTag from 'components/secondHeader/secondHeader';
export default{
	name:'help'
	,components:{HeaderTag}
	,data(){
		return{
			item:{title:'如何提升VIP',text:'李白（701年－762年），字太白，号青莲居士，又号“谪仙人”李白（701年－762年），字太白，号青莲居士，又号“谪仙人”李白（701年－762年），字太白，号青莲居士，又号“谪仙人”......'}

		}
	}
}	
</script>
<style>
body{
	background:#fff;
}	
.qy-text{
	padding:.25rem;
	color: rgb(132,139,148);
    line-height: 1.5em;
}	
</style>