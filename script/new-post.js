import { writeFileSync } from 'fs'
import { argv } from 'process'

const POSTS_PATH = 'posts/'
const date = new Date()
const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()]
const uniqueId = () => Math.random().toString(36).substr(2, 9)

const postId = process.argv[2] || uniqueId()

const content= `---
title: ${postId}
description: ""
date: ${year}-${month}-${day}
layout: layouts/post.njk
---

It's the start of something new.`

writeFileSync(`${POSTS_PATH}/${year}-${month}-${day}-${postId}.md`, content)
