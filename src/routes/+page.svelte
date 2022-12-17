<script>
	import { enhance } from '$app/forms';
	import Loader from '$lib/components/Loader.svelte';

	export let data;

	let isSaving = false;
</script>

<h1>Log Everything</h1>

<form
	method="POST"
	action="?/create"
	use:enhance={() => {
		isSaving = true;

		return async ({ update }) => {
			await update();
			isSaving = false;
		};
	}}
>
	<label>
		Lägg till kategori
		<input name="name" disabled={isSaving} />
	</label>
</form>

{#if isSaving}
	<Loader />
{/if}

{#if data}
	{#each data.categories as category}
		<p>{category.name}</p>
	{/each}
{/if}
