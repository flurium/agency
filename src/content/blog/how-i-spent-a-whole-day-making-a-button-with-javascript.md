---
title: "How I Spent an Entire Day Creating a Button with JavaScript"
description: "Spent an eternity crafting a JavaScript button, cursing libraries and fate. Moral: be a master in something, unless you enjoy code-induced hair-pulling marathons!"
---

# Once upon a time...

This amusing incident occurred while I was working on the development of our project
called BidMe. At that time, we were delving into ASP.NET. After several weeks of working
on the project, I was assigned the task of creating a navigation button that would appear
when the site scrolled down a specific number of pixels, allowing users to return to the
top of the page. You've probably encountered this button on almost every fifth site on
the internet. However, to my surprise, I ended up spending more than a couple of hours
on this seemingly simple UI element. In this article, I will share the details of how and why it happened.

## And so it began, with a simple yet fateful incident...

Essentially, the task became complicated because it required the use of jQuery. Typically,
don't work with front-end development often, and if I do, I prefer using pure JavaScript.
However, there is a significant syntax difference between JavaScript and jQuery.

## What happened next?

I could've easily asked our team lead for help. I believed that there was nothing in programming that this guy wouldn't know. However, it was important for me to accomplish this task on my own. It was my fundamental duty. My personal principle. That's why I followed the guide that the team lead sent me :laughing:

Before that, I had been coding exclusively in C# for a long time, so switching to a whole new syntax took me longer than I could've imagined.
I swear, I cursed that damn library and the fate of being a **fullstack** developer.
I could've done it much faster and more efficiently with pure JS. In the end, though, I managed to create the button, and it worked perfectly. It didn't require as much code as I had expected.
However, in my opinion, there is still too much code for a regular button.
Here is the code, by the way:

```js
<div class="btn-up btn-up_hide"></div>

<script>
        const btnUp = {
            el: document.querySelector('.btn-up'),
            show() {
                this.el.classList.remove('btn-up_hide');
            },
            hide() {
                this.el.classList.add('btn-up_hide');
            },
            addEventListener() {
                window.addEventListener('scroll', () => {
                    const scrollY = window.scrollY || document.documentElement.scrollTop;
                    scrollY > 200 ? this.show() : this.hide();
                });

                document.querySelector('.btn-up').onclick = () => {
                    window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'smooth'
                    });
                }
            }
        }
        btnUp.addEventListener();
    </script>
```

## And so, the story continued...

The next challenge was to integrate the button into the project's existing design,
ensuring it blended naturally. To achieve this, I had to write CSS classes and define
the necessary properties to hide and display the button at specific positions.

![Button](/btn.jpg)

## Moral?

So, what's the moral of this dumb story, you ask? Well, as the wise men say:
"A master in everything is a master in nothing." This phrase best illustrates the field
of web development. It is crucial for programmers to find their niche and specialize in
it. Only change your direction and stack when it's a conscious and absolutely necessary
decision. I wish y'all nothing but success and good luck on your coding adventures. Stay badass!
