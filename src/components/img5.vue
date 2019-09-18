<template>
  <div>
    <img
      :src="image"
      class="fifth-img"
    />
  </div>
</template>

<script>
import image from '@/assets/5th.jpg'

export default {
	name: 'img5',
	data: function () {
		return {
			image: image
		}
	}
}
</script>

<style lang="scss">
   .fifth-img{
      width: 15vw;
      margin-top:0px;
      border-radius: none;
      border-top-right-radius: 100px;
      height: 15vw;
   }
   @media only screen and (max-width: 775px) {
    .fifth-img{
      width: 98vw;
      border-top-right-radius: 100px;
      height: 85vw;
   }
   }
</style>
