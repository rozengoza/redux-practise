const redux = require('redux')
const createStore= redux.createStore
const BUY_CAKE = 'BUY_CAKE'
const RETURN_CAKE = 'RETURN_CAKE'
// creating a first action in redux


function buyCake(){
    return{
        type: BUY_CAKE,
        info: 'First Redux action'

    }
}

function returnCake(){
    return{
        type :RETURN_CAKE,
        info: 'Second Redux Action'
    }
}


//(previousState, action) => newState

const initialState = {
    numOfCakes : 10
}

const reducer=(state=initialState, actions)=>{
    switch(actions.type){
        case BUY_CAKE:return{
            ...state,
            numOfCakes: state.numOfCakes-1
        }
        case RETURN_CAKE:return{
            ...state,
            numOfCakes : state.numOfCakes+1
        }
        default: return state
    }
}

const store = createStore(reducer)
console.log('initial state', store.getState())
const unsubscribe =store.subscribe(()=> console.log('Updated state',store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(returnCake())
unsubscribe()

