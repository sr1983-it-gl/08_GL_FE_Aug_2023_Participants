
function identityAllButtons(){

  const allButtons 
    = document.getElementsByClassName("button")

  const allButtonsArray = Array.from(allButtons);
  console.log(allButtonsArray);

  return allButtonsArray;
}

function addClickListener(){

  const allButtonsArray = identityAllButtons();

  allButtonsArray.forEach( (button, index, buttonsAray) => {

    button.addEventListener("click", handleGenericEvent)

  })
}

function handleGenericEvent(e){

  // console.log("Button clicked " + e);

  const divButtonTarget = e.target
  const text = divButtonTarget.innerText;

  if (text == "CLEAR"){

    console.log("CLEAR BUTTON")
    handleClear(e);
  }else if (text == "BACKSPACE"){
    
    console.log("BACKSPACE BUTTON")

    handleBackspace(e);

  }else if (text == "="){

    console.log("= BUTTON")

    handleEquals(e);
  }else {

    // Numbers
    // Operators
    // .
    // Paranthesis

    appendDisplayPanel(e)
  }

}

function appendDisplayPanel(e){

  // Existing Content
  // A - ""
  // A - 7
  const A = getIOPanelText();

  // User Typed / Clicked Content
  const divButtonTarget = e.target

  // B - 7
  // B - 8
  const B = divButtonTarget.innerText;

  // "" + 7 -> 7
  // 78  
  const finalText = A + B;

  setIOPanelText(finalText);
}

// 7
// 78

// 7
// 8


// function handleNumbers(e){

// }

// function handleOperators(e){

// }

function handleClear(e){

  setIOPanelText("");
}

function handleBackspace(e){

  // 789
  // 78
  // 7
  // ""
  const ioPanelText = getIOPanelText();

  if (ioPanelText.length != 0){
  
    // 78
    // 7
    // ""
    const tempText = ioPanelText.substring(0, ioPanelText.length - 1)
    console.log("After Backspace ->" + tempText);

    setIOPanelText(tempText);
  }else{

    console.log("No text present in IOPanel")
  }
}

// function handleParanthesis(e){

// }

function handleEquals(e){

  const ioPanelText = getIOPanelText();

  if (ioPanelText == ""){

    // alert("No value entered")

    console.log("No value entered")
  }else{
    
    try{
      const outcome = eval(ioPanelText)
      setIOPanelText(outcome)
    }catch (error){
      setIOPanelText("Invalid Expression [" + ioPanelText + "]")
    }
  }
}

// function handleDot(e){

// }


function setIOPanelText(text){

  const ioPanel = document.getElementById("ioPanel");
  ioPanel.innerText = text;

}

function getIOPanelText(){

  const ioPanel = document.getElementById("ioPanel");
  const text = ioPanel.innerText

  return text;
}


function main(){

  addClickListener();
}

main();