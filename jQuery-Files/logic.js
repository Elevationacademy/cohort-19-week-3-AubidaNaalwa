$("#first").on(`click`,`button`,function(){
$("#thelist").append(`<li class = "lis">${$("#text").val()}</li>`)
$("#text").val("")

    
}); 

$("#thelist").on(`click`,`.lis`,function(){
    $(this).remove();
});

$("#second").on(`click`,`.item`,function(){
    if($(this).data().instock )
        $("#cart").append(`<li class = "lis">${$(this).text()}</li>`)
});