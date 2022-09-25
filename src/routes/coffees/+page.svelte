<script lang="ts">
	import type { PageData } from './$types';
	import Table from './Table.svelte';

	export let data: PageData;
	$: items = data.items;
</script>

<div>
	<Table {items} />
</div>
