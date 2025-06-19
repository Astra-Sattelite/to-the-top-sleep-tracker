export type Cell = {
  date_now: Date
}

export type CellMatrix = number[][]

export type MonthBlock = {
  year: number
  month: string
  cells: CellMatrix
}