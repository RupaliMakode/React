import React from "react";

export default () => {
  // return(
  //     <div>
  //         <h1 style={{backgroundColor :"pink"}}>In My Heading</h1>
  //         <h2 style={{backgroundColor :"blue"}}>
  //             My Sub-Heading
  //         </h2 >
  //         <div style={{backgroundColor :"red"}}>
  //             <p style={{ color:"lightyellow"}}>
  //                 This Is My First Paragraph
  //             </p>
  //             <p style={{ color:"lightcyan"}}>
  //                 This Is My  Second Paragraph
  //             </p>
  //         </div>
  //     </div>
  // );

  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      { style: { backgroundColor: "red" } },
      "In My Heading"
    ),
    React.createElement(
      "h2",
      { style: { backgroundColor: "green" } },
      "My Sub-Heading"
    ),
    React.createElement(
        "div", { style: { backgroundColor: "yellow" }},
        React.createElement(
            "p",
            { style: { color: "orange" } },
            " This Is My First Paragraph"
          ),
          React.createElement(
            "p",
            { style: { color: "blue" } },
            " This Is My  Second Paragraph"
          )
    )
  )
};
