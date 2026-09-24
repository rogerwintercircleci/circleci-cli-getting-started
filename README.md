# circleci-cli-getting-started

Sample project for the CircleCI blog tutorial *Getting started with the CircleCI CLI*.

It's a tiny release-notes generator with one deliberate bug: it compares version numbers as strings, so `1.9.0` sorts above `1.10.0`. Two of its three tests fail on purpose, which gives the tutorial a red build to inspect with the [CircleCI CLI](https://cli.circleci.com/).

## What's here

| Path | Purpose |
| --- | --- |
| `src/version.js` | Version comparison and sorting. The bug lives here. |
| `src/build.js` | Writes `dist/RELEASE_NOTES.md` from `releases.json`, newest release first. |
| `test/version.test.js` | Three tests using Node's built-in test runner. Two fail. |
| `.circleci/config.yml` | A `test` job that stores JUnit results and a `build` job that stores the release notes as an artifact. |

There are no dependencies to install.

## Run it locally

Requires Node.js 22 or later.

```shell
npm test        # two failures, by design
npm run build   # writes dist/RELEASE_NOTES.md
```

## Follow along

Fork this repository, clone the fork, and follow the tutorial from there. Every command in it runs from inside the clone, where the CLI infers the project from the git remote.

Fixing the bug makes a good follow-up exercise: compare versions numerically, one dot-separated part at a time.
