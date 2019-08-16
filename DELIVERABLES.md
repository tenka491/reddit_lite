#DELIVERABLES
________

## How is your code structured, and why? 
I tried to make the components as small as possible and generally have only one purpose, and put them all in the `components` folder. If it is a Wrapper for the Provider that is pretty much all it does and it goes in the `ducks` folder.

The files in the `ducks` folders are for the redux store and for the ContextAPI. Generally speaking it is all your data processes.

The `data` folder is just that static data objects that I used to hydrate the `initialState` of the Redux store.

I used the Arrow functions for all my components mostly because they are mostly just display components. I have some functionality in some to them but it is so small in nature that I thought that creating a class was a bit overkill as far as lines of code and actual transpiled code. In the end everything gets transpiled down to plan javascript.

## How does updated data change your application’s state? 
Currently, is only changes the `selectedCategory` and `selectedCategoryData` objects in the state. These get updated when you select a category from the StartPage.

I have a `useState` in the `Post` component but that state is only used within that component. Any time that component is updated from the outside the local state will be overwritten. I would definitely change this for a real production app.

## In your opinion, what are the pros and cons of how your views are rendered? 
Pros: They are a usually a single purpose not too many actions or click events. Because I am using the `useContext` API within the smaller components it is easy to move reorganize the `Post` component into smaller pieces without having to prop drill and make sure you are passing the correct data to the lowest display component through all the other components. Take the `Comments` component for instance, I can now put that anywhere within the `Post` component however deep I choose it will always work.

Cons: It does take a little more tact when dealing with Redux Actions and how to dispatch them. However, now each major component is self contained and can be placed in any page as long as the appropriate data and actions are passed to it.

## If you were going to add a feature like login, how would your app’s architecture change? 
Add a `user` object to the redux store with the user data. Put I would have to create an `express` || `hapi` server to handle all the log in logic and authentication. Which would probably be just a pass through to `oAuth` or something along those lines. If we didn't use `oAuth` then we would have to create a database to house all the user information. 

Then I may create an HOC or a costume React Hook to help with the toggling of components when the user successfully logs in.
