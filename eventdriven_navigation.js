var y;
window.onload = function(){
  stickynav();
  mainNavSetting();
  jQuery( window ).scroll( function() {
	y;
	stickynav();
  });
  jQuery( window ).resize(function() {
  y = null;
  mainNavSetting();
  });
}
// get the .centered-top-container offsetTop + .centered-top-container computed height - .replaced height
//add padding to the bottom element to prevent sudden collapsing
//get the .centered-top-container offsetTop + .centered-top-container computed height + .replaced height for reverse scrolling
function stickynav() {
var navbar = jQuery('.replaced');
var navHeight = jQuery('.replaced').outerHeight(true);
var navcon = y || jQuery('.centered-top-container').outerHeight(true);
var bottomEl = jQuery('.centered-bottom');
var navoff = jQuery(&#39;.replaced&#39;).offset().top;
var ctc = document.querySelector(&#39;.centered-top-container&#39;);
var sticky_has = ctc.classList.contains(&#39;sticky&#39;);
var scrollY = window.pageYOffset;
// test if global scrollY is set, if not then asign pageYoffset
if(!sticky_has) {

  if(!navbar.hasClass('fixed')){

  	if (scrollY &gt;= navcon - navHeight) { 
		y = navcon;
	     navbar.addClass('fixed').css({ 
			"padding-top": (navHeight - navbar.outerHeight())/2 + "px", 
		    "padding-bottom": (navHeight - navbar.outerHeight())/2 + "px"
			});
     	 bottomEl.css({ "padding-top": navHeight + "px" });
      console.log(scrollY + " |add| " + navcon + navHeight + "| Y: |" + y);
  	}

  } else {
// to get the effect get the scroll up or down motive to be precise
  	if( scrollY  &lt;= navcon - navHeight ) {
	  y = navcon; 
      navbar.removeClass('fixed').css({ "padding-top": 0, "padding-bottom": 0 });
	  bottomEl.css({ "padding-top": 0 });
      console.log();
  	}

  }
}
}

function mainNavSetting(){
	var sticky = jQuery(&#39;.centered-top-container&#39;);
    if(jQuery(window).width() &lt; 900 ){
      if(sticky.hasClass(&#39;sticky&#39;)){
          console.log(&#39;sticky&#39;);
      } else {
          //sticky.addClass(&#39;sticky&#39;);
      }
    }


	jQuery(&#39;.replaced h1&#39;).css(&quot;line-height&quot;,jQuery(&#39;.replaced h1&#39;).css(&#39;font-size&#39;));
	var pos = (jQuery(&#39;.replaced h1&#39;).height()/2) - (jQuery(&#39;.main-nav&#39;).height()/2);
	var pos2 = (jQuery(&#39;.replaced h1&#39;).height()/2) - (jQuery(&quot;.hamburger-section svg&quot;).height()/2);
	var positionTop = document.querySelector(&#39;.replaced&#39;).offsetTop;
	var positionLeft = jQuery(&#39;.centered-top&#39;).css(&#39;margin-left&#39;);
	var collapseicon = jQuery(&#39;.hamburger-section&#39;).addClass(&#39;collapse&#39;);
    var collapse = jQuery(&#39;.hamburger-section&#39;).css({
                      &quot;top&quot;: positionTop + pos2 + &quot;px&quot;,
					
                      &quot;right&quot; : positionLeft
});

console.log(positionTop + &#39; pos2= &#39; + pos2 + &quot;px&quot;);	
	var nav = jQuery(&#39;.main-nav&#39;);
                     nav.css({
                     &quot;top&quot;: positionTop + pos + &quot;px&quot;,
						&quot;display&quot; : &quot;inline-block&quot;,
                      	&quot;right&quot; : positionLeft
});
}