<script lang="ts">
    export let selectedPaylines: any = [];
    export let index: any = 0;
</script>
<style>
    .payline__selector {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: none;
    }
    .payline__selector__inner {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 2px solid #fff;
        border-radius: 50%;
        pointer-events: none;
    }
</style>
<div class="payline__selector">
    <div class="payline__selector__inner">
        {#if selectedPaylines.includes(index)}
            <div class="payline__selector__inner" >
            </div>
        {/if}
    </div>
</div>