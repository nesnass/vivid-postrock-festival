// Constants
var totalBackgroundImages = 2; // Adjust this based on how many images are used

// Internal variables
var imageRoot = 'img/';
var timerId = null;
var imageSelector = 0;
var timerRunning = false;
// var images = ['img/backgrunn_web1.jpg','img/backgrunn_web2.jpg'];
var body, bgimage, container, includedContent, photocredit, sponsors, floatingMenu;

function loadContent(imageUrl, margin, page, activeId) {
    if (page === 'none')
        page = 'home.html';
    if (page !== "home.html") {
        body.css('background-color', '#FFFFFF');
        sponsors.show();
        timerRunning = false;
        bgimage.hide();
        photocredit.hide();
        container.css('color', '#000000');
        floatingMenu.removeClass('floatingMenuRibbon');
    }
    else {
        sponsors.hide();
        body.css('background-color', '#000000');
        bgimage.show();
        photocredit.show();
        container.css('color', '#FFFFFF');
        floatingMenu.addClass('floatingMenuRibbon');
        if(!timerRunning) {
            timerRunning = true;
            rotateCarousel();
        }
    }
    clearActive();
    $('#'+activeId).css('text-decoration', 'underline');
    includedContent.load(page);
	if (page === 'about.html') {
		var feed = new Instafeed({
			get: 'user',
            userId: '1921447252',
			//tagName: 'vividpostrock',
			accessToken: '1921447252.0b198cb.85c0697d557d4f9b8c3c42a5755115bf'
			//clientId: '0b198cbbaa054b40a8a8f5a625e50ca7'
		});
		feed.run();
	}
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

$(document).ready(function() {
    body = $('body');
    bgimage = $('#bgimage');
    container = $('#container');
    sponsors = $('#sponsors');
    includedContent = $('#includedContent');
    photocredit = $('#photocredit');
    floatingMenu = $('.floatingmenu');

    var page = getParameterByName('page');

    if (page === 'vividART') {
        page = 'vividART.html';
    } else {
        page = 'home.html'
    }
    //bgimage.css('background-image', 'url(' + images[0] + ')');
    loadContent("img/home1.jpg", '600px', page, "");
    setTimeout(() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }, 500);
});


function rotateCarousel() {
        if(!timerRunning)
            return;
/*
        bgimage.fadeTo('slow', 0, function()
        {
            bgimage.css('background-image', 'url(' + images[imageSelector] + ')');
            imageSelector == 2 ? imageSelector = 0 : imageSelector++;
        }).fadeTo('slow', 1);
*/


        $("#bgimage div").removeClass("opaque");
        $("#bgimage div").eq(imageSelector).addClass("opaque");
        imageSelector == (totalBackgroundImages - 1) ? imageSelector = 0 : imageSelector++;




        window.clearTimeout(timerId);
        timerId = window.setTimeout(function(){rotateCarousel()}, 7000);
}

function clearActive() {
    $('#homeLink').css('text-decoration', 'none');
    $('#programmeLink').css('text-decoration', 'none');
    $('#updatesLink').css('text-decoration', 'none');
    $('#volunteerLink').css('text-decoration', 'none');
    $('#practicalitiesLink').css('text-decoration', 'none');
    $('#ticketsLink').css('text-decoration', 'none');
    $('#artLink').css('text-decoration', 'none');
}

function testplay() {

    var player = $('#bandcampBand1').contents().find("#play");
    player.trigger('play');
    player.click();
  //  song.get(0).play();
    //var playButton = $("embeddedplaybutton");
    //playButton.click();

    //window['HTML5Player'].play();
    //var container = window.document.getElementById('band1');
    //var playButton = container.getElementsByTagName('button');

}

function iFrameButton() {

    var iframe = window.frames[0].document.getElementsByTagName('div')[1]; // this also works
    //return window.frames[0].document.getElementsByTagName('button')[5];
}
