// FIXME: https://github.com/Microsoft/TypeScript/issues/202
export type Branded<T> = T & { readonly $brand: unique symbol }
