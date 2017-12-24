$("#country .line .yj").click(function(){
    $("#yjinfo").show()
})

$("#country .line .mj").click(function () {
    $("#mjinfo").show()
})
$("#country .line .rj").click(function () {
    console.log("hello")
    $("#rjinfo").show()
})
$("#country .line .gcj").click(function () {
    $("#gcjinfo").show()
})

$("#country .line .hj").click(function () {
    $("#hjinfo").show()
})

$(".close").click(function(){
    $(".overlay").hide()
})


$(window).scroll(function () {
    console.log("tanhe");
    if (window.scrollY < 2300 && window.scrollY > 1400)  {
        $("#legend").show()
    } else if (window.scrollY < 4000 && window.scrollY > 3200){
        $("#legend").show()
    }
    else {
        $("#legend").hide()
    }
})

$(document).ready(function(){
    alert("建议使用chrome浏览器浏览！\n稍等片刻，精彩内容马上开始！")
})