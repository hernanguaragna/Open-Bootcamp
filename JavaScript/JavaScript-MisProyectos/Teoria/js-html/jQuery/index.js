//$("selector").accion()

// $(document).ready(()=>{
    
// })

$(()=>{
    //selectores:
    // si quiero hacer un cambio en li
    //id= ("#el")
    //class= (".el")
    // $("#el-1").hide()
    // $(".hide-btn").hide()
$(".hide-btn").click(()=>{
    // $("h1").hide();
    $("h1").fadeOut();

})
$(".show-btn").click(()=>{
    // $("h1").show();
    $("h1").fadeIn();

})

$("li").click(()=>{
    $("h1").css({color:"red"})
})
$(".new-element").click(()=>{
    $("ul").append("<li>New Element</li>")
});
$("li").mouseenter((elem)=>{
    elem.target.style.color = "blue"

})
$("li").mouseleave((elem)=>{
 elem.target.style.color = "black"
})

});


