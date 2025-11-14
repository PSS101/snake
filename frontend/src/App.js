import logo from './logo.svg';
import './App.css';
import { useState,useEffect,useRef } from 'react';
function App() {
    const size = 16
    const grid = new Array(size).fill(new Array(size).fill(0));
      const [snake,setSnake] = useState([{x:0,y:0}])
  const [fruit,setFruit] = useState({x:0,y:0})
  const prev = useRef(0); 
  const[points,setPoints] = useState(-2)
    const [screen,setScreen] = useState({h: window.innerHeight, w: window.innerWidth})
  const length = useRef(-2)
  const collison = useRef(false)
    useEffect(() => {
        const keypress = (event)=>{
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
        
            setSnake((prevstate)=>{
            let x = prevstate[0].x
            let y = prevstate[0].y
            let bounds = snake[0].x<16 && snake[0].x>=0 && snake[0].y<16 && snake[0].y>=0


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
        
            if(length.current>0){
                return [{ x, y },...prevstate.slice(0, -1) ]
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
            
    }, []);
    

    useEffect(() => {

    const extend = ()=>{
         const eat = snake.some((s)=>s.x===fruit.x && s.y===fruit.y)
          if(eat){
            generateFruit()
            setPoints((x)=>x+1)
            setSnake((s)=>[...s,{x:fruit.x,y:fruit.y}])
          
            length.current+=1
        
        
        }
        if(length>1){
            collison.current=false
            for(let i=1;i<snake.length;i++){
                        if(snake[0].x===snake[i].x && snake[0].y===snake[i].y){
                            collison.current = true
                            break
                        }
            }
        }
       
        console.log(collison.current)

    }


    extend()
   
    
    }, [snake]);

     const generateFruit = ()=>{
       let fx = parseInt((Math.round(Math.random()*16)))
       let fy = parseInt((Math.round(Math.random()*16)))
       while(fx<0 || fx>16 || fy<0 || fy>16){
        generateFruit()
       }
        setFruit({x:fx,y:fy})
    }

    


   
    return(
        <div className="container">
            <h1>{points}</h1>
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
            style={{background: isSnake? "green": isFruit? "red": "white" }}
          ></div>
        );
      })}
    </div>
  ))}
</div>
    )
}
export default App