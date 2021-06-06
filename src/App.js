import React ,{ useEffect , useState , Fragment } from 'react';
import { Pannellum } from "pannellum-react";
import { debounce ,longPressMenu } from './helpers/helpers'
import RenderMoonMenu from './MoonMenu';
import panorama from './assets/panorama.jpg'
//const Pannellum = React.lazy(() => import('./MoonMenu'));

const App = () =>{

  const [ moonMenu , setMoonMenu] = useState(false)
  const [ xposition ,setXposition] = useState('')
  const [ yposition ,setYposition] = useState('')
  
  const position = {
    position:'absolute',
    top:`${yposition}px`,
    left:`${xposition}px`,
  }
  
  const infoAlarmBox = ()=>{
    alert("Edit code and write some logic 😀")
  }

  useEffect(()=>{
    let pressTimer;

     document.addEventListener('mousedown', debounce((e)=>{ 
       setXposition(e.clientX)
       setYposition(e.clientY)      
    },600))

    longPressMenu(pressTimer , setMoonMenu)
    //removing listeners after unmounting component
    return(
      document.removeEventListener('mouseup',()=>{
        clearTimeout(pressTimer);
      return false;
      })
,
    document.removeEventListener('mousedown',debounce((e)=>{
      setXposition(e.clientX)
       setYposition(e.clientY)  
    },600))
,
    document.removeEventListener('mousedown',()=>{
      pressTimer = window.setTimeout(() => {
        setMoonMenu(!moonMenu)
        },600);
      return false; 
    }));
    
},[moonMenu])

  return(
    <Fragment>
      {/*<Suspense fallback={<div>Loading...</div>}>*/}
        <h1 className="title_box_Container">Let's explore our bar 🍻</h1>
      {
      moonMenu 
          ?  <RenderMoonMenu position={position} infoAlarmBox={infoAlarmBox} setMoonMenu={setMoonMenu}/> 
          :   null
      }
        <Pannellum
            width="100vw"
            height="95vh"
            image={panorama}
            pitch={10}
            yaw={180}
            hfov={110}
            autoLoad
            onLoad={() => {
              //there could be something to improve , for example preloader which will wait until the panorama would be fully loaded
                console.log("panorama loaded complete !");
              }}>

          <Pannellum.Hotspot
            type="custom"
            pitch={11}
            yaw={-167}
            text="Explore our drinks"
            cssClass="customRing in out" 
            handleClick={()=>alert('You have clicked on our bar !!!')
          }/>

          <Pannellum.Hotspot
            type="custom"
            pitch={11}
            yaw={-147}
            text="Explore our drinks"
            handleClick={()=>alert('You have clicked on our bar !!!')}
            cssClass="customRing in out"
          />
        </Pannellum>
       {/*</Suspense>*/}
    </Fragment>
  );
  }
  export default App
