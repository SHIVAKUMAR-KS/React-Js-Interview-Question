import { useState, useRef } from "react";

const Moveable = () => {
    const [moving, setMoving] = useState({ x: 0, y: 0 })
    const blockRef = useRef();

    const moveBlock = (dir) => {

        const boundries = {
            up: moving.y <= 0,
            left: moving.x <=0,
            right: moving.x >= blockRef?.current.offsetWidth - 200,
            down: moving.y >= blockRef?.current.clientHeight - 200
        }

        if (boundries[dir]) return;

        const updates = {
            up: { y: moving.y - 10 },
            down: { y: moving.y + 10 },
            left: { x: moving.x - 10 },
            right: { x: moving.x + 10 }
        }

        setMoving(prevState => ({ ...prevState, ...updates[dir] }));
    }

    return (
        <div ref={blockRef}>
            <div>
                <button className="horizontal" onClick={() => moveBlock("up")} style={{color: 'orange'}}>Up</button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                <button  className="vertical" onClick={() => moveBlock("left")} style={{color: 'orange'}}>Left</button>
                <div className="wrapper">
                    <div 
                        className="block"
                        style={{
                            position: 'absolute',
                            left: moving.x,
                            top: moving.y
                        }}></div>
                </div>
                <button className="vertical" onClick={() => moveBlock("right")} style={{color: 'orange'}}>Right</button>
            </div>
            <div>
                <button className="horizontal" onClick={() => moveBlock("down")} style={{color: 'orange'}}>Down</button>
            </div>        
        </div>
    )
}

export default Moveable;