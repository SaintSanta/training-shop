import list from './assets/list.svg';
import cross from './assets/cross.svg';

import './burger-btn.scss';



function Example(condition,setCondition) {
    
    return(
         <div  onClick={() =>filterSeting(setCondition(condition ? false : true))} >
         {filterSeting(condition)}
        </div>
     ); 
 }


function filterSeting(click){
  
    let Body =  document.body;
    if(click){           
        Body.classList.add('lock');          
        return  <img src={cross} alt='filter' className='imgBurger close' />
    }else{           
        Body.classList.remove("lock");      
        return  <img src={list} alt='filter' className='imgBurger' />
    }
}



const BurgerBtn = ({condition,setCondition}) =>{
    return(
        <div data-test-id='burger-menu-btn'>           
            {Example(condition,setCondition)}    
        </div>
    );
}

export default BurgerBtn;