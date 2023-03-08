<script lang="ts">
	import PaylineSymbol from "./PaylineSymbol.svelte";
    import * as utils from "../utils";

    export let active: boolean = false;
    export let index: any = 0;
    
    const symbols = utils.cardSymbols(index);
</script>

<style>
    .payline {
        width: 100%;
        height: 0.2rem;
        border-bottom: 1px solid black;
        margin: 0.5rem 0;
    }
    .active {
        border-bottom-color: red;
    }
</style>

<div class="payline {active ? 'active' : ''}">
    <div class="payline__symbol">
        <PaylineSymbol symbol={symbols.name} />
    </div>
</div>
