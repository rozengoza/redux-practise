// prop drilling lai avoid garna we can use react context
//useContext + useReducer can  do what redux has to offerA
// redux helps to manage state in our project 
// REACT UI LIBrary Redux statemangement library 
//react -redux  is Redux Ui binding library for react, dubai separately use garna gahro huncha 
//offers couple of function that will help us combine react application with redux


## Important Points 
[] don't learn redux and react in parallel 
[] is redux still relevant for react? context api , hooks introduce bhayeni still kina use garne 
[] important for better code pattern
[] is redux applicable to all react application? if needed yes ..  if the application has multiple number of components that need to share state
[] redux learning code, boiler plate code: time lagcha 
[] learning curve
[] [x] first just learn redux
[] [x] then learn how to bind it into react application


 second video
 [] node and npm installed
 
## third video : 3 core concepts in redux
hamle state lai direct access gardaina,  redux le hamro lagi manage gardincha 
[x] store- safely holds the state of the application
[x] actions - describes what happens, what is our intention with the state stored in the store
[x] reducers - ties together store and actions together and recieves actions and performs necessary tasks 

## fourth video : three principles of redux
[] first principle :
the state of our whole applicaiton is stored in an object tree within a single store
maintain our applicaiton state in a single object which woudl be managed by the redux store

[] second principle
the only way to change the state is to emit an action, an object describing what happened 
to update the state of our app we need to let redux know what about that with an action 

[] third principle
to  the state tree is transformed by actions, we write pure reducers
REDUCER - (previousState,action)=> newState

const reducer = (state,action) =>{
    switch(action.type){
        case Buy_cake : return{
            numOfCakes : state.numOfCakes-1;
        }
    }
}
dispatch actions 
reducer 


## lets start coding video 4 
actions are the only way the application can interact with the store
it carries some information from the applicaiton to the redux store
has a type property that indicates the type of action being performed

## part 6
reducers specify  how the apps state change in response to the acitons sent to the store
actions only describe what happens but donot describe how that happen 
function  that accepts state and action as arguements, and returns the next state of the application 
(previousState, action) => newState 


## part 7 redux store
for our entire application,  we have only one store
# responsibilities:- 
[]holds applicaiton state
[x]allows access to state via getState()
[x]allows state to be updated via Dispatch(action)
[x]registers listeners via subscribe method(listener)
[] allows / handles unregistering of listeners via the function returned by suscribe(listeners)

## part 11
# middleware
suggested way to extend redux with custom functionality 
[x] provides a third-party extension point between dispatching an action and the moment it reaches the reducer
[] use middleware for logging, crash reporting, performing asynchronous tasks etc,

## part 12 asynchronous actions
# synchronous actions 
- as soon as an action was dispatched, state was changed immediately 
- if you dispatch the BUY_CAKE action, numOfCakes was right away decremented by 1
- same with BUY_ICECREAM Action 

# Async Actions
- asynchronous api calls to fetch data from an end point and use the data in your application 

# out application
- fetches a list of users from an API end point and stores it in the redux store
- State ?
- Action ?

# state
state = {
    loading:true,
}
loading - display a loading spiner in your component
data - list of users
error - display error to the user

# Actions -
- FETCH_USERS_REQUEST - fetch list of users
- FETCH_USERS_SUCCESS - successfully fetched
- FETCH_USERS_FAILURE - error fetching the data

# reducers
- case : FETCH_USERS_REQUEST
loading :true

- case : FETCH_USERS_SUCCESS
loading : false
users : data (from API)

- case : FETCH_USERS_FAILURE
loading : false
error : error (from API)



## part 13 
# async action creators -
- axios
- - requests to an API end point
- redux-thunk 
- - define async actions creators
- -  middleware

## part 14  working concepts with react library 
- create a react app to perform above actions
