<script lang="ts">
import { 
    BET_AMOUNTS,
    RTP
} from '../utils';

    const MAX_PAYLINES = 20;

    export let balance = 1000;
    export let canSpin = true;
    export let rtp = RTP;
    export let selectedPaylines: any = [];
    export let totalPayout = 0;

    export let spinReels = () => {};
    export let setBetAmount = (target: any) => {};
    export let selectPayline = (target: any) => {};
    export let resetPaylines = () => {};

</script>
<style>
    .controls {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    }

    .bet-selector {
        display: flex;
        align-items: center;
    }

    .bet-selector label {
        margin-right: 0.5rem;
    }

    .bet-selector input {
        width: 3rem;
        margin-right: 1rem;
    }

    .bet-selector select {
        margin-right: 1rem;
    }

    .results {
        display: flex;
        align-items: center;
    }

    .results p {
        margin-right: 1rem;
    }

    .spin-button {
        background-color: #4CAF50;
        border: none;
        color: white;
        padding: 0.5rem 1rem;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
    }

    .spin-button:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
</style>
<div class="controls">
    <div class="bet-selector">
        <label for="paylines">Paylines:</label>
            <input
                type="number"
                id="paylines"
                min="1"
                max={MAX_PAYLINES}
                value={selectedPaylines.length}
                on:change={e => selectPayline(e.target)}
            />
        <label for="bet-amount">Bet amount:</label>
        <select id="bet-amount" on:change={e => setBetAmount(e.target)}>
            {#each BET_AMOUNTS as amount}
                <option value={amount}>{amount.toFixed(2)}</option>
            {/each}
        </select>
        <button class="spin-button" on:click={spinReels} disabled={!canSpin}>Spin</button>
    </div>
    <div class="results">
        <p>Balance: ${balance.toFixed(2)}</p>
        <p>Payout: ${totalPayout.toFixed(2)}</p>
        <p>RTP: {rtp}%</p>
    </div>
</div>