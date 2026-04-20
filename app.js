import React from "react";
import ReactDOM from "react-dom/client";

/**
 * 
 * <div>
 *     <div>
 *        <h1>Hello World from React!!!!!!</h1>
 *       <h2>Heading 2</h2>
 *      </div>
 * /div>
 * <div>
 *     <div>
 *        <h1>Hello World from React!!!!!!</h1>
 *       <h2>Heading 2</h2>
 *      </div>
 * /div>
 */

// const parent = React.createElement("div", { id: "parent" }, [
//     React.createElement("div", { id: "child1", key: "child1" }, [
//         React.createElement("h1", { key: "h1-1", id: "heading1" }, "Hello World from React Heading 1!!!!!!"),
//         React.createElement("h2", { key: "h2-1", id: "heading2" }, "Heading 2"),
//     ]),

//     React.createElement("div", { id: "child2", key: "child2" }, [
//         React.createElement("h1", { key: "h1-2", id: "heading3" }, "Hello World from React!!!!!!"),
//         React.createElement("h2", { key: "h2-2", id: "heading4" }, "Heading 4"),
//     ]),
// ]);


// const heading=<h1 id="heading1">Hello World from React Heading 1!!!!!!</h1>

const title = "Heading 1 from React";

const Heading = ()=>(
    <div id="div">
        {title}
    <h1 id="heading1">Hello World from React Heading 1!!!!!!</h1>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Heading />);