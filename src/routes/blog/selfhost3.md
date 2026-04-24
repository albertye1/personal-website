---
title: 'self-hosting ep. 3: 301 moved semi-permanently'
date: '23 apr 2026'
---

I'm moving apartments, and I think it's worth discussing what I had to do
in order to get my website up and running again after plugging everything in.

The biggest issue I faced had to do with the Quantum Fiber-supplied Q1000K doing
a lot of extra work that my router already did. For most people, this isn't really
an issue and it probably provides a pretty safe default on an ISP level. The 
Quantum tech mentioned that the included router would mainly serve as an access 
point, with much of the authentication coming through the modem.

However, for my usecase, I'd prefer the way Google Fiber handled this. The modem
was basically wired up inside the apartment building and the only thing that 
was exposed in the unit was one of the telephone ports. There was no modem-level
configuration, and all of my settings were done through the router. 

When I initially tried wiring everything up, I was getting timeouts on all 
requests through the public IP. I'm not entirely sure why this happened, I had
port forwarded everything through both the router and the modem, but nothing was
turning up. Disabling firewall (on the modem) and trying every single other thing,
including putting my router through a DMZ did not work. 

The solution was to turn the modem into a "transparent bridge" which immediately
killed my internet connection. But restarting the modem, and then going into the 
DigitalOcean landing server and restarting nginx, helped restart both my internet
and all of my website services.

This is the first modem setup I've encountered that had configuration on the 
modem level as opposed to the router level. I assume the reason for this is 
the multi-AP setups in large households. But my apartment is not big enough
for multiple APs, and for my somewhat niche use case this ended up causing
more frustration. But I should really be grateful, because I could be on
Xfinity right now.

## tl;dr
- check all port forwarding settings, reconfigure dns to new public ip
- disable modem-level configuration (if you have Quantum Fiber you'll prolly need to do this)
- restart nginx on the proxy server.

## to do list
- add ddns because one power outage and i have to manually reconfigure my website rn
- check if the ewaste hdd can be used for a NAS, and if so reconfigure Immich to store files on it.
- make bigger post explaining current homelab architecture, preferably once i have more things.
