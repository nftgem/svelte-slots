<script lang="ts">
    // draws the paylines on a canvas which is then used as a background image
    // for the reels
    import { onMount } from 'svelte';
    import { 
        paylines,
    } from '../utils';

    export let width: number = 0;
    export let height: number = 0;

    export let paylineSelected  = (item: any) => {};
    export let animate = false;

    let canvas: any = null;
    let ctx: any = null;

    onMount(() => {
        canvas = document.createElement('canvas');
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.zIndex = '1';
        canvas.width = width;
        canvas.height = height;
        drawPaylines();
    });

    function animationLoop() {
        if( canvas) {
            ctx = canvas.getContext('2d');
            const paylineCoordinates = getPaylinesSized(width, height);
            ctx.clearRect(0, 0, width, height);
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 2;
            ctx.beginPath();
            paylineCoordinates.forEach((payline: any, index: number) => {
                ctx.moveTo(payline[0][0], payline[0][1]);
                payline.position.forEach((symbol: any) => {
                    ctx.lineTo(symbol[0], symbol[1]);
                });
            });
            ctx.stroke();
        }
        requestAnimationFrame(animationLoop);
    }

    function getPaylinesSized(width: number, height: number) {
        const paylineCoordinates: any = {};
        const symbolWidth = width / 5;
        const symbolHeight = height / 3;
        paylines.forEach((payline: any, index: number) => {
            paylineCoordinates[index] = [];
            payline.positions.forEach((symbol: any) => {
                const x = symbol[0] * symbolWidth + symbolWidth / 2;
                const y = symbol[1] * symbolHeight + symbolHeight / 2;
                paylineCoordinates[index].push([x, y]);
            });
        });
        return paylineCoordinates;
    }

    const drawPaylines = () => {
        if( canvas) {
            ctx = canvas.getContext('2d');
            if(!ctx) return;
            const paylineCoordinates = getPaylinesSized(width, height);
            ctx.clearRect(0, 0, width, height);
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 2;
            ctx.beginPath();
            paylines.forEach((payline: any) => {
                const coordinates = paylineCoordinates[payline];
                ctx.moveTo(coordinates[0][0], coordinates[0][1]);
                coordinates.forEach((coordinate: any) => {
                    ctx.lineTo(coordinate[0], coordinate[1]);
                });
            });
            ctx.stroke();
        }               
    };

    function paylineSelectedEvent(event: any) {
        const payline = event.target;
        const index = payline.getAttribute('data-index');
        paylineSelected(index);
    }

    // takes a []
    function getCoordinatesFromPaylinePosition(payline: any, position: any) {
        const symbolWidth = width / 5;
        const symbolHeight = height / 3;
        const x = position[0] * symbolWidth + symbolWidth / 2;
        const y = position[1] * symbolHeight + symbolHeight / 2;
        const x1 = x - symbolWidth / 2;
        const y1 = y - symbolHeight / 2;
        const x2 = x + symbolWidth / 2;
        const y2 = y + symbolHeight / 2;
        return [[x1, y1], [x, y], [x2, y2]];
    }

    $: if (animate) {
        animationLoop();
    }

    $: drawPaylines();
</script>

<style>
    canvas {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
    }
</style>

<map name="paylines">
    {#each paylines as payline, index}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-missing-attribute -->
        <area
            shape="poly"
            coords={payline.positions.map((position, i) => {
                const coords = getCoordinatesFromPaylinePosition(payline, position);
                return `${coords[0][0]},${coords[0][1]},${coords[1][0]},${coords[1][1]},${coords[2][0]},${coords[2][1]}`;
            }).join(',')}
            on:click={paylineSelectedEvent}
        />
    {/each}
</map>

<canvas 
    id="paylines" 
    width={width} 
    height={height} 
    usemap="#paylines"
></canvas>