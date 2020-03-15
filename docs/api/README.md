# API

## Running the CLI

Richard Webb CLI is accessible from 3 aliases:

- `richard-webb-cli`
- `@rwebb2305/cli`
- `rwc`

Running with no parameters returns a welcome message.

Any of them can be run with the following commands.

## Base options

### Help

`rwc --help`

Returns help on the CLI.

### Interactive
`rwc --interactive` or `rwc -i`

Allows the CLI to run via prompts, where the options are chosen during run time.

### Keep alive
`rwc --keep-alive` or `rwc -k`

Prevents the CLI from exiting once its interactive commands have been chosen.

### Quiet

`rwc --quiet` or `rwc -q`

Disables the block letters of the app name when running the CLI tool.

### Version
`rwc --version` or `rwc -v`

Returns the CLI's version.

## Subcommands

The commands can be combined with the base options:

`rwc --interactive get --info skills`

### Get

`rwc get --info skills history`

Gets information about Richard Webb. Available options are

- skills - Richard Webb's core skills
- history - A condensed history of Richard Webb
- examples - Quick overview and links to Richard Webb's projects

## Send

`rwc send --action email follow`

Performs commands to interact with Richard Webb.

Available options are

- email - Opens a mailto link with whatever program is configured to open them on the users system.
- follow - Opens a link to Richard Webb's LinkedIn profile page.
- love - Opens a link to the rwc GitHub.

For security reasons, further options aren't viable for a CLI that's publicly shared.