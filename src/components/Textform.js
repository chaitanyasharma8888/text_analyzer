// import react, { useState } from 'react';


// export default function Textform(props) {
//     const handleUpClick = () => {
//         // console.log('upper case was clicked'+text);
//         let newText = text.toUpperCase();
//         setText(newText);
//     }
//     const handleOnClick = () => {
//         // console.log('upper case was clicked'+text);
//         let newText = text.toLowerCase();
//         setText(newText);
//     }

//     const handleOnChange = (event) => {
//         // console.log('Handle on Change Fired');
//         setText(event.target.value);
//     }
//     // const [text,useText]=useState('Enter your name');
//     const [text, setText] = useState('');
//     // text="new text"; this is wrong way gives error
//     // setText("Change the Value");//correct way 
//     return (
//         <>
//             <div className="container mb-3">
//                 <h3>{props.heading}</h3>
//                 <div>
//                     <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
//                 </div>

//                 <button type="button" className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
//                 <button type="button" className="btn btn-primary my-3 mx-1" onClick={handleOnClick}>Convert to LowerCase</button>
//             </div>
//             <div className="container">
//                 <h2>Your text Summary</h2>
//                 <p>{text.split(" ").length} words and {text.length} characters</p>
//                 <p>{0.008*(text.split(" ").length)}</p>
//                 <h2>Preview</h2>
//                 <p>{text}</p>
//             </div>
//         </>

//     )
// }



// practise

import react, { useState } from 'react';
export default function Textform(props) {
    const [text, setText] = useState('');

    const upperCaseHandle = () => {
        console.log('this is in upperCase');
        let newText = text.toUpperCase();
        setText(newText);
    }
    const lowerCaseHandle = () => {
        console.log("this is lower case");
        let newText = text.toLowerCase();
        setText(newText);
    }
    let onChangeHandle = (event) => {
        console.log("Editing Mode");
        setText(event.target.value);
    }

    let clearText = () => {
        setText('');
    }

    let copyText=()=>{
        let textCopy=document.getElementById('myBox');
        textCopy.select();
        navigator.clipboard.writeText(textCopy.value);

    }

    let removeSpaces=()=>{
        
        let seeText=text.split(/[ ]+/);
        setText(seeText.join(" "))
    }
        return (
        <>
            <div className="container">
                <h1>Enter text Here:{props.heading}</h1>
                <textarea className="form-control" id="myBox" value={text} rows="8" onChange={onChangeHandle}></textarea>
                <button type="button" className="btn btn-primary my-2 mx-1" onClick={upperCaseHandle}>Convert to UpperCase</button>
                <button type="button" className="btn btn-primary mx-1" onClick={lowerCaseHandle}>Convert to LowerCase</button>
                <button type="button" className="btn btn-primary mx-1" onClick={clearText}>Clear Text</button>
                <button type="button" className="btn btn-primary mx-1" onClick={copyText}>Copy Text</button>
                <button type="button" className="btn btn-primary mx-1" onClick={removeSpaces}>Remove Extra Spaces</button>


            </div>
            <div className="container">
                <h2>Text Summary</h2>
                <p>{text.split(" ").length} word and {text.length} characters</p>
                <p>Reads {0.67 * text.split("").length} per minute</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>

        </>
    )

}