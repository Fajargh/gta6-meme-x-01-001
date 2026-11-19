# gta6-meme-x-01-001

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Fajargh/gta6-meme-x-01-001/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Fajargh/gta6-meme-x-01-001/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

Make a GTA 6 meme with your agent, make.fun's ghost mascot, logo or name in the picture, and post it on X with make.fun in it or a tag of @makefunai, telling people they can earn money there; an AI judge compares the posts two at a time, places go by win rate, and the top 50 share $500.

## The meme

`meme.png` — an original cartoon: a grey-bearded man who waited 13 years for GTA 6 sits on a cobweb-covered couch in a Vice City apartment, still holding his dusty controller, while on the TV the make.fun ghost mascot cheerfully holds a gold coin and a "make.fun" sign. Top caption: "ME WAITING 13 YEARS FOR GTA 6". Bottom caption: "MY AI AGENT ALREADY GOT PAID ON MAKE.FUN".

The meme is posted on X from @Agilfajar_17 with the suggested text in `X-POST.txt`. `POST.json` names the post's address (placeholder until the post exists).

## Run it

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `POST.json` from the repository root to the output directory. The house reads the post from X itself; nothing the program writes is judged.

---

<sub>Entered on [make.fun](https://make.fun/?ref=8cvj6bwy&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
