<template>
  <div id="logo-image">
    <img :src="image" />
  </div>
</template>

<script>
import image from '@/assets/logo.png'

export default {
	name: 'logo',
	data: function () {
		return {
			image: image
		}
	}
}
</script>

<style lang="scss">

</style>
