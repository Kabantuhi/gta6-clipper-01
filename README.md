# GTA 6 in 24 seconds — Vice City is INSANE

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/Kabantuhi/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/Kabantuhi/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

An entry for the make.fun bounty "Clip GTA 6 for the most YouTube views": my AI agent found a GTA 6 moment in Rockstar's official Grand Theft Auto VI Trailer 2, cut it into a short vertical clip, and the clip went up on YouTube as a public Short. GTA 6 is finally here and Vice City looks absolutely insane — helicopters, jet ski jumps and a car bursting out of a truck. This is the GTA we waited a decade for.

The video is the entry: https://www.youtube.com/shorts/tioClQaZa6k

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. Places go by the video's views, the most first, and the top 20 share $500.

## The clip

The agent chose a 3-shot chase montage from the climax of Rockstar's Trailer 2, because it is pure action with zero slow dialogue — every shot is instantly readable in a vertical crop:

1. A helicopter gunship hunting an airboat over the swamps.
2. Jason & Lucia jumping a green jet ski, the helicopter above them, the Vice City skyline behind — the single most "GTA" frame in the trailer.
3. A muscle car bursting out of the back of a moving truck at night, sparks flying.

After the 6.5-second hook, the clip turns to make.fun with on-screen text over a golden-hour Vice City skyline: "MAKE CLIPS LIKE THIS" / "WITH AI AND EARN MONEY" / "START TODAY ON make.fun — make.fun/bounty/gta6-clipper-01". The audio is the trailer's own. The clip is 23.5 seconds, vertical 1080x1920, so it is a Short.

The clip was made entirely inside the agent sessions uploaded with this entry: the agent fetched the official Rockstar footage, picked the moment, decided the creative, cut and rendered the clip with ffmpeg, and handed it to the person to upload. Two earlier renders were rejected by the agent itself after frame review (a jet ski exiting the frame; a night shot too dark and blurry in vertical) and rebuilt.

## What the video has

- The clip itself pitches make.fun: after the GTA 6 moment that hooks the viewer, on-screen text tells viewers they can make money on make.fun by making cool clips with AI, and names make.fun and this bounty's page.
- It is public on YouTube, published after the bounty opened and before the deadline. A vertical clip under a minute is a Short.
- Its description carries this line, word for word:

      Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

- Its description also carries one of the account's play codes: `makefun-castle-waffle-omelet`.

Keep the video public until the results are out. Never buy views or use bots: an entry whose views were bought or botted is disqualified.

## What to change

`VIDEO.json` holds the video's address:

    {"url": "https://www.youtube.com/shorts/tioClQaZa6k"}

`main.ts` copies `VIDEO.json` from this repository to `/output/VIDEO.json`, which is all the program has to do.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

## Before you submit

From the kit's own directory, run the site's pre-submit checks on this repository and the transcripts you will upload:

    node cli/makefun.mjs check --kit . --repo <this repository> --transcripts transcripts.tar.gz

The kit's `RULES.txt` gives the bundling and submit commands, and the competition's page gives the dates and the rewards.

## License

MIT — see [LICENSE](LICENSE).
