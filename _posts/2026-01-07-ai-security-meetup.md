---
layout: post
title:  "iFood AI Security Meetup: Opening Knowledge to the Community"
date:   2026-01-08 00:50:00 -0300
categories: ai-security ai aisec llm ml mlsec 
author_profile: true
author: e-valente
youtube_keynote: 3uva_zLQQXk
youtube_mcp: N0fMTD00Aqo
youtube_puma: QtfvrQ9Jt_A
youtube_llm: v905cS-Um44
toc: true
---

## Introduction

On **December 5th**, the **iFood AI Security Team** hosted the **very first edition of the AI Security Meetup** at our Campinas office. It was a full-day event dedicated to discussing real-world challenges, attacks, and defenses in modern AI systems.

Originally designed as a **closed, invitation-only initiative**, the meetup exceeded expectations in both technical depth and community engagement. Because of that, and aligned with our belief that security knowledge grows stronger when shared, **we decided to open the recorded talks to the broader community**. This event marks an important milestone: **the first public-facing initiative fully driven by the iFood AI Security Team**, reinforcing our commitment to advancing AI Security in Brazil through collaboration between industry, academia, and the security community.    

## A Strong Community Presence

One of the highlights of the meetup was the audience itself. From the very beginning, the room reflected the kind of diverse and highly technical community we believe is essential to advance AI Security in practice.

We were proud to host undergraduate students from Universidade de São Paulo (USP) and Instituto Tecnológico de Aeronáutica (ITA), bringing fresh academic perspectives and strong technical foundations to the discussions. The event also counted on the presence of members from GANESH CTF, widely recognized as the strongest Capture The Flag (CTF) team in Brazil, contributing an attacker-minded, hands-on security viewpoint that enriched many conversations throughout the day.

Alongside them were security engineers, researchers, and practitioners from multiple companies (e.g., Nubank and guardion.ai) and institutions, creating a rare and valuable mix of academia, elite CTF players, and industry professionals. This combination fostered exactly the kind of deep, candid, and technically grounded discussions we believe are necessary to truly move AI Security forward.

## Presentations (Videos)

The agenda covered the AI security stack end-to-end, from classical machine learning vulnerabilities to LLM-specific and MCP threats and production-scale defenses.

### Keynote - Security in Machine Learning: From Traditional ML to LLMs

**[Erikson Júlio de Aguiar (ICMC/USP)](https://www.linkedin.com/in/erjulioaguiar/)**   
This talk presents an overview of the main security and privacy challenges in artificial intelligence systems. It covers both classical and modern vulnerabilities, such as adversarial attacks, model poisoning, and LLM jailbreaks, as well as defense techniques and emerging trends to make models more trustworthy. The presentation spans theoretical foundations to real-world applications in healthcare, computer vision, and language models, showing how researchers can mitigate risks and build more robust AI systems.

**Bio:** PhD candidate in Computer Science at ICMC/USP, who completed a research internship at the University of Florida focused on machine learning security and federated learning applied to healthcare. Received the Best Student Paper Award at IEEE CBMS 2024. Currently researching security in machine learning for medical applications, aiming to make models more resistant to adversarial attacks and privacy breaches. His main interests  include Security and Privacy, Deep Learning, Computer Vision, Digital Health, and Computer-Aided Diagnosis.


{% include youtube1.html id=page.youtube_keynote %}

---

### How Can MCP Servers Attack You

**[José Augusto (Lead AI Security Engineer - Nubank)](https://www.linkedin.com/in/jaaj16/)**  
This talk aims to raise awareness and demonstrate, in a practical way, how **MCP
(Model Context Protocol)** servers can become critical attack vectors in development
environments. With the explosive growth of AI throughout the development lifecycle, many companies still struggle to manage risks, establish governance, and adapt security practices to a technology that evolves far more rapidly than the capabilities available for proper monitoring and control. During the presentation, a realistic attack scenario will be demonstrated, showcasing how an MCP Server can be leveraged to compromise AI-based development environments. The session will also explore practical detection strategies such as awareness, and the use of adapted scanners that tailor detection to each company’s
environment, highlighting how security teams can stay one step ahead in a landscape where the attack surface grows daily.

**Bio:** José Augusto is a Lead AI Security Engineer at Nubank, working in both offensive and defensive security with a focus on AI ecosystems, including LLMs, agents, ML, and their interactions with traditional systems. He began studying AI during his PhD work in 2020 and has been fully dedicated to AI security since 2024. He holds a Master’s degree in Cybersecurity from the University of Brasília (UnB) and is an instructor at FIAP, Gohacking, and RNP. He holds certifications such as OSWP, OSCP, OSCE, OSWE, and OSEP, and served for two years as an Official Offensive Security Instructor in Brazil.

{% include youtube1.html id=page.youtube_mcp %}

---

### One Endpoint to Guard Them All

**[André Osti (AI Security – iFood)](https://www.linkedin.com/in/andreosti/)**
Unauthorized access, misuse, and abnormal API usage are existing problems in
any platform with a large number of users, even in the presence of additional security
controls like MFA and roles with least privilege. In this talk, we'll present our ML solution to detect these situations with minimal effort from development teams. We'll show the assumptions, architecture, models, metrics, experiments, and analysis we made to make anomaly detection for cybersecurity practical at scale with a single endpoint call.

**Bio:** With over 11 years of experience in cybersecurity and software engineering, Andre Osti has built a career focused on securing applications. Currently working as a Software Engineer at iFood, he previously held security-focused roles at companies like Sidi (Samsung), Kryptus, and CPqD. Throughout his career, he's consistently worked at the intersection of security and software development, having experience with penetration testing, secure code review, and developing machine learning components. His background includes significant work with financial security systems, mobile security, and the implementation of security features for enterprise applications.

{% include youtube1.html id=page.youtube_puma %}

---

### Injection Attacks & Security in LLMs: Open Problems

**[Ana Clara Zoppi Serpa (PhD Candidate – UNICAMP)](https://www.linkedin.com/in/anaclarazoppiserpa/)**   
In this talk, Ana delivers an overview of LLM injection attacks and discusses the
open challenges in the research community. She maps established taxonomies from recent
literature, clarifying distinctions between key categories: jailbreaks, prompt injection, fingerprinting, evolutionary algorithm-based attacks, and prompt engineering methods, highlighting notable results from the latest research. Time permitting, she will demonstrate a live attack against a target LLM. The talk concludes with open problems actively shaping the field.

**Bio:** Ana Clara Zoppi Serpa is a PhD student at UNICAMP researching prompt injection
attacks in LLMs, building on her Master's in Computer Science and award-winning
cryptography research—Best Short Paper at the Brazilian Symposium on Security in 2019.
With 3+ years as a Software Engineer at Google (AI/LLM data pipelines), Microsoft (Azure infrastructure), and Amazon (backend systems), she bridges theoretical expertise with production-scale implementation.

{% include youtube1.html id=page.youtube_llm %}

---

## What’s Next?

This was **just the beginning**.

📅 **We’re already planning a new edition of the AI Security Meetup for the first semester of 2026** — with more talks, deeper technical content, and even stronger community participation.

👉 **Stay tuned.**
More details will be shared soon.

