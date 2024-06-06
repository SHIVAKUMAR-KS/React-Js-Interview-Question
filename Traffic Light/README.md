# Traffic Light Component using React

## Description
This project implements a simple traffic light component using React. The traffic light consists of three lights: red, yellow, and green. These lights switch from green to yellow to red after predetermined intervals and loop indefinitely. Each light is lit for the following durations:
- Red light: 4000ms
- Yellow light: 500ms
- Green light: 3000ms

## Requirements
1. **React Component**: Create a component called `TrafficLight`.
2. **Lights**: The component should display three lights: red, yellow, and green.
3. **Intervals**: Switch the lights based on the following intervals:
    - Red light: 4000ms
    - Yellow light: 500ms
    - Green light: 3000ms
4. **Looping**: The traffic light should loop indefinitely, switching between colors in the specified order.
5. **Single Light Active**: Ensure only one light is active at a time.
6. **Styling**: Style the traffic light to make it visually appealing using CSS.

## Example Behavior
1. Initially, the red light should be active.
2. After 4000ms, the red light turns off, and the green light turns on.
3. After 3000ms, the green light turns off, and the yellow light turns on.
4. After 500ms, the yellow light turns off, and the red light turns on.
5. This sequence repeats indefinitely.

## Implementation

### TrafficLight Component

```jsx

import React, { useState, useEffect } from "react";

const LIGHTS = {
  red: "red",
  green: "green",
  yellow: "yellow",
};

const TrafficLight = () => {
  const [active, setActive] = useState(LIGHTS.yellow);

  useEffect(() => {
    switch (active) {
      case LIGHTS.red:
        setTimeout(() => {
          setActive(LIGHTS.yellow);
        }, 4000);
        break;
      case LIGHTS.yellow:
        setTimeout(() => {
          setActive(LIGHTS.green);
        }, 500);
        break;
      case LIGHTS.green:
        setTimeout(() => {
          setActive(LIGHTS.red);
        }, 3000);
        break;
    }
  }, [active]);

  return (
    
    <div className="wrapper">
      <h1>Traffic Lights</h1>
      <div
        className="light green"
        style={active !== LIGHTS.green ? { opacity: 0.5 } : null}
      >
        A
      </div>
      {/* <div className="go-proceed">
        <h1>Go or Proceed</h1>
      </div> */}
      <div
        className="light yellow"
        style={active !== LIGHTS.yellow ? { opacity: 0.5 } : null}
      >
        B
      </div>
      <div
        className="light red"
        style={active !== LIGHTS.red ? { opacity: 0.5 } : null}
      >
        C
      </div>
      
    </div>
  );
};


export default TrafficLight;
