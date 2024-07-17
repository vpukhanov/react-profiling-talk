# React Profiling Talk, 2024

## Overview

This repository contains the code examples I used in the React Profiling Talk I gave for my colleagues at Т—Ж.

There are 3 main examples, each demonstrating different aspects of React performance optimization:

1. `app/task-manager` illustrates unnecessary re-renders and how to optimize them
2. `app/theme-switcher` demonstrates issues with context that aren't specific enough
3. `app/performance-dashboard` showcases large list rendering problems

## Run the Examples

Run the script:

```sh
git clone https://github.com/vpukhanov/react-profiling-talk
cd react-profiling-talk
npm install
npm run dev
```

Then open http://localhost:3000 in your browser

## Links

- [React DevTools Installation](https://react.dev/learn/react-developer-tools)
- [How React Rendering Works](https://react.dev/learn/render-and-commit)
