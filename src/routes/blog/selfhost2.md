---
title: 'self hosting for dummies, ep. 2: migrating the website'
date: '2 apr 2025'
---

## why self host?
- my friend was judging me for using vercel to host. thanks joe!
- you feel better than other people who don't.
- it's an educational experience and you learn a lot more about how your computer handles connections (securely)
- i'm taking two networking classes this semester and i need something to prove to myself that im not wasting my time

## hosting svelte with docker
We would need to create a Dockerfile first to run everything.
This would need two images: one to **build** the service, and one to **run** the service.
This website's [repo](https://github.com/albertye1/pw3) should have the Dockerfile for this.

I used Docker Compose to run the system in the background. The `docker-compose.yml` just needs a `build: .` entry to build an image from the Dockerfile in the current folder (`.`), and then a specification of the ports. In my case, I believe i exposed port 3000 in the Dockerfile, so I would want to map port 3000 in the compose file to some desired port. For a basic http connection, you'd want port **80**.

This is pretty much all you'd need to get a rudimentary setup. If you've port forwarded your server and attached it to a url, you can connect to it now at `url.com`. But there is one small problem:

## security
I'm really new to this so I went through a host of suboptimal strategies before landing on something workable. My first implemented an Nginx reverse proxy into the same `docker-compose.yml` file. However, this leads to the website being exposed to my main computer. Also, it's pretty difficult to also run certbot on a separate docker container while also running nginx on its own docker container. To make matters worse, there are two wolves inside of docker/node/nginx/certbot reference code. One is outdated, and the other is AI generated. Both are wrong. The real (and easy!) solution for security is to spend money.

This is why I copied my Nginx config and certs into a Digitalocean droplet. This makes my website implementation a lot easier as I don't need to deal with the three docker containers networking with each other. Docker will just expose a port, and then I can have one system doing both certbot and nginx. It also is significantly more secure because digitalocean has their own DDoS protection and I'm not exposing my IP (or some version of it) to the wider Internet.

## further improvements to the website?

As far as the SSL cert itself, currently I'm running on the 90-day Porkbun SSL cert so I'll need to set that up. Moreover, to prevent having to SSH into my computer and manually pull/docker-compose my website I'll also set up Github actions. My experiences with these will probably be in the next technical blog post.
