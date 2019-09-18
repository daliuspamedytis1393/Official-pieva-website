<template>
	<Transition
		enter-active-class="fade-transition--entering"
		enter-class="fade-transition--enter-start"
		enter-to-class="fade-transition--enter-end"
		leave-active-class="fade-transition--exiting"
		leave-to-class="fade-transition--exit-end"
		mode="out-in"
		v-on="$listeners"
	>
		<slot />
	</Transition>
</template>

<script>
export default {
	name: 'FadeTransition'
}
</script>

<style lang="scss">
	.fade-transition {
		&--entering {
			transition: opacity .2s cubic-bezier(0.0, 0.0, 0.2, 1);
			will-change: opacity;
		}

		&--exiting {
			transition: opacity .15s cubic-bezier(0.4, 0.0, 1, 1);
			will-change: opacity;
		}

		&--enter-start, &--exit-end {
			opacity: 0;
		}

		&--enter-end, &--exit-start {
			opacity: 1;
		}
	}
</style>
