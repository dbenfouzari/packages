# @dbenfouzari/cli

Some CLI to help your development process

<!-- toc -->
* [@dbenfouzari/cli](#dbenfouzaricli)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g @dbenfouzari/cli
$ dbenfouzari COMMAND
running command...
$ dbenfouzari (-v|--version|version)
@dbenfouzari/cli/5.1.0 darwin-x64 node-v14.16.0
$ dbenfouzari --help [COMMAND]
USAGE
  $ dbenfouzari COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`dbenfouzari generate:component [NAME] [PATH]`](#dbenfouzari-generatecomponent-name-path)
* [`dbenfouzari generate:native-component [NAME] [PATH]`](#dbenfouzari-generatenative-component-name-path)
* [`dbenfouzari help [COMMAND]`](#dbenfouzari-help-command)
* [`dbenfouzari i18n:check`](#dbenfouzari-i18ncheck)
* [`dbenfouzari i18n:generate-missing`](#dbenfouzari-i18ngenerate-missing)
* [`dbenfouzari setup:fastlane`](#dbenfouzari-setupfastlane)
* [`dbenfouzari setup:i18n`](#dbenfouzari-setupi18n)
* [`dbenfouzari setup:sentry`](#dbenfouzari-setupsentry)
* [`dbenfouzari setup:splash`](#dbenfouzari-setupsplash)

## `dbenfouzari generate:component [NAME] [PATH]`

```
USAGE
  $ dbenfouzari generate:component [NAME] [PATH]

ARGUMENTS
  NAME  Component name
  PATH  Your component's path

OPTIONS
  -h, --help       show CLI help
  -n, --name=name  Component name
  -p, --path=path  Your component's path

EXAMPLES
  # By passing arguments
     $ dbenfouzari generate:component button src/components

  # By passing flags
     $ dbenfouzari generate:component --name=button --path=src/components

  # By following wizard
     $ dbenfouzari generate:component

     ? What is the component name ? button
     ? Select a target directory src/components/
     ✨  Done in 4.24s.

  It finally creates a folder like this
  📦 src
    ┣ 📂 components
    ┃ ┣ 📂 button
    ┃ ┃ ┣ 📜 index.ts
    ┃ ┃ ┣ 📜 button.stories.tsx
    ┃ ┃ ┣ 📜 button.test.tsx
    ┃ ┃ ┗ 📜 button.tsx
    ┗ ...
```

_See code: [src/commands/generate/component.ts](https://github.com/dbenfouzari/packages/blob/v5.1.0/src/commands/generate/component.ts)_

## `dbenfouzari generate:native-component [NAME] [PATH]`

```
USAGE
  $ dbenfouzari generate:native-component [NAME] [PATH]

ARGUMENTS
  NAME  Component name
  PATH  Your component's path

OPTIONS
  -h, --help       show CLI help
  -n, --name=name  Component name
  -p, --path=path  Your component's path

EXAMPLES
  # By passing arguments
     $ dbenfouzari generate:native-component button src/components

  # By passing flags
     $ dbenfouzari generate:native-component --name=button --path=src/components

  # By following wizard
     $ dbenfouzari generate:native-component

     ? What is the component name ? button
     ? Select a target directory src/components/
     ✨  Done in 4.24s.

  It finally creates a folder like this
  📦 src
    ┣ 📂 components
    ┃ ┣ 📂 button
    ┃ ┃ ┣ 📜 index.ts
    ┃ ┃ ┣ 📜 button.stories.tsx
    ┃ ┃ ┣ 📜 button.test.tsx
    ┃ ┃ ┗ 📜 button.tsx
    ┗ ...
```

_See code: [src/commands/generate/native-component.ts](https://github.com/dbenfouzari/packages/blob/v5.1.0/src/commands/generate/native-component.ts)_

## `dbenfouzari help [COMMAND]`

```
USAGE
  $ dbenfouzari help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_

## `dbenfouzari i18n:check`

```
USAGE
  $ dbenfouzari i18n:check

OPTIONS
  -d, --dictionaries=dictionaries  (required) Your dictionaries root path
  -h, --help                       Show this help
  --src=src                        [default: ./src] Your source path

EXAMPLE
  $ dbenfouzari i18n:check -d ./src/i18n/dictionaries
```

_See code: [src/commands/i18n/check.ts](https://github.com/dbenfouzari/packages/blob/v5.1.0/src/commands/i18n/check.ts)_

## `dbenfouzari i18n:generate-missing`

```
USAGE
  $ dbenfouzari i18n:generate-missing

OPTIONS
  -d, --dictionaries=dictionaries  (required) Your dictionaries root path
  -h, --help                       show CLI help
  --src=src                        [default: ./src] Your source path

EXAMPLE
  $ dbenfouzari i18n:generate-missing -d ./src/i18n/dictionaries
```

_See code: [src/commands/i18n/generate-missing.ts](https://github.com/dbenfouzari/packages/blob/v5.1.0/src/commands/i18n/generate-missing.ts)_

## `dbenfouzari setup:fastlane`

```
USAGE
  $ dbenfouzari setup:fastlane

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/setup/fastlane.ts](https://github.com/dbenfouzari/packages/blob/v5.1.0/src/commands/setup/fastlane.ts)_

## `dbenfouzari setup:i18n`

```
USAGE
  $ dbenfouzari setup:i18n

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/setup/i18n.ts](https://github.com/dbenfouzari/packages/blob/v5.1.0/src/commands/setup/i18n.ts)_

## `dbenfouzari setup:sentry`

```
USAGE
  $ dbenfouzari setup:sentry

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/setup/sentry.ts](https://github.com/dbenfouzari/packages/blob/v5.1.0/src/commands/setup/sentry.ts)_

## `dbenfouzari setup:splash`

```
USAGE
  $ dbenfouzari setup:splash

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/setup/splash.ts](https://github.com/dbenfouzari/packages/blob/v5.1.0/src/commands/setup/splash.ts)_
<!-- commandsstop -->
