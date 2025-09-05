export type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & string]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & string];

export type ExtractParams<T extends string> =
  T extends `${string}{{${infer Param}}}${infer Rest}`
    ? Param | ExtractParams<Rest>
    : never;

export type TranslationParams<T, Prefix extends string = ""> = {
  [K in keyof T & string]: T[K] extends string
    ? {
        key: `${Prefix}${K}`;
        params: ExtractParams<T[K]> extends never
          ? Record<string, unknown>
          : Record<ExtractParams<T[K]>, string>;
      }
    : T[K] extends object
    ? TranslationParams<T[K], `${Prefix}${K}.`>
    : never;
}[keyof T & string];
