---
title: self hosting for dummies, ep. 1: ssh & minecraft
date: '28 mar 2025'
---

## setting up ssh
first, generate keys: `ssh-keygen -t ed25519 -a 100`.

then, assume that the key was copied to `~/.ssh/id_ed25519`. 
use `ssh-copy-id -i ~/.ssh/id_ed25519 user@host`.

we can probably now SSH into this computer. however, we would initially have to find the local IP address (i.e. 192.168.0.118). we actually want to put this out to the wider internet

### ufw
you should probably have security. when i first started setting up things, i had to let ufw down for testing a couple times. if you have opps, especially tech savvy opps, you should probably not do this. thankfully by the """concept""" of security by obscurity my server will be ok.. right?

## port forwarding
now, go into your admin console. you should specify what service you are running, and which ports you should forward. ideally you would only want to open up a port once you have a service going on that port.

## docker
my docker journey. i try (and fail!) to create a minecraft server. if somehow it's ever up it'll be on `florinia.aly.sh`.
### installation
just followed the stuff on this slide down [here](https://docs.docker.com/engine/install/debian/)

### issue 1: server internet goes kbye
turns out debian uses connman instead of networkmanager as its wpa_supplicant wrapper, at least for the LXDE install that i used. and connman would be gaslit by docker into connecting to the docker bridge, even while wlan is still up!

the solution is to update the connman blacklist to include anything with the prefixes of `veth` or `docker`. that way it won't be gaslit any longer... 

### issue 2: docker containers can't connect
for the entire morning i was trying to debug this stupid ass error where `docker run` on my minecraft server would work, but `docker compose up` would not be able to resolve `mojang.com` to pull the latest version!

i guess the default docker DNS's were down or something, so for any docker container which requires internet access i have to add `8.8.8.8` and `9.9.9.9` in a `dns` field under the service.

### there will be more docker-related issues. come back when i add more services :3

## minecraft server
after fixing the above two issues, i'm finally able to make a minecraft server! this is so goated. there will be no more issues from here right?

## author's notes
future plans (which i likely won't actually implement) include hosting this website on an nginx container.
i'm currently looking into how to do this, and i think i will update this blog if/when i find a way to get this 
working. i am pretty sure it would've been easier with a normal webpage but svelte does give some added
complexity to the whole thing.