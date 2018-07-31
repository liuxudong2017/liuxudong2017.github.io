<template>
 <yd-navbar :title="titles" color='#fff' bgcolor='#f46094' fontsize='.5rem'>
 	<div slot='left'>
 		<yd-navbar-back-icon @click.native='goTopPage' color='#fff'>
 		 	
 		</yd-navbar-back-icon>
 	</div>
 </yd-navbar>		
</template>
<script>
export default{
	'name':'secondHeader',
	 props:['title'],
	 data()
	 {
	 	return {
	 		titles:this.title
	 	}
	 }
	 ,methods:{
	 	goTopPage(){
	 		console.log('backTop');
	 		window.history.back(1);
	 	}
	 }
}		
</script>
<style scoped>
		
</style>