<template>
    <nav class="float-action-button">
        <a href="https://www.instagram.com/antpievos/" class="buttons" title="instagram" data-toggle="tooltip" data-placement="left">
          <FontAwesomeIcon :icon="['fab', 'instagram']"/>
        </a>
        <a href="#" class="buttons" title="Twitter" data-toggle="tooltip" data-placement="left">
          <FontAwesomeIcon :icon="['fab', 'twitter']"/>
        </a>
        <a href="https://www.facebook.com/antPievos/" class="buttons" title="Facebook" data-toggle="tooltip" data-placement="left">
          <FontAwesomeIcon :icon="['fab', 'facebook']"/>
        </a>
        <a href="#" class="buttons" title="Share" data-toggle="tooltip" data-placement="left">
           <FontAwesomeIcon class="heart" :icon="['fas', 'heart']"/>
        </a>
        <slot></slot>
   </nav>
</template>

<script>
export default {
	name: 'FabButton'
}
</script>

<style lang='css'>
a{
  text-decoration: none;
}
 nav.float-action-button {
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 1em;
    z-index: 555;
}
.heart{
    font-size: 25px;
    margin-bottom: 3px;
}

a.buttons {
  box-shadow: 0 5px 11px -2px rgba(0, 0, 0, 0.18), 0 4px 12px -7px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  width: 56px;
  height: 56px;
  color: #fff;
  font-size: 2.6em;
  padding: 1px 0 0 0;
  text-align: center;
  display: block;
  margin: 20px auto 0;
  position: relative;
  -webkit-transition: all .1s ease-out;
  transition: all .1s ease-out;
}

a.buttons:active,
a.buttons:focus,
a.buttons:hover {
  box-shadow: 0 0 4px rgba(0, 0, 0, .14), 0 4px 8px rgba(0, 0, 0, .28);
  text-decoration: none!important;
  color:white!important;
}

a.buttons:not(:last-child) {
  width: 40px;
  height: 40px;
  margin: 20px auto 0;
  opacity: 0;
  font-size: 1.6em;
  padding-top: 4px;
  -webkit-transform: translateY(50px);
  -ms-transform: translateY(50px);
  transform: translateY(50px);
}

nav.float-action-button:hover a.buttons:not(:last-child) {
  opacity: 1;
  -webkit-transform: none;
  -ms-transform: none;
  transform: none;
  margin: 20px auto 0;
}

a.buttons:nth-last-child(1) {
  -webkit-transition-delay: 25ms;
  transition-delay: 25ms;
  background-color: #da552f;
  /* Button color */
}

a.buttons:nth-last-child(1) i.fa {
  transform: rotate3d(0, 0, 1, 0);
  transition: content 0.4s, transform 0.4s, opacity 0.4s;
}

a.buttons:nth-last-child(1):hover i.fa {
  transform: rotate3d(0, 0, 1, -180deg);
}

a.buttons:nth-last-child(1) i.fa:nth-last-child(1) {
  position: absolute;
  margin: 10px 0 0 -32px;
}

a.buttons:nth-last-child(1) i.fa:nth-last-child(2) {
  opacity: 0;
}

a.buttons:nth-last-child(1):hover i.fa:nth-last-child(1) {
  opacity: 0;
}

a.buttons:nth-last-child(1):hover i.fa:nth-last-child(2) {
  opacity: 1;
}

a.buttons:not(:last-child):nth-last-child(2) {
  -webkit-transition-delay: 50ms;
  transition-delay: 20ms;
  background-color: #3b5998;
  /* Facebook color */
}

a.buttons:not(:last-child):nth-last-child(3) {
  -webkit-transition-delay: 75ms;
  transition-delay: 40ms;
  background-color: #1da1f2;
  /* Twitter color */
}

a.buttons:not(:last-child):nth-last-child(4) {
  -webkit-transition-delay: 100ms;
  transition-delay: 60ms;
  background-color: #dd4b39;
  /* Google plus color */
}

.tooltip.left {
  margin-left: -10px;
}
</style>
