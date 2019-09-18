<template>
  <div id="first-image">
    <img
      :src="image"
      class="first-img"
    />
  </div>
</template>

<script>
import image from '@/assets/1st.jpg'

export default {
	name: 'img1',
	data: function () {
		return {
			image: image
		}
	}
}
</script>

<style lang="scss">
   .first-img{
      width: 16vw;
      margin-top:0px;
      border-bottom-left-radius: 100px;
      height: 15vw;
   }
   @media only screen and (max-width: 775px) {
    .first-img{
      width: 98vw;
      height: 85vw;
      border-top-left-radius: 0px;
      border-bottom-left-radius: 100px;
   }
   }
</style>
