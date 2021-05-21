import React from "react";
import I18n from "../src";

describe("i18n", () => {
  const fr = {
    greetings: "Bonjour",
    params: "Bonjour {name}",
    multiple: "Bonjour {name}, tu as {age} ans !",
    complex: `Bonjour {name}, tu es {
      age,
      plural,
      =0 {un bébé}
      =18 {majeur}
      =15 {un adolescent}
      other {adulte}
    }`,
  } as const;

  const en = {
    greetings: "Hello",
    params: "Hello {name}",
    multiple: "Hello {name}, you are {age}!",
    complex: `Hello {name}, you are {
      age,
      plural,
      =0 {a baby}
      =18 {a major}
      =15 {a teenager}
      other {an adult}
    }`,
  } as const;

  const dicts = { en, fr } as const;

  type Dicts = typeof dicts;

  enum Langs {
    EN = "en",
    FR = "fr",
  }

  it("should translate basic message", () => {
    const i18n = new I18n<Langs, Dicts>({ dictionaries: dicts, lang: Langs.FR });
    expect(i18n.t("greetings")).toEqual("Bonjour");

    i18n.setLocale(Langs.EN);

    expect(i18n.t("greetings")).toEqual("Hello");
  });

  it("should translate message with simple params", () => {
    const i18n = new I18n<Langs, Dicts>({ dictionaries: dicts, lang: Langs.FR });
    expect(i18n.t("params", { name: "Donovan" })).toEqual("Bonjour Donovan");

    i18n.setLocale(Langs.EN);

    expect(i18n.t("params", { name: "Donovan" })).toEqual("Hello Donovan");
  });

  it("should translate message with multiple params", () => {
    const i18n = new I18n<Langs, Dicts>({ dictionaries: dicts, lang: Langs.FR });
    expect(i18n.t("multiple", { name: "Donovan", age: 29 })).toEqual(
      "Bonjour Donovan, tu as 29 ans !"
    );

    i18n.setLocale(Langs.EN);

    expect(i18n.t("multiple", { name: "Donovan", age: 29 })).toEqual("Hello Donovan, you are 29!");
  });

  it("should translate message with complex params", () => {
    const i18n = new I18n<Langs, Dicts>({ dictionaries: dicts, lang: Langs.FR });
    expect(i18n.t("complex", { name: "Donovan", age: 29 })).toEqual(
      "Bonjour Donovan, tu es adulte"
    );
    expect(i18n.t("complex", { name: "Donovan", age: 0 })).toEqual(
      "Bonjour Donovan, tu es un bébé"
    );

    i18n.setLocale(Langs.EN);

    expect(i18n.t("complex", { name: "Donovan", age: 29 })).toEqual(
      "Hello Donovan, you are an adult"
    );
    expect(i18n.t("complex", { name: "Donovan", age: 0 })).toEqual("Hello Donovan, you are a baby");
  });

  it("should translate message with JSX variables", () => {
    const i18n = new I18n<Langs, Dicts>({ dictionaries: dicts, lang: Langs.FR });
    expect(i18n.t("params", { name: <strong>Donovan</strong> })).toEqual([
      "Bonjour ",
      <strong>Donovan</strong>,
    ]);

    i18n.setLocale(Langs.EN);

    expect(i18n.t("params", { name: <strong>Donovan</strong> })).toEqual([
      "Hello ",
      <strong>Donovan</strong>,
    ]);
  });

  it("should read cache", () => {
    const i18n = new I18n<Langs, Dicts>({ dictionaries: dicts, lang: Langs.FR });
    const result = i18n.t("multiple", { name: "Donovan", age: 29 });
    const resultJSX = i18n.t("params", { name: <strong>Donovan</strong> });

    // @ts-expect-error Because `readCache` is private
    expect(i18n.readCache(Langs.FR, "multiple", { name: "Donovan", age: 29 })).toEqual(result);
    // @ts-expect-error Because `readCache` is private
    expect(i18n.readCache(Langs.FR, "params", { name: <strong>Donovan</strong> })).toEqual(
      resultJSX
    );
  });

  it("without cache, should not fill cache", () => {
    const i18n = new I18n<Langs, Dicts>({ dictionaries: dicts, lang: Langs.FR, useCache: false });
    i18n.t("multiple", { name: "Donovan", age: 29 });
    i18n.t("params", { name: <strong>Donovan</strong> });

    // @ts-expect-error Because `readCache` is private
    expect(i18n.readCache(Langs.FR, "multiple", { name: "Donovan", age: 29 })).toEqual(null);
    // @ts-expect-error Because `readCache` is private
    expect(i18n.readCache(Langs.FR, "params", { name: <strong>Donovan</strong> })).toEqual(null);
    // @ts-expect-error Because `_cache` is private
    expect(i18n._cache).toEqual({});
  });
});
