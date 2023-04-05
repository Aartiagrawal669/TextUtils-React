import React ,{useState} from 'react'

export default function TextForms(props) {
   
    const[text,setText]=useState(" ")
    
    const handleUpClick = ()=>{
    //   console.log("upperCase button is clicked");
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to UpperCase","success");

    }

      const handleLoClick = ()=>{
      //   console.log("upperCase button is clicked");
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to LowerCase","success");

      }

      const handleClearClick = ()=>{
        //   console.log("upperCase button is clicked");
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared","success");

        }

      const handleOnchange = (event)=>{
          // console.log("onChange");
          setText(event.target.value);
        }
      
        const handleCopy = ()=>{
          var text= document.getElementById("myBox")
          text.select()
          navigator.clipboard.writeText(text.value); 
          props.showAlert("Copied to Clipboard","success");

        }

        const handleExtraSpaces= ()=>{
         let newtext=text.split(/[ ]+/);
         setText(newtext.join(" "))
         props.showAlert("Removed ExtraSpaces","success");

        }

  return (
    <>
    <div className='container' style={{color:props.mode ==='dark'?'white':'black'}} >
        <h1>{props.heading}</h1>
    <div className="mb-3">  
    <textarea className="form-control" id="myBox" rows="10" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode ==='dark'?'#042743':'white',color:props.mode==="dark"?"white":'black'}}></textarea> 
    </div>
    <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove ExtraSpaces</button>
    </div>
    
    <div className="container my-3" style={{color:props.mode ==='dark'?'white':'black'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words ,{text.length} characters</p>
      <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes Read</p>
      <h2>Preview of Text</h2>
      <p>{text.length>0?text:"Enter your something to TextBox to Preview here"}</p>
    </div>
    </>
  )
}
