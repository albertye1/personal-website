---
title: email server
date: '18 apr 2025'
---

calling this "homelab" is a little bit disingenuous, because i used a VPS to do this one. 
this is because (1) most ISPs block local mail (2) my home IP probably changes unpredictably and
(3) [mailinabox](https://mailinabox.email/), the service i use, requests to be run on a standalone instance of ubuntu 22.04. 
my home server runs debian and other services, so i decided to just provision a server on hetzner.

## configs
the setup of miab itself on a server is very straightforward, but there are some quirks to get sending working on a VPS.

there are a couple ways to do this: expose port 25 or use an smtp relay. there are many smtp relays out there, such as sendgrid or postmark, but most of those services are a *lot* more expensive and at a *much* larger scale than i'd need: sendgrid's cheapest plan charges $19.99/mo to send out "50,000-100,000 emails/mo". i don't send even 100 emails per month. the sendgrid plan also doesn't have dedicated IPs, meaning that you can be punished by the bad behavior of someone else who probably abused the sendgrid free trial to send out phishing emails.

unfortunately, the other option is even worse. hetzner blocks port 25 and 465 by default for the first 30 days, so i would need to use port 587 (i.e. a relay) to get things out at all. moreover, i checked my IP and it was also on [barracuda's blacklist](https://dnsbl.info), meaning i probably cannot get my mail sent in many cases straight from port 25.

after browsing miab's forums for some time, i found a smaller-scale cheaper relay which doesn't come up badly on dnsbl called [anymxrelay](https://anydomain.net/anymxrelay/). it's $19/year to run, which is under a tenth of the cheapest sendgrid plan, and they claim their IPs are clean. from my testing it's worked on gmail and proton. it unfortunately gets sent to spam on outlook though.

another note for anymxrelay: the instructions they send you will open a connection from port 465. however, hetzner blocks port 465 as stated above. to get it working from port 587 you need to **change the port** in `/etc/postfix/sasl_passwd` to 587, **change the relayhost port** in `/etc/postfix/main.cf` to 587, and **delete the line** `smtp_tls_wrappermode=yes`. this is because 587 uses starttls while 465 uses implicit tls. 

obviously after changing the postfix config you'll need to save the password and restart postfix.

## what does this do for me?
- one less google service i need to rely on in my personal life
- i can just make another email address to serve as a promo / spam sink
- more experience of course
- vanity email address looks cool :3