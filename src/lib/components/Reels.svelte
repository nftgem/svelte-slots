<script lang="ts">
import { onMount } from 'svelte';
import Reel from './Reel.svelte';

export let reels: any = [];
export let selectedPaylines: any = [];

const reelOffset = (i: number) => {
    return `transform: translateX(${i * 100}%)`;
};

onMount(() => {
    selectedPaylines = [];
});
</script>

<style>
    .reels {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        position: relative;
    }
    .reel:nth-child(1) { transform: translateX(0%); }
    .reel:nth-child(2) { transform: translateX(100%); }
    .reel:nth-child(3) { transform: translateX(200%); }
    .reel:nth-child(4) { transform: translateX(300%); }
    .reel:nth-child(5) { transform: translateX(400%); }
</style>

<div class="reels">
    {#each reels as reel, i}
        <div class="reel" style={reelOffset(i)}>
            <Reel symbols={reel} />
        </div>
    {/each}
</div>