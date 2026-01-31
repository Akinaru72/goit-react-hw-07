# Homework — goit-react-hw-07

## General Requirements

- Create a repository named **goit-react-hw-07**
- When submitting the homework, provide **two links**:
  - a link to the repository with the source code
  - a link to the deployed project on [**Vercel**](https://vercel.com/)
- The project must be created using [**Vite**](https://vite.dev/)
- When running the project, there should be **no errors or warnings** in the console
- Each component in the `src/components` folder must have its **own separate folder** containing:
  - a JSX file of the React component
  - a styles file
- The folder name, component file name (with `.jsx` extension), and styles file name (before `.module.css`) must be **identical** and match the names specified in the task (if provided)
- Components must be exported using **default export** (`export default`)
- JavaScript code should be clean and readable — use **Prettier**
- The project must use **Redux Toolkit**
- Styling must be implemented using **CSS Modules**

---

## Contacts Book

Refactor the **“Contacts Book”** application code from the previous module’s homework.

### Requirements:

- Remove the code responsible for storing and reading contacts from local storage  
  (i.e., code related to **Redux Persist**)
- Add interaction with a **backend** to store contacts

---

## Backend

- Create a personal backend for development using the UI service [**mockapi.io**](https://mockapi.io/projects)
- Sign up using your **GitHub** account
- Choose the **free plan**
- Watch the demo video on how to create a backend application and resource constructor
- Obtain the endpoint:

https://github.com/user-attachments/assets/65777a12-c81f-495c-8352-448acdcd67e9

---

## State Shape

Add handling of the following to the Redux state:

- loading indicator
- HTTP request errors

To do this, update the **contacts slice** state shape by adding the `loading` and `error` properties.

### Example state structure:

```js
{
  contacts: {
    items: [],
    loading: false,
    error: null
  },
  filters: {
    name: ""
  }
}
```

## Operations

In the `redux` folder, create a file named `contactsOps.js` to store asynchronous action creators.

### Requirements

- Use the [`createAsyncThunk`](https://redux-toolkit.js.org/api/createAsyncThunk) function to define operations
- Use the [**axios**](https://axios-http.com/docs/intro) library to perform HTTP requests

### The following operations must be implemented:

- **fetchContacts** — fetch the list of contacts
  - HTTP method: `GET`
  - Base action type: `"contacts/fetchAll"`

- **addContact** — add a new contact
  - HTTP method: `POST`
  - Base action type: `"contacts/addContact"`

- **deleteContact** — delete a contact by `id`
  - HTTP method: `DELETE`
  - Base action type: `"contacts/deleteContact"`

### Error handling

To correctly handle HTTP request errors inside async operations:

- Use the `try...catch` construct
- In the `catch` block, return the result of  
  `thunkAPI.rejectWithValue(...)`

---

## Handling Actions in Redux

- Handle all three action states (`pending`, `fulfilled`, `rejected`)
  and update the Redux state inside the **extraReducers** property
- Remove the `reducers` property from the contacts slice

---

## Selector Functions

### Contacts Slice

In the `contactsSlice.js` file, define and export the following selectors
for use with `useSelector`:

- **selectContacts** — returns the contacts list from `items`
- **selectLoading** — returns the loading state
- **selectError** — returns the error value

Use these selectors in all components where access to the corresponding
state properties is required.

---

### Filters Slice

In the `filtersSlice.js` file, define and export the following selector:

- **selectNameFilter** — returns the filter value from the `name` property

Use this selector in components together with the `useSelector` hook.

---

## Selector Memoization

After adding the `loading` and `error` properties to the contacts slice,
a performance issue arises because contact filtering will be recalculated
not only when contacts or filters change, but also when `loading` or `error`
changes.

### To solve this:

- In the `contactsSlice.js` file, create and export a memoized selector  
  **selectFilteredContacts** using the [`createSelector`](https://redux-toolkit.js.org/api/createSelector) function
- The selector should depend on:
  - the contacts array
  - the filter value
- The selector must return a filtered contacts array
- Import `selectFilteredContacts` into the **ContactList.jsx** component
  and use it with `useSelector`

---

## Contacts Collection

Since the contacts collection is now stored on the backend:

- When the application loads, the request to fetch contacts from the backend
  must be performed **in the `App` component**
- When creating a new contact, you **no longer need** to generate a unique ID manually  
  — the backend generates it and returns it in the response along with the new contact object

---

**Live page: [GitHub Pages](https://goit-react-hw-07-dgkm.vercel.app/)**
