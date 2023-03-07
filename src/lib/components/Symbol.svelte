<script lang="ts">
    export let symbol: string = '';
    const symbolImages: any = {
        'pirate-ship': '/assets/pirate-ship.png',
        'treasure-chest': '/assets/pirates-chest.png',
        'compass': '/assets/compass.png',
        'skull-crossbones': '/assets/skull-crossbones.png',
        'parrot': '/assets/parrot.png',
        'pirate-flag': '/assets/pirate-flag.png',
        'treasure-map': '/assets/treasure-map.png'
    };
</script>

{#if symbol === 'pirate-flag'}
    <img src={symbolImages['pirate-flag']} alt="Pirate Flag" class="h-12 w-12">
{:else if symbol === 'treasure-map'}
    <img src={symbolImages['treasure-map']} alt="Treasure Map" class="h-12 w-12">
{:else}
    <img src={symbolImages[symbol]} alt={symbol} class="h-12 w-12">
{/if}

<style>
    .symbol {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 5rem;
        height: 5rem;
        border: 1px solid black;
        margin: 0.5rem;
    }
</style>
