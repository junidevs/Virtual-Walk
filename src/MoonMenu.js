import React from 'react';

const RenderMoonMenu = ({position,infoAlarmBox,setMoonMenu}) =>{
    return (
      <div className="animBox" style={position}>
        <div onClick={()=>{
         //there we could render new component or redirect via react-router-dom or something liek that...
         infoAlarmBox()
        }} className="option_one"><i className="sign language icon"></i></div>
           <div className="middle_Row_Menu">
               <div onClick={()=>infoAlarmBox()} className="option_two"><i className="question circle outline icon"></i></div>
                   <button className='close_Btn' onClick={()=> setMoonMenu(false)}>X</button>
               <div onClick={()=>infoAlarmBox()} className="option_three"><i className="cart arrow down icon"></i></div>
           </div>
         <div onClick={()=>infoAlarmBox()} className="option_four"><i className="video icon"></i></div>
      </div>
    );
   }
   export default RenderMoonMenu

   RenderMoonMenu.defaultProps={
       //if we will not pass the cursour position , by default I want to have centered menu
    position:{
        position:'absolute',
        top:`50%`,
        left:`50%`,
    }
   }
   //also we can define the PropTypes or rewrite this app with TypeScript template
   //RenderMoonMenu.propTypes = {
   // 
   //}