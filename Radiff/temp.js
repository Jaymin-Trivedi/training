$('document').ready(function () {
    var tempArr = [];
    $('#temp').click(function () {
        
        tempArr.push($("#txt1").val());
        $("#tempP").html("" + tempArr);
        var sortedArr = tempArr.sort(function (a, b) {
            return a - b;
        });
        var str = "Jay min";
        var splittedStr = str.split(" ");
        console.log(sortedArr);
        //$("body").append("<p>"+splittedStr[0]+"</p>");
        console.log(tempArr.length);

        for (var i = tempArr.length-1; i <tempArr.length ; i++) {
            console.log(tempArr[i]);
            $("#tblId").html($("#tblId").html()+"<tr><td>"+tempArr[i]+"</td></tr>");
        }



    });

});