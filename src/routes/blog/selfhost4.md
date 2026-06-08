---
title: 'self-hosting ep. 4: ddns load-tested'
date: '8 jun 2026'
---

As I mentioned in the last post, I've recently moved apartments. And before I even had the chance to
drop a couch and TV in, I went on an expedition to look for the most impressive rock on the Oregon Coast
and the least impressive shrub in the Oregon High Desert. While this was happening, though, a major
catastrophe happened to this website.

In all of my previous homelab configurations, my public IP would always remain the same once I plugged 
the computer into the router. However, Quantum Fiber decided that a static IP would stunt my skill 
growth, so now my IP changes whenever my internet would go out for short bursts. The solution for this
I had actually discovered a year prior while playing with the configs for the first time.

`aly.sh` is hosted on Porkbun, while `albie.cat`'s DNS is done through my Mail-in-a-box. It's a little 
bit more involved, though definitely possible, to do a Dynamic DNS through the latter. The solution 
I've considered was  having a DDNS script ssh in and scp a new DNS file removing the old A-record and
adding a new A-record every couple of minutes. Given I only have one record to update (the public IP 
of the homelab), this should suffice probably.  

Unfortunately with the advent of doomscrolling and Claude, I find I actually have little patience for
manually writing simple scripts to do things. This must change. But temporarily (probably permanently
given how lazy I'm getting at this rate) I've been using a [Docker container](https://github.com/mietzen/porkbun-ddns)
that just does all of that anyways on the Porkbun side. And now, hopefully, if I'm away (as I hope to
be in Banff for its [summer skiing](https://www.skibanff.com/explore/news-blog/summer-skiing-at-banff-sunshine/)
in a couple weeks), a minor Quantum Fiber outage doesn't kill my homelab setup until I return.

I have not yet tested a power cycle, and I'm currently oncall so I would be assuming a pretty large risk 
for my job if I did. However, another issue I noted was that on my DigitalOcean proxy machine, the 
IP of my homelab doesn't actually update until I restart nginx. I think I should either periodically update 
the homelab, or send some command into the proxy telling it to restart nginx whenever the IP address is updated 
by the DDNS provider. If I do the latter, I'll definitely fork the Docker container I just linked.
