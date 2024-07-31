---
title: "Analytics Guide"
description: "How to not get blocked when adding analytics to your website. And which services to use."
date: "31 July 2024"
image: "https://www.flurium.com/images/analytics-guide.png"
---

You probably want to use some kind of analytics solution, no matter of the size of your project. The bottlenecks and recommendations will be discussed in this article.

### Which one to use?

There are tons of analytics services nowadays. But I always recommend picking Open-Source one that doesn't rely on cookies and respects privacy.

Here is a list:

- [Umami](https://umami.is/) - use it personally
- [Plausible](https://plausible.io/) - very popular
- [Fathom](https://usefathom.com/)
- ...

### How to not get blocked?

There are a lot of tools that block analytics scripts. It can be on the hardware level, like a router, or an extension, like uBlock. But we are using privacy-respecting analytics, so we don't want to get blocked.

Solution is to `self-host` or `proxy` analytics scripts with `different name`.

The name of the script should not contain keywords like analytics, tracking, ... <br>
The name of the script should not contain the name of the service you are using, such as umami, plausible, etc.

After these changes, blockers will not be able to recognize that the script is analytics one. Use this method responsibly and only if you're really using a privacy-respecting service.

### Example

On the [flurium.com](https://www.flurium.com/) website, I use Umami Analytics, just out of curiosity.

I downloaded a js script from Umami Cloud, renamed it to `index.js` and self-hosted my own website. Before this move, uBlock blocked this script.
