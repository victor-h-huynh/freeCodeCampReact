//////////////////////////////////////////////////////////////////////////////////////
// October 31st 2019 React: Create a Simple JSX Element //
/////////////////////////////////////////////////////////////////////////////////////

// const JSX = <h1>Hello JSX!</h1>

//////////////////////////////////////////////////////////////////////////////////////
// October 31st 2019 React: Create a Complex JSX Element //
/////////////////////////////////////////////////////////////////////////////////////

// write your code here

// const JSX = 
// <div>
//     <h1>Hello</h1>
//     <p>is</p>
//     <ul>
//         <li>this</li>
//         <li>thing</li>
//         <li>on</li>
//     </ul>
// </div>

//////////////////////////////////////////////////////////////////////////////////////
// October 31st 2019 React: Add Comments in JSX //
/////////////////////////////////////////////////////////////////////////////////////

// const JSX = (
//   <div>
//     <h1>This is a block of JSX</h1>
//     {/* This is a comment */}
//     <p>Here's a subtitle</p>
//   </div>
// );

//////////////////////////////////////////////////////////////////////////////////////
// October 31st 2019 React: Render HTML Elements to the DOM //
/////////////////////////////////////////////////////////////////////////////////////

// const JSX = (
//   <div>
//     <h1>Hello World</h1>
//     <p>Lets render this to the DOM</p>
//   </div>
// );
// // change code below this line
// ReactDOM.render(JSX, document.getElementById('challenge-node'))

//////////////////////////////////////////////////////////////////////////////////////
// November 1st 2019 React: Define an HTML Class in JSX //
/////////////////////////////////////////////////////////////////////////////////////

// const JSX = (
//   <div className="myDiv">
//     <h1>Add a class to this div</h1>
//   </div>
// );

//////////////////////////////////////////////////////////////////////////////////////
// November 1st 2019 React: Learn About Self-Closing JSX Tags //
/////////////////////////////////////////////////////////////////////////////////////

// const JSX = (
//   <div>
//     <h2>Welcome to React!</h2> 
//       <br />
//         <p>Be sure to close all tags!</p>
//     <hr />
//   </div>
// );

//////////////////////////////////////////////////////////////////////////////////////
// November 1st 2019 React: Create a Stateless Functional Components //
/////////////////////////////////////////////////////////////////////////////////////

// const MyComponent = function() {
//   // change code below this line

// return (
//   <div>
//     <h1>This is a string</h1>
//   </div>
// )

//   // change code above this line
// }

//////////////////////////////////////////////////////////////////////////////////////
// November 1st 2019 React: Create a React Component //
/////////////////////////////////////////////////////////////////////////////////////

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     // change code below this line
// return (
//   <div>
//     <h1>Hello React!</h1>
//   </div>
// )


//     // change code above this line
//   }
// };

//////////////////////////////////////////////////////////////////////////////////////
// November 1st 2019 React: Create a Component with Composition //
/////////////////////////////////////////////////////////////////////////////////////

// const ChildComponent = () => {
//   return (
//     <div>
//       <p>I am the child</p>
//     </div>
//   );
// };

// class ParentComponent extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h1>I am the parent</h1>
//         { /* change code below this line */ }
//         <ChildComponent/>
//         { /* change code above this line */ }
//       </div>
//     );
//   }
// };

//////////////////////////////////////////////////////////////////////////////////////
// November 1st 2019 React: Use React to Render Nested Components //
/////////////////////////////////////////////////////////////////////////////////////

// const TypesOfFruit = () => {
//   return (
//     <div>
//       <h2>Fruits:</h2>
//       <ul>
//         <li>Apples</li>
//         <li>Blueberries</li>
//         <li>Strawberries</li>
//         <li>Bananas</li>
//       </ul>
//     </div>
//   );
// };

// const Fruits = () => {
//   return (
//     <div>
//       { /* change code below this line */ }
//       <TypesOfFruit/>
//       { /* change code above this line */ }
//     </div>
//   );
// };

// class TypesOfFood extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <h1>Types of Food:</h1>
//         { /* change code below this line */ }
//           <Fruits/>
//         { /* change code above this line */ }
//       </div>
//     );
//   }
// };

//////////////////////////////////////////////////////////////////////////////////////
// November 1st 2019 React: Compose React Components //
/////////////////////////////////////////////////////////////////////////////////////

// class Fruits extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h2>Fruits:</h2>
//         { /* change code below this line */ }
//         <NonCitrus/>
//         <Citrus/>
//         { /* change code above this line */ }
//       </div>
//     );
//   }
// };

// class TypesOfFood extends React.Component {
//   constructor(props) {
//      super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h1>Types of Food:</h1>
//         { /* change code below this line */ }
//         <Fruits/>
//         { /* change code above this line */ }
//         <Vegetables />
//       </div>
//     );
//   }
// };

//////////////////////////////////////////////////////////////////////////////////////
// November 1st 2019 React: Render a Class Component to the DOM //
/////////////////////////////////////////////////////////////////////////////////////

// class TypesOfFood extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h1>Types of Food:</h1>
//         {/* change code below this line */}
//         <Fruits/>
//         <Vegetables/>
//         {/* change code above this line */}
//       </div>
//     );
//   }
// };

// // change code below this line
// ReactDOM.render(<TypesOfFood/>, document.getElementById("challenge-node"))

//////////////////////////////////////////////////////////////////////////////////////
// November 1st 2019 React: Write a React Component from Scratch //
/////////////////////////////////////////////////////////////////////////////////////

// change code below this line

// class MyComponent extends React.Component {

//   render () {
//       return (
//           <div>
//               <h1>My First React Component!</h1>
//           </div>
//       );
//   };
// }
// ReactDOM.render(<MyComponent/>, document.getElementById("challenge-node"))

//////////////////////////////////////////////////////////////////////////////////////
// November 1st 2019 React: Pass an Array as Props //
/////////////////////////////////////////////////////////////////////////////////////

// const List = (props) => {
//   { /* change code below this line */ }
//   return <p>{props.tasks.join(', ')}</p>
//   { /* change code above this line */ }
// };

// class ToDo extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h1>To Do Lists</h1>
//         <h2>Today</h2>
//         { /* change code below this line */ }
//         <List tasks={["Walk", "Cook", "Bake"]} />
//         <h2>Tomorrow</h2>
//         <List tasks={["Study", "Code", "Eat"]}/>
//         { /* change code above this line */ }
//       </div>
//     );
//   }
// };

//////////////////////////////////////////////////////////////////////////////////////
// November 1st 2019 React: Use Default Propss //
/////////////////////////////////////////////////////////////////////////////////////