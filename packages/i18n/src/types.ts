import type { ReactChild } from "react";

export type LanguageKey = string;

export type Dictionary = Record<string, string>;
export type Dictionaries<L extends LanguageKey> = Record<L, Dictionary>;

export type Key<L extends LanguageKey, D extends Dictionaries<L> = Dictionaries<L>> = keyof D[L];

export type OriginalOutput<
  L extends LanguageKey,
  D extends Dictionaries<L>,
  K extends Key<L, D>
> = D[L][K];

/**
 * This type exists so you can autocomplete translations, but since translation may (and will surely be)
 * modified, you can do equality checks safely.
 */
export type Output<L extends LanguageKey, D extends Dictionaries<L>, K extends Key<L, D>> =
  | OriginalOutput<L, D, K>
  | string
  | ReactChild
  | (OriginalOutput<L, D, K> | string | ReactChild)[];

export type Options<L extends LanguageKey, D extends Dictionaries<L>> = {
  dictionaries?: D;
  lang?: L;
  useCache?: boolean;
};

export type MandatoryOptions<L extends LanguageKey, D extends Dictionaries<L>> = Options<L, D> & {
  dictionaries: D;
};

//#region Cache
export type CacheValue<
  L extends LanguageKey,
  D extends Dictionaries<L>,
  K extends Key<L, D> = string
> = {
  vars?: unknown;
  content: Output<L, D, K>;
};

export type KeyCache<
  L extends LanguageKey,
  D extends Dictionaries<L>,
  K extends Key<L, D> = string
> = Record<K, CacheValue<L, D, K>>;

export type LanguageCache<
  L extends LanguageKey,
  D extends Dictionaries<L>,
  K extends Key<L, D> = string
> = Record<L, KeyCache<L, D, K>>;

export type Cache<
  L extends LanguageKey,
  D extends Dictionaries<L>,
  K extends Key<L, D> = string
> = LanguageCache<L, D, K>;
//#endregion
