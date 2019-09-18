<template>
	<nav class="app-nav">
   		<label>
       <input type="checkbox" v-model="value" />
  		<span class="menu">
  	    <span class="hamburger"></span>
 	     </span>
		  <ul class="app-nav__list">
		  	<li
		  		v-for="(item, index) in navigation"
		  		:key="index"
		  		class="app-nav__list-item"
		  	>

				  <router-link
				  	:to="item.to"
				  	:class="['app-nav__list-link', {
				  		'app-nav__list-link--inverted': inverted
				  	}]"
				  	exact-active-class="app-nav__list-link--active"
            @click.native="value = false"
				  >
				  	{{ item.name }}
			  	</router-link>
		  	</li>
	  	</ul>
		</label>
	</nav>
</template>
<script>
export default {
	name: 'AppNav',

	props: {
		navigation: {
			type: Array,
			required: true
		},
		inverted: {
			type: [Boolean, String],
			default: false
		}
	},
	data () {
		return {
			value: false
		}
	}
}
</script>

<style lang="scss">
	.app-nav {
	@import url('https://fonts.googleapis.com/css?family=Cutive+Mono');
  label {
    .menu {
      position: fixed;
      right: -100px;
      top: -100px;
      z-index: 100;
      width: 200px;
      height: 200px;
      background: #FFF;
      border-radius: 50% 50% 50% 50%;
      transition: .5s ease-in-out;
      box-shadow: 0 0 0 0 #FFF, 0 0 0 0 #FFF;
      cursor: pointer;
    }
    .hamburger {
      position: absolute;
      top: 135px;
      left: 50px;
      width: 30px;
      height: 5px;
      background: #000;
      display: block;
      transform-origin: center;
      transition: .5s ease-in-out;
      &:after,
      &:before {
        transition: .5s ease-in-out;
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        background: #000;
      }
      &:before {
        top: -10px;
      }
      &:after {
        bottom: -10px;
      }
    }
  input {
    display: none;
  }

  input:checked + .menu{
    box-shadow: 0 0 0 100vw #FFF, 0 0 0 100vh #FFF;
    border-radius: 0;
    overflow: hidden;
    .hamburger {
      transform: rotate(45deg);
      &:after {
        transform: rotate(90deg);
        bottom: 0;
      }
      &:before {
        transform: rotate(90deg);
        top: 0;
      }
    }
  }

  input:checked + .menu + ul {
    opacity: 1;
    pointer-events: all;
     transition: opacity .8s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }

  ul {
    opacity: 0;
    pointer-events: none;
    z-index: 200;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

  }

  a {
	  font-size: 25px;
    margin-bottom: 5px;
    display: block;
    color: #ff3355;
    text-decoration: none;

  }
  a:hover{
	  color: pink;
  }
  }
  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 80%;
    text-align: center;
  }
}
@media only screen and (max-width: 775px) {
	.app-nav {
	@import url('https://fonts.googleapis.com/css?family=Cutive+Mono');
  label {
    .menu {
      position: fixed;
      right: -100px;
      top: -115px;
      z-index: 100;
      width: 190px;
      height: 177px;
      background: #FFF;
      border-radius: 50% 50% 50% 50%;
      transition: .5s ease-in-out;
      box-shadow: 0 0 0 0 #FFF, 0 0 0 0 #FFF;
      cursor: pointer;
    }
    .hamburger {
      position: absolute;
      top: 135px;
      left: 50px;
      width: 30px;
      height: 5px;
      background: #000;
      display: block;
      transform-origin: center;
      transition: .5s ease-in-out;
      &:after,
      &:before {
        transition: .5s ease-in-out;
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        background: #000;
      }
      &:before {
        top: -10px;
      }
      &:after {
        bottom: -10px;
      }
    }
  input {
    display: none;
  }

  input:checked + .menu{
    box-shadow: 0 0 0 100vw #FFF, 0 0 0 100vh #FFF;
    border-radius: 0;
    overflow: hidden;
    .hamburger {
      transform: rotate(45deg);
      &:after {
        transform: rotate(90deg);
        bottom: 0;
      }
      &:before {
        transform: rotate(90deg);
        top: 0;
      }
    }
  }

  input:checked + .menu + ul {
    opacity: 1;
    pointer-events: all;
     transition: opacity .8s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }

  ul {
    opacity: 0;
    pointer-events: none;
    z-index: 200;
    position: fixed;
    top: 38%;
    left: 56%;
    transform: translate(-50%,-50%);

  }

  a {
	  font-size: 25px;
    margin-bottom: 5px;
    display: block;
    color: #ff3355;
    text-decoration: none;

  }
  a:hover{
	  color: pink;
  }
  }
  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 80%;
    text-align: center;
  }
}
}

</style>
