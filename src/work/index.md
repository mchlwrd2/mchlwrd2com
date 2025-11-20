---
layout: base.njk
title: My Work
eleventyNavigation:
  key: work
  order: 3
---

<h1>work</h1>
<p>Some things I'm practicing</p>

<ul>
  
  {%- for item in collections.work %}
    <li>
      <a href="{{ item.url }}">
        {{ item.data.title }}
      </a>
      - <span>{{ post.date }}</span>
    </li>
  {%- endfor %}
</ul>