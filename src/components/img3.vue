<template>
  <div id="third-image">
    <img
      :src="image"
      class="third-img"
    />
  </div>
</template>

<script>
import image from '@/assets/3nd.jpg'

export default {
  name: 'img3',
	data: function () {
		return {
			image: image
		}
	}
}
</script>

<style lang="scss">
   .third-img{
      width: 15vw;
      margin-top:0px;

      height: 15vw;
   }
   @media only screen and (max-width: 775px) {
    .third-img{
      width: 98vw;
      height: 85vw;

   }
   }
</style>
