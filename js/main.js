$(function(){
	var tabs = function(){
		var resultHtml = "<ul class='tab_head'>";
		$(this)
			.find('.tab')
			.each(function(){
				if($(this).index()==0){
					resultHtml+= "<li class='active'>"+$(this).find('h2').text()+"</li> ";
				}
				else{ 
					resultHtml+="<li>"+$(this).find('h2').text()+"</li> ";
				}
			}
		)
		resultHtml+="</ul>";
		return resultHtml;
	};
	$('.tabs').prepend(tabs); 
	$('.tabs .tab:first-of-type').show()
	$('body').on("click", ".tab_head li", function(){
		$(this)
			.addClass('active')
			.siblings()
			.removeClass('active');
		$(this)
			.parents('.tabs')
			.find('.tab:eq('+$(this).index()+')')
			.show()
			.siblings('.tab')
			.hide();
	});
//input
    $('input').mouseover(function() {
        $(this).siblings('.prompt').addClass('display');
    });
    $('input').mouseout(function() {
        $(this).siblings('.prompt').removeClass('display');
    });
    $('button').on('click', function(e) {
        e.preventDefault();
        $('.prompt').addClass('display');
    });
})