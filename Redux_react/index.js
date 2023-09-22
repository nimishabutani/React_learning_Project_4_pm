const redux = require('redux')
const createStore = redux.createStore
const combineReducer = redux.combineReducers

const BUY_CAKE = "BUY_CAKE"
const BUY_CHOCO = "BUY_CHOCO"

function buyCake() {
    return {
        type: BUY_CAKE,
        info: "first redux Action"
    }
}

function buyChoco() {
    return {
        type: BUY_CHOCO,
        info: "second redux Action"
    }
}

const initialcakeState = {
    numofCake: 10,

}
const initialchocoState = {

    numofChoco: 20
}

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case BUY_CAKE: return {
//             ...state,
//             numofCake: state.numofCake - 1
//         }
//         case BUY_CHOCO: return {
//             ...state,
//             numofChoco: state.numofChoco - 1
//         }
//         default: return state

//     }
// }

const cakereducer = (state = initialcakeState , action) => {
    switch(action.type){
         case BUY_CAKE:return{
              ...state,
              numOfCake:state.numofCake-1
         }

         default:return state
    } 
}

const chocoreducer = (state = initialchocoState , action) => {
    switch(action.type){
         case BUY_CHOCO:return{
              ...state,
              numofChoco:state.numofChoco-1
         }

         default:return state
    } 
}

const rootReduser=combineReducer({

    cake:cakereducer,
    choco:chocoreducer
})

const store = createStore(rootReduser)
console.log("initial state", store.getState())
const unsubscribe = store.subscribe(() => console.log("update state", store.getState()))

store.dispatch(buyCake())
store.dispatch(buyChoco())
unsubscribe()
