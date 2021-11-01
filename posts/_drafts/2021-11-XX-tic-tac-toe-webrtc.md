---
title: Tic tac toe & WebRTC
description: "Play tic tac toe with a friend, no additional servers needed"
date: 2021-11-01
layout: layouts/post.njk
---

The [Epic React](https://epicreact.dev/) course has a module dedicated to [React Hooks](https://reactjs.org/docs/hooks-reference.html). The [exercise for using `React.useState()`](https://github.com/kentcdodds/react-hooks/blob/main/src/exercise/04.md) illustrates how to use the [State Hook](https://reactjs.org/docs/hooks-state.html) more than implementing tic tac toe from scratch. While walking through the code of [one of my iterations](https://github.com/francisfuzz/react-hooks/blob/deb3b913fc6f2169e332792a0330c4fd56d0ed69/src/exercise/04.js) with my friend [`@bigzoo`](https://github.com/bigzoo), I challenged him to a game. All of this happened over Zoom, but it dawned on me: how can we play together without having to be on a Zoom call? Put another way: if I sent him a link to my game, how can I have my game "just work" so that we'd both have access to the same application without having to authenticate?

I fielded the idea to him and we went back and forth about existing technologies: [websockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket), [socket.io](https://socket.io/), and [webtorrent.io](https://webtorrent.io/). I poked around [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web) and found an API that I thought could be worth exploring:

- https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection
- https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/createDataChannel
 https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample

... the journey will continue. 😉
