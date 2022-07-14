// import React, { useState } from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import LogIn from "./LogIn";

// function SignUp() {
//   const [signUpForm, setSignUpForm] = useState({
//     username: "",
//     password: "",
//     hasAgreed: false
//   })

//   function handleChange(e) {
//     let target = e.target;
//     let value = target.type === "checkbox" ? target.checked : target.value;
//     let name = target.name;
//     setSignUpForm({...signUpForm,
//       [name]: value});
//     console.log(name, value)
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log("The form was submitted with the following data:");
//   }

//   return (
//     <div className="App">
//     <div className="appForm">

//       <div className="formTitle">
//         <h2>Welcome to Game Booker</h2>
//         <span>
//           Create a free account or from Sign Up{" "} 
//           <a href="/log-in">log in</a>
//         </span>
//       </div>

//       <div className="formCenter">
//         <form onSubmit={handleSubmit} className="formFields">
//           <div className="formField">
//             <label className="formFieldLabel">
//               Username
//             </label>
//             <input
//               type="text"
//               id="username"
//               className="formFieldInput"
//               placeholder="Create a username"
//               name="username"
//               value={signUpForm.username}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="formField">
//             <label className="formFieldLabel">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               className="formFieldInput"
//               placeholder="Create a password"
//               name="password"
//               value={signUpForm.password}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="formField">
//             <label className="formFieldCheckboxLabel">
//               <input
//                 className="formFieldCheckbox"
//                 type="checkbox"
//                 name="hasAgreed"
//                 value={signUpForm.hasAgreed}
//                 onChange={handleChange}
//               />{" "}
//               I have read and acknowledge the statements in the{" "}
//               <a href="null" className="formFieldTermsLink">terms of service</a>
//             </label>
//           </div>
//           <div className="formField">
//             <button className="formFieldButton">Sign Up</button>{" "}
//               <br></br>
//               <br></br>
//             <a href="/log-in" className="formFieldLink">
//             I'm already a member
//             </a>
//           </div>
//         </form>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default SignUp