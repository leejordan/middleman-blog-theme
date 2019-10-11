---
title: Dota2 minimap generator
slug: dota2-minimap-generator
date: 2014-05-12
tags: css3, gaming, html5, php, responsive
---

This is a small php/css/html component that parses the building status information from the [Defence of the ancients 2][1] match api and renders a html dota2 minimap showing building status at the end of a match. The html that is produced is responsive and looks great at any size.

## Example output

Here's an example that uses match id `5064461346`

<div class="embed-responsive embed-responsive-square"><iframe name="minimap_example" src="http://lendmeyourear.net/bits/dota2/minimap/minimap.php?match_id=5064461346"></iframe><em>please wait, generating example minimap...</em></div>

## Where to get it

The best way to grab the latest version of this is [on github][2]. Let me know if you build anything with it or have any questions.

## How to use it

There are two ways to use it.

1.  load minimap.php with a valid `match_id` argument e.g. `minimap.php?match_id=5064461346`. The best resource for finding a `match_id` is either the [dota2 match api][3] or [dotabuff][4]
2.  use the simple form on index.php and provide a valid match_id It should be easy enough to integrate it into a dota2 site that already handles parsing match details from the dota2 api. The elegant part is that the html is responsive and the minimap will look nice in any size viewport.

[1]: http://dota2.com
[2]: https://github.com/leejordan/dota2minimap
[3]: https://wiki.teamfortress.com/wiki/WebAPI#Dota_2
[4]: https://www.dotabuff.com/matches
