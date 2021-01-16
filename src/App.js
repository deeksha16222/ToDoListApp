import React, { useState } from "react";
const App = (props) => {
  return(
<>
<div className="main_div">
<div className="center_div">
<br/>
<h1> ToDoList </h1>
<br/>
<input type="text" placeholder="Add an item"/>
<button> + </button>
<ol>
<li> buy apple </li>
</ol>
</div>
</div>
</>
);
};
export default App;