<template>
  <div class="google">
    <gmap-map
      :center="center"
      :zoom="13"
      style="width:350px;  height: 316px;"
      class="map"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="{ lat: 54.675009, lng: 25.305207 }"

      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
	name: 'GoogleMap',
	data () {
		return {
			center: { lat: 54.675009, lng: 25.305207 },
			markers: [{ lat: 54.675009, lng: 25.305207 }],
			places: [{ lat: 54.675009, lng: 25.305207 }],
			currentPlace: { lat: 54.675009, lng: 25.305207 }
		}
	},

	mounted () {
		this.geolocate()
	},

	methods: {
		geolocate: function () {
			navigator.geolocation.getCurrentPosition(position => {
				this.center = {
					lat: position.coords.latitude,
					lng: position.coords.longitude
				}
			})
		}
	}
}
</script>

<style lng='css'>
	@media only screen and (max-width: 775px) {
    .map{
      max-width: 280px;
      max-height: 260px;

    }
  }

</style>
