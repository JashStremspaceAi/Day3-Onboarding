import React from 'react'
import './App.css'
import Card from './Component/card'
const HomePage = () => {
  const data={
    state:{
      title:"USE STATE",
      path:'/state' ,
      src:'https://webbrainsmedia.com/static/b0d53359cbc6bd82d080ae7607b341cb/8c0f5/cover.png',
      text:"useState is a React Hook used in functional components to add state variables to them, enabling them to hold and update data over the component's lifetime."
    },
    effect:{
      title:"USE EFFECT",
      path:'/effect' ,
      src:'https://blog.joshsoftware.com/wp-content/uploads/2021/06/1mtqdnj80g3tch4caxpehea.jpeg',
      text:"useEffect is a React Hook used in functional components to add side effects to them, enabling them to perform actions after the component has rendered."
    },
    context:{
      title:"USE CONTEXT",
      path:'/context' ,
      src:'https://i.ytimg.com/vi/mlk-THQNfQc/maxresdefault.jpg',
      text:"useContext is a React Hook used in functional components to add context variables to them, enabling them to share data across components."
    },    
    reducer:{
      title:"USE REDUCER",
      path:'/reducer' ,
      src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVJcHZRgWqATNoOckrwGU---TzJHYFzzQ78Q&s' ,
           text:"useReducer is a React Hook used in functional components to add state variables to them, enabling them to hold and update data over the component's lifetime."
    },
    callback:{
      title:"USE CALLBACK",
      path:'/callback' ,
      src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRFPjp9PcFakNvjGr88W4_6b9SbPLuiAMwDg&s',
      text:"useCallback is a React Hook used in functional components to add state variables to them, enabling them to hold and update data over the component's lifetime."
    },
    memo:{
      title:"USE MEMO",
      path:'/memo' ,
      src:'https://miro.medium.com/v2/resize:fit:1200/1*FXTR42cB-D_wCi1ezVi_fA.png',
      text:"useMemo is a React Hook used in functional components to add state variables to them, enabling them to hold and update data over the component's lifetime."
    },
    ref:{
      title:"USE REF",
      path:'/ref' ,
      src:'https://miro.medium.com/v2/resize:fit:800/0*KktNDwFpYyItI-cs.png',
      text:"useRef is a React Hook used in functional components to add state variables to them, enabling them to hold and update data over the component's lifetime."
    },
    redux:{
      title:"Redux",
      path:'/redux' ,
      src:'https://miro.medium.com/v2/resize:fit:500/1*tOI6UC5EaS2fPItCesI-AQ.png',
      text:"Redux is a React Hook used in functional components to add state variables to them, enabling them to hold and update data over the component's lifetime."
    }
    }
  return (
    <>
    <section id="advertisers" class="advertisers-service-sec pt-5 pb-5">
  <div class="container">
    <div class="row">
      <div class="section-header text-center">
        <h2 class="fw-bold fs-1">
          React
          <span class="b-class-secondary">Hooks </span> Implementations
        </h2>
     
      </div>
    </div>
    </div>
    </section>
    <Card props1={data.state} props2={data.effect}/>
    <Card props1={data.context} props2={data.reducer}/>
    <Card props1={data.callback} props2={data.memo}/>
    <Card props1={data.ref} props2={data.redux}/>
    </>
  )
}

export default HomePage