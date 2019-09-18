<template>
	<section class="Layout">

		<AppHeader/>
		<div class="Layout__content">
			<router-view></router-view>
		</div>

	</section>
</template>
<script>
import AppWhiteBox from '@/components/AppWhiteBox'
import AppHeader from '@/components/AppHeader'
export default {
	name: 'Layout',
	components: {
		AppHeader,
		AppWhiteBox
	}
}
</script>

<style lang="scss">
	.Layout {
		display: flex;
		flex-flow: column;
		min-height: 94vh;
		align-items: center;
		padding: 0 130px;
		background-position: center;
		background-size: 75%;
		background-attachment: fixed;
		background-image: url('https://media1.popsugar-assets.com/files/thumbor/BML2v8Je3Z0paqpNSljQ6TzXYg8/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/08/10/704/n/1922729/tmp_Cl7t4h_f9621a8a10466fa5_thought-catalog-620865-unsplash.jpg');
		&__subtitle {
			font-size: 25px;
			padding: 0;
			margin: 0;
			font-weight: 600;
		}
		&__whitebox {
			min-width: 80%;
			padding: 0 130px;
		}
	}
	@media only screen and (max-width: 775px) {
  .Layout { //https://data.1freewallpapers.com/detail/avocado-minimalism-pink.jpg
	min-height: 100vh;
	background-attachment: none;
	background-position: center;
	background-size: cover;
	padding: 0px; 
	background-image: url('https://i.pinimg.com/originals/10/23/9f/10239f3033583acf56acde8671a1e309.jpg');
  		&__subtitle {
			font-size: 25px;
			padding: 0;
			margin: 0;
			font-weight: 600;
		}
		&__whitebox {
			min-width: 80%;
			padding: 0 130px;
		}
  }

}
</style>
