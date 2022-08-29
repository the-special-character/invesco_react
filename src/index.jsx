import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import Child2 from './child2';
// import Todo from './Todo';
import App from './app';
import { AuthProvider } from './context/authContext';
import { ThemeProvider } from './context/themeContext';
import './main.css';

// Component Rules
// 1. Component Name should Start with capital letter
// 2. return only single element from component
// 3. apply inline style as object and property should be in camel case
// 4. instead of class use className as class is reserve word in javascript

// function App() {
//   const [value, setValue] = useState(0);
//   const [number, setNumber] = useState(0);
//   // const [isMounted, setIsMounted] = useState(false);

//   const isMounted = useRef(false);

//   // clousers
//   const increment = () => {
//     setValue(prevValue => prevValue + 1);
//   };

//   const decrement = () => {
//     setValue(prevValue => prevValue - 1);
//   };

//   const incrementNumber = () => {
//     setNumber(val => val + 1);
//   };

//   const decrementNumber = () => {
//     setNumber(val => val - 1);
//   };

//   // componentDidUpdate
//   useEffect(() => {
//     if (isMounted.current) {
//       console.log('Use Effect 3');
//     }
//   }, [value]);

//   // componentDidMount
//   useEffect(() => {
//     console.log('Use Effect 1');
//     isMounted.current = true;
//   }, []);

//   // componentDidUpdate
//   // componentWillUnmoute
//   // note: dont use useEffect without array
//   // useEffect(() => {
//   //   console.log('Use Effect 2');
//   // });

//   // componentDidMount
//   // componentDidUpdate

//   return (
//     <>
//       <div className="flex justify-center items-center h-10">
//         <button type="button" onClick={increment}>
//           +
//         </button>
//         <h1>{value}</h1>
//         <button type="button" onClick={decrement}>
//           -
//         </button>
//       </div>
//       <div className="flex justify-center items-center h-10">
//         <button type="button" onClick={incrementNumber}>
//           +
//         </button>
//         <h1>{number}</h1>
//         <button type="button" onClick={decrementNumber}>
//           -
//         </button>
//         {number < 10 && <Child2 />}
//       </div>
//     </>
//   );
// }

// this lines are for virtul dom
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <AuthProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AuthProvider>
  </BrowserRouter>,
);
