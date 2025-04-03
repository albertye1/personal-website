---
title: 'self hosting for dummies, ep. 2: migrating the website'
date: '2 apr 2025'
---

## why self host?
- my friend was judging me for using vercel to host. thanks joe!
- you feel better than other people who don't.
- it's an educational experience and you learn a lot more about how your computer handles connections (securely)
- i'm taking like two networking classes this semester and i need something to prove to myself that im not wasting my time

## hosting svelte with docker
We would need to create a Dockerfile first to run everything.
This would need two images: one to **build** the service, and one to **run** the service.
This website's [repo](https://github.com/albertye1/pw3) should have the Dockerfile for this.

I used Docker Compose to run the system in the background. The `docker-compose.yml` just needs a `build: .` entry to build an image from the Dockerfile in the current folder (`.`), and then a specification of the ports. In my case, I believe i exposed port 3000 in the Dockerfile, so I would want to map port 3000 in the compose file to some desired port. For a basic http connection, you'd want port **80**.

This is pretty much all you'd need to get a rudimentary setup. If you've port forwarded your server and attached it to a url, you can connect to it now at `url.com`. But there is one small problem:

## security
write later