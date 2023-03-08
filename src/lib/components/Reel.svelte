<script lang="ts">
    export let symbols: any = [];
</script>

<div class="reel">
    {#each symbols as symbol}
        <div class="symbol">
            <div class="symbol">{symbol}</div>
        </div>
    {/each}
</div>

<style>
    .reel {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transition: transform 0.5s ease-in-out;
    }

    .symbol {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        font-weight: bold;
    }
</style>
