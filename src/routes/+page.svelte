<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	$: items = data.items;
</script>

<svelte:head>
	<title>MyCoffee</title>
	<meta name="description" content="CoffeX" />
</svelte:head>
