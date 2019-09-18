<template>
	<div id="animate-me" class="gallery">
    
		<AppWhiteBox>
      <div class="container">
      <div class="chevron"></div>
       <div class="chevron"></div>
      <div class="chevron"></div>
</div>
      <clazy-load class="wrapper" @load="log" v-for="image in photos" :src="image.src" :key="image.id">
        <transition name="fade">
          <img
            :src="image.src"
		    		id="images"
			    	class="gallery__images"
            >
        </transition>
        <transition name="fade" slot="placeholder">
          <div class="preloader">
            <div class="circle">
              <div class="circle-inner"></div>
            </div>
          </div>
        </transition>

      </clazy-load>

		</AppWhiteBox>
	</div>
</template>

<script>
import LightBox from 'vue-image-lightbox'
import axios from 'axios'
import AppWhiteBox from '@/components/AppWhiteBox'
import { VueClazyLoad } from 'vue-clazy-load'
export default {
	name: 'Gallery',
	components: {
		AppWhiteBox,
		VueClazyLoad,
		LightBox

	},
	data: () => ({
		photos: []
	}),
	created () {
		axios.get('https://api.instagram.com/v1/users/self/media/recent', {
			params: {
				access_token: '481549812.1677ed0.93a4545b5e7f4c09b350512f8f0b46f8',
				count: 150
			}
		}).then(({ data }) => {
			const records = data.data
			records.map(record => {
				if (record.type === 'image') {
					this.photos.push({
						id: record.id,
						src: record.images.standard_resolution.url

					})
				}
			})
		})
	}
}
</script>

<style lang='css'>
  .container {
  position: relative;
  width: 24px;
  height: 60px;
  width: 0%!important;
  padding-left: 0!important;

  
}

.chevron {
  position: absolute;
  width: 28px;
  height: 8px;
  opacity: 0;
  transform: scale3d(0.5, 0.5, 0.5);
  animation: move 3s ease-out infinite;
}

.chevron:first-child {
  animation: move 3s ease-out 1s infinite;
}

.chevron:nth-child(2) {
  animation: move 3s ease-out 2s infinite;
}

.chevron:before,
.chevron:after {
  content: ' ';
  position: absolute;
  top: 0;
  height: 65%;
  width: 51%;
  background: black;
}

.chevron:before {
  left: 0;
  transform: skew(0deg, 30deg);
}

.chevron:after {
  right: 0;
  width: 50%;
  transform: skew(0deg, -30deg);
}

@keyframes move {
  25% {
    opacity: 1;

  }
  33% {
    opacity: 1;
    transform: translateY(30px);
  }
  67% {
    opacity: 1;
    transform: translateY(40px);
  }
  100% {
    opacity: 0;
    transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
  }
}

.text {
  display: block;
  margin-top: 75px;
  margin-left: -30px;
  font-family: "Helvetica Neue", "Helvetica", Arial, sans-serif;
  font-size: 12px;
  color: black;
  text-transform: uppercase;
  white-space: nowrap;
  opacity: .25;
  animation: pulse 2s linear alternate infinite;
}

@keyframes pulse {
  to {
    opacity: 1;
  }
}
	.gallery{
	  text-align: center;
	  font-size: 24px;
	  font-weight: 600;
	  margin: 0 auto;
  	padding-top: 25px;
  	padding-bottom: 45px;
  	color: black;
  	font-size: 30px;
    margin-bottom: 20px;
    
  

  }
	.gallery__images{
		height: 35vw;
    width: 35vw;
		justify-content: space-between;
		object-fit: contain;
	}
  .wrapper {

    width: 35vw;
	  height: 35vw;
    display: inline-block;
    position: relative;
    height: 0;
    object-fit: contain;
    padding-bottom: 33.333vw;
    overflow: hidden;
    margin-bottom: -8px;
  }

  .wrapper img {
    display: inline;
    background-size: cover;
    position: relative;
    transition: all 430ms ease-in-out;
    object-fit: cover;
    overflow: hidden;
    
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
    transform: scale(1.7);
  }

  .preloader {
    position: absolute;
    bottom: 70%;
    right: 40%;
    margin: -25px 0 0 -25px;
    width: 50px;
    height: 50px;
    transition: all 400ms ease-in;
  }

  .preloader .circle,
  .preloader .circle .circle-inner {
    width: inherit;
    height: inherit;
    border-radius: 50%;
    background: linear-gradient(rgba(64, 150, 238, 1) -50%,rgba(64, 150, 238, 0) 60%);
  }

  .preloader .circle {
   animation: roll 2s linear infinite;
  }

  .preloader .circle .circle-inner {
   padding: 5px;
   animation: roll 2s linear infinite reverse;
  }

  .preloader .circle .circle-inner::after {
   content: '';
   display: block;
   width: 40px;
   height: 40px;
   border-radius: 50%;
   background: #fff;
  }

a { 
    color: black; text-decoration: none;
  }



@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}
@keyframes roll {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@media only screen and (max-width: 775px) {
  	.gallery{
	  text-align: center;
	  font-size: 24px;
	  font-weight: 600;
	  margin: 0 auto;
  	padding-top: 25px;
  	padding-bottom: 45px;
  	color: black;
  	font-size: 30px;
  	margin-bottom: 20px;
  	

  }
	.gallery__images{
		height: 90vw;
    width: 90vw;
		justify-content: space-between;
		object-fit: contain;
	}
  .wrapper {
    width: 90vw;
    height: 90vw;
    padding-bottom: -25px;
    display: inline-block;
    position: relative;
    object-fit: contain;
    padding-bottom: 33.333vw;
    overflow: hidden;
    margin-bottom: -8px;

  }

  .wrapper img {
    display: inline;
    background-size: cover;
    position: relative;
    transition: all 430ms ease-in-out;
    object-fit: cover;
    overflow: hidden;

  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
    transform: scale(1.5);
  }

  .preloader {
    position: absolute;
    bottom: 70%;
    right: 40%;
    margin: -25px 0 0 -25px;
    width: 50px;
    height: 50px;
    transition: all 400ms ease-in;
  }

  .preloader .circle,
  .preloader .circle .circle-inner {
    width: inherit;
    height: inherit;
    border-radius: 50%;
    background: linear-gradient(rgba(64, 150, 238, 1) -50%,rgba(64, 150, 238, 0) 60%);
  }

  .preloader .circle {
   animation: roll 2s linear infinite;
  }

  .preloader .circle .circle-inner {
   padding: 5px;
   animation: roll 2s linear infinite reverse;
  }

  .preloader .circle .circle-inner::after {
   content: '';
   display: block;
   width: 40px;
   height: 40px;
   border-radius: 50%;
   background: #fff;
  }

a { color: black; text-decoration: none; }

.arrow {
  text-align: center;
  margin: 2% 0;
}
.bounce {
  animation: bounce 2s infinite;
}
}

</style>
