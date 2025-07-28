## Today's Learning Summary

## 24th July

We covered React's hooks and also learned how to use custom hooks to enhance our application.

**useCallback** - Learned to optimize function memoization for better performance  
**useMemo** - Mastered expensive computation caching and object memoization  
**useContext** - Implemented global state management without prop drilling  
**Custom Hooks** - Built reusable useFetch hook with TypeScript generics  
**Error Boundaries** - Created robust error handling for component failures

- Then we made a real application that combined all these concepts into a GitHub profile search app.

## 25th July

We learned about making our React app faster and better forms!

**Code Splitting** - Split our app into smaller chunks so it loads faster  
**Lazy Loading** - Load components only when we need them (not all at once)  
**Suspense** - Show loading spinner while lazy components are downloading  
**React Hook Form** - Easy way to handle forms without lots of useState  
**Zod Validation** - Check if form data is correct (like email format, required fields)

Then we built a login form that:

- Uses react-hook-form to handle form state
- Validates data with Zod (email must be email, password required)
- Shows error messages when user types wrong things
- Only loads form component when user clicks login (lazy loading)

## 27th July

We learned about TanStack Query for better API calls!

**TanStack Query Provider** - Setup to manage all our API calls in one place  
**useQuery** - Easy way to GET data from backend (like fetching user list)  
**useMutation** - Easy way to POST/PUT/DELETE data to backend (like creating new user)  
**Custom Hooks** - Made our own hooks using useQuery and useMutation for reusability  
**Frontend-Backend Connection** - Connected our React app to real backend API

### What we built

### Core Components

1. **API Services** (`auth.ts`) - `registerUser`, `loginUser`, `getUsers` functions
2. **TypeScript Types** (`auth.types.ts`) - Complete type definitions for auth flow
3. **React Query Hooks** - `use-register`, `use-login`, `use-get-users` for data management

## API Endpoints

- `POST /api/user/register` - User registration
- `POST /api/user/login` - User authentication
- `GET /api/user/getusers` - Fetch all users

## 28th July

We learned about Redux for state management!

**Redux Store** - Central place to store all app data  
**Redux Slice** - Easy way to create actions and reducers together  
**useSelector** - Get data from Redux store  
**useDispatch** - Send actions to update Redux store  
**Actions** - What we want to do (like increment, updateName)

Then we built Redux integration that:

- Created counter with increment/decrement using Redux
- Made contact form that stores data in Redux store
- Used useSelector to read form data from store
- Used useDispatch to update form fields in real-time
- Combined Redux with our existing React components
