<template>
	<main class="app">
		<FadeTransition @after-enter="$store.dispatch('APP_TRANSITION_END')">
			<FabButton/>
		</FadeTransition>
		<Layout/>
		<Footer/>
	</main>
</template>

<script>
import FadeTransition from '@/components/FadeTransition'
import FabButton from '@/components/FabButton'
import Layout from '@/components/Layout'
import Footer from '@/components/Footer'

export default {
	components: {
		Layout,
		Footer,
		FabButton,
		FadeTransition
	}
}
</script>

<style lang="scss">
	.app {
		display: flex;
		flex-flow: column;
		min-height: 100%;
	}
</style>
