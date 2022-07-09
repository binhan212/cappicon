// chuyển slide video
var i =1;
var N=1;
function next(){
    if(i<N)
        i+=1;
    else
        i=1;
    var x = document.getElementById("myVideo");
    x.setAttribute("src","video/"+i+".mp4");

}
function back(){
    if(i>1)
        i-=1;
    else
        i=N;
    document.getElementById("slide").setAttribute("src","video/"+i+".mp4");      
}
// function AutoPlay()
// {
//     setInterval(next,3000);
// }


// lấy phần Modal
var modal = document.getElementById('myModal');
// Lấy phần span đóng Modal
var span = document.getElementsByClassName("close")[0];
// Khi button được click thi mở Modal
//khi gọi click
var addfilm= document.getElementsByClassName("anhnen");
var imghh
var namehh
var diemhh
var luotxemhh
for (var i = 0; i < addfilm.length; i++) {
  var add = addfilm[i];
  add.addEventListener("click", function (event) {

    var anhn = event.target;
    var product = anhn.parentElement.parentElement;
    imghh = product.getElementsByClassName("anhnen")[0].src
    namehh= product.getElementsByClassName("tentp")[0].innerText
    diemhh = product.getElementsByClassName("diem")[0].innerText
    luotxemhh=product.getElementsByClassName("luotxem")[0].innerText
  })
}
//click
$(".anhnen").click(function() {
    var url = new URL(window.location.href);
            url.searchParams.append("movie", "hien");
            window.history.pushState(null, null, url);
    modal.style.display = "block";
    document.getElementsByTagName("html")[0].style.overflow="hidden";
    document.getElementsByClassName("hearder")[0].style.display="none";
    document.getElementsByClassName("container")[0].style.display="block";

    // lấy thông tin

    // var imglk=$(this).find(".anhnen").attr('src');
    // var namehh=$(this).find(".tentp").text();call di
    // var diemhh=$(this).find(".diem").text();
    // var luotxemhh=$(this).find(".luotxem").text();
    // var orderhh={
    //     'imglk':imglk,
    //     'namehh':namehh,
    //     'diemhh':diemhh,
    //     'luotxemhh':luotxemhh
    // }
    
    var CIT=`
        <h1 class="name-modal">${namehh}</h1>
        <div class="image1">
            <img src="${imghh}" alt="" class="imagemb">
        </div>
        <div class="image2">
            <ul >
                <li>${luotxemhh}</li>
                <li>Điểm: <span style="color: red;">${diemhh}</span></li>
                <li class="tl_tp">
                    <p>
                        Thể Loại:
                        <button>Huyền Huyễn</button>,<button>Học Đường</button>,<button>Giả Tưởng</button>
                    </p>
                </li>
                <li>
                 <p>
                Nội Dung:
                Vào tương lai, lúc mà con người với những sức mạnh siêu nhiên là điều thường thấy quanh thế giới. Đây là câu chuyện về Izuku Midoriya, từ một kẻ bất tài trở thành một siêu anh hùng.
                Tất cả ta cần là mơ ước...
                </p>
                </li>
                <li><button class="btn1"><a href="xemphim.html">Xem Phim</a></button>
                <button class="btn1 btn_2">Lưu</button>
                </li>
            </ul>
        </div>
    `
    $('.slidesub').html(CIT);
    THem()
}
) 
// Khi span được click thì đóng Modal
span.onclick = function() {
    modal.style.display = "none";
    document.getElementsByTagName("html")[0].style.overflow="visible";
    document.getElementsByClassName("hearder")[0].style.display="block";
}

// Khi click ngoài Modal thì đóng Modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.getElementsByTagName("html")[0].style.overflow="visible";
        document.getElementsByClassName("hearder")[0].style.display="block";
    }
}


// tk
$(document).ready(function(){
    // var id = window.location.search;
    //         const urlParams = new URLSearchParams(id);
    //         var id = urlParams.get('movie');
    // if(id) {
    //     modal.style.display = "block";
    // document.getElementsByTagName("html")[0].style.overflow="hidden";
    // document.getElementsByClassName("hearder")[0].style.display="none";
    // document.getElementsByClassName("container")[0].style.display="block";
    // }
    $('#btn-search').on("keyup",function(event){
        event.preventDefault();
        var value=$('#btn-search').val().toLowerCase();
        var tacpham = document.querySelectorAll(".tacpham");
        let data = [];
        tacpham.forEach(element => {
            let ten = element.querySelector(".tentp").innerText;
            if(ten.toLowerCase().indexOf(value) == -1){
                element.style.display = "none"
                $(".bieude").css("display", "none");
            }
            else {
                element.style.display = "block";
                $(".bieude").css("display", "block");

            }

        })
    })
})
    function THem(){
 //thêm 
 $(".btn_2").on("click",function(){
var content1="";
var imglink=$(".submd").find(".imagemb").attr('src');
var name=$(".submd").find(".name-modal").text();
var diem=$(".submd").find(".diem-modal").text();
var luotxem=$(".submd").find(".luotxem-modal").text();
var order={
        'imglink':imglink,
        'name':name,
        'diem':diem,
        'luotxem':luotxem
    }
// var cartItem=`
//     <div class="row main">
//     <ul class="nav col-12 col-m-12 col-s-12">
//         <li class="col-2 col-m-2 col-s-2">
//             <a href="#"><img src="${order.imglink}" alt=""></a>
//         </li>
//         <li class="col-4 col-m-4 col-s-7"><a href="#">${order.name}</a></li>
//         <li class="col-2 col-m-2 tl">${order.diem}</li>
//         <li class="col-2 col-m-2 lx">${order.luotxem}</li>
//         <a href="" class="xoa"><li class="col-2 col-m-2 col-s-3">
//             Xóa
//             <i class="ti-trash deleteT"></i>
//         </li></a>
//     </ul>
//     </div>`
var orderArr = [];
var movies = sessionStorage.getItem("movies");
var moviesArr;
if(movies) {
    moviesArr = JSON.parse(movies);
    moviesArr.push(order)
    orderArr = moviesArr
}
else {
    orderArr.push(order);
}
sessionStorage.setItem("movies", JSON.stringify(orderArr));
window.location="them.html";

// $(".themvao").html(content1)
 })
}

       

         