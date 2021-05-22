# @dbenfouzari/i18n
This package provides a simple way to translate your app.

## Installation

You can install this package with
```shell
yarn add @dbenfouzari/i18n
```

## Usage
Let's assume you have two dictionaries : `fr` and `en`.

```json5
// fr.json
{
  "greeting": "Bonjour {name}"
}
```

```json5
// en.json
{
  "greeting": "Hello {name}"
}
```

You will have to initialize an `I18n` instance this way

```ts
// Import the dictionaries
import I18n from "@dbenfouzari/i18n";

import en from './dictionaries/en.json'
import fr from './dictionaries/fr.json'

// Initialize a dictionaries' object
const dictionaries = { en, fr } as const;

// To get typings
type Dictionaries = typeof dictionaries;

// To get typings
enum Languages {
  EN = 'en',
  FR = 'fr'
}

const i18n = new I18n<Languages, Dictionaries>({ dictionaries, lang: Languages.FR });

export default i18n;
```

This way, you get a `i18n` class instance that allows you to translate your strings.

## Cache
By default, caching is enabled. So it does not compute translation again if language, key, and variables are the same.

You can disable it by doing
```ts
i18n.configure({ useCache: false })
```

## Methods
### i18n.t
```ts
i18n.t('greeting', { name: "Donovan" })
```

This is the method you will use every time.

It allows you to pass a `key` and `variables` to translate.

If you have some dictionaries :
```json5
// fr.json
{
  "greeting": "Bonjour {name}"
}
```

```json5
// en.json
{
  "greeting": "Hello {name}"
}
```

You can translate it this way
```ts
i18n.t('greeting', { name: "Donovan" })
```

So the output will be `Hello Donovan` in English, and `Bonjour Donovan` in French.

See https://unicode-org.github.io/icu/ for complete documentation or https://formatjs.io/docs/core-concepts/icu-syntax/ to get a more comprehensive documentation.

### i18n.setLocale
```ts
enum Languages {
  EN = 'en',
  FR = 'fr'
}

i18n.setLocale(Languages.FR)
```

Use this method to switch language.

Let's say you have 
```ts
enum Languages {
  EN = 'en',
  FR = 'fr'
}
```

You can switch language by doing :
```ts
enum Languages {
  EN = 'en',
  FR = 'fr'
}

i18n.setLocale(Languages.FR)
```

### i18n.configure
```ts
enum Languages {
  EN = 'en',
  FR = 'fr'
}

i18n.configure({
  dictionaries: { en: { 'key': 'value' }, fr: { 'key': 'valeur' } },
  languageKey: Languages.FR,
  useCache: true,
})
```
