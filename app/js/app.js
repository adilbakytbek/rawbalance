document.addEventListener("DOMContentLoaded", function () {

	// setTimeout(function() {
	// 	var loader = document.getElementById('page-loader');
	// 	if( !loader.classList.contains('done') ) {
	// 		loader.classList.add('done');
	// 	}

	// }, 1000);

	$("#shop-link").on("click", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({
			scrollTop: top
		}, 1500);
	});

	let filter = $('[data-filter]');

	filter.on('click', function(e) {
		filter.removeClass('active');
		e.preventDefault();
		let cat = $(this).data('filter');

		if(cat == 'all') {
			$('[data-cat]').parent('div').show('400');
			e.target.classList.add('active');
		} else {
			$('[data-cat]').each(function() {
				let workCat = $(this).data('cat');
				if(workCat != cat) {
					$(this).parent('div').hide();
				} else {
					e.target.classList.add('active');
					$(this).parent('div').show();
				}
			});
		}

		

	});



	$('.dog__items .dog__action').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).parent().find('.dog__text').toggleClass('active');

		if ($(this).hasClass('active')) {
			$(this).text('x')
		} else {
			$(this).text('+')
		}
	});

	$('.hamburger').on('click', function () {
		$(this).toggleClass('is-active');
		$('.top__line-nav').toggleClass('active');
		$('body').toggleClass('stop-scrolling');
		$('body').bind('touchmove', function (e) { e.preventDefault() })

		if( $(this).hasClass('is-active')) {
			$(".mnu .main-mnu li a").on("click", function () {
				$('.top__line-nav	').removeClass('active');
				$('body').removeClass('stop-scrolling');
				$('.hamburger').removeClass('is-active');
			});
		}
	});

	$('body').unbind('touchmove');


	$('.reviews__wrapper').owlCarousel({
		items: 6,
		loop: true,
		center: true,
		margin: 10,
		responsive: {
			0: {
				items: 1,
				margin: 0
			},
			512: {
				items: 2,
			},
			912: {
				items: 4,
			},

			1920: {
				items: 6
			}
		}
	});


	$('#phone').mask('+1 (999) 999-99-99', { placeholder: "+1 (___) ___-__-__" });

	// $('section h2').animated('animate__fadeInLeft');

	// $('a[href*="#callback"]').magnificPopup({
	// 	removalDelay: 500,
	// 	callbacks: {
	// 		beforeOpen: function () {
	// 			this.st.mainClass = this.st.el.attr('data-effect');
	// 		}
	// 	},
	// 	fixedContentPos: true,
	// 	midClick: true
	// });
	


});
