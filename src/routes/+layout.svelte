<script lang="ts">
	import "../app.css"
	import Logo2 from "../components/icons/logo2.svelte"

	let { children } = $props()
</script>

<div>
	<nav 
		class="flex flex-row gap-2 w-full h-16 bg-sleep-lavanda-light items-center text-sleep-purple-deep text-2xl"
	>   
		<div class="size-16 p-1 -scale-x-100 rotate-20">
			<Logo2 />
		</div>
		<a href="/tracker">Tracker</a>
	</nav>

	{@render children()}
</div>

<style>
</style>
