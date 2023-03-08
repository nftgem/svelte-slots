<script lang="ts">
    export let showBonusGame = false;
    export let selectedChests: any = [];
    export let selectChestEvent = (target: any) => {};
    export let endBonusGame = () => {};
    export let bonusPayout = 0;
    export let bonusMessage = '';
    const chests = [{
            position: 0,
            offset: -45
        },
        {
            position: 1,
            offset: -15
        },
        {
            position: 2,
            offset: 15
        },
        {
            position: 3,
            offset: -60
        },
        {
            position: 4,
            offset: 30
        },
        {
            position: 5,
            offset: -70
        },
        {
            position: 6,
            offset: 40
        },
        {
            position: 7,
            offset: 150
        },
        {
            position: 8,
            offset: -90
        },
        {
            position: 9,
            offset: 60
        },
        {
            position: 10,
            offset: -75
        },
        {
            position: 11,
            offset: 45
        },
        {
            position: 12,
            offset: -30
        },
        {
            position: 13,
            offset: 20
        },
        {
            position: 14,
            offset: -10
        }
    ];
    function selectChest(index: number) {
        selectedChests.push(index);
        bonusPayout += chests[index].position;
        if (selectedChests.length === 3) {
            bonusMessage = `Congratulations! You won $${bonusPayout.toFixed(2)}!`;
        }
    }
</script>

<style>
    .bonus-game {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 1;
    }

    .bonus-game h2 {
        font-size: 2rem;
        margin: 0;
    }

    .bonus-game p {
        font-size: 1.5rem;
        margin: 0;
    }

    .chest {
        background: none;
        border: none;
        margin: 1rem;
        cursor: pointer;
    }

    .chest img {
        width: 100px;
        height: 100px;
    }

    .chest span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 1.5rem;
        font-weight: bold;
    }

    .bonus-message {
        font-size: 2rem;
        margin: 0;
    }
</style>

{#if showBonusGame}
    <div class="bonus-game">
        <h2>Bonus Game</h2>
        <p>Select 3 out of 5 treasure chests to reveal cash prizes!</p>
        {#each chests as chest, i}
            <button class="chest" on:click={selectChestEvent} disabled={selectedChests.includes(i)}>
                {#if selectedChests.includes(i)}
                    <img src="./assets/treasure-chest-open.svg" alt="Open treasure chest" />
                    <span>${chest.position.toFixed(2)}</span>
                {:else}
                    <img src="./assets/treasure-chest-closed.svg" alt="Closed treasure chest" />
                {/if}
            </button>
        {/each}
        {#if bonusMessage}
            <p class="bonus-message">{bonusMessage}</p>
        {/if}
    </div>
{/if}