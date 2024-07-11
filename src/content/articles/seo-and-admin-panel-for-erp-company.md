---
title: "Technical SEO and Admin panel for ERP company"
description: "How we pushed SEO from technical side and rewrote almost whole admin panel."
date: "10 July 2024"
---

### Overview

<a href="https://acupower.co.uk/" target="_blank">Acupower company</a> provides All-In-One Cloud ERP Solution to manage your business more efficiently.

While their main development team is focused on improving the ERP system,
Me and 2 of my devs took the landing/marketing website for development.

Our main goals for the website were:

- Optimize SEO from technical side
- Fix admin panel to make good quality for editing of content
- Cleanup and refactor code to easily maintain in future
- Fix Google Analytics related issues

### Stack

Before starting on results and implementation I want to highlight the technology stack we were working with:

- C#
- ASP.NET Core MVC
- Entity Framework Core
- MS SQL Server

### SEO

Initial reason why I started working with Acupower was SEO improvements from technical side, and it kept being one of priorities all along the way.

We used <a href="https://www.semrush.com/" target="_blank">Semrush</a> to analyze the SEO. It highlights a ton of details (more than any other seo analyzer I had worked before) and the Acupower already used it, so no need to change.

Here is a latest results we achieved: 97%. Which puts us above top 10% of websites in terms of technical implementation of SEO.

<!-- ![Semrush results](./seo.jpg) -->

Pushing SEO to high results from technical side consists of many rather small changes. Not like with other features, where you just implement certain thing and boom.

Even big checklist for all future websites we develop was created. I will share it here, but keep it a secret for the best engineers.

SEO todo list:

- https status code 301
- canonical meta tag to https
- meta title (max 60 letters)
- meta description (max 160 letters)
- meta image (1200px width and 630px height)
- meta keywords
- schema.org
- minify js and css files
- cache js and css files
- add alt to all images
- h1 should not be equal to meta title
- sitemap.xml
- robots.txt
- descriptions and titles must be unique for each page
- defer scripts
- custom favicon
- add h1 and h2 to all pages
- og and twitter meta tags
- www subdomain

### Admin Panel

Because old website was crafted in a hurry we found a lot of challenging bugs inside of admin panel.

Auto mapper is a ticking bomb of bugs. We rewrote almost all functionality of updating and creating publications because of it.
Auto mappers introduce "black magic" that isn't checked at compile time and is hidden from developers.

Interface shouldn't be created just because there is a class. Interfaces which will always have 1 implementation create unnecessary complexity and make it harder to navigate the code.
I would say it not only about interfaces, but about any abstraction. There were couple of abstractions around database querying which we completely get rid of.

From this moment the code was simple and straight forward. ORM is enough of abstraction already. There is no need of 7 layers of abstractions.

As the result content editors were very satisfied with admin panel. No more of accident errors, which erases hours of your work.

### Google Analytics

While for my personal use I will chose open-source analytics like <a href="https://umami.is/" target="_blank">Umami</a> or <a href="https://plausible.io/" target="_blank">Plausible</a>, the Acupower was already relaying on GA and it's integration with Google Ads.

Figuring out how to integrate Umami with Google Ads is already on my to-do list, but let me tell about GA.

I didn't like it much to work with. It's a heavy script and hassle to setup. You need a consent from users, because google analytics requires cookies to work properly.

### Conclusion

We delivered a good work overall. CTO and content manages seem to be very satisfied with results. We will continue to work with Acupower as new things are coming.

All this technical stuff we deal with in real world websites make me want to create a set of guides for painful problems.

So be tuned in if you want to level up as engineer. If you're a founder, content creator or company owner then [contact me](/#contact) and we will see how my team can help.
