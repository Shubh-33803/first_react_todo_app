import { useState } from "react";

function ToDoInput({ addList }) {
  let [inputText, setInputText] = useState("");

  let handleOnChange = (event) => {
        setInputText(event.target.value);
  };

  let handleEnter = (event) => {
        if(event.keyCode === 13){
            addList(inputText)
            setInputText("")
        }
  }

  return (
    <>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add items..."
          className="input-box"
          value={inputText}
          onChange={handleOnChange}
          onKeyDown={handleEnter}
        />
        <button className="AddBtn" onClick={() => {
            addList(inputText)
            setInputText("")
        }}>
          +
        </button>
        
      </div>
    </>
  );
}

export default ToDoInput;
