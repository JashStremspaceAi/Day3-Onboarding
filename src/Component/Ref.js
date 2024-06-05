import React,{useRef} from 'react'

const Ref = () => {
    const initial = useRef();
    const handleSubmit=()=>{
        initial.current.focus();
    }
  return (
    <>
     <input type="text" ref={initial} />
      <button onClick={handleSubmit}>Focus Input</button>
    </>
  )
}

export default Ref