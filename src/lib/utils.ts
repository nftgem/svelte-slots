
export const paylines: {
    name: string;
    positions: number[];
    offset: number;
}[] = [];

for(let i = 0; i < 5; i++) {
    paylines.push({
        name: 'Betline ' + (i + 1),
        positions: [i, i + 5, i + 10, i + 15, i + 20],
        offset: i
    });
}
for(let i = 0; i < 5; i++) {
    paylines.push({
        name: 'Betline ' + (i + 6),
        positions: [i * 5, i * 5 + 1, i * 5 + 2, i * 5 + 3, i * 5 + 4],
        offset: i + 5
    });
}
paylines.push({
    name: 'Betline 11',
    positions: [0, 6, 12, 18, 24],
    offset: 10
});
paylines.push({
    name: 'Betline 12',
    positions: [4, 8, 12, 16, 20],
    offset: 11
});

export const symbols = [{
    name: 'Ace of Spades',
    value: 1,
    symbol: '🂡'
},{
    name: 'Two of Spades',
    value: 2,
    symbol: '🂢'
},{
    name: 'Three of Spades',
    value: 3,
    symbol: '🂣'
},{
    name: 'Four of Spades',
    value: 4,
    symbol: '🂤'
},{
    name: 'Five of Spades',
    value: 5,
    symbol: '🂥'
},{
    name: 'Six of Spades',
    value: 6,
    symbol: '🂦'
},{
    name: 'Seven of Spades',
    value: 7,
    symbol: '🂧'
},{
    name: 'Eight of Spades',
    value: 8,
    symbol: '🂨'
},{
    name: 'Nine of Spades',
    value: 9,
    symbol: '🂩'
},{
    name: 'Ten of Spades',
    value: 10,
    symbol: '🂪'
},{
    name: 'Jack of Spades',
    value: 11,
    symbol: '🂫'
},{
    name: 'Queen of Spades',
    value: 12,
    symbol: '🂭'
},{
    name: 'King of Spades',
    value: 13,
    symbol: '🂮'
},{
    name: 'Ace of Clubs',
    value: 1,
    symbol: '🃑'
},{
    name: 'Two of Clubs',
    value: 2,
    symbol: '🃒'
},{
    name: 'Three of Clubs',
    value: 3,
    symbol: '🃓'
},{
    name: 'Four of Clubs',
    value: 4,
    symbol: '🃔'
},{
    name: 'Five of Clubs',
    value: 5,
    symbol: '🃕'
},{
    name: 'Six of Clubs',
    value: 6,
    symbol: '🃖'
},{
    name: 'Seven of Clubs',
    value: 7,
    symbol: '🃗'
},{
    name: 'Eight of Clubs',
    value: 8,
    symbol: '🃘'
},{
    name: 'Nine of Clubs',
    value: 9,
    symbol: '🃙'
},{
    name: 'Ten of Clubs',
    value: 10,
    symbol: '🃚'
},{
    name: 'Jack of Clubs',
    value: 11,
    symbol: '🃛'
},{
    name: 'Queen of Clubs',
    value: 12,
    symbol: '🃝'
},{
    name: 'King of Clubs',
    value: 13,
    symbol: '🃞'
},{
    name: 'Ace of Hearts',
    value: 1,
    symbol: '🂱'
},{
    name: 'Two of Hearts',
    value: 2,
    symbol: '🂲'
},{
    name: 'Three of Hearts',
    value: 3,
    symbol: '🂳'
},{
    name: 'Four of Hearts',
    value: 4,
    symbol: '🂴'
},{
    name: 'Five of Hearts',
    value: 5,
    symbol: '🂵'
},{
    name: 'Six of Hearts',
    value: 6,
    symbol: '🂶'
},{
    name: 'Seven of Hearts',
    value: 7,
    symbol: '🂷'
},{
    name: 'Eight of Hearts',
    value: 8,
    symbol: '🂸'
},{
    name: 'Nine of Hearts',
    value: 9,
    symbol: '🂹'
},{
    name: 'Ten of Hearts',
    value: 10,
    symbol: '🂺'
},{
    name: 'Jack of Hearts',
    value: 11,
    symbol: '🂻'
},{
    name: 'Queen of Hearts',
    value: 12,
    symbol: '🂽'
},{
    name: 'King of Hearts',
    value: 13,
    symbol: '🂾'
},{
    name: 'Ace of Diamonds',
    value: 1,
    symbol: '🃁'
},{
    name: 'Two of Diamonds',
    value: 2,
    symbol: '🃂'
},{
    name: 'Three of Diamonds',
    value: 3,
    symbol: '🃃'
},{
    name: 'Four of Diamonds',
    value: 4,
    symbol: '🃄'
},{
    name: 'Five of Diamonds',
    value: 5,
    symbol: '🃅'
},{
    name: 'Six of Diamonds',
    value: 6,
    symbol: '🃆'
},{
    name: 'Seven of Diamonds',
    value: 7,
    symbol: '🃇'
},{
    name: 'Eight of Diamonds',
    value: 8,
    symbol: '🃈'
},{
    name: 'Nine of Diamonds',
    value: 9,
    symbol: '🃉'
},{
    name: 'Ten of Diamonds',
    value: 10,
    symbol: '🃊'
},{
    name: 'Jack of Diamonds',
    value: 11,
    symbol: '🃋'
},{
    name: 'Queen of Diamonds',
    value: 12,
    symbol: '🃍'
},{
    name: 'King of Diamonds',
    value: 13,
    symbol: '🃎'
}];
export function getSymbols() {
    return symbols;
}

export const betlines = [{
    name: 'Betline 1',
    positions: [0, 1, 2, 3, 4],
    offset: 0
},{
    name: 'Betline 2',
    positions: [5, 6, 7, 8, 9],
    offset: 5
},{
    name: 'Betline 3',
    positions: [10, 11, 12, 13, 14],
    offset: 10
},{
    name: 'Betline 4',
    positions: [15, 16, 17, 18, 19],
    offset: 15
},{
    name: 'Betline 5',
    positions: [20, 21, 22, 23, 24],
    offset: 20
},{
    name: 'Betline 6',
    positions: [0, 5, 10, 15, 20],
    offset: 0
},{
    name: 'Betline 7',
    positions: [1, 6, 11, 16, 21],
    offset: 1
},{
    name: 'Betline 8',
    positions: [2, 7, 12, 17, 22],
    offset: 2
},{
    name: 'Betline 9',
    positions: [3, 8, 13, 18, 23],
    offset: 3
},{
    name: 'Betline 10',
    positions: [4, 9, 14, 19, 24],
    offset: 4
}];
export function getBetlines() {
    return betlines;
}

export const payTable: {
    [key: string]: {
        '3': number,
        '4': number,
        '5': number,
        name?: string,
        symbol?: string
        value?: number
    }
} = {};

for (let i = 0; i < symbols.length; i++) {
    payTable[symbols[i].name] = {
        '3': 0,
        '4': 0,
        '5': 0
    };
}

for(let i = 0; i < betlines.length; i++) {
    payTable[betlines[i].name] = {
        '3': 0,
        '4': 0,
        '5': 0
    };
}

export const cardNames = [
    'Ace of Spades',
    'Two of Spades',
    'Three of Spades',
    'Four of Spades',
    'Five of Spades',
    'Six of Spades',
    'Seven of Spades',
    'Eight of Spades',
    'Nine of Spades',
    'Ten of Spades',
    'Jack of Spades',
    'Queen of Spades',
    'King of Spades',
    'Ace of Clubs',
    'Two of Clubs',
    'Three of Clubs',
    'Four of Clubs',
    'Five of Clubs',
    'Six of Clubs',
    'Seven of Clubs',
    'Eight of Clubs',
    'Nine of Clubs',
    'Ten of Clubs',
    'Jack of Clubs',
    'Queen of Clubs',
    'King of Clubs',
    'Ace of Hearts',
    'Two of Hearts',
    'Three of Hearts',
    'Four of Hearts',
    'Five of Hearts',
    'Six of Hearts',
    'Seven of Hearts',
    'Eight of Hearts',
    'Nine of Hearts',
    'Ten of Hearts',
    'Jack of Hearts',
    'Queen of Hearts',
    'King of Hearts',
    'Ace of Diamonds',
    'Two of Diamonds',
    'Three of Diamonds',
    'Four of Diamonds',
    'Five of Diamonds',
    'Six of Diamonds',
    'Seven of Diamonds',
    'Eight of Diamonds',
    'Nine of Diamonds',
    'Ten of Diamonds',
    'Jack of Diamonds',
    'Queen of Diamonds',
    'King of Diamonds'
];

export const cardSymbols = (index: {
    [key: string]: {
        '3': number,
        '4': number,
        '5': number,
        name?: string,
        symbol?: string
        value?: number
    }
}) => paylines[index as any];

export function allCardSymbols() {
    const allCardSymbols = [];
    for (let i = 0; i < cardNames.length; i++) {
        allCardSymbols.push(payTable[cardNames[i]].symbol);
    }
    return allCardSymbols;
};
    
cardNames.forEach((card, index) => {
    payTable[card] = {
        '3': 0,
        '4': 0,
        '5': 0
    };
    payTable[card].name = card;
    payTable[card].symbol = symbols[index].symbol;
    payTable[card].value = symbols[index].value;
});

export const reels = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51]
];

export const payouts: {
    [key: string]: {
        '3': number,
        '4': number,
        '5': number
    }
} = {}
for(let i = 0; i < cardNames.length; i++) {
    payouts[cardNames[i]] = payTable[cardNames[i]];
}

export function getRandomSymbol() {
    const randomIndex = symbols[Math.floor(Math.random() * symbols.length)];
    if(randomIndex.symbol === WILD_SYMBOL) {
        return symbols[Math.floor(Math.random() * symbols.length)];
    }
    return randomIndex;
}

export function generateRandomSymbols() {
    return reels.map(() => Array.from({
        length: 3
    }, getRandomSymbol));
}

export let selectedPaylines: {
    [key: number]: boolean
} = [];

export function selectPayline(target: HTMLInputElement) {
    const paylinesCount = parseInt(target.value);
    selectedPaylines = Array.from({
        length: paylinesCount
    }, () => true);
}


export function calculatePaylinePayout(symbols: number[], betAmount: number) {
    const symbolCounts: any = symbols.reduce((count: any, symbol: number) => {
        count[symbol] = (count[symbol] || 0) + 1;
        return count;
    }, {});
    let payout = 0;
    for (const symbol in payouts) {
        if (symbol === WILD_SYMBOL) {
            continue;
        }
        const counts = symbolCounts[symbol] || 0;
        payout += (payouts[symbol][counts as '3' | '4' | '5'] || 0) * betAmount;
    }
    const wildCounts = symbolCounts[WILD_SYMBOL] || 0;
    if (payouts[WILD_SYMBOL] && payouts[WILD_SYMBOL] > wildCounts) {
        payout *= payouts[WILD_SYMBOL][wildCounts as '3' | '4' | '5'];
    }
    return payout * betAmount;
}

export function calculateTotalPayout(reels: any, betAmount: number) {
    let totalPayout = 0;
    let hasScatter = false;

    if (symbols.filter(s => s.symbol === JACKPOT_SYMBOL).length === 5) {
        return JACKPOT_PAYOUT;
    }

    for (let i = 0; i < paylines.length; i++) {
        const symbols = [reels[0][i], reels[1][i], reels[2][i], reels[3][i], reels[4][i]];
        const counts = symbols.reduce((counts: any, symbol: any) => {
            counts[symbol.symbol] = (counts[symbol.symbol] || 0) + 1;
            return counts;
        }, {});
        const scatterCount = counts[SCATTER_SYMBOL] || 0;
        if (scatterCount >= 3) {
            hasScatter = true;
        }
        const _payout = calculatePaylinePayout(symbols, betAmount);
        totalPayout += _payout;
    }

    if (hasScatter) {
        totalPayout *= 2;
    }

    return totalPayout;
}

export const BET_AMOUNTS = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000];

export const cardBack = '🂠';
export const jokers = ['🃏','🃟'];

export const reelSymbols = (index: number) => reels[index];

export const WILD_SYMBOL = jokers[0];
export const SCATTER_SYMBOL = jokers[1];
export const JACKPOT_SYMBOL = cardBack;
export const JACKPOT_PAYOUT = 10000;

export const RTP = 96.5;

/*
{ 
    paylines,
    symbols,
    betlines,
    payTable,
    cardNames,
    cardSymbols,
    allCardSymbols,
    reels,
    cardBack,
    jokers,
    reelSymbols,
    WILD_SYMBOL,
    SCATTER_SYMBOL,
    JACKPOT_SYMBOL,
    JACKPOT_PAYOUT,
    payouts
}

*/