import React from 'react'

export default function About(props) {

    // const[myStyle,setmyStyle]=useState({
    //     color: 'white',
    //     backgroundColor: 'black'
    // });
    
    // const[btnText,setbtnText]=useState("Enable Dark Mode")

    // const toggleStyle =()=>{
    //     if(myStyle.color ==='white'){
    //         setmyStyle({
    //             color: 'black',
    //             backgroundColor: 'white',
    //         })
    //         setbtnText("Enable Dark Mode")
    //     }
    //     else{
    //         setmyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //         }) 
    //         setbtnText("Enable Light Mode")
    //     }
    // }
    let myStyle = {
        color: props.mode==='dark'?'white':'#042743',
        backgroundColor: props.mode==='dark'?'#042743':'white'
        // border:'2px solid',
        // borderColor:props.mode=='dark'?'white':'#042743'
    }

  return (
    <div class='container' >  
    <h2 class="my-3" style={myStyle} >About Us</h2>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item" style={myStyle}>
            <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}> 
              <strong>Analyze Your text</strong>
            </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            Textutils gives you a way to analyze your text quickly and efficiently.
            </div>
            </div>
        </div>
        <div class="accordion-item" style={myStyle}>
            <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
              <strong>Free to use</strong> 
            </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
            </div>
            </div>
        </div>
        <div class="accordion-item" style={myStyle}> 
            <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
              <strong>Browser Compatible</strong> 
            </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
            </div>
            </div>
        </div>
      </div>
      {/* <div class="container">
      <button class="btn btn-primary my-3" type="button" onClick={toggleStyle}>{btnText}</button>
      </div> */}
    </div>
  )
}
