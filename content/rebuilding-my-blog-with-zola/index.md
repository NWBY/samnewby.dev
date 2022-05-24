+++
title = "Rebuilding my blog with Zola"
description = "Why I decided to rebuild my blog with Zola"
date = "2022-04-07"
[taxonomies]
tags = ["zola", "rust", "tailwind"]
+++

Rust baby! 🦀 

Rust is one of the hottest topics in software engineering right now. Everyone is either adopting it for their next project or wants to but is stuck writing PHP instead, no hate on the PHP community, I used to be one of you! So, I wanted to rebuild my blog for the forty-eigth time in my short career because honestly why the hell not? I'm going to be active for a couple of months, write a few articles no one is going to read, tweet about them, then abondon it and drop off the face of the earth like I got a knock on the door in the middle of the night. And this time I decided to build it with a SSG written in Rust called Zola. Honestly, Zola is great, the templating engine is just magical with some amazing features like macros which allow you to organise reusable code snippets with ease, it's BLAZINGLY fast as it's built in Rust.

So this blog post won't be too in-depth as it can become a bit boring reading about a codebase that belongs to me and will probably provide little to no benefit for most readers.

Since Zola is a SSG there is no server so I've not had to build an API in Rust. The frontend standard HTML and CSS, no JS as I didn't really need to make the site very interactive. I may add in some changes that add in some interactivity or animations in the future but for the moment the JS is minimal. To summarise the frontend is built using:
- [Tera](https://tera.netlify.app/) which is the templating engine that is used by Zola. I may write about Tera more in the future.
- [TailwindCSS](https://tailwindcss.com/) as I really do like using Tailwind for my styling, I know it can be a polarising topic, but I find that it makes working with CSS so simple.
- [Parcel](https://parceljs.org/) which does all the black-box bundling stuff
- [PostCSS](https://postcss.org/) as Tailwind needs it

This post has been pretty short and doesn't really dive into too much detail but it's had a few bad jokes, and briefly explained my new blog. I'll be back with some more Rust stuff, maybe some Python stuff and definitely some Crypto stuff.
