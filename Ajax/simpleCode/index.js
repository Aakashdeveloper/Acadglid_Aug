/*$('.btn').click(function(){
    $('.myMovies').text('loading....')

    $.ajax({
        type: 'GET',
        url: 'https://ngproductsparam.herokuapp.com/api/getProductDetails?productId=1',
        success: function(data){
            $('.myMovies').text(JSON.stringify(data))
        },
        dataTypes: 'json'
    })
})*/

$('.btn').click(function(){

fetch('https://ngproductsparam.herokuapp.com/api/getProductDetails',{
        method:'GET'
    }).then(function(data){
        var outres = data.json()
        console.log(outres)
    })
})
