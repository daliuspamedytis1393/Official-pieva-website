<template>
	<footer class="footer">
		<p>©Copyright Pieva</p>
		<p>|</p>
		 <a href="https://www.instagram.com/daliusa/"  title="instagram" >
          <FontAwesomeIcon :icon="['fab', 'instagram']"/>
        </a>
        <a href="#" title="Twitter" >
          <FontAwesomeIcon :icon="['fab', 'twitter']"/>
        </a>
        <a href="https://www.facebook.com/magicrollsai/" title="Facebook" >
          <FontAwesomeIcon :icon="['fab', 'facebook']"/>
        </a>
		<slot></slot>
	</footer>
</template>
<script>
export default {
	name: 'Footer'
}
</script>

<style lang="scss">
	.footer {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgba(0,0,0,0.9);
		padding-top: 20px;
		padding-bottom: 20px;
		width: 100%;
		text-align: center;
		font-size: 18px;
		color: white;
		p{
			margin-right: 16px;
			margin-bottom: 0;
		}
		a{
			margin-right: 9px;
			font-size: 18px;
			color: white;
		}
		a:hover{
			color:#da552f;
		}
	}
	@media only screen and (max-width: 775px) {
		.footer {
		display: flex;
		flex-direction: row-reverse;
		align-items: center;
		justify-content: center;
		background-color: rgba(0,0,0, 0.9);
		padding-top: 20px;
		padding-bottom: 20px;
		width: 100%;

		text-align: center;
		font-size: 16px;
		color: white;
		p{
			margin-right: 16px;
		}
		a{
			margin-right: 8px;
			font-size: 25px;
			color: white;
		}
		a:hover{
			color:#da552f;
		}
	}
	}

</style>
