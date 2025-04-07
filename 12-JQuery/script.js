// JavaScript source code
$(document).ready(
	function () {
		$("#hide").click(
			function () {
				//$("ul li:first-child").hide();
				$("ul li:parent").fadeOut("slow");
				//$("[type]").hide();
				$("div[style]").fadeOut("slow");
				//$(":button").hide();
				$("tr:even").css("background-color", "grey");
			}
		);
		$("#show").click
			(
				function () {
					//$("ul li:first-child").show();
					$("ul li:parent").fadeIn(1000);
					$("div[style]").fadeIn(1000);
				}
			);

		$("#tumbler").click(
			function () {
				$("ul li:parent").fadeToggle(1000);
				$("div[style]").fadeToggle(1000);
			}
		);
		$("#slide-up").click
			(
				function () {
					//$(this).slideUp();
					$("#slide-down").slideToggle();
				}
			);

		//$("#slide-down").click
		//(
		//	function ()
		//	{
		//		$(this).slideUp();
		//	}
		//);

		$("#animate").hover
			(
				function () {
					$(this).animate({ left: '250px', opacity: '.5', height: '100px', width: '100px' }, 3000);
				}
			);
		$('#animate').mouseleave
			(
				function () {
					$(this).animate({ opacity: '1', height: '50px', width: '50px' }, 3000);
				}
			);
		$("#stop").click
			(
				function () {
					$("#animate").stop();
				}
			);

		$("h2").click
			(
				function () {
					$("h2+ul").toggle();
				}
			);
		$("table").click
			(
				function () {
					$(this).hide();
				}
			)
	}
);