export interface Draw {
    id: number,
    drawNo: number,
    numbers: DrawNumber[]
}

export interface DrawNumber {
    number: number,
    isBonus: boolean
}