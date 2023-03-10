//تعریف کلید های ماشین حساب
let boxResult=document.querySelector("#box-result");
let backspace=document.querySelector("#backspace");
let deleteBtn=document.querySelector("#delete-btn");
let percent=document.querySelector("#percent");
let AbsoluteValue=document.querySelector("#Absolute-value");
let sin=document.querySelector("#sin");
let numbers=document.querySelectorAll(".numbers-btn");
let plus=document.querySelector("#plus");
let minus=document.querySelector("#minus");
let cos=document.querySelector("#cos");
let division=document.querySelector("#division");
let multiple=document.querySelector("#multiple");
let power=document.querySelector("#power");
let positiveAndNegative=document.querySelector("#positive-and-negative");
let root=document.querySelector("#root");
let thirdRoot=document.querySelector("#third-root");
let point=document.querySelector("#point");
let equal=document.querySelector("#equal");

//تعریف متغیر های سراسری
let hasPoint=false;
let number1,number2,result;
let operation;

//پاک کردن کل صفحه نمایش
deleteBtn.addEventListener('click',function (e){
    boxResult.value="";
    hasPoint=false;
})

//پاک کردن یک حرف از انتهای صفحه نمایش
backspace.addEventListener('click',function (e){
    let length=boxResult.value.length;
    let lastWord=boxResult.value.substr(length-1,length);
    if(lastWord=="."){
        hasPoint=false;
    }
    if(length>1){
        boxResult.value=boxResult.value.substr(0,length-1)
    }else {
        boxResult.value="";
    }
})

//سینوس
sin.addEventListener('click', function (e){
    number1=Number(boxResult.value);
    result=Math.sin(number1*Math.PI/180);
    boxResult.value=result;
})

//نمایش اعداد در صفحه نمایش
numbers.forEach(function(value){
    value.addEventListener('click' , function (e){
        boxResult.value+=e.target.textContent;
    })
})

//منفی و مثبت کردن اعداد
positiveAndNegative.addEventListener('click',function (){
    if(boxResult.value==""){
        boxResult.value="-"
    }else{
        boxResult.value=boxResult.value*-1;
    }
})

//اضافه کردن نقطه جهت اعشاری کردن اعداد
point.addEventListener('click',function (){
    if(hasPoint==false){
        boxResult.value+=".";
        hasPoint=true;
    }
})
//عملیات جمع
plus.addEventListener('click', function (){
    number1=Number(boxResult.value);
    boxResult.value=""
    operation="+"
})

//عملیات تقسیم
division.addEventListener('click',function (){
    number1=Number(boxResult.value);
    boxResult.value=""
    operation="÷";
})
//عملیات تفریق
minus.addEventListener('click', function (){
    number1=Number(boxResult.value);
    boxResult.value=""
    operation="-";
})

//عملیات ضرب
multiple.addEventListener('click', function (){
    number1=Number(boxResult.value);
    boxResult.value="";
    operation="×";
})

//عملیات توان
power.addEventListener('click', function (){
    number1=Number(boxResult.value);
    boxResult.value=""
    operation="^";
})

//کسینوس
cos.addEventListener('click', function (e){
        number1=Number(boxResult.value);
        result=Math.cos(number1*Math.PI/180);
        boxResult.value=result;
})
//ریشه دوم
root.addEventListener('click', function (e){
        number1=Number(boxResult.value);
        result=Math.sqrt(number1);
        boxResult.value=result;
})
//درصد
percent.addEventListener('click', function (e){
        number1=Number(boxResult.value);
        boxResult.value="";
        operation="%"

})
//قدرمطلق
AbsoluteValue.addEventListener('click', function (e){
        number1=Number(boxResult.value);
        result=Math.abs(number1);
        boxResult.value=result;
})
//مساوی
equal.addEventListener('click',function (){
    number2=Number(boxResult.value);
    switch (operation){
        case "+":
            result=number1+number2;
            break;
        case "-":
            result=number1-number2;
            break;
        case "×":
            result=number1*number2;
            break;
        case "÷":
            result=number1/number2;
            break;
        case "^":
            result=Math.pow(number1,number2);
            break;
        case "%":
            result=number1%number2;
            break;
    }
    boxResult.value=result;
})
