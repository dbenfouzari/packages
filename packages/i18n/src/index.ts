import deepEqual from "fast-deep-equal";
import IntlMessageFormat from "intl-messageformat";
import type { ReactChild } from "react";
import type {
  Cache,
  Dictionaries,
  Key,
  LanguageKey,
  MandatoryOptions,
  Options,
  Output,
} from "./types";

class I18n<L extends LanguageKey, D extends Dictionaries<L> = Dictionaries<L>> {
  /**
   * Holds dictionaries.
   * @private
   */
  private dictionaries = {} as D;
  /**
   * This is the fallback language, if we could not determine user language.
   * @private
   */
  private fallbackLanguage: L = "en" as L;

  /**
   * Enable or disable internal caching.
   * It simply stores already known translated keys into an object store, so it does not compute it again later.
   * @default true
   * @private
   */
  private useCache = true;

  /**
   * Defines the instance language key.
   * @default [I18n.fallbackLanguage]
   * @public
   */
  public languageKey: L = this.fallbackLanguage;

  public setLocale = (locale: L) => {
    this.languageKey = locale;
    return this;
  };

  constructor(options: MandatoryOptions<L, D>) {
    this.configure(options);

    if (!options.dictionaries) throw new Error(`\`dictionaries\` option is mandatory !`);

    return this;
  }

  public configure = ({ dictionaries, lang, useCache }: Options<L, D>) => {
    this.dictionaries = dictionaries ?? this.dictionaries;
    this.languageKey = lang ?? this.fallbackLanguage;
    this.useCache = useCache ?? true;

    return this;
  };

  public t = <K extends Key<L, D>>(
    key: K,
    variables?: Record<string, ReactChild>
  ): Output<L, D, K> => {
    if (this.useCache && this.readCache(this.languageKey, key, variables))
      return this.readCache(this.languageKey, key, variables);

    const languageDictionary = this.dictionaries[this.languageKey];
    const originalString = languageDictionary && languageDictionary[key];

    if (!originalString)
      return `[missing translation] - key : ${key} - language : ${this.languageKey}`;

    const msg = new IntlMessageFormat(originalString, this.languageKey);
    const result = msg.format(variables);

    if (this.useCache) this.writeCache(this.languageKey, key, result, variables);
    return result;
  };

  //#region Cache
  private _cache = {} as Cache<L, D>;

  private writeCache = <K extends Key<L, D>>(
    lang: L,
    key: K,
    value: Output<L, D, K>,
    vars?: Record<string, ReactChild>
  ) => {
    this._cache[lang] = this._cache[lang] || {};
    // FIXME: Why must I put `as any` here ??
    (this._cache[lang] as any)[key] = { vars, content: value };
    return value;
  };

  private readCache = <K extends Key<L, D>>(lang: L, key: K, vars?: Record<string, ReactChild>) => {
    // FIXME: Why must I put `as any` here ??
    const keyContent = this._cache[lang] && (this._cache[lang] as any)[key];

    if (!keyContent) return null;
    if (deepEqual(keyContent.vars, vars)) return keyContent.content;
    return null;
  };
  //#endregion
}

export default I18n;
