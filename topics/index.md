---
layout: page
title: Security topics
kicker: Explore
description: Browse iFood Security articles by area of practice and research.
permalink: /topics/
---

<div class="topics-grid">
{% for topic in site.data.topics %}
  <a class="topic-card" href="{{ '/topics/' | append: topic.slug | append: '/' | relative_url }}">
    <span class="topic-card__mark" aria-hidden="true">{{ topic.mark }}</span>
    <strong>{{ topic.title }}</strong>
    <span>Explore articles &rarr;</span>
  </a>
{% endfor %}
</div>
