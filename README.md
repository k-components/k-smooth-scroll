# Smooth Scroll [![Build Status](https://travis-ci.org/k-components/k-smooth-scroll.svg)](https://travis-ci.org/k-components/k-smooth-scroll)

## install

```
npm install k-smooth-scroll
```

## usage

```coffeescript
app.component require 'k-smooth-scroll'
```

```html
<view name="k-smooth-scroll" selector=".reply-to > a" as="smooth"></view>
```

Scrolling manually 
```coffeescript
@page.smooth.scroll "anchor-id"
```