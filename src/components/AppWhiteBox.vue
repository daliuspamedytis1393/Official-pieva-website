<template>
	<section class="app-whitebox">
		<h2 class="app-whitebox__title">
			{{ $route.meta.displayPageTitle }}

		</h2>
		<slot></slot>
	</section>
</template>
<script>
export default {
	name: 'AppWhiteBox'
}
</script>

<style lang="scss">
	.app-whitebox {
		background-color: white;
		box-shadow: 0 1px 10px 0 rgba(black, .15);
		border-top-right-radius: 200px;
		border-bottom-left-radius: 200px;

		margin-bottom: 50px;
		width: 80vw;
		padding-top: 60px;
		padding-bottom: 120px;
		font-size: 38px;
		&__title {
			
			text-align: center;
			font-size: 150px;
			font-weight: 300;
			margin: 0;
			padding-top: 25px;
			padding-bottom: 25px;
			color: black;
			font-size: 30px;
			
			
		}
	}
	@media only screen and (max-width: 775px) {
		.app-whitebox {
			margin-top: 33px;
			background-color: white;
			box-shadow: 0 1px 10px 0 rgba(black, .15);
					border-top-right-radius: 100px;
		border-bottom-left-radius: 100px;
			margin-bottom: 50px;
			width: 96vw;
			padding-top: 60px;
			padding-bottom: 120px;
			font-size: 38px;
		&__title {
			text-align: center;
			font-size: 26px;
			font-weight: 600;
			margin: 0;
			padding-top: 0px;
			
			color: black;
			
		}
	}
	}
</style>
