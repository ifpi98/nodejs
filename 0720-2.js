tempNumber1 = 10203;
tempNumber2 = "안녕하세요";
tempNumber3 = -1293;
tempNumber4 = 5005;

tempString = "";
lennumber = 0;
number = 0;

checkNumber(tempNumber1);
checkNumber(tempNumber2);
checkNumber(tempNumber3);
checkNumber(tempNumber4);
checkNumber2(tempNumber1);
checkNumber2(tempNumber2);
checkNumber2(tempNumber3);
checkNumber2(tempNumber4);

function checkNumber(_tempNumber) {
    if (!isFinite(_tempNumber)) {
        console.log("숫자가 아닙니다");
    } else if (_tempNumber < 0) {
        console.log("0이거나 음수입니다.");
    } else {
        // console.log(_tempNumber);
        tempString = _tempNumber.toString()
        lennumber = tempString.length;
        // console.log(lennumber);
        // console.log(tempString[0]);
        // console.log(tempString[lennumber-1]);
        if (tempString[0] == tempString[lennumber - 1]) {
            console.log("같습니다.");
        } else {
            console.log("다릅니다.");
        }

    }
}

function checkNumber2(_tempNumber) {
    var tempArray = [];

    if (!isFinite(_tempNumber)) {
        console.log("숫자가 아닙니다");
    } else if (_tempNumber < 0) {
        console.log("0이거나 음수입니다.");
    } else {

        while (_tempNumber != 0) {
            tempArray.push(_tempNumber % 10);
            _tempNumber = parseInt(_tempNumber / 10);
            // console.log(_tempNumber)
        }

        // console.log(tempArray[0]);
        // console.log(tempArray[tempArray.length - 1]);

        if (tempArray[0] == tempArray[tempArray.length - 1]) {
            console.log("같습니다.");
        } else {
            console.log("다릅니다.");
        }

    }
}
