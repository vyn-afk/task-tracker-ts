# Task Tracker (TypeScript MVP)

A minimal task tracking application built using **Vanilla TypeScript + DOM manipulation**. This project focuses on understanding core frontend architecture concepts like **state management, separation of concerns, and UI rendering** without relying on frameworks.

---

## Features

* Add a new task
* Delete an existing task
* Toggle task completion (line-through style)

---

## Core Concepts Practiced

* **Single Source of Truth** → State drives UI
* **Separation of Concerns**

  * `taskManager.ts` → Handles data logic
  * `dom.ts` → Handles UI rendering
* **Immutable Updates** → Using `map` and `filter`
* **Event Handling & Closures**
* **Re-rendering Pattern** → Update state → Re-render UIj

---

## Project Structure

```
task-tracker/
│
├── index.html
├── style.css
├── tsconfig.json
├── package.json
│
├── src/
│   ├── main.ts          # Entry point
│   ├── types.ts         # Task type definition
│   ├── taskManager.ts   # State management logic
│   └── dom.ts           # DOM rendering logic
│
└── dist/
    └── main.js          # Compiled JavaScript
```

---

## Setup Instructions

1. Clone the repository

2. Install dependencies:

   ```bash
   npm install
   ```

3. Compile TypeScript:

   ```bash
   npx tsc
   ```

4. Run locally 

---

## Development Workflow

This project follows a **feature-based branching strategy with a develop branch**:

* `main` → Stable releases only
* `develop` → Integration branch
* `feature/*` → Individual features

### Flow:

```
feature → develop → main (release)
```

---

## Versioning

Releases are tagged using semantic-style versioning:

* `v0.0.1` → Initial MVP (add, delete, toggle)

---

## Key Learning

> UI is not the source of truth.
>
> **State is the source of truth. UI is just a projection of state.**

---

## Future Improvements

* Persist tasks using `localStorage`
* Add task filtering (completed / pending)
* Convert to React to compare architecture
* Add basic styling and UX improvements

---

## License

This project is for learning purposes.
