---
layout: post
title: "Software Engineering Handbook (Part 3) - Single Responsibility Principle"
date: 2023-10-25 16:00:00 -0300
categories: software engineering
author_profile: true
author: caio.ferreira
published: false
---

It is arguably the most crucial principle in software design because most other principles and practices have their roots here.

## Definition

Each entity (function, class, module, application, etc.) should have one responsibility, one job only, and one reason to change.

## Deep dive

The hardest part about applying the Single Responsibility is defining what is _a responsibility/a reason to change_. I usually follow a pattern like this:

- Input/Output/Persistence handling: for each input your application has (HTTP, messaging, command line), there should be an entity responsible for, and for each output/persistence your application does (HTTP, database, messaging), there should be an entity responsible for it.
- Business/Application logic: your software does some processing, validation, apply rules and transformations over the data it accesses. Each of these operations should be implemented as a single entity. Since some entities group others (a module has many functions and classes), you may assemble related logic.
- Flow and composition: if you implement the above entities, they will be functional and clean. However, they will achieve nothing because they need to be connected, composed inside another entity representing some use case that flows data from input through the business logic, optionally a persistence, to the output.

You can often use these categories to find responsibilities inside your software and split them into distinct entities. However, you may need to break responsibilities even further in each one.

To better illustrate this, let's use a Python script that generates a `.gitignore` file using the Toptal API. This script accepts the output file name and a list of technologies that should be covered by the ignore rules.

```python
import sys
import urllib.request

GITIGNORE_BASE_URL = "https://www.toptal.com/developers/gitignore/api/"
TECH_LIST_SEPARATOR = ","

##### COMPOSITION #####
def main(args):
    selected_techs = selected_techs_from_args(args)
    output_file = output_file_from_args(args)

    try:
        validate_selected_techs(selected_techs)
    except ValueError as e:
        print("Invalid argument", e)
        return
    except Exception as e:
        print("Unknown error", e)
        return

    tech_list = build_tech_list(selected_techs)
    gitignore = fetch_gitignore(tech_list)

    try:
        write_file(output_file, gitignore)
    except Exception as e:
        print("failed to write gitignore file", e)
        return

    print("Done!")
##### COMPOSITION #####

##### INPUT HANDLING #####
def output_file_from_args(args):
    return args[1]


def selected_techs_from_args(args):
    return args[2:]
##### INPUT HANDLING #####

##### BUSINESS LOGIC #####
def validate_selected_techs(selected_techs):
    if len(selected_techs) == 0:
        raise ValueError("no technology was provided")
##### BUSINESS LOGIC #####


##### OUTPUT HANDLING #####
def build_tech_list(selected_techs):
    techs = map(lambda t: t.lower(), selected_techs)
    return TECH_LIST_SEPARATOR.join(techs)


def fetch_gitignore(tech_list):
    url = GITIGNORE_BASE_URL + tech_list

    http_request = urllib.request.Request(
        url, method="GET", headers={"user-agent": "python/example"}
    )

    try:
        with urllib.request.urlopen(http_request) as http_response:
            content = http_response.read().decode(
                http_response.headers.get_content_charset("utf-8")
            )
            return content
    except urllib.error.HTTPError as e:
        raise Exception(
            f"fetch gitignore failed with status code {e.code}, {e.reason}")


def write_file(filename, content):
    with open(filename, 'w') as file:
        file.write(content)
##### OUTPUT HANDLING #####


if __name__ == "__main__":
    main(sys.argv)

```

The business logic section became the smallest because it's such simple software. However, usually, it is the biggest and most important category of our implementation.

Also, the `main` function is usually pretty small, letting all composition to a second function it calls. However, this is a case where context and judgment come in, the code is readable by itself, and we don't expect it to change soon, so we can use a simpler approach. If we needed to change, it would be straightforward to separate the current use case into its own function and add support to others.

Each one of these categories could be extracted to its module to provide better separation. However, it is not because they are from the same category that they should be on the same module.

An excellent example of this is that we could do a `toptal` module to house the functions `build_tech_list` and `fetch_gitignore` because they are related to how we interact with the Toptal API, and a module `persistence` (if we had other types of persistence on our software, like databases, this would need to be more specific in the name, however in this case it is a good option because it avoids collision) to house `write_file` and other code related to filesystem persistence. Hence, not all output handling should live in the same place.
