---
layout: base.njk
title: posts
eleventyNavigation:
  key: posts
  order: 2
---

<h1>posts</h1>
<p>idk probalby nothing</p>

<ul>
  {# Loop through the 'blog' collection and list each post #}
  {%- for post in collections.posts %}
    <li>
      <a href="{{ post.url }}">
        {{ post.data.title }}
      </a>
      - <span>{{ post.date }}</span>
    </li>
  {%- endfor %}
</ul>