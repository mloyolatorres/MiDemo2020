
$.("#btn").click(function()
{

 $.ajax({
 url:'',
 type:'post',
 data:{},
 cache:false,
 success:function(data,b,c){
    alert("mi mensaje aqui :" + data)
 }


 });


});
