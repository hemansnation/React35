// captcha generator

function captchaGenerator(){
    var alpha = new Array('A', 'B','C','D','E','F','G','H','a','b','c','d','e','f','g','h')
    //                     0    1   2
    // console.log(alpha[2]);

    // console.log(alpha[Math.floor(Math.random() * 16)]);
    var a = alpha[Math.floor(Math.random() * 16)]
    var b = alpha[Math.floor(Math.random() * 16)]
    var c = alpha[Math.floor(Math.random() * 16)]
    var d = alpha[Math.floor(Math.random() * 16)]
    var e = alpha[Math.floor(Math.random() * 16)]
    var f = alpha[Math.floor(Math.random() * 16)]

    var result = a +" "+ b +" "+ c +" "+ d +" "+ e +" "+ f
    console.log(result);
    
}
captchaGenerator()


// isValid


// events
// innerHTML -- value