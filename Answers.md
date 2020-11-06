1. What problem does the context API help solve?
   The context API serves as a great alternative to prop drilling. In this way, it makes our code look much cleaner.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
  Actions are functions that usually retrun objects to be consumed by our reducers. Reducers help us modify state by taking in action objects and returning a new modified version of our state. The store helps us apply our reducer to the entirety of our application through a provider.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
  Application state holds global data while component state keeps data locally within a component.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
  Redux thunk is a middleware function that returns another function in order for us to output asyncronous data from something like an API.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
  I think that redux has been pretty cool although I still feel like I need some work in that department. I really liked the context API and how much it can clean up our code.
