<template>
	<div class="about">
		<AppWhiteBox>
		   <p class="css-typing">
			    <b>Pieva</b> – tai kūrybinga, linksma virėjų komanda ir maisto automobilis, kurie stengiasi sužadinti jūsų apetitą ir 
				leis pasijusti arčiau gamtos.
				Ingredientus parenkame kruopščiai iš Lietuvos ūkių, sutelkiame dėmesį į produktų šviežumą, aromatingumą, todėl galime pasiūlyti jums - aukštesnės kokybės greitą maistą. Taip pat darome degustacines vakarienes pagal užsakymą. <b>Skambtelk mums ir jūsų renginys taps įdomesnis.</b>

			</p>
			<div class="photo">
				<first/>
				<div>
  				<b-carousel
					class="firstcarrousel"
				    id="carousel-no-animation"
 					no-animation
					img-height="50"
				>
    			<b-carousel-slide
    				img-src="https://scontent.fplq1-1.fna.fbcdn.net/v/t1.0-9/66096459_856999727989628_884525081269633024_n.jpg?_nc_cat=106&_nc_oc=AQmhtEte7u91zxyuYYY9Hv0tTDXuqpf-KyAd4mOorvsK5mh2CF97JVJuHVUPEd3oxEo&_nc_ht=scontent.fplq1-1.fna&oh=a7501a1922418f0bc5ff5559ab0b2ac5&oe=5D7C98DD"
   				></b-carousel-slide>
   				<b-carousel-slide
   				   img-src="https://scontent.fvno2-1.fna.fbcdn.net/v/t1.0-9/62366258_845814935774774_1723796265394765824_n.jpg?_nc_cat=110&_nc_oc=AQk9KHWEeiGW_6OxyD9mCeGPtZW-d75DCd2i-H466eyUWVr2QUgi7wUsfSf1ookO7-4&_nc_ht=scontent.fvno2-1.fna&oh=d70b8d8f50155e554a710015d07e9319&oe=5DDF2853"
				></b-carousel-slide>
    			<b-carousel-slide
					img-src="https://scontent.fplq1-1.fna.fbcdn.net/v/t1.0-9/30713740_2014704628747887_397634969981157376_n.jpg?_nc_cat=105&_nc_oc=AQk65SkU1An5WSgMjHcCpNbaVe0ovkk5AYtCsHuz4pNmJfcZEveoRz5T8P548h4Eeic&_nc_ht=scontent.fplq1-1.fna&oh=160b726541587998ca0908f57ebae6c7&oe=5DAD3C54"
   				></b-carousel-slide>
				   <b-carousel-slide
					img-src="https://scontent.fvno2-1.fna.fbcdn.net/v/t1.15752-0/p480x480/50481823_279633062717038_156928699017461760_n.jpg?_nc_cat=110&_nc_oc=AQmFAdim61QzkBv_iSgxTYINB0tBsRBTSeBDpcJtjdkRPmLHMAanM3--vUhIuesSMlo&_nc_ht=scontent.fvno2-1.fna&oh=4d4e310068ac6004a1ef5b383430085a&oe=5DDB341A"
   				></b-carousel-slide>
  				</b-carousel>
				</div>

				<third/>
				<div>
  				<b-carousel
					class="carrousel"
				    id="carousel-no-animation"
 					no-animation
					img-height="50"
				>
    			<b-carousel-slide
    				img-src="https://s23209.pcdn.co/wp-content/uploads/2018/10/Korean-Beef-TacosIMG_6959.jpg"
   				></b-carousel-slide>
   				<b-carousel-slide
   				   img-src="https://data.thefeedfeed.com/recommended/post_3864249.jpeg"
				></b-carousel-slide>
    			<b-carousel-slide
					img-src="https://scontent.fplq1-1.fna.fbcdn.net/v/t31.0-8/27629421_1984506031767747_279085287484637801_o.jpg?_nc_cat=108&_nc_oc=AQnUuPkWRuPgbdDmTNjNakJRg_7oPQdSSXhCyG6QPQlxcazfbMSL28i3SQ7zNahnDqE&_nc_ht=scontent.fplq1-1.fna&oh=7ef0537162a0fabfa62c8f39fc9e79df&oe=5DBE1120"
   				></b-carousel-slide>
  				</b-carousel>
				</div>
				<fifth/>


			</div>



		</AppWhiteBox>
   </div>
</template>
<script>
import first from '@/components/img1'
import third from '@/components/img3'

import fifth from '@/components/img5'
import AppWhiteBox from '@/components/AppWhiteBox'
import { VueClazyLoad } from 'vue-clazy-load'
export default {
	name: 'About',
	data () {
		return {
		}
	},
	components: {
		AppWhiteBox,
		VueClazyLoad,
		first,
		third,
		fifth

	}
}
</script>

<style lang="scss">
	.about {
		img {
				height: 15vw;
				width: 15vw!important;
				object-fit: cover;

		}
		.poet{
			text-align: right;
		}
		.w-100 {
   			 width: 15vw;
		}
		p{
			padding-right: 100px;
			padding-left: 100px;
			color:black;
			font-size: 20px;
			text-align: justify;
 			text-justify: inter-word;
			 
			
		}	






.text{
color: black;
  font-size: 20px;
  margin: 10px 0 0 10px;
  white-space: nowrap;
  overflow: hidden;

}



span{
  animation: blink 1s infinite;
  color: black;
}

@keyframes type{ 
  from { width: 0; opacity: 1; } 
} 



@keyframes blink{
  to{opacity: .0;}
}

::selection{
  background: black;
}




		

/* The typing effect */


	.photo{
			display: flex;
			padding-top: 20px;
			padding-right: 100px;
			padding-left: 100px;
		}	

		
	}
	@media only screen and (max-width: 775px) {
		.about {
					img {
				height: 50vw;
				width: 17vw!important;
				object-fit: cover;
				border-radius: none;

		}
		p{
			padding-right: 20px;
			padding-left: 20px;
			color:black;
			font-size: 20px;
			text-align: none;
 			text-justify: none;
		}		
				.photo{
			display: flex;
			padding-right: 20px;
			padding-left: 20px;
		
		}

		
	}
	}
</style>
