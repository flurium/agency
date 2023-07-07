---
title: "The Tech Stack We Bet On and You Should Too"
description: "Discover the cutting-edge tech stack employed by Flurium agency. From frontend frameworks like Svelte to backend solutions and infrastructure choices, explore their bets for optimized development and enhanced project performance."
author: Roman Koshchei
---

# The Tech Stack We Bet On and You Should Too

Technology stacks evolve over time, and we strive to ensure that our projects remain
competitive for as long as possible. As a business, we aim to provide the best value
for each situation, which is why we consider different stack options based on specific requirements.

When it comes to selecting the right technology, we believe in using performant tools
and explaining their importance to our clients. Alternatively, we may opt for the fastest
development tools depending on the project.

## Frontend

Although React is popular, we have explored alternative frameworks that we believe offer
superior benefits. We have found some limitations with React, such as performance issues,
complexities arising from its full-stack nature, and a somewhat messy development process.
As a result, we have chosen to bet on the next generation of frameworks, including Svelte,
Solid, Qwick, and Astro.

In particular, we have selected **Svelte** and SvelteKit as our preferred meta framework.
While Solid is fast, its meta framework, Solid Start, is not yet production-ready. Qwick,
on the other hand, is relatively new but benefits from strong developer support. However,
Svelte stands out due to its exceptional speed and clean syntax once you become proficient
with it. Moreover, Svelte has the backing of Vercel, which ensures frequent updates and
the inclusion of cutting-edge features from Next.js, such as Incremental Static Regeneration
(ISR). Additionally, Svelte's performance and well-defined structure make it easier to
transition between projects.

For purely static websites, Astro is a viable option worth considering.

## Backend

We have identified two backend solutions to accommodate different scenarios:

- ASP.NET Core
- Serverless SvelteKit

### Asp.Net Core

ASP.NET Core is an excellent choice under the following conditions:

- The project involves a moderate to large user base.
- There is a need for long-running processes, such as chat functionality.
- Execution speed is crucial.

ASP.NET Core offers exceptional performance for various tasks, including chat functionality or background processes like limit increments. Since it has been our main technology during our learning phase, we have gained significant expertise in it. Although it may have a slightly steeper learning curve due to the separation of front-end and back-end components, we have developed a template that streamlines the process by providing boilerplate configurations.

### Serverless SvelteKit

Serverless architecture, particularly with SvelteKit, is a suitable option when:

- The project caters to a small to moderate user base.
- There is a need for rapid development. This requirement may stem from client expectations or the client's indifference towards development time and a willingness to invest financially.

Serverless architecture offers scalability potential, allowing for infinite scaling as long as the budget allows. It is cost-effective, with the ability to handle small workloads at minimal or no cost, making it an attractive choice for startups. Serverless SvelteKit projects are fast to develop since everything is contained within a single SvelteKit project with integrated typing support.

## Infrastructure

Although we do not always have complete control over the choice of infrastructure, we typically recommend the following options:

### Frontend and Serverless hosting

Our preferred hosting provider is [Vercel](https://vercel.com/) due to its cutting-edge
features and exceptional service quality. Vercel offers advantages such as support for
numerous frameworks with prebuilt configurations, including powerful features like
Incremental Static Regeneration (ISR). Vercel's edge functions also provide faster response
times compared to Lambda. Furthermore, Vercel offers competitive pricing options.

However, if desired, we can consider alternatives such as Netlify or Cloudflare,
or any hosting provider that supports Docker.

### Backend

At present, Docker is considered the most reliable option, and we recommend utilizing
services that support Docker. It is advantageous if the service allows the creation of
multiple instances of the same application and manages the load balancing automatically.
One recommendation we have is [Fly](https://fly.io/), which delivers excellent performance.
While it requires some initial setup, including using the CLI and configuring GitHub CI,
these steps are relatively straightforward for those who have prior experience.

### Database

When it comes to databases, we believe PostgreSQL is among the best choices. Additionally, we use CockroachDB, which is similar to PostgreSQL and can use the same drivers.

For database hosting, numerous solutions are available:

- [PlanetScale](https://planetscale.com/) (offers functionality similar to MySQL but with notable advantages)
- [Neon](https://neon.tech/)
- [CockroachDB Cloud](https://cockroachlabs.cloud/)

However, database hosting is flexible, and we can choose almost any hosting provider.
[Fly](https://fly.io/) also appears to be a promising option for hosting databases.

While we have limited experience with NoSQL databases, we generally do not recommend MongoDB.
For key-value databases, Redis is a suitable choice, and it can be hosted on [Upstash](https://upstash.com/).

### Email sending

Sending emails is often a crucial requirement for our projects. We recommend using
[Resend](https://resend.com/) due to its excellent features and capabilities.
For email templating, we suggest utilizing [React Email](https://react.email/),
which seamlessly transforms JSX into email-compatible HTML.

When it comes to sending information internally, such as new customer or order notifications,
we recommend exploring the use of Telegram Bots. For example, on our agency website, the
contact form sends a message to a private Telegram group, providing an efficient solution.
Telegram offers several benefits, including cost-effectiveness, reliable notifications,
and widespread usage among our team members.
