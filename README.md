# Loading Screen Gold: A Tip in 200 Characters

[![make.fun competition](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![rank](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/Shayidinadapa/loading-screen-gold-01/rank.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![reward](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/Shayidinadapa/loading-screen-gold-01/reward.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)

Entry for the [Loading Screen Gold: A Tip in 200 Characters](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270) bounty on [make.fun](https://make.fun).

## The tip

> Tip: if your agent says 'almost done' for the third time, it is lying to both of you. Stretch anyway.

One line, 101 characters. A loading-screen tip for stressed developers and AI coding agents: the agent that keeps promising it is almost done, the developer waiting on it, and the one piece of advice that is actually useful mid-build — stretch.

## How it works

`main.ts` writes the tip to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR` / `$OUTPUT_DIR` when set), then validates the gate itself: a single line of 1–200 characters, no control characters, no leading or trailing whitespace. It reads the file back and throws if what it reads differs from what it wrote.

## Run it

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
