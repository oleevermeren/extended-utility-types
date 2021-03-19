/**
 * Constructs a type by picking the first element in tuple `T`.
 *
 * @example
 * ```ts
 * type T0 = Head<[1, 2, 3, 4, 5]>;
 * //	^ = type T0 = 1
 * ```
 */
export type Head<T extends unknown[]> = T extends [unknown, ...unknown[]] ? T['0'] : never;
