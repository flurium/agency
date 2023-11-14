---
title: "On-Demand  Static Regeneration is future of web"
description: "Discover the future of web development with On-Demand Static Regeneration. Learn how to re-render specific pages without redeploying the entire website, resulting in faster updates and improved efficiency."
author: Roman Koshchei
category: "Web development"
---

# On-Demand Static Regeneration is future of web

Situation: You primarily need a static website but also want to receive the latest information after updates. Therefore, you trigger a redeploy whenever data changes. However, as you grow, this approach becomes more time-consuming and expensive.

Now, imagine you have a website with 200 pages, and you only need to correct a single page where you made a typing error by accident.

What if you could re-render only that specific page without redeploying the entire website? Well, you can do that right now. Vercel supports this feature in Next.js, SvelteKit, and Nuxt (at the current moment). However, I believe they made a mistake or have an overly ambitious business plan. Initially, they added Incremental Static Regeneration (ISR) as a background process to trigger revalidation at regular intervals. This approach is quite expensive and doesn't provide instant updates.

But now, they also support On-Demand Revalidation (as far as I know, they are the only ones). This means that we can send a request to a specific page with a secret token, and it will trigger a re-render. This is exactly what many websites need.

In a content management system (CMS), you can add a hook that requests a re-render for dependent pages. BOOM! You get the speed of static content and the fastest updates of server-rendered content. It's like a dream come true.

If we spend some time on it, I'm confident we can optimize it even further, such as re-rendering only the dependent component instead of the entire page. More and more websites will adopt this as their primary rendering strategy.

At Flurium, we will explore this concept further for our clients and create a helper package to easily implement re-rendering hooks. I believe Astro.js will also support it in the near future, as well as other frameworks.
