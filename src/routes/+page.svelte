<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import DisplayMap from '$lib/components/DisplayMap.svelte';

	export let data;
	const displayData = [
		{ name: 'bedroom', spots: [0, 1, 2, 3, 4, 5, 6], paramName: 'numberOfBedrooms' },
		{ name: 'bathrooms', spots: [0, 1, 2, 3, 4, 5, 6], paramName: 'numberOfBathrooms' },
		{ name: 'garage', spots: [0, 1, 2, 3, 4, 5, 6], paramName: 'numberOfGarage' }
	];
</script>

<div class="mx-auto absolute inset-0">
	<DisplayMap data={data.coordinates} />
	<div
		class="absolute left-1/2 top-40 w-11/12 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white p-4 opacity-90 shadow-lg md:w-3/4 lg:w-1/2 xl:w-1/3"
	>
		<form>
			<div class="columns-2 font-bold">
				Minimum price
				<div class="relative inline-block">
					<Input
						class="pl-8"
						name="minPrice"
						min="0"
						type="number"
						value={data.searchTerms.priceMin}
						autocomplete="off"
						required
					/>
					<span class="absolute left-1 top-1/2 transform -translate-y-1/2">A$</span>
				</div>
				Maximum price
				<div class="relative inline-block">
					<Input
						class="pl-8"
						name="maxPrice"
						type="number"
						max="999999999"
						value={data.searchTerms.priceMax}
						autocomplete="off"
						required
					/>
					<span class="absolute left-1 top-1/2 transform -translate-y-1/2">A$</span>
				</div>
			</div>
			{#each displayData as display (display.name)}
				<div class="flex items-center gap-5 font-bold">
					{`Number of ${display.name}`}
					{#each display.spots as numberAvailable}
						<input
							type="radio"
							id={display.name}
							name={display.paramName}
							value={numberAvailable}
							required
						/>
						<label for={display.name}>{numberAvailable}</label>
					{/each}
				</div>
			{/each}
			<Button type="submit">submit</Button>
		</form>
	</div>
</div>
