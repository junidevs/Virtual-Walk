export const debounce = ( func , delay) =>{
    let timeoutId;

    return (...params)=> {
      if(timeoutId){
        clearTimeout(timeoutId)
      }
      timeoutId = setTimeout(()=>{
          func(...params)
      },delay)
    }
  }

  export const longPressMenu = (pressTimer,setMoonMenu) =>{

    document.addEventListener('mouseup',()=>{
         clearTimeout(pressTimer);        
       return false;
     })
     
     //these timeout should be bigger than getting position , because we want to avoid "problems" with immediatelly jumping moon menu
     document.addEventListener('mousedown',()=>{
       pressTimer = window.setTimeout(() => {
        setMoonMenu(true)
      },600);
       return false; 
     })}