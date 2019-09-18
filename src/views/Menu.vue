<template>
	<div class="menu">
		<Menu/>
		<Menu2/>
	</div>
</template>
<script>
import Menu from '@/components/Menu'
import Menu2 from '@/components/Menu2'

export default {
	name: 'ViewHome',
	components: {
		Menu,
		Menu2
	}
}
</script>

<style lang="scss">
	.menu{
		margin: 0 auto;
		max-width: 93%;
		display: flex;
		margin-bottom: 80px;
		padding-top: 35px;
		
		

	}

	@media only screen and (max-width: 775px) {
		.menu{
			
			display: flex;
			margin-bottom: 50px;
			flex-direction: column;
			flex-wrap: wrap;
		}
	}

</style>
