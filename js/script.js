$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger, .menu').toggleClass('active');
		$('body').toggleClass('lock');
		$('.menu').toggleClass('open');		
	});

	$('.menu__link').click(function(event){
		$('.header__burger, .menu').removeClass('active');
		$('body').removeClass('lock');
	});


	$('.food__row').slick({
		arrows: false,
		dots: true,
		slidesToShow: 3,
		draggable: false,
		responsive: [
			{
				breakpoint: 1260,
				settings: {
					slidesToShow: 2
				}
			},{
				breakpoint: 850,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
});

const tabsBtn   = document.querySelectorAll(".dishes__tab-btn");
const tabsItems = document.querySelectorAll(".dishes__body");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}

document.querySelector('.dishes__tab-btn').click();

