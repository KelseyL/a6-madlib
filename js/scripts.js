$(document).ready(function(){
	$("#madlibs").hide();

	$('#button').click(function(event) {
		$("#madlibs").show();

		var adj1 = $('#adjective1').val();
		var noun = $('#pluralnoun').val();
		var body = $('#bodypart').val();
		var adj2 = $('#adjective2').val();
		var adj3 = $('#adjective3').val();

		$('#input1').append(adj1);
		$('#input2').append(noun);
		$('#input3').append(body);
		$('#input4').append(adj2);
		$('#input5').append(adj3);

	});


});