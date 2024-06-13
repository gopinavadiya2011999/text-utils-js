
 import React,{useState} from 'react'
 

 export default function TextForm (props) {

  

const [text,setText] = useState("");
const  handleUplick = ()=>{
  setText (text.toUpperCase());
  props.showAlert(text.length===0?"Please enter text first":"Your text has been converted into upper case",text.length===0?'danger':"success");
};
const  clearTextClick = ()=>{
  const newText = "";
  setText (newText);
  props.showAlert(text.length===0?"Please enter text first":"Your text has been cleared",text.length===0?'danger':"success");
};

const  handleLwClick = ()=>{
  setText (text.toLowerCase());
  props.showAlert(text.length===0?"Please enter text first":"Your text has been converted into lower case",text.length===0?'danger':"success");
};

const  reverseText = ()=>{
  setText (text.split('').reverse().join(''));
  props.showAlert(text.length===0?"Please enter text first":"Your text has been reversed",text.length===0?'danger':"success");
};

const handleOnChange = (event)=>{
  setText (event.target.value);
}

const copyToClipboard = () => {
  const newText = document.getElementById('myBox');
  newText.select();
 navigator.clipboard.writeText(newText.value);
 document.getSelection().removeAllRanges(); 
 props.showAlert(text.length===0?"Please enter text first":"Your text has been copied",text.length===0?'danger':"success");

}


const removeExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert(text.length===0?"Please enter text first":"Your text's extra spaces has been removed",text.length===0?'danger':"success");

}


const toTitleCase=()=> {
  setText( text.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  ));
  props.showAlert(text.length===0?"Please enter text first":"Your text has been converted into title case",text.length===0?'danger':"success");
}

    return (
      <>
    
     <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'} } id="myBox" rows="8"></textarea>
        </div> 
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" style={ {color:props.mode==='dark'?'black':'white', background :props.mode==='dark'?'white':props.selectedColour===null? 'black':(props.selectedColour),border:'0px'}} onClick={handleUplick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1'style={ {color:props.mode==='dark'?'black':'white',background :props.mode==='dark'?'white':props.selectedColour===null? 'black':(props.selectedColour),border:'0px'}} onClick={handleLwClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1'style={ {color:props.mode==='dark'?'black':'white',background :props.mode==='dark'?'white':props.selectedColour===null? 'black':(props.selectedColour),border:'0px'}} onClick={clearTextClick}>Clear</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' style={ {color:props.mode==='dark'?'black':'white',background :props.mode==='dark'?'white':props.selectedColour===null? 'black':(props.selectedColour),border:'0px'}} onClick={reverseText}>Reverse</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' style={ {color:props.mode==='dark'?'black':'white',background :props.mode==='dark'?'white':props.selectedColour===null? 'black':(props.selectedColour),border:'0px'}} onClick={toTitleCase}>Title Case</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' style={ {color:props.mode==='dark'?'black':'white',background :props.mode==='dark'?'white':props.selectedColour===null? 'black':(props.selectedColour),border:'0px'}} onClick={copyToClipboard}>Copy To Clipboard</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1'style={ {color:props.mode==='dark'?'black':'white',background :props.mode==='dark'?'white':props.selectedColour===null? 'black':(props.selectedColour),border:'0px'}}  onClick={removeExtraSpaces}>Rmove Extra Spaces</button>
      
     </div>
     <div className="container my-3">
      
      <h2>Your text summary</h2>
      <p>{text.length===0 ? 0 :text.trim().split(/\s+/).length} words and {text.trim().length} characters</p>
      {/* 0.008 is 1 minutes and 125 words read as per average  (1/125) = 0.008*/}
      <p>{text.length>0?(0.008 *text.split(" ").length):0} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Something in textbox to preview it here"}</p>

      </div> 
      </>
     
   )
 }
 