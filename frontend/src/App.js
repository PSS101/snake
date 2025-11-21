import logo from './logo.svg';
import './App.css';
import { useState,useEffect,useRef } from 'react';
import "@fontsource/press-start-2p";
function App() {
    const size = 16
    const grid = new Array(size).fill(new Array(size).fill(0));
      const [snake,setSnake] = useState([{x:0,y:0}])
  const [fruit,setFruit] = useState({x:0,y:0})
  const prev = useRef(0); 
  const[points,setPoints] = useState(-1)
    const [screen,setScreen] = useState({h: window.innerHeight, w: window.innerWidth})
  const length = useRef(-1)
  const collison = useRef(false)
  const [play,setPlay] = useState(true)
    useEffect(() => {
        const keypress = (event)=>{
            if(!play){
            return
        }
        const key = event.key
          switch(key) {
                case "w":
                    if(prev.current !== 2) {
                        prev.current = 1;
                    }
                    break;
                case "s":
                    if(prev.current !== 1) {
                        prev.current = 2;
                    }
                    break;
                case "d":
                    if(prev.current !== 4) {
                        prev.current = 3;
                    }
                    break;
                case "a":
                    if(prev.current !== 3) {
                        prev.current = 4;
                    }
                    break;
            }
    }
    window.addEventListener("keydown", keypress);
    return ()=>{window.removeEventListener("keydown", keypress);}
    }, []); 




      useEffect(() => {
     const update = ()=>{
        if(!play){
            return
        }
           
            setSnake((prevstate)=>{
            let x = prevstate[0].x
            let y = prevstate[0].y
            
                 let bounds = (prevstate[0].x<=15 && prevstate[0].x>=0 && prevstate[0].y<=15 && prevstate[0].y>=0)
           
           
           
 
            if(bounds && !collison.current){
                
                if(prev.current==1){
                x-=1
                }
            else if(prev.current==2){
                x+=1
            }
            else if(prev.current==3){
                y+=1
            }
            else if(prev.current==4){
                y-=1
            }      
            }
            else{
                if(play!==false){
                    setPlay(false)
                }
                
            }

            if(length.current>1){
                for(let i=1;i<prevstate.length;i++){ 
                        if (x == prevstate[i].x && y == prevstate[i].y) {
                            setPlay(false)
                            break
                        }
                }
       
            }
            
        
            if(length.current>0){
                return [{ x, y },...prevstate.slice(0, prevstate.length - 1) ]
            }
            else{
                return [{x,y}]
            }
            
            })
            
     }
            if(fruit.x===0 && fruit.y===0){
                generateFruit()
            }
            
            


            const id = setInterval(()=>{
            update()
            },100);
    return ()=>{
        clearInterval(id)
        
    }
            
    }, [play]);
    

    useEffect(() => {

    const extend = ()=>{
       if(!play){
            return
        }
     
        //console.log(collison.current)
     
        const eat = snake.some((s)=>s.x===fruit.x && s.y===fruit.y)
          if(eat){
            generateFruit()
            setPoints((x)=>x+1)
            setSnake((s)=>[{x:fruit.x,y:fruit.y},...s])
          
            length.current+=1
        
        
        }
        
          
           
        
       
      //  console.log(collison.current)
    }
    


    extend()
   
    
    }, [snake]);

     const generateFruit = ()=>{
       let fx = parseInt((Math.round(Math.random()*15)))
       let fy = parseInt((Math.round(Math.random()*15)))
       while(fx<0 || fx>15 || fy<0 || fy>15){
        generateFruit()
       }
        setFruit({x:fx,y:fy})
        console.log(`${fx},${fy}`)
    }

    


   
    const GamePage = ()=>{
        return (
 <div className="container">
    <div>
 <h1 style={{color:'white',  fontFamily: '"Press Start 2P", system-ui'}}>Score: {points}</h1>
<div>
  {grid.map((r, row) => (
    <div className="col" key={row}>
      {r.map((c, col) => {
        const isFruit = fruit.x === row && fruit.y === col;
        let isSnake =  false
        for(let i=0;i<snake.length;i++){
            if(snake[i].x===row && snake[i].y===col){
                isSnake = true
                break
            }



            
        }
        
        return (
          <div
            key={col}
            className="box"
            style={{background: isSnake? "green": isFruit? "": "#202020ff",backgroundImage: isFruit? "url('https://minecraft.wiki/images/Apple_JE3_BE3.png?3853a')":"", backgroundSize: "cover", }}
          ></div>
        );
      })}
    </div>
  ))}</div>
    </div>
           
</div>
        )
    }

    const PlayPage = ()=>{
        return (
        <div className="container2">
            <div>
                <h1 style={{color:'white',fontSize:50, fontFamily: '"Press Start 2P", system-ui'}}> GAME OVER</h1>
           <h1 style={{color:'white', fontFamily: '"Press Start 2P", system-ui'}}>Score: {points}</h1>
           <button className='btn'
  onClick={() => {
   
    setSnake([{ x: 0, y: 0 }]);
    setFruit({ x: 0, y: 0 });
    prev.current = 0;
    collison.current = false;
    length.current = -1;
    setPoints(-1)
    setPlay(true);
  }}
>Play</button>
            </div>
           
        </div>
        )
    }
    return(
       
            <>
          {play === true ? <GamePage /> : <PlayPage/>}
            
            </>
        
    
    )
}
export default App