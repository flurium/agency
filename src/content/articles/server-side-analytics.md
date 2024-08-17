---
title: "Server Side Analytics"
description: "All the analytical information you can collect without relying on client-side javascript."
date: "17 August 2024"
image: "https://www.flurium.com/images/server-side-analytics.png"
---

While developing websites and fighting with the Cookies Concent banner for Google Analytics, I thought about whether it's possible to move capturing analytics to a server instead of client-side javascript.

### Benefits

The benefit is that you offload the client from javascript making the website load faster and deliver a better experience. As well, you will be able to gather information even if javascript is not loaded.

### What kind of information

So here is a list of information you can capture on the server without relying on client-side javascript:

- page views
- operating system (android, ...)
- browser (chrome, ...)
- preferred language
- location (through ip address)
- referrer (site the user came from)
- form submissions (obviously)
- external links clicks (send them through a redirect on your server)

It's quite a lot, isn't it? It's literally more than half of the things you would like to collect.
So why bother the user with javascript if you already have access to this information on the server?

### Implementation

I didn't implement this yet, but here are 2 ideas you can take:

- send analytics in middleware after sending response
- send analytics in the background queue

Saving the analytics record shouldn't be too costly, but you definitely don't want users to wait.
If you have a multithreading support in your language, then you can go with the background queue right inside your app.

But overall, saving analytics records in middleware is quite a simple and usable approach.

Hopefully, in the future, I will implement this and share more details with you.

### Limitations

There is certain information that can't be obtained without client-side javascript. Here are examples:

- events that don't trigger the server
- visit duration
- screen size

### Conclusion

You can move a significant amount of analytics to the server. This will help to reduce the amount of javascript you are sending to the client. As well as provide analytical data for situations when javascript isn't available.
