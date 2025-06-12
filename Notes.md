# 🚀 React JS Learning Notes  
**By Rishabh Umredkar**

---

## 📑 Index

### Day 1: Getting Started with React  
1. [Getting Started with React](#-day-1-getting-started-with-react)  
    1.1. [Why Use React?](#-why-use-react)  
2. [JavaScript Modules: Export & Import](#-javascript-modules-export--import)  
    2.1. [Basic Export & Import](#-basic-export--import)  
    2.2. [Scenario 1: Exporting & Importing Functions](#-scenario-1-exporting--importing-functions)  
    2.3. [Scenario 2: Exporting Multiple Values](#-scenario-2-exporting-multiple-values)  
        2.3.2. [Exporting Multiple Values as an Object](#-22-exporting-multiple-values-as-an-object)  
3. [Summary](#-summary)  
4. [Interview Tip](#-interview-tip)  

### Day 3: React Concepts & Q&A  
5. [React Concepts & Q&A](#-day-3-react-concepts--qa)  
&emsp;5.1. [Q1. Advantages and Disadvantages of React](#-q1-what-are-the-advantages-and-disadvantages-of-react)  
&emsp;5.2. [Q2. SPA vs MPA](#-q2-difference-between-single-page-application-spa-and-multiple-page-application-mpa)  
&emsp;5.3. [History of Popular Frontend Frameworks](#-history-of-popular-frontend-frameworks)  
&emsp;5.4. [Q3. What is the Diffing Algorithm?](#-q3-what-is-the-diffing-algorithm)  
&emsp;5.5. [Q4. What is Reconciliation?](#-q4-what-is-reconciliation)  
&emsp;5.6. [Q5. What is React Fiber?](#-q5-what-is-react-fiber)  
&emsp;5.7. [Real DOM Diagram](#-real-dom-diagram)  

### Day 7: React Components & State  
6. [React Components & State](#-day-7-react-components--state)  
6.1. [What is a Component?](#-what-is-a-component)  
6.2. [Types of Components](#-types-of-components)  
&emsp;• [Function-based Component](#1-function-based-component)  
&emsp;• [Class-based Component](#2-class-based-component)  
6.3. [Q&A: Function vs Class Components](#-qa-function-vs-class-components)  
6.4. [Example: Class-based Component with State](#-example-class-based-component-with-state)  
6.5. [Interview Questions](#-interview-questions)  



### Day 8: JSX Introduction  
7. [JSX Introduction](#-day-8-jsx-introduction)  
7.1. [What is JSX?](#-what-is-jsx)  
7.2. [Typical File Structure](#-typical-file-structure)  
7.3. [JSX Rules & Best Practices](#-jsx-rules--best-practices)  
7.4. [Q&A](#-q--a)  

---

## 📅 Day 1: Getting Started with React

### 🌟 Why Use React?

React is a powerful JavaScript library for building **user interfaces**, especially **Single Page Applications (SPAs)**. In SPAs, the entire app runs on a single HTML page, updating content dynamically **without reloading**—making your apps fast and seamless!

> **Famous SPAs:**  
> Instagram • Facebook • GitHub

---

## 📦 JavaScript Modules: Export & Import

JavaScript modules help you organize your code by splitting it into separate files. You can **export** variables, functions, or objects from one file and **import** them into another.

---

### ✨ Basic Export & Import

**Exporting a value:**

```js
// India.js
let phone = "IPhone";
export default phone;
```

**Importing the value:**

```js
import phone from "./India.js";
console.log(phone); // Output: IPhone
```

---

### 🛠️ Scenario 1: Exporting & Importing Functions

- With `export default`, you can export a function and import it using **any name**.

**Exporting a function:**

```js
// India.js
let phone = () => {
    console.log("IPhone");
};
export default phone;
```

**Importing with a different name:**

```js
import Lava from "./India.js";
Lava(); // Output: IPhone
```

---

### 🧩 Scenario 2: Exporting Multiple Values

You **can't** export multiple values directly with `export default`.  
Instead, group them in an **array** or **object**.

#### 2.1. Exporting Multiple Values as an Array

**Exporting:**

```js
// India.js
let phone = () => {
    console.log("IPhone");
};
let Laptop = "AsusX515";
export default [phone, Laptop];
```

**Importing:**

```js
import Resourse from "./India.js";
let [phone, Laptop] = Resourse;
console.log(Laptop); // Output: AsusX515
phone(); // Output: IPhone
```

#### 2.2. Exporting Multiple Values as an Object

**Exporting:**

```js
// India.js
let resourse1 = "Weapons";
let resourse2 = "Crude Oil";

let obj = {
    resourse1,
    resourse2,
    func: () => {
        console.log("Function");
    }
};
export default obj;
```

**Importing:**

```js
import India_Resourse from "./India.js";
let { resourse1, resourse2, func } = India_Resourse;
console.log(resourse2); // Output: Crude Oil
func(); // Output: Function
```

---

## 📝 Summary

- Use **`export default`** to export a single value (variable, function, array, or object).
- Import a default export with **any name**.
- To export multiple values, **group them** in an array or object.
- Use **destructuring** to access individual values after importing.

> 💡 **Interview Tip:**  
> "Use `export default` to export a single value (variable, function, array, or object) from a JavaScript module, and import it with any name in another file."

---
## 📅 Day 3: React Concepts & Q&A

### ❓ Q1. What are the Advantages and Disadvantages of React?

**Advantages:**
1. **Fast & Smooth Apps:** React uses a Virtual DOM, which updates only the parts of the UI that change. This makes apps highly responsive and efficient.
2. **Component Reusability:** You can build small, reusable components and combine them to create complex UIs, reducing code duplication.
2. **Code Reusability:** Encourages reuse of components, reducing redundancy.
3. **Rapid Development:** Component-based structure accelerates development.
4. **Easy Maintenance:** Modular code simplifies updates and maintenance.
5. **Lightweight Applications:** Efficient rendering keeps apps lightweight.

**Disadvantages:**
1. **SEO Limitations:** SPAs have limited SEO because only one HTML file is loaded, restricting meta tag updates.
2. **Higher Cost:** Requires skilled developers, potentially increasing project costs.

---

### ❓ Q2. Difference Between Single Page Application (SPA) and Multiple Page Application (MPA)

| Feature                | SPA (Single Page Application)                  | MPA (Multiple Page Application)             |
|------------------------|-----------------------------------------------|---------------------------------------------|
| **Page Loading**       | Loads a single HTML file; updates content dynamically | Loads a new HTML file for each page         |
| **Speed**              | Faster navigation after initial load           | Slower navigation due to full page reloads  |
| **SEO**                | Limited SEO support                           | Better SEO, as each page can have unique meta tags |
| **User Experience**    | Smooth, app-like experience                   | Traditional website feel                    |
| **Development**        | More complex routing, but easier state management | Simpler routing, but more code duplication  |

---

### 🏛️ History of Popular Frontend Frameworks

- **Angular (2009, Google):**  
    - Based on MVC architecture  
    - Supports JavaScript & TypeScript

- **React (2011, Facebook):**  
    - Component-based architecture  
    - Supports JavaScript & TypeScript  
    - Used by Instagram (2011), Facebook (2012), Officially launched (2013)

- **Vue (2014, Evan You):**  
    - Component-based architecture  
    - Supports JavaScript & TypeScript

- **Angular 2 (2016, Google):**  
    - Component-based architecture  
    - Supports only TypeScript

---

### ❓ Q3. What is the Diffing Algorithm?

The **diffing algorithm** is React's process for comparing the current Virtual DOM with the previous one to identify changes. It efficiently finds the differences between the Virtual DOM and the Real DOM, minimizing updates and improving performance.

It is the process of finding the Difference between Real DOM And Virtual DOM.


---

### ❓ Q4. What is Reconciliation?

**Reconciliation** is the process where React applies the changes found by the diffing algorithm to the Real DOM. This ensures only the necessary updates are made, making the UI fast and efficient.

Implementing the changes in Real DOM, that found during the Diffing Algorithm Virtual DOM.

---
### ❓ Q5. What is React Fiber?

**React Fiber** is the core engine of React responsible for handling its internal processes, such as the diffing algorithm, reconciliation, and rendering updates. It enables React to efficiently manage complex UI updates, prioritize tasks, and deliver smoother user experiences by breaking rendering work into smaller units.

---

### 🖼️ Real DOM Diagram

Below is a diagram illustrating the structure of the Real DOM:

```mermaid
graph TD
    A[HTML File] --> B[DOM Tree]
    B --> C1[<html>]
    C1 --> C2[<head>]
    C1 --> C3[<body>]
    C3 --> D1[<div id="root">]
    D1 --> E1[<h1>Title</h1>]
    D1 --> E2[<p>Paragraph</p>]
```

**Explanation:**  
- The Real DOM is a tree-like structure representing the HTML elements of a page.
- Each HTML tag becomes a node in the DOM tree.
- React interacts with the Real DOM by updating only the parts that change, thanks to the Virtual DOM and reconciliation process.

---


## 📅 Day 7: React Components & State

### 🧩 What is a Component?

A **Component** is a reusable block of code in React that performs a specific task and represents a part of the UI.  
- Components can be functions or classes.
- The name of a component should always start with an **uppercase** letter.
- Components return JSX, which describes what should appear on the screen.
- Multiple components can exist in a single module, but it's recommended to have one main component per file.
- **Types of Components:**
    1. **Function-based Components (FBC)**
    2. **Class-based Components (CBC)**

---

### 📦 What is a Module?

A **Module** is a single JS or JSX file in React.
- A file becomes a module when it uses `type="module"` (in vanilla JS) or by using `import`/`export` in React.
- Modules allow you to organize code and share components using `import` and `export`.
- In React, modules typically have `.js` or `.jsx` extensions.
- You can have multiple components in one module, but best practice is one main component per file.

---

### 🔄 What is State?

**State** is a built-in object that stores property values that belong to a component.
- State allows components to create and manage dynamic data.
- Any update to the UI (like user input, clicks, etc.) should be handled through state.
- In class-based components, state is managed using `this.state` and updated with `this.setState()`.
- In function-based components, state is managed using **Hooks** like `useState`.

---

### ❓ Q&A: Function-based vs Class-based Components

| Feature                        | Function-based Component (FBC)                                                                 | Class-based Component (CBC)                                      |
|---------------------------------|----------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| Syntax                         | Uses `function` or arrow function                                                            | Uses `class` and extends `Component`                             |
| Render Method                  | Returns JSX directly                                                                         | Must define a `render()` method                                  |
| State Management               | Uses Hooks (`useState`, `useReducer`, etc.)                                                  | Uses `this.state` and `this.setState()`                          |
| Lifecycle Methods              | Uses Hooks (`useEffect`) to mimic lifecycle methods                                          | Has built-in lifecycle methods (`componentDidMount`, etc.)        |
| Hooks Support                  | Yes                                                                                          | No                                                               |
| Code Maintenance               | Easier to maintain, less boilerplate                                                         | More boilerplate, harder to maintain                             |

---

#### Example: Class-based Component with State

```jsx
import { Component } from "react";

class Count extends Component {
    constructor() {
        super();
        this.state = {
            cartItem: 0
        };
    }

    render() {
        return (
            <div>
                <h1>{this.state.cartItem}</h1>
                <button onClick={() => {
                    this.setState({ cartItem: this.state.cartItem + 1 });
                }}>
                    Like
                </button>
            </div>
        );
    }
}

export default Count;
```

**Explanation:**
- `Count` is a class-based component.
- State is initialized in the constructor.
- The `Like` button updates the `cartItem` state using `setState`, causing the component to re-render.

---

### ❓ Common Interview Questions

**Q1. What is a component in React?**  
A reusable block of code that returns JSX and represents a part of the UI.

**Q2. What is the difference between a module and a component?**  
A module is a file (JS/JSX) that can contain one or more components. A component is a function or class that returns JSX.

**Q3. How do you manage state in class-based components?**  
By initializing `this.state` in the constructor and updating it with `this.setState()`.

**Q4. How do you manage state in function-based components?**  
By using React Hooks like `useState` and `useReducer`.

**Q5. What are lifecycle methods?**  
Special methods in class-based components (like `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`) that run at specific points in a component's life.

**Q6. Why are function-based components preferred in modern React?**  
They are simpler, easier to maintain, and support Hooks for state and lifecycle management.

---

> **Summary:**  
> Components are the building blocks of React apps. Use state to manage dynamic data, and prefer function-based components with Hooks for cleaner, more maintainable code.

---




## 📅 Day 8: JSX Introduction

### 📝 What is JSX?

**JSX (JavaScript XML)** is a syntax extension for JavaScript, used with React to describe what the UI should look like. It allows you to write HTML-like code inside JavaScript, making UI code more readable and expressive.

---

### 📁 Typical File Structure

```
JSXIntro/
├── Task1.jsx
├── JSXIntro.jsx
├── App.jsx
└── main.jsx
```
- **Task1.jsx**: Contains a specific task or component.
- **JSXIntro.jsx**: Main file introducing JSX concepts.
- **App.jsx**: Root component.
- **main.jsx**: Entry point for rendering the app.

---

### 📜 JSX Rules & Best Practices

1. **Single Root Element:**  
    Each component must return only one JSX element. You can nest multiple elements inside a single parent.

    ```jsx
    // Correct
    return (
      <div>
         <h1>Hello</h1>
         <p>Welcome!</p>
      </div>
    );
    ```

2. **Element Naming:**
    JSX element always writtern in lowercase (UpperCase consider as Component)  
    - HTML elements: lowercase (`div`, `span`)
    - React components: Uppercase (`MyComponent`)

3. **Valid Nesting:** 
    Do not place invalid elements inside others (e.g., `<div>` inside `<p>` is not allowed).

4. **Self-Closing Tags:**  
    All tags must be closed, even if they are self-closing.

    ```jsx
    <img src="logo.png" />
    <input type="text" />
    ```

5. **Attribute Naming:**  
    - `class` → `className`
    - `for` → `htmlFor`

6. **JSX Expressions:**  
    Use `{}` to embed JavaScript expressions.
 We can use jsx expression `{}` for writing JS code inside jsx.
              1. we can write only ternary opertor as an conditional statement.
              2. we can write only the HOF(Looping statement) that can return anything eg. map/filter/Reduce etc. 
                    we can use forEach but it is not recommended because it cannot return anything.

    - **Conditional Rendering:** Only ternary operators are allowed directly in JSX.
      ```jsx
      {isLoggedIn ? <p>Welcome!</p> : <p>Please log in.</p>}
      ```
    - **Looping:** Use array methods like `map`, `filter`, or `reduce` to render lists.
      ```jsx
      {items.map(item => <li key={item.id}>{item.name}</li>)}
      ```
      Avoid `forEach` as it does not return a value.

7. **React Fragments:**  
    Use `<React.Fragment>` or shorthand `<>...</>` to group elements without adding extra nodes to the DOM.

    ```jsx
    return (
      <>
         <h1>Title</h1>
         <p>Description</p>
      </>
    );
    ```

    - Use empty fragments only if you don't need to set a `key` attribute.

8. **Releated Rule no 1.** : We can use react fragment to avoid extra nodes in Dom Tree.
              You can keep empty fragment only when key attribute is not required.

    ```jsx
    return (
    //Day 8
    <Fragment>
         <div>
            <JSXIntro/>
         </div>
    </Fragment>
    
    )
    ```


---

### ❓ Q&A

**Q1. What is JSX and why is it used in React?**  
JSX is a syntax extension that lets you write HTML-like code in JavaScript. It makes UI code easier to read and write, and React transforms it into JavaScript calls.

**Q2. Why must a component return a single root element?**  
React needs a single root to efficiently manage and update the DOM tree.

**Q3. How do you write JavaScript code inside JSX?**  
Wrap JavaScript expressions in `{}`. For example: `{user.name}` or `{items.map(...)}`.

**Q4. What are React Fragments and why use them?**  
Fragments let you group multiple elements without adding extra nodes to the DOM, keeping the DOM tree clean.

**Q5. What are some attribute name differences in JSX?**  
Use `className` instead of `class`, and `htmlFor` instead of `for`.

---

> **Summary:**  
> JSX makes React development intuitive by blending HTML and JavaScript. Follow the rules for valid JSX, use fragments to avoid unnecessary DOM nodes, and leverage expressions for dynamic content.

---