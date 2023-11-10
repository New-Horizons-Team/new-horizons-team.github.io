---
layout: post
title: "Software Engineering Handbook (Part 1) - Introduction"
date: 2023-08-27 16:00:00 -0300
categories: software engineering
author_profile: true
author: caio.ferreira
---

### Introduction

This handbook provides the first steps to various concepts widely used in software development that can help build solutions for teams in all technology segments, especially in Security.

Coming into CyberSecurity, I understood that many solutions built outside vendors were workarounds or specific automation tasks that wouldn't change once done. In these situations, you may think putting these concepts into practice is not worthwhile. If you're reading this article, it's not your case, but you may find this posture around, and I wanted to address it.

First, one of the guidelines presented is "Keep it Simple", so I understand the fear of overengineering simple tasks. However, most of what we will talk about is how to make software easier to work with and more reliable, not about how to make for loops in a fancy way or that you should use the latest framework on the market. Since these are our goals, simplicity will always matter. Good code is the one that best deals with the complexity of the task at hand. It doesn't mean the solution will be easy because many problems aren't, but we avoid bringing even more complexity and seek to improve maintenance and debugging.

Second, looking at the landscape in Security shows us that we are not living anymore in a world of just workaround scrips and simple automations. We are no longer securing just an executable in bare metal but also APIs, cloud configurations and networks, containers, CI/CD pipelines, mobile apps, data lakes & data pipelines, no-code/low-code platforms, open source dependencies, and more. The surface area to secure has exploded, and we can expect more diversity in our ecosystem. This explosion produces a two-fold problem: new vendors with solutions for these technologies have high-noise products that are still maturing, and the volume of logs and information has skyrocketed, making traditional SIEM costs even more aggressive.

[Mark Curphey puts it well](https://blog.crashoverride.com/a-security-tools-crash-is-coming): security teams want fewer tools because vendors can't deliver the same way as before. Solutions in the modern stack demand much more context about your organization's practices to deliver high value and be cost-efficient. This produced the situation where we are building more internally, taking advantage of more generalist platforms like Kubernetes, and leveraging open source. Hence, as software projects grow bigger in Security, we also need to scale our knowledge on how to build them.

After this long introduction, where I hope not to have lost you, below you will find an index of the chapters, which will be updated as each one is published. They are as concise and objective as possible to work as an explanation and a reference.

### Chapters
1. [Clean Coding]({% post_url 2023-08-27-swe-handbook-part-2 %})

### Glossary

- Class: it is a cake recipe, it defines how data (fields/fields/attributes) and behaviors (methods) relates inside the same concept. For example, a `Stack` class defines a sorted list of data and implements methods like `Pop`, `Push`, and `Len`, which exposes the expected behavior of `Stack`.
- Object: it is a specific instance of a class, e.g., two chocolate cakes are different even if made from the same recipe. Two objects of class `Stack` have the same methods but can contain completely different data since they are separate memory locations.
- Module: classes and functions (function in the sense of existing outside a class, many languages allow this) are usually grouped into a logical unit. How we define this logical unit is entirely up to the devs, and the debate over these criteria is extensive. The way a module is made changes in each language, however, they are usually represented as a folder/directory. For example, we can organize our `Stack` class into a `Structures` module that includes a `Heap` class, a `Tree` class, and functions like `CastStackToHeap`.
- Interface: it is a contract, a language tool that allows us to say, "I need someone who has a `Len` method, I don't care who". For example, we can create an interface `interface Measurable { public int Len(); }`, and in the `Stack` and `Heap` classes define that both implement the `Measurable` interface, which means that both fulfill the contract of having a `Len` method. This is extremely useful as it allows us to implement other logic that is more generic and reusable. For example, we can create the function `SmallerStructure(Measurable x, Measurable y) { return x.Len() < y.Len() ? x : y; }`, this function does not depend directly on the `Stack` or `Heap` implementations. It works for both and for any new class that fulfills our interface contract.

## References

- [https://blog.crashoverride.com/a-security-tools-crash-is-coming](https://blog.crashoverride.com/a-security-tools-crash-is-coming)
- [https://github.com/mjavascript/mastering-modular-javascript/blob/master/chapters/ch02.asciidoc](https://github.com/mjavascript/mastering-modular-javascript/blob/master/chapters/ch02.asciidoc)
- [https://kentcdodds.com/blog/write-tests](https://kentcdodds.com/blog/write-tests)
- [https://kentcdodds.com/blog/the-merits-of-mocking](https://kentcdodds.com/blog/the-merits-of-mocking)
- [https://martinfowler.com/bliki/TestPyramid.html](https://martinfowler.com/bliki/TestPyramid.html)
- [https://martinfowler.com/bliki/UnitTest.html](https://martinfowler.com/bliki/UnitTest.html)
- [https://martinfowler.com/bliki/IntegrationTest.html](https://martinfowler.com/bliki/IntegrationTest.html)
- [https://12factor.net/](https://12factor.net/)
