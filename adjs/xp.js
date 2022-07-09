$('.bl i').on('click',function(){
    $('.bl').css('display','none');
    $('.tap').css('width','100%');
    $("#thu").css('display','block');
})
$("#thu").on("click",function(){
    $('.tap').css('width','80%');
    $('.bl').css('display','block');
    $("#thu").css('display','none');
})
var pl=$('#part1');
var pr=$('#part2');
$("#part-right").on('click',function(){
    pl.text('Tập 4');
    pr.text('Tập 5');
})
$('#part-right').mousedown(function(){
    pl.css('color','red');
    pr.css('color','red');
});
$('#part-right').mouseup(function(){
    pl.css('color','aqua');
    pr.css('color','aqua');
});
$('#part-left').mousedown(function(){
    pl.css('color','red');
    pr.css('color','red');
});
$('#part-left').mouseup(function(){
    pl.css('color','aqua');
    pr.css('color','aqua');
});
$("#part-left").on('click',function(){
    pl.text('Tập 2');
    pr.text('Tập 3');
})
// var t=0;
// function time(){
//     t=t+1;
// }
// $('#video').on('play',function(){
//     setTimeout(time,1);
// })
     
$('#luu').on('click',function(){

    $('.addtime').text(Math.ceil($('#myVideo').get(0).currentTime)-1);
}) 

