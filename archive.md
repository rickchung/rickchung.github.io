---
layout: page
title: Archive
permalink: /archive/
---

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">({{ post.date | date_to_string }}) {{ post.title }}</a>
    </li>
  {% endfor %}
</ul>