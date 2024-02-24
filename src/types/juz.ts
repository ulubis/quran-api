export interface Juz {
  license: string
  source: string
  data: {
    index: number
    start: JuzMark
    end: JuzMark
  }[]
}
  
export interface JuzMark {
  index: number
  verse: number
}
  