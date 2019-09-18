<template>
  <div id="Menu-image">
    <img
      :src="image"
      class="Menu1-img"
    />
  </div>
</template>

<script>
import image from '@/assets/menu1.png'

export default {
	name: 'Menu',
	data: function () {
		return {
			image: image
		}
	}
}
</script>

<style lang="scss">
   .Menu1-img{
      width: 98vw;
      margin-top:0px;
     animation-duration: 1s;
  animation-timing-function: cubic-bezier(0, 0.5, 0, 1);
  animation-fill-mode: both;
  animation-name: slideUp;
      border-bottom-left-radius: 100px;
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
    .Menu1-img{
      width: 98vw;
      margin-top: 0px;
      border-top-right-radius: 100px;
      height: 85vw;
      margin-bottom: 20px;
   }
   }
</style>
