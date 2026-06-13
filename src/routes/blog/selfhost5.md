---
title: 'self-hosting ep. 5: immich public proxy'
date: '13 jun 2026'
---

I've decided that I should probably not have `/api/assets` leaked in every single image posted on this website. Fortunately it's OK for now, 
because I"m not entirely receiving outside traffic besides the occasional peek from a couple of my friends. But if. One day. I somehow miraculously
end up in some form of big leagues (or more likely doxxed for being an annoying dipshit) I would rather keep myself safe from someone who knows
what they're doing and has the malicious intent to carry it out.

As such, I decided that I should come up with an [Immich public proxy](https://github.com/alangrainger/immich-public-proxy) 
(shoutout to [ka-so](https://octofriends.garden) for alerting me to the existence of this) to only selectively expose these 
images. However, the process to do so involved me vacillating between a couple configurations and ultimately switching my 
entire reverse-proxy setup from nginx to caddy in needless frustration.

## immich-public-proxy
The premise is simple. You just need to expose specific shared links to your images, which **generally** fall under `/share`,
to a separate frontend that doesn't have any access to the API. 
However, one caveat I noticed when wiring this up was that all of my albums were still shared under `/s` despite the Github 
README example having an album correctly addressed. I'm not entirely sure whether this is a versioned change in the Immich
URLs, or if there is some mirror to an album link under `/share` that i'm not entirely aware of.

Well, I decided to use a different URL for proxy and backend as a result of this slight discrepancy. However, I had still made 
certain other preparations to having all of my image hosting on a single domain, which led me to other interesting 
decisions.

## caddy sideplot
If you were to use a single domain for both proxy and backend, you would ideally want some form of basic auth so that the backend
is still accessible to trusted users, but is inaccessible to everyone else. Thus, you would expose only the `/share` path
and put everything else behind a password. I'm not entirely sure how many lines of code this would be on nginx, as I didn't
even bother trying to figure out how to do basic auth when it was likely less inertia to just move my entire reverse proxy 
config to caddy. The resulting config with everything I originally had was like 15 lines.

I am not entirely sure, on a production-level database, if caddy performs better than nginx. However, for small-scale servers
that don't see much traffic, it's leaps and bounds better than what nginx offers. For one, it doesn't require 3rd party
certificates, meaning that any reverse proxy with caddy will automatically support HTTPS. For two, the syntax is 
significantly more intuitive and the more advanced operations are significantly better tucked away than on nginx. For 
three, it's written in Go so it's automatically 3 points cooler in my book. 

Shoutout caddy. Saved my life. Rescued 
my nonexistent pet cat out of a tree. Lent me its Porsche 911 for the weekend.
Even though I ultimately decided against a single frontend/backend url, I'm still grateful that my searches 
introduced me to it because I probably won't go back.

## what's even the point of this blog post?
Well, I have to announce that it's now slightly harder to hack my immich database, which contains not much of 
value to begin with! I also needed to spend a plurality of the time glazing caddy for being a better proxy
service than nginx.