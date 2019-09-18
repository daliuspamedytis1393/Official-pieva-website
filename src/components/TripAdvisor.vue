<template>
  <div id="logo-image">
    <img :src="image" />
  </div>
</template>

<script>
import image from '@/assets/tripadvisor.png'

export default {
	name: 'TripAdvisor',
	data: function () {
		return {
			image: image
		}
	}
}
</script>

<style lang="scss">
    #logo-image{
        img{
          width: 30vw;
        }
    }
    @media only screen and (max-width: 775px) {
      #logo-image{
        img{
            width: 45vw;
        }
      }
    }

</style>
