<template>
  <div id="Menu-image">
    <img
      :src="image"
      class="Menu-img"
    />
  </div>
</template>

<script>
import image from '@/assets/menu2.png'

export default {
	name: 'Menu2',
	data: function () {
		return {
			image: image
		}
	}
}
</script>

<style lang="scss">
   .Menu-img{
      width: 98vw;
    
      border-top-right-radius: 100px;
      animation-duration: 1s;
  animation-timing-function: cubic-bezier(0, 0.5, 0, 1);
  animation-fill-mode: both;
  animation-name: slideUp;
      height: 34.9vw;
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
     .Menu-img{

      width: 98vw;
      border-top-right-radius: 100px;
      border-bottom-left-radius: 100px;
      height: 85vw;
   }
   }
</style>
