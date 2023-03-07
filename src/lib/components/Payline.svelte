<script lang="ts">
export let isActive: boolean = false;
</script>

<div class="payline" class:active={isActive}></div>

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
