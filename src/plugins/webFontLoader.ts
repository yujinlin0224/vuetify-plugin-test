import webFontLoader from 'webfontloader'

import googleFonts from '@/styles/googleFonts.yaml'

type GoogleFont<T extends number> = (typeof googleFonts)[T]

const baseURLOfGoogleFontAPI = 'https://fonts.googleapis.com/css2'

function generateQueryStringOfGoogleFontAPI<T extends number>(googleFont: GoogleFont<T>): string {
  const { family, axesTags, axisTuples } = googleFont
  const axesTagsString = axesTags.join(',')
  const axisTuplesString = axisTuples
    .map((axisTuple) => axisTuple.map((value) => value.toString()).join(','))
    .join(';')
  return `family=${family}:${axesTagsString}@${axisTuplesString}`
}

function generateURLOfGoogleFontAPI<T extends number>(googleFont: GoogleFont<T>): string {
  const queryString = generateQueryStringOfGoogleFontAPI(googleFont)
  return `${baseURLOfGoogleFontAPI}?${queryString}&display=swap`
}

export function loadFonts() {
  const families = googleFonts.map((googleFont) => googleFont.family)
  const urls = googleFonts.map((googleFont) => generateURLOfGoogleFontAPI(googleFont))
  webFontLoader.load({ custom: { families, urls } })
}
