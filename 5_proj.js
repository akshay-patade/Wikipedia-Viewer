$(document).ready(function()
{
	function getData()
	{
		var s=$('.se').val();
		var url1="https://en.wikipedia.org/w/api.php?action=opensearch&search="+ s + "&format=json&callback=?";
		$.ajax({
			url: url1,
			type: "GET", 
            dataType: 'jsonp',
            success: function(response)
            {
            	$('#out').html("");
            	console.log(response);
            	for(var i=0;i<response[1].length;i++)
            	{
            		$('#out').append("<li><a href= "+response[3][i]+">"+response[1][i]+ "</a><p>"+response[2][i]+"</p></li>");
            	} 	
            }


		});

	}




	$('.btn').on('click', function()
	{
		getData();
	});

});