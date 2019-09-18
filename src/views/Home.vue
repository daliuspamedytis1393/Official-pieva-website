<template>
	<section class="Layout">
		<div class="Layout__content">
			<h1 class="Layout__title">Pieva
				<span>.</span>

			</h1>

			<h3 class="Layout__subtitle">Virtuvė ant ratų</h3>
		</div>
	</section>
</template>
<script>
import logo from '@/components/logo'
export default {
	name: 'Home',
	components: {
		logo
	}
}
</script>

<style lang="scss">
	.Layout {
		display: flex;
		flex-flow: column;
		padding: 0 130px;

		&__content {
			display: flex;
			flex-flow: column;
			justify-content: center;
			flex: 1;
			color: white;
			text-align: center;
		}

		&__title {
            @import url('https://fonts.googleapis.com/css?family=Indie+Flower');
            font-family: 'Indie Flower', cursive;
			font-size: 100px;
            display: flex;
			font-weight: 600;
            text-transform: uppercase;
			
			white-space: nowrap;
			animation-duration: 1s;
  animation-timing-function: cubic-bezier(0, 0.5, 0, 1);
  animation-fill-mode: both;
  animation-name: slideUp;
			span{
				animation: blink 2s infinite;
			}
			span:nth-child(2){
				animation: blink 2.1s infinite;
				
			}
			@keyframes blink{
				to{
					opacity: .0;
				}
			}
		}
		
		&__subtitle {
           @import url('https://fonts.googleapis.com/css?family=Amatic+SC');
            font-family: 'Amatic SC', cursive;
			font-size: 80px;
            letter-spacing: 3px;
			padding: 0;
			margin: 0;
			font-weight: 600;
			overflow: hidden;
			  animation-name: slideDown;
			 animation-delay: 1s;
    animation-duration: 1s;
    animation-timing-function: ease;
    animation-fill-mode: both;
		}
	}
	@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-1rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
  @keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(8rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
		@media only screen and (max-width: 775px) {
    .Layout {
		body{
			background-image: url('//https://data.1freewallpapers.com/detail/avocado-minimalism-pink.jpg');
		}
		display: flex;
		flex-flow: column;
		padding: 0 ;
		
		
		

		&__content {
			display: flex;
			flex-flow: column;
			justify-content: center;
			margin-top: -33px;
			color: white;
			text-align: center;
			
			
			
			
		}

		&__title {
            @import url('https://fonts.googleapis.com/css?family=Indie+Flower');
            font-family: 'Indie Flower', cursive;
			font-size: 96px;
            display: flex;
			font-weight: 600;
			margin-bottom: -22px;
			padding-left: 27px;
			padding-right: 20px;		
	 		 padding-top: 70px;
			color: white;
			animation-duration: 1s;
  animation-timing-function: cubic-bezier(0, 0.5, 0, 1);
  animation-fill-mode: both;
  animation-name: slideUp;
			
            text-transform: uppercase;
			padding-bottom: 1px;
			white-space: nowrap;

			span {
				animation: blink 2s infinite;
			}
			@keyframes blink{
				to{
					opacity: .0;
				}
			}
		}
		&__subtitle {
           @import url('https://fonts.googleapis.com/css?family=Amatic+SC');
            font-family: 'Amatic SC', cursive;
			font-size: 20px;
            letter-spacing: 3px;
			padding: 10px;
			animation-name: none;
			margin-bottom: 122px;
			margin: 0;
			animation-name: slideDown;
			 animation-delay: 1s;
    animation-duration: 1s;
    animation-timing-function: ease;
    animation-fill-mode: both;
			font-weight: 600;
			overflow: hidden;
			
			 
		}
	}
  }

</style>
