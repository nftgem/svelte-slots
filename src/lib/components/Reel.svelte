<script lang="ts">
    import Symbol from './Symbol.svelte';
export let symbols: string[] = [];
</script>

<div class="reel">
    {#each symbols as symbol}
        <Symbol symbol={symbol} />
    {/each}
</div>

<style>
.reel {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 10rem;
}
</style>
