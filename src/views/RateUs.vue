<template>
	<div class="rateUs">
		<AppWhiteBox class="white">
			<p>Rate us :</p>
			<a href="https://www.tripadvisor.com/">
				<TripAdvisor class="advisor"></TripAdvisor>
			</a>
			<p>or :</p>
			<div class="starRatin">
				<a href="https://www.tripadvisor.com/">
				<star-rating class="star"  :border-width="4" border-color="none" :rounded-corners="true" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" text-class="custom-text" :star-size="35">
				</star-rating>
				</a>
			</div>
		</AppWhiteBox>
    </div>
</template>
<script>
import TripAdvisor from '@/components/TripAdvisor'
import AppWhiteBox from '@/components/AppWhiteBox'
import StarRating from 'vue-star-rating'
export default {
	name: 'RateUs',
	data () {
		return {
		}
	},
	components: {
		AppWhiteBox,
		StarRating,
		TripAdvisor
	}
}
</script>

<style lang="scss">
	.rateUs {
		margin: 0 auto;
		align-items: center;
		a{
				
			.custom-text {
				font-weight: bold;
			  font-size: 1.5em;
			  border: 1px solid  lightgrey;
			  padding-left: 8px;
			  padding-right: 8px;
			  border-radius: 2px;
			  color:  #fff;
			  background: lightgrey;
			}
			.advisor{
				max-width: 45%;
				margin: 0 auto;

			}
		}
		.white{
			margin-top: 2px;
			padding-top: 0;
			margin: 0 auto;
			margin-bottom: 50px;
			max-width: 40vw;
		}
		.starRatin{
			align-items: center;
			margin-left: 10vw;
			
		}
		.star{
			align-items: center;
			font-size: 20px;
			color: gold;
		
		}
		.star:hover{
				a{
					text-decoration: none!important;
				}
				.custom-text {
				font-weight: bold;
			  font-size: 1.5em;
			  border: 1px solid  #ffdf32;

			  padding-left: 8px;
			  padding-right: 8px;
			  
			  color:  #fff;
			  background: #ffdf32;
				a{
					text-decoration: none!important;
				}
			}
		}
		p{
			font-family: 'Exo 2', sans-serif;
    	line-height: 1.2;
			font-size: 30px;
			padding: 25px;
		}
		color: black;
		&__paragraph {
			color: black;
			letter-spacing: 1px;
			font-size: 20px;
			margin: 0;
		}
		&__tabs {
			&-nav {
				padding-top: 45px;
			}
			&-content {
				margin-top: 30px;
				padding: 30px;
				background-color: #EEEFF3;
			}
		}
	}
		@media only screen and (max-width: 775px) {
		.rateUs {
				a{
				align-items: center;

			.advisor{
				max-width: 100%;
				margin: 0 auto;

			}
		}
		.white{
			margin: 0 auto;
			margin-top: -54px;
			padding-top: 0;
			max-width: 90vw;
		}
		.starRatin{
			margin: 0 auto;
			margin-left: 9vw;

		}
		.star{
			font-size: 20px;
		}
		p{
						font-family: 'Exo 2', sans-serif;
    	line-height: 1.2;
			font-size: 28px;
			padding: 25px;
		}
		color: black;
		&__paragraph {
			color: black;
			letter-spacing: 1px;
			font-size: 20px;
			margin: 0;
		}
		&__tabs {
			&-nav {
				padding-top: 45px;
			}
			&-content {
				margin-top: 30px;
				padding: 30px;
				background-color: #EEEFF3;
			}
		}
	}
	}
</style>
