<script lang="ts">
import { onMount } from 'svelte';
import BonusGame from './BonusGame.svelte';
import Controls from './Controls.svelte';
import Reels from './Reels.svelte';
import PaylinesCanvas from './PaylinesCanvas.svelte';

import { 
    symbols,
    reels,
    WILD_SYMBOL,
    SCATTER_SYMBOL,
    JACKPOT_SYMBOL,
    JACKPOT_PAYOUT,
    RTP,
    payouts,
    getRandomSymbol,
    generateRandomSymbols,
    calculateTotalPayout
} from '../utils';

let betAmount = 0.01;
let hasScatter = false;
let selectedChests: any = [];
let selectedPaylines: any = [];
let bonusPayout = 0;
let balance = 1000;
let canSpin = true;
let width: number, height: number

let rtp = RTP;

onMount(() => {
    width = window.innerWidth;
    height = window.innerHeight;
})

function spinReels() {
    const reelSymbols = generateRandomSymbols();
    const totalPayout = calculateTotalPayout(reelSymbols, betAmount);
    if (totalPayout > 0) {
        setPayout(totalPayout);
    }
    checkForBonusGame();
}

let totalPayout = 0;

function setPayout(_payout: number) {
    totalPayout = _payout;
    const totalBetAmount = betAmount * selectedPaylines.length;
    balance += totalPayout - totalBetAmount;
    selectedPaylines = [];
    hasScatter = false;
    rtp = (totalPayout / totalBetAmount) * RTP;
    rtp = Math.round(rtp * 100) / 100;
    setTimeout(() => {
        totalPayout = 0;
    }, 1000);
}

function selectChest(chestIndex: number) {
    const chest = Math.floor(Math.random() * chestIndex * 5);
    selectedChests = [...selectedChests, chest];
    bonusPayout += betAmount;
    if (selectedChests.length >= 3) {
        setTimeout(endBonusGame, 1000);
    }
}

function selectChestEvent(target: any) {
    const chestIndex = parseInt(target.value);
    selectChest(chestIndex);
}

function selectPaylineEvent(target: any) {
        const paylinesCount = parseInt(target.value);
        selectedPaylines = Array.from({
            length: paylinesCount
        }, () => true);
    }

function startBonusGame() {
    showBonusGame = true;
    selectedChests = [];
    bonusPayout = 0;
}

function endBonusGame() {
    showBonusGame = false;
    setPayout(bonusPayout);
}

function  setBetAmount(target: any) {
    if(target) {
        const v = target.value;
        betAmount = v;
    }
}

function resetPaylines() {
    selectedPaylines = [];
}

let bonusGameActive = false;
let showBonusGame = false;

function checkForBonusGame() {
    const scatterSymbols = reels.flat().filter((symbol: any) => symbol === SCATTER_SYMBOL);
    if (scatterSymbols.length >= 3 && !bonusGameActive) {
        // Trigger the bonus game
        bonusGameActive = true;
        generateRandomSymbols();
        resetPaylines();
        startBonusGame();
    }
}

function selectPayline(target: any) {
    const paylinesCount = parseInt(target.value);
    selectedPaylines = Array.from({
        length: paylinesCount
    }, () => true);
}

generateRandomSymbols();

</script>


<Controls
    {balance}
    {canSpin}
    {rtp}
    {selectedPaylines}
    {totalPayout}
    {spinReels}
    {setBetAmount}
    {selectPayline}
    resetPaylines={generateRandomSymbols}
/>
<Reels />
<PaylinesCanvas paylineSelected={selectedPaylines} />

{#if showBonusGame}
    <BonusGame
        {selectedChests}
        {bonusPayout}
        {selectChestEvent}
        {endBonusGame}
    />
{/if}
