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
