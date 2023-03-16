---
title: Build Another Website in React/Next.js
tag: blog
createdDate: "Wed Mar 15 2023 16:05:55 MST"
modifiedDate: "Wed Mar 15 2023 16:05:55 MST"
---

## Build Another Blog Website in React/Next.js?

![GitHub Blog Architecture](/img/arch_blog_nextjs.png)

No doubt there have been numerous websites saying that you have to make a personal website. They always suggest that it will be useful when you are looking for a new job. Or it can be a good place to show off your work. Well, maybe. For me, I have never found my website anything useful, except for showing others that "hey I have a website" (which usually marks the end of your conversation).

Anyway, I'd like to use several posts to talk about how to make a static blog website by React/Next.js. I will show a little theoy about how it works, especially showing an architecture that encompasses all components. You will also see how to build and deploy the website by GitHub Actions (a kind of CICD). The website will finally be hosted on the GitHub Pages just like this one.

Of course, this is already an outdated topic for most people. Building a website may be considered an ancient technology now. You can already find numerous examples, tutorials, hacks, etc. on the Internet about how to build a blog by Next.js or something ([LMGTFY](https://www.google.com/search?q=how+to+build+a+website+with+react+and+nextjs)). For example, [the Next.js Templetes](https://vercel.com/templates/next.js) is a nice place to start. I guess what I can do a little more is giving you some doodles about the architecture of web applications, and trivial info about how to build a CICD process around the whole stuff (like the picture above).

I hope I will cover these topics:

* "Single-page" web interfaces/apps in Next.js
* A useless Next.js app from scratch
* Another useless Next.js app that looks like a blog
* Server-side generation, static content, and file-based content management
* REST API design and our mock data API
* CICD concepts and a simple implementation
* Publish a website to the GitHub Pages

Ane see you next time.
