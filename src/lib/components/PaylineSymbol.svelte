<!-- PaylineSymbol.svelte -->
<script lang="ts">
    export let symbol: string;
    import { 
        WILD_SYMBOL,
        SCATTER_SYMBOL,
        JACKPOT_SYMBOL,
    } from '../utils';
</script>

<div class="symbol">
    {#if symbol === 'wild'}
        <span class="wild-symbol">{WILD_SYMBOL}</span>
    {:else if symbol === 'scatter'}
        <span class="scatter-symbol">{SCATTER_SYMBOL}</span>
    {:else if symbol === 'jackpot'}
        <span class="jackpot-symbol">{JACKPOT_SYMBOL}</span>
    {:else}
        <span class="symbol-name">{symbol}</span>
    {/if}
</div>

<style>
    .symbol {
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
    .wild-symbol {
        color: #f00;
    }
    .scatter-symbol {
        color: #0f0;
    }
    .jackpot-symbol {
        color: #00f;
    }
</style>
