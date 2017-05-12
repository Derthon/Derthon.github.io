window.onscroll = function() {scrollTest()};

function scrollTest() {
	console.log("hello");
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 50) {
        $('#navagation-bar').addClass('hidden');
    } else {
        $('#navagation-bar').removeClass('hidden');
    }
}