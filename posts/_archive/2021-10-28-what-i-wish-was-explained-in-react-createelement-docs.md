---
title: What I wish was explained in React.createElement docs
description: "Reading the source to understand props and children in React.createElement"
date: 2021-10-28
layout: layouts/post.njk
---

In a [recent code review](https://github.com/francisfuzz/react-fundamentals/pull/2), my friend asked about [my note for `React.createElement`](https://github.com/francisfuzz/react-fundamentals/blob/main/src/exercise/02.md#-your-notes):

![gr2m-code-review-react-create-element](https://user-images.githubusercontent.com/15894826/139327296-066f5747-698f-419d-83a4-e67e37ae25dc.png)

I re-read my work and confessed that I just copied this straight from the [API Reference > React > `createElement()`](https://reactjs.org/docs/react-api.html#createelement) docs:

![create-element-docs-snippet](https://user-images.githubusercontent.com/15894826/138739362-6a9173de-ace9-4f7b-bf1c-b05f4439ff6b.png)

The funny thing is that the documentation is clear around what `type` can be, but not so for its `props` and `children` parameters.

I wanted to learn more about what this might _actually_ mean, so I found the [exported function](https://github.com/facebook/react/blob/4298ddbc56a711cecfa672ec8ac60c94a02c9380/packages/react/src/ReactElement.js#L361) to check how it processes `children` -- the note at the top of [the relevant block](https://github.com/facebook/react/blob/4298ddbc56a711cecfa672ec8ac60c94a02c9380/packages/react/src/ReactElement.js#L400-L416) was particularly illuminating:

```js
  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  const childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    const childArray = Array(childrenLength);
    for (let i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    if (__DEV__) {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }
```

My understanding of this:

- `children` can either be length one or length greater than one.
  - If `children` is one, then let `props.children` be that one specified argument.
  - If `children` is more than one, iterate through each of these so that `props.children` can be assigned all of the listed arguments.

From that context, I think that `[...children]` may have been some shorthand expression to say "yeah, there can actually be more than one child here, so go get them all and put them in an array."

Checking the Git blame, [the commit](https://github.com/reactjs/reactjs.org/commit/aa9544bfac6603aa7e7ab978be97011ad4d64012) that introduced these docs don't tell us much since it was just a commit right on `main`.

Admittedly, I didn't look into `props` and how that's handled, though this could be a great opportunity to document both (or, at the very least field an issue) for others to look into! 😉
