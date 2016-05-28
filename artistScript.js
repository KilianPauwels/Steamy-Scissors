
$(document).ready(function () {

$.getJSON('http://en.wikipedia.org/w/api.php?action=parse&section=0&page=Taylor_Swift&prop=text&format=json&callback=?', function(json) { 
    $('#information').html(json.parse.text['*']); 
    $("#information").find("a:not(.references a)").attr("href", function(){ return "http://www.wikipedia.org" + $(this).attr("href");}); 
    $("#information").find("a").attr("target", "_blank"); 
  });
});