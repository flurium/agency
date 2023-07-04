---
title: "The tech stack we bet on"
description: "The technologies and a bit on infrastructure stack we bet on as Flurium agency."
---

# The tech stack we bet on and you should too

The stacks change during the time, so we want to make sure our projects can keep competitive state as long as possible.
As a business we want to provide the best value for situation,
so we will consider some paths of stack depending on requirements.

Because if we do use a good and performant, we should explain to our clients why it's important.
Or we should just use the fastest to develop tool.

## Frontend

React is popular, but I hate it and there is better alternatives.
The problems with React: one of the slowest, drama, too much goes into fullstack, messy.
So I am gonna bet on one of the new generation frameworks, such as: Svelte, Solid, Qwick, Astro.

I picked **Svelte** and SvelteKit as meta framework.
Solid is fast, but Solid Start (their meta framework) isn't production ready.
Qwick is very yong, but has company behind (which is good for developing).
But Svelte is super, it's fast and clean to write, when you learnt it.
Svelte has company behind ther back - Vercel, as a result it gets a lot of updates and latest features from Next.js like ISR.
Svelte is performant and small, has certain structure, so it's easier to get into another project.

If we need purely static website we may consider Astro as for this website.

## Backend

There are 2 beckend solutions for different situations:

- Asp.Net Core
- Serverless SvelteKit

### Asp.Net Core

Conditions and/or:

- The amount of users is middle or large
- Requirement for long running processes (for example, chat)
- Execution speed metters

Asp.Net Core is very performant for almost any task.
Can do long tasks like chat or background tasks like incrementing limits.
We are good at it, because it was our main technology during studing.
Is a bit harder to start, because front and back is seperated, so we need to sync types and connect them.
But for the last thing I mentioned solution is to create template, where boilerplate configuration is done.

### Serverless SvelteKit

Conditions and/or:

- The amount of users is small or middle
- We need to develop fast. It can be requirement from client or the client doesn't give a sh\*t about it and has money.

The serverless is cool, because you can scale infinitely while you have money.
Small amount of serverless is cheap and even free, so it's good for startups.
Fast to develop, because everything is inside of 1 SveltKit project with types.

## Infrastructure

We can't always deside which infrastructure to use, but we will offer next ones.

### Frontend and Serverless hosting

I prefer [Vercel](https://vercel.com/) because they push limits the most, the service is great.
The coolest features like ISR is there. Edge functions are faster than Lambda.
Vercel support ton of frameworks with prebuilt configuration. Good pricing.

But if we want, we can consider using Netlify or Cloudflare or anything with Docker.

### Backend

Docker is genuanly the best at the current moment, so everything that supports docker is good.
Cool if service allow to create several instances of same app and service manage load by itself.
I recommend [Fly](https://fly.io/), it has exellent performance.
But you need to use CLI and setup GitHub CI by yourself (not hard if you did it once).

### Database

I think PostgreSQL is geniualy one of the best databases. We also use CockroachDB,
because it's very similar to PostgreSQL (can use the same drivers).

To host database there is plenty of solutions.

If we use Serverless we can do:

- [PlanetScale](https://planetscale.com/) (is actually like MySql, but it's good)
- [Neon](https://neon.tech/)
- [CockroachDB Cloud](https://cockroachlabs.cloud/)

But it's not super popular case actually, so we can host database almost anywhere.
Fly.io looks pretty good also for databases.

We didn't use NoSql databases much, but I definetely will not conside MongoDB.
Redis is good for Key-Value db and host it on [Upstash](https://upstash.com/).

### Email sending

Almost always we need to send emails.
I recommend [Resend](https://resend.com/), because it's really cool.
And for templating we should use [React Email](https://react.email/),
it transforms JSX into email compatible html.

If we want to send information to ourselves, like info about new customer or new order.
I would recommend to try use Telegram Bots.
At our agency website the contact form just send a message to private telegram group.
And eventually it is much efficient for us. We don't pay for it, we get notifications,
everyone already use Telegram.
