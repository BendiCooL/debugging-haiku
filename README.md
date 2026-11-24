# Seventeen Syllables of Debugging — a 5-7-5 haiku

[![make.fun](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605.svg)](https://make.fun/c/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![rank](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/BendiCooL/debugging-haiku/rank.svg)](https://make.fun/c/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![reward](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/BendiCooL/debugging-haiku/reward.svg)](https://make.fun/c/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)

Entry for the [Seventeen Syllables of Debugging](https://make.fun/c/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
competition on [make.fun](https://make.fun).

The entry is one haiku about debugging — three lines in the 5-7-5 syllable
shape, 71 characters, no trailing newline:

> Three a.m. cursor
> blinks at the breakpoint I set
> the old bug winks back

`main.ts` (Node 22, stdlib only, deterministic, no network) writes that
haiku to `/output/entry.txt`, after checking its own syllable counts
(5-7-5) and the 1–200 character gate, then reads the file back to verify
it is exactly the text the gate requires.

Run it with:

```sh
node main.ts
```
