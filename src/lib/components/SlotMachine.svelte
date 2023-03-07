<script lang="ts">
import Reel from './Reel.svelte';
import Payline from './Payline.svelte';

let paylines = 25;
let betAmount = 0.01;
let isBonusGame = false;
let selectedChests: any = [];
let bonusPayout = 0;

const payouts: any = {
    'pirate-ship': [0, 0, 10, 50, 1000],
    'treasure-chest': [0, 0, 5, 25, 500],
    'compass': [0, 0, 3, 10, 250],
    'skull-crossbones': [0, 0, 2, 5, 100],
    'parrot': [0, 0, 2, 5, 75]
};
const WILD_SYMBOL = 'pirate-flag';
const SCATTER_SYMBOL = 'treasure-map';

const symbols = ['pirate-ship', 'treasure-chest', 'compass', 'skull-crossbones', 'parrot'];
let reels: any = Array.from({
    length: 5
}, () => []);

function getRandomSymbol() {
    const randomIndex = Math.floor(Math.random() * symbols.length);
    const symbol = symbols[randomIndex];
    if (symbol === WILD_SYMBOL) {
        const nonWildSymbols = symbols.filter((s) => s !== WILD_SYMBOL);
        return nonWildSymbols[Math.floor(Math.random() * nonWildSymbols.length)];
    }
    return symbol;
}

function generateRandomSymbols() {
    reels = reels.map(() => Array.from({
        length: 3
    }, getRandomSymbol));
}

function calculatePaylinePayout(symbols: string[]) {
    const symbolCounts: any = symbols.reduce((count: any, symbol: string) => {
        count[symbol] = (count[symbol] || 0) + 1;
        return count;
    }, {});
    let payout = 0;
    for (const symbol in payouts) {
        if (symbol === WILD_SYMBOL) {
            continue;
        }
        const counts = symbolCounts[symbol] || 0;
        payout += payouts[symbol][counts];
    }
    const wildCounts = symbolCounts[WILD_SYMBOL] || 0;
    if (payouts[WILD_SYMBOL] && payouts[WILD_SYMBOL].length > wildCounts) {
        payout *= payouts[WILD_SYMBOL][wildCounts];
    }
    return payout * betAmount;
}

function calculateTotalPayout() {
    let totalPayout = 0;
    let hasScatter = false;

    for (let i = 0; i < paylines; i++) {
        const symbols = [reels[0][i], reels[1][i], reels[2][i], reels[3][i], reels[4][i]];
        const counts = symbols.reduce((counts, symbol) => {
            counts[symbol] = (counts[symbol] || 0) + 1;
            return counts;
        }, {});
        const scatterCount = counts[SCATTER_SYMBOL] || 0;
        if (scatterCount >= 3) {
            hasScatter = true;
        }
        const _payout = calculatePaylinePayout(symbols);
        totalPayout += _payout;
    }

    if (hasScatter) {
        totalPayout *= 2;
    }

    return totalPayout;
}

function spinReels() {
    generateRandomSymbols();
    const totalPayout = calculateTotalPayout();
    if (totalPayout > 0) {
        setPayout(totalPayout);
    }
}

let payout = 0;

function setPayout(totalPayout: number) {
    payout = totalPayout;
    setTimeout(() => {
        payout = 0;
    }, 1000);
}

function startBonusGame() {
    isBonusGame = true;
    selectedChests = [];
    bonusPayout = 0;
}

function selectChest() {
    const chest = Math.floor(Math.random() * 5);
    selectedChests = [...selectedChests, chest];
    bonusPayout += betAmount;
    if (selectedChests.length >= 3) {
        setTimeout(endBonusGame, 1000);
    }
}

function endBonusGame() {
    isBonusGame = false;
    setPayout(bonusPayout);
}

generateRandomSymbols();
</script>

<div class="flex flex-row justify-center">
    {#each reels as reelSymbols}
    <Reel {...{ symbols: reelSymbols }} />
    {/each}
</div>

<div class="flex flex-row justify-center">
    {#each Array.from({ length: 25 }, (_, i) => i) as payline}
    <Payline />
    {/each}
</div>

<label>
    Paylines:
    <input type="number" min="1" max="25" bind:value={paylines} />
</label>

<label>
    Bet Amount:
    <input type="number" step="0.01" min="0.01" max="1" bind:value={betAmount} />
</label>

{#if payout > 0}
<p>Total Payout: ${payout.toFixed(2)}</p>
{/if}

{#if isBonusGame}
<div class="text-center mb-4">
    <h3 class="text-3xl font-bold mb-4">Treasure Hunt Bonus Game</h3>
    <p>Select three treasure chests to reveal your cash prizes!</p>
    {#if selectedChests.length < 3}
        <button class="mt-4 p-2 bg-blue-500 text-white rounded-md shadow-md" on:click={selectChest}>Select a Chest</button>
    {:else}
        <button class="mt-4 p-2 bg-blue-500 text-white rounded-md shadow-md" on:click={endBonusGame}>End Bonus Game</button>
    {/if}
</div>
{/if}

<button on:click={spinReels}>Spin</button>

<style>
.flex {
    display: flex;
}

.flex-row {
    flex-direction: row;
}

.justify-center {
    justify-content: center;
    white-space: nowrap;
}
</style>
