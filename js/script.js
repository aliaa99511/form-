


var notification=document.getElementById("notification");
var para=document.getElementById("para");
var closse=document.getElementById("close");



/*****************closse***************************** */
closse.addEventListener("click",function(){

    notification.classList.add("hidden");
})
/*****************closse***************************** */




var input1=document.getElementById("input1");
/*****************input1***************************** */
input1.onfocus=function sayHi() {

    notification.classList.remove("hidden");
    para.innerHTML="عفوا برجاء كتابة الإسم باللغة العربية"
    
    setTimeout(function() {
        notification.classList.add("hidden");
    }, 5000);
}
/*****************input1***************************** */




var input2=document.getElementById("input2");
/*****************input2***************************** */
input2.onfocus=function sayHi() {

    notification.classList.remove("hidden");
    para.innerHTML="عفوا برجاء كتابة الإسم باللغة الانجليزية"
    
    setTimeout(function() {
        notification.classList.add("hidden");
    }, 5000);
}
/*****************input2***************************** */




var input3=document.getElementById("input3");
/*****************input3***************************** */
input3.onfocus=function sayHi() {

    notification.classList.remove("hidden");
    para.innerHTML=" عفوا برجاء كتابة السن (18-45)"
    
    setTimeout(function() {
        notification.classList.add("hidden");
    }, 5000);
}
/*****************input3***************************** */



var input4=document.getElementById("input4");
/*****************input4***************************** */
input4.onfocus=function sayHi() {

    notification.classList.remove("hidden");
    para.innerHTML=" عفوا برجاء كتابة أرقام فقط"
    
    setTimeout(function() {
        notification.classList.add("hidden");
    }, 5000);
}
/*****************input4***************************** */




var input5=document.getElementById("input5");
/*****************input5***************************** */
input5.onfocus=function sayHi() {

    notification.classList.remove("hidden");
    para.innerHTML=" عفوا برجاء كتابة البريد الإلكتروني"
    
    setTimeout(function() {
        notification.classList.add("hidden");
    }, 5000);
}
/*****************input5***************************** */





var input6=document.getElementById("input6");
/*****************input6***************************** */
input6.onfocus=function sayHi() {

    notification.classList.remove("hidden");
    para.innerHTML=" عفوا برجاء كتابة العنوان"
    
    setTimeout(function() {
        notification.classList.add("hidden");
    }, 5000);
}
/*****************input6***************************** */






var bttn=document.getElementById("bttn");


/*****************bttn***************************** */
bttn.addEventListener("click",function(){
    var val1=document.getElementById("input1").value;
    
    if(val1==" "){
        //var check=document.getElementById("check");
        //check.classList.remove("none");
        //check.textContent=" عفوا يرجي ملئ جميع البيانات"
        notification.classList.remove("hidden");
        para.innerHTML=" عفوا برجاء ملئ جميع البيانات "
        
        setTimeout(function() {
            notification.classList.add("hidden");
        }, 5000);

    }else{

        
    }

})

/*****************bttn***************************** */




/*    if(val1=null){
        notification.classList.remove("hidden");
        para.innerHTML=" عفوا يرجي ملئ جميع البيانات"
        
        setTimeout(function() {
            notification.classList.add("hidden");
        }, 5000);
    }*/