import * as React from "react";
import * as styles from "../pages-components/common/index.module.css";
import ReactMarkdown from "../react-markdown/react-markdown";

const ApiReference = () => (
  <>
    <ReactMarkdown>
      The library exports two functions and a typescript type:
      *getHookAndProviderFromSlices*, *defineSlice*, and *ReduxMiddleware*.
      *getHookAndProviderFromSlices* is the main function exported and it's a
      default export. *defineSlice* it's a function only used in typescript.
    </ReactMarkdown>
    <div>
      <ReactMarkdown className={styles.table}>
        {`
<table><tr><th>Name</th><th>Type</th><th style="min-width:400px;">Description</th><th>Example</th></tr>
<tr><td>
  
  *getHookAndProviderFromSlices* (default import)</td><td>

 ~~~ts
 (config: {
  slices?: {
    [slice: string]: Slice<any, any>;
  };
  AsyncStorage?: any;
  reduxStoreOptions?: {
    middleware:
      | ((getDefaultMiddleware: any) => MiddlewareArray)
      | MiddlewareArray;
  };
}) => {
  useSlice: (<T, K = T>(
    slice: string,
    selector: (state: T) => K
  ) => [K, ReduxDispatch<AnyAction>, { [x: string]: any }]) &
    (<T, K = T>(
      slice: string
    ) => [
      K,
      SetValue<T> & Dispatch & ReduxDispatch<AnyAction>,
      { [x: string]: any }
    ]);
  Provider: ContextProviderType;
}
 ~~~
  </td><td>
    
  It is the main (and default) function exported by the library. You pass a config object with optional keys *slices*, *AsyncStorage*, and *reduxStoreOptions*. The *slices* key is an object wich its keys are the slices names and its values, the defintion of the slices.</td><td>
    
~~~js
import getHookAndProviderFromSlices from "react-context-slices";

export const { useSlice, Provider } = getHookAndProviderFromSlices({
  slices: {
    count: { initialArg: 0 }, // React Context slice
  },
});
~~~
</td></tr><tr><td>

*defineSlice* (used in typescript)
  </td><td>
    
~~~ts
<T, K = T>(slice: Slice<T, K>) => Slice<T, K>;
~~~
</td><td>
  
  This function enforces rules for types in the definition of a slice object. It's a generic function.</td><td>
    
~~~ts
import getHookAndProviderFromSlices, {defineSlice} from "react-context-slices";

export const { useSlice, Provider } = getHookAndProviderFromSlices({
  slices: {
    count: defineSlice<number>({ initialArg: 0 }), // React Context slice
  },
});
~~~
</td></tr><tr><td>
  
*ReduxMiddleware* (typescript type)
</td><td>
  
~~~ts
(store: {
  getState: () => any;
  dispatch: ReduxDispatch<AnyAction>;
}) => (next: ReduxDispatch<AnyAction>) => (action: AnyAction) => void;
~~~
</td><td>
  
Is the type against to make an assertion in typescript when defining middleware in *reduxStoreOptions*
</td><td>
  
~~~ts
import getHookAndProviderFromSlices, {defineSlice, ReduxMiddleware} from "react-context-slices";

export const {useSlice, Provider} = getHookAndProviderFromSlices({
  slices:{
    //...
  },
  reduxStoreOptions: {
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(((store) => (next) => (action) => {
        //...
      }) as ReduxMiddleware);
  }
});
~~~
</td></tr>
</table>
`}
      </ReactMarkdown>
    </div>
    <ReactMarkdown>
      Next are described other entities encountered when using this library.
    </ReactMarkdown>
    <div>
      <ReactMarkdown className={styles.table}>{`
<table><tr><th>Name</th><th>Type</th><th style="min-width:400px;">Description</th><th>Example</th></tr>
<tr><td>config object</td><td>
  
~~~ts
{
  slices?: {
    [slice: string]: Slice<any, any>;
  };
  AsyncStorage?: any;
  reduxStoreOptions?: {
    middleware?:
      | ((getDefaultMiddleware: any) => MiddlewareArray)
      | MiddlewareArray;
    devTools?: any;
    preloadedState?: any;
    enhancers?: any;
  };
}
~~~
</td><td>
  
It's the object passed to *getHookAndProviderFromSlices*. It can contain three optional keys: *slices*, *AsyncStorage*, and *reduxStoreOptions*.
</td><td>
  
~~~js
{
  slices: {
    //...
  }
}
~~~
</td></tr><tr><td>
  
slices object
</td><td>
  
~~~ts
{
  [name:string]: Slice<T, K>;
}
~~~ 
</td><td>
  
The slices object is an object which its keys are the name of the slices and its values are the slices themselves.
</td><td>
  
~~~js
{
  count: {initialArg: 0}, // React Context slice
  todos: { 
    // Redux slice
    initialState: [],
    reducers: {
      add: (state, {payload}) => {
        state.push(payload);
      }
    }
  }
}
~~~ 
</td></tr><tr><td>
  
a slice object
</td><td>
  
~~~ts
{
  initialArg?: K | T;
  init?: (initialArg: K) => T;
  reducer?: (state: T, action: any) => T;
  isGetInitialStateFromStorage?: boolean;
  middleware?: ((dispatch: Dispatch) => (next: Dispatch) => (action: any) => any)[];
} | {
  initialState: NonUndefined<T>;
  reducers: {
    [x: string]: {
      (state: T, action: any): void | T;
    };
  };
}
~~~ 
</td><td>
  
A slice object is an object which its possible keys are for a React Context slice: *initialArg*, *init*, *reducer*, *isGetInitialStateFromStorage*, and *middleware*; and for a Redux slice: *reducers*, and *initialState*. The keys for a React Context slice are all optional. What makes a slice to be a Redux slice is the presence of the *reducers* key. If it's not present, then it is a React Context slice.
</td><td>
  
~~~js
{} // React Context slice
~~~ 
</td></tr><tr><td>
  
*initialArg*
</td><td>
  
~~~ts
K | T;
~~~
</td><td>
  
It's the argument passed to the *init* function to compute the initial state. If no *init* function is present in the definition of the slice, then it becomes the initial state. Used in React Context slices.
</td><td>
  
~~~js
{ 
  // React Context slice
  initialArg: 0;
}
~~~
</td></tr><tr><td>
  
*init*
</td><td>
  
~~~ts
(initialArg: K) => T;
~~~
</td><td>
  
It's the function used to compute initial state of the slice. It takes *initialArg* as an argument. If no present then *initialArg* it's the initial state. Used in React Context slices.
</td><td>
  
~~~js
{
  // React Context slice
  init: () => 0;
}
~~~
</td></tr><tr><td>
  
*reducer*
</td><td>
  
~~~ts
(state: T, action: any) => T;
~~~ 
</td><td>
  
If a reducer is supplied in the definition of a React Context slice, then the *useSlice*, when used with this slice, will return a dispatch function as a second value in the array. If it is not defined, then the *useSlice* hook will return, for this slice, a setter function as a second value in the array.
</td><td>
  
~~~js
{
  // React Context slice
  reducer: (state) => !state;
}
~~~
</td></tr><tr><td>
  
*isGetInitialStateFromStorage*
</td><td>
  
~~~ts
boolean;
~~~ 
</td><td>
  
Indicates whether the initial state for the slice will be recovered from local storage (web) or Async Storage (React Native). Used in React Context slices.
</td><td>
  
~~~js
{
  // React Context slice
  isGetInitialStateFromStorage: true;
}
~~~
</td></tr><tr><td>
  
*middleware*
</td><td>
  
~~~ts
((dispatch: Dispatch) => (next: Dispatch) => (action: any) => any)[];
~~~
</td><td>
  
It's an array where the middleware for the dispatch function is passed. The first middleware applied will be the first on the array, the second the next, etc, ending with the dispatch function itself. The middleware does not have access to the state value of the slice. Used in React Context slices. 
</td><td>
  
~~~js
{
  // React Context slice
  middleware: [
    () => (next) => (action) => {
      console.log("I am a middleware");
      next(action);
    },
    (dispatch) => (next) => (action) => {
      if (typeof action === "function") {
        return action(dispatch);
      }
      next(action);
    },
  ];
}
~~~
</td></tr><tr><td>
  
*reducers*
</td><td>
  
~~~ts
{
  [x: string]: {
    (state: T, action: any): void | T;
  };
}
~~~ 
</td><td>
  
When this key is present in the definition of a slice object, then the slice it's a Redux slice. Otherwise it's a React Context slice. It's the *reducers* object passed to the *createSlice* from Redux Toolkit (check the documentation there). 
</td><td>
  
~~~js
{
  // Redux slice
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1
  }
}
~~~ 
</td></tr><tr><td>
  
*initialState*
</td><td>
  
~~~ts
T extends undefined ? never : T;
~~~ 
</td><td>
  
Used for Redux slices. It's the initial state for the slice. Cannot be *undefined* (make it *null* instead). 
</td><td>
  
~~~js
{
  // Redux slice
  initialState: [],
  reducers: {
    add: (state, {payload}) => {
      state.push(payload);
    }
  }
}
~~~
</td></tr><tr><td>
  
*useSlice* 
</td><td>
  
~~~ts
(<T, K = T>(
    slice: string,
    selector: (state: T) => K
  ) => [K, ReduxDispatch<AnyAction>, { [x: string]: any }]) &
    (<T>(
      slice: string
    ) => [
      T,
      SetValue<T> & Dispatch & ReduxDispatch<AnyAction>,
      { [x: string]: any }
    ]);
~~~ 
</td><td>
  
It's the hook returned by the call to *getHookAndProviderFromSlices*. When used, you must pass the name of the slice you want to fetch or use. It will return, in the case of a React Context slice, an array where the first element is the state value of the slice and the second a dispatch or setter function, depending on if a reducer was defined or not for the slice. In the case of Redux slices, you can pass a selector as a second parameter to the call of the *useSlice* hook. It will return an array where the first element is the state value for the slice (with the selector applied, if any), the second element is the dispatch function, and the third element is the actions object (action creators) for the slice. 
</td><td>
  
~~~js
const [count1, setCount1] = useSlice("count1");
const [count2, dispatchCount2] = useSlice("count2");
const [count3, reduxDispatch, { increment, decrement }] = useSlice("count3");
const [todos,, { add }] = useSlice("todos"); // reduxDispatch is common for all Redux slices
const [firstTodo] = useSlice("todos", (state) => state[0]);
~~~
</td></tr><tr><td>
  
*Provider*
</td><td>
  
~~~ts
({ children }: React.PropsWithChildren) => JSX.Element;
~~~ 
</td><td>
  
It's the provider returned by the call to *getHookAndProviderFromSlices*. It must be used up in the tree, in order for the hook *useSlice* to work. 
</td><td>
  
~~~js
root.render(
  <Provider>
    <App />
  </Provider>
);
~~~
</td></tr>
</table>
`}</ReactMarkdown>
    </div>
  </>
);

export default ApiReference;
