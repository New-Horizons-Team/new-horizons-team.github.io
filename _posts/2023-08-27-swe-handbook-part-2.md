---
layout: post
title: "Software Engineering Handbook (Part 2) - Clean Coding"
date: 2023-08-27 16:00:00 -0300
categories: software engineering
author_profile: true
author: caio.ferreira
---

Clean coding is a set of guidelines initially proposed by Robert C. Martin in his seminal book **Clean Code: A Handbook of Agile Software Craftsmanship** in 2008.

The term became a synonym of the most fundamental practices to write good, maintainable, and, mostly important, readable code. After all, software is more read than written.

However, as time passed, our understanding of software development changed, and some of the original guidelines became less relevant while others became even more important.

Hence, this presents a more modern and focused version of these guidelines. Please note that _none of those should be taken as a hard rule to be followed without questioning_. They are good practices that will give you an excellent starting ground. Always apply context and judgment.

## Code planning

Before we get into the Guidelines, I would like to talk about thinking ahead about how you will solve a problem. These Clean Code Guidelines apply once you have workout what you are going to do and, most of the time, have already written an initial version of the solution. Then, you refactor the code to be cleaner by applying the Guidelines.

A common problem I see Security people going through when writing code is just using the solution they think will work first and searching only for ways to make it work, like "how I do X with a dictionary in Python". This comes from a perspective that many of us were taught in initial coding classes: think about an algorithm, then how to write it in the programming language, and finally run it.

But, unless you are dealing with an elementary problem and already have good coding experience, I encourage you to search about how other people have solved the same problem you're facing.

The easiest way to do so is to think about some open source project that may do a similar thing and look up their code to understand how they do it, even if it's on other programming, and try to read it. GitHub allows you to change to a web VS Code instance by pressing "." on the keyboard, or you could use [Sourcegraph](https://about.sourcegraph.com/) to navigate the codebase.

Another more traditional form is trying to generalize what you are doing and searching for it. If you are reading assets from S3 to detect malicious behavior, search for projects that do batch cloud file processing and see how they design their code.

## Guidelines

> Some of these guidelines are related to concepts that will be explained more in-depth in other sections of the Handbook.

#### General rules

1. Follow standard conventions. If your language/framework/environment uses snake case, try to follow.
2. Keep it simple, stupid. Simpler is usually better.
3. Boy Scout rule. Leave the campground (the code base) cleaner than you found it.
4. Always find the root cause. Always look for the origin of a problem.

#### Design rules

1. Keep configurable data at high levels. Read the configuration at one point at the start of the application, then pass it as variables into functions/classes/modules.
2. Avoid lengthy if/else or switch/case. Use polymorphism to create dynamic handling.
3. Use dependency injection.

#### Understandability tips

1. Be consistent. If you do something a certain way, do all similar things in the same way.
2. Use explanatory variables.
3. Encapsulate boundary conditions. They are validations at the start and end of a function/class and can be hard to keep track of. Put the processing for them in one place.
4. Prefer dedicated value types to primitive types. Instead of a dictionary, define a class that explicitly defines the fields used by the application.
5. Avoid logical dependency. Don't write functions that work correctly depending on something else in the same class. If the function can only work if its input is initialized, it should check for it before continuing.
6. Avoid negative conditionals.

#### Names rules

1. Choose descriptive and unambiguous names.
2. Use pronounceable names.
3. Use searchable names.
4. Replace magic numbers with named constants.

#### Functions rules

1. Prefer small functions.
2. Try to do only one thing.
3. Use descriptive names.
4. Prefer fewer arguments.
5. Try to avoid side effects.
6. Avoid using flag (boolean) arguments. Split the function into several independent functions that can be called from the client without the flag.

#### Code smells

1. Rigidity. The software is difficult to change. A small change causes a cascade of subsequent changes.
2. Fragility. The software breaks in many places due to a single change.
3. Immobility. You cannot reuse parts of the code in other projects because of the involved risks and high effort.
4. Needless Complexity.
5. Needless Repetition.
6. Opacity. The code is hard to understand.
