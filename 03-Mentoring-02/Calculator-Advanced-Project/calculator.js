
function appendToDisplayPanel(text){

  // Existing Content
  // A - ""
  // A - 0
  const A = getIOPanelText();

  // B - 0
  // B - 0
  const B = text;

  // "" + 0 -> 0
  // 0 + 0 -> 00
  const finalText = A + B;

  setIOPanelText(finalText);
}

function getIOPanelText(){

  const ioPanel = document.getElementById("ioPanel");
  const text = ioPanel.innerText

  return text;
}


function setIOPanelText(text){

  const ioPanel = document.getElementById("ioPanel");
  ioPanel.innerText = text;

}


function handleClear(){

  setIOPanelText("");
}

function handleBackspace(){

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


function handleEnter(){

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

function handleNegation(){

  // 80
  // -50
  const aNumber = getIOPanelTextAsNumber();

  // 80 -> -80
  // -50 -> +50
  const negatedValue = -1 * aNumber
  // const negatedValue = -aNumber

  setIOPanelText(negatedValue);

}

function handleSQRT(){

  const aNumber = getIOPanelTextAsNumber();

  const sqrtValue = Math.sqrt(aNumber);
  setIOPanelText(sqrtValue);

}

function handleSquare(){

  const aNumber = getIOPanelTextAsNumber();

  const outcome = (aNumber * aNumber);
  setIOPanelText(outcome);

}

function getIOPanelTextAsNumber(){

  const ioPanelText = getIOPanelText();
  const aNumber = parseInt(ioPanelText, 10);

  return aNumber;
}


function handleSIN(){

  // 30
  const degrees = getIOPanelTextAsNumber();

  const radians = fromDegreesToRadians(degrees);

  // Radians
  const outcome = Math.sin(radians)

  setIOPanelText(outcome);

}

function handleCOS(){

  // 30
  const degrees = getIOPanelTextAsNumber();
  
  const radians = fromDegreesToRadians(degrees);

  // Radians
  const outcome = Math.cos(radians)

  setIOPanelText(outcome);

}

function handleTAN(){

  // 30
  const degrees = getIOPanelTextAsNumber();
  
  const radians = fromDegreesToRadians(degrees);

  // Radians
  const outcome = Math.tan(radians)

  setIOPanelText(outcome);

}

function fromDegreesToRadians(degrees){

  const radians = degrees * 3.14 / 180
  return radians;
}

function handleEXP(){

  const aNumber = getIOPanelTextAsNumber();
  
  const outcome = Math.exp(aNumber)

  setIOPanelText(outcome);
}

function handleLOG(){

  const aNumber = getIOPanelTextAsNumber();
  
  const outcome = Math.log(aNumber)

  setIOPanelText(outcome);

}