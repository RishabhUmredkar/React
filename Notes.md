# 🚀 React JS Learning Notes  
**By Rishabh Umredkar**

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

---

> 💡 **Interview Tip:**  
> "Use `export default` to export a single value (variable, function, array, or object) from a JavaScript module, and import it with any name in another file."

---
