# 📊 ExpenseTracker

Effortlessly track your expenses with the versatile ExpenseTracker application! This project showcases three popular state management approaches in React, each with its nuances and strengths.

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/bhardwajrizul/Expense-Tracker/blob/master/LICENSE)
![GitHub stars](https://img.shields.io/github/stars/bhardwajrizul/Expense-Tracker?style=social)

## 🖼️ Application Preview

[![ExpenseTracker Preview](https://i.postimg.cc/W1q5dq7r/github-img.png)](https://postimg.cc/LJRt7Xw6)

## 🌟 Approaches Explored

1. `useState` - Located in the [Expense-Tracker-useState](https://github.com/bhardwajrizul/Expense-Tracker/tree/master/Expense-Tracker-useState) directory
2. `useReducer + Context` (Redux-lite) - Located in the [Expense-Tracker-useReducer](https://github.com/bhardwajrizul/Expense-Tracker/tree/master/Expense-Tracker-useReducer) directory
3. `Redux` - Located in the [Expense-Tracker-redux](https://github.com/bhardwajrizul/Expense-Tracker/tree/master/Expense-Tracker-redux) directory

## 📋 Differences

| Feature/Property             | useState                                    | useReducer + Context                  | Redux                       |
|------------------------------|---------------------------------------------|---------------------------------------|-----------------------------|
| **State Management Scope**   | Component-specific                          | App-wide (Global)                     | App-wide (Global)           |
| **Middleware Support**      | No                                          | No                                   | Yes                         |
| **Devtools**                | No                                          | Limited                               | Comprehensive               |
| **Complexity**              | Low                                         | Medium                                | High                        |
| **Performance Scalability** | Optimal for small-scale apps                | Better scalability than useState      | Optimized for large apps    |
| **Setup Ease**              | Simple, built-in hooks                      | Requires context setup                | Requires redux & middleware |
| **Immutable State**         | Manual immutability practices required      | Manual immutability practices required| Handled via immer in toolkit|

## 🔍 Deep Dive

### `useState`
- **Definition:** React's built-in hook to manage local state within a component.
- **Example Usage:**
    ```javascript
    const [count, setCount] = useState(0);
    ```

### `useReducer + Context` (Redux-lite)
- **Definition:** A combination of `useReducer` to manage state logic and `Context` for global state distribution.
- **Example Usage:**
    ```javascript
    const [state, dispatch] = useReducer(reducer, initialState);
    <YourContext.Provider value={{ state, dispatch }}>
        {children}
    </YourContext.Provider>
    ```

### `Redux`
- **Definition:** A predictable state container designed to help write JavaScript apps that behave consistently across client, server, and native environments.
- **Example Usage:**
    ```javascript
    const store = createStore(reducer, applyMiddleware(...middleware));
    <Provider store={store}>
        {children}
    </Provider>
    ```

## 🚀 Getting Started

1. Clone the repo:
   ```sh
   git clone https://github.com/bhardwajrizul/Expense-Tracker.git
   ```

2. Dive into the desired approach, for instance:
   ```sh
   cd Expense-Tracker-useState
   # or
   cd Expense-Tracker-useReducer
   # or
   cd Expense-Tracker-redux
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

4. Ignite the app:
   ```sh
   npm run dev
   ```

## 📝 License

This project is protected under the MIT License - delve into the [LICENSE](https://opensource.org/license/mit/) document for details.

## 🎉 Acknowledgments

A heartfelt thank you to [Stephen Grider](https://www.linkedin.com/in/stephengrider/) for his invaluable teachings on Udemy. His profound insights and hands-on approach have been instrumental in my learning journey, helping me grasp intricate React concepts with remarkable clarity. If you're keen to dive deep into the world of React or any related technology, I wholeheartedly recommend his courses.

---

Happy Coding 😉