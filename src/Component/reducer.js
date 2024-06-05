import React, { useReducer } from 'react'

const intial={height:50}
const reducer = (state,action)=>{
    switch(action){
        case 'inc':
            return {height:state.height+10}
        case 'dec':
            return {height:state.height-10}
        default:
            return state
    }
}
const Reducer = () => {
    const [state,dispatch]=useReducer(reducer,intial)
  return (
    <>
    <div style={{ background: 'teal', width: '30px', height: state.height }}></div>
    <div style={{marginTop: '3rem'}}>
        <button className='btn btn-primary' onClick={() => dispatch('inc')}>Increase bar size</button>
        <span/> <button className='btn btn-danger' onClick={() => dispatch('dec')}>Decrease bar size</button>
    </div>
    </>
  )
}

export default Reducer