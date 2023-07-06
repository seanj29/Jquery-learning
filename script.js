//Filters By an Array of Classes put into it
function Filter(FilterBy){

    $("span").show().filter(`:not(.{FilterBy})`).hide();

}