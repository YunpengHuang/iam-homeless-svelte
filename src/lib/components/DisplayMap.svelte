<script lang="ts">
	import {
		Control,
		ControlButton,
		ControlGroup,
		DefaultMarker,
		MapLibre,
		Popup
	} from 'svelte-maplibre';
	export let data;
</script>

<div>
	<MapLibre
		style="https://api.maptiler.com/maps/dataviz/style.json?key=fhmjhdMnyYo4DcxhGkF5"
		class={'relative w-full aspect-[9/16] max-h-[70vh] sm:max-h-full sm:aspect-video'}
		standardControls
		center={[134.115, -24.811]}
		zoom={3.9}
		let:map
	>
		{#if data.length > 0}
			{#each data as suburbPoints (suburbPoints.suburb)}
				{#if suburbPoints.longitude !== null || suburbPoints.latitude !== null}
					<Control class="flex flex-col gap-y-2">
						<ControlGroup>
							<ControlButton
								on:click={() => {
									map.flyTo({
										center: [suburbPoints.longitude, suburbPoints.latitude],
										zoom: 11,
										duration: 2000
									});
								}}
							>
								{suburbPoints.suburb}
							</ControlButton>
						</ControlGroup>
					</Control>
					<DefaultMarker lngLat={[suburbPoints.longitude, suburbPoints.latitude]}>
						<Popup offset={[0, -10]}>
							<div class="text-lg font-bold">{suburbPoints.suburb}</div>
						</Popup>
					</DefaultMarker>
				{/if}
			{/each}
		{/if}
	</MapLibre>
</div>
