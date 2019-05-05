import React from "react";

const NotesTemplate = props => {
      console.log("data: ", props.data);
      return (
            <div>
                  <h1>Notes Page</h1>
                  <h3>{props.content.title}</h3>
                  {props.children}
            </div>
      );
};

export default NotesTemplate;
