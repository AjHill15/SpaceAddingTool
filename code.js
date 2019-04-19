function addCharacter(orginalText, modChar, modIndex) {
    var outputtext = "";

    for (var i = 0; i < orginalText.length; i++) {
        if ((i > 0) && (i % modIndex == 0))
        {
            outputtext += modChar;
        }
        outputtext += orginalText[i];
    }

    return outputtext;
}

function detectIsBinary(originalText){
    var IsBinary = false;
    // var re = new RegExp("([0-1])(^[A-Z][a-z])");
    // if(re.test(originalText.toString()))
    // {
    //     IsBinary = true;
    // }
    return IsBinary;
}

function makeVisible(elementName)
{
    var element = document.getElementById(elementName);
    element.style.display = "block";
}

function makeInvisible(elementName)
{
    var element = document.getElementById(elementName);
    element.style.display = "none";
}

function start() {
    var index = parseInt(document.getElementById("modIndex").value);
    var octet = 8;
    var modifier = document.getElementById("modChar").value;
    var startingText = document.getElementById("inputText").value;

    var isBinary = detectIsBinary(startingText);
    if(isBinary * (index == octet))
    {
        makeVisible("binaryPanel");
    }
    else
    {
        makeInvisible("binaryPanel");
    }

    var outputText = addCharacter(startingText, modifier, index);

    document.getElementById("outputText").value = outputText;
}

function translate()
{
    var input = document.getElementById("outputText").value;
    var splitChar = document.getElementById("modChar").value;
    var translation = TranslateBinary(input, splitChar);
    makeVisible("translationPanel");
    document.getElementById("translatedText").value = translation;
}
function TranslateBinary(inputText, splitChar)
{
    var newBin = inputText.split(splitChar);
    var binCode = [];
    for(var i = 0; i < newBin.length; i++)
    {
        binCode.push(String.fromCharCode(parseInt(newBin[i],2)));
    }
    return binCode.join("");
}