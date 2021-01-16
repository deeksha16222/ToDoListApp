import React from 'react';

const ToDoLists = (props) => {
  const deleteItems= () => {

  };

return (
    <>
    <div className='todo_style'>
    <i class=" fa fa-times" area hidden="true"
    onClick = { () => {
        props.onSelect(props.id);
    }

    }
    />
    <li> {props.text} </li>
    </div>
    </>
);
};
export default ToDoLists;
