type FixedArray<T, N extends number, R extends readonly T[] = []> = number extends N
  ? T[]
  : R['length'] extends N
  ? R
  : FixedArray<T, N, readonly [T, ...R]>

declare module '@/styles/googleFonts.yaml' {
  type GoogleFontAxesTag = 'ital' | 'wdth' | 'wght'

  interface GoogleFont<L extends number> {
    family: string
    axesTags: FixedArray<GoogleFontAxesTag, L>
    axisTuples: FixedArray<number, L>[]
  }

  const googleFonts: GoogleFont<number>[]

  export default googleFonts
}
