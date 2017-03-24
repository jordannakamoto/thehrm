$(document).ready(function() {


	var data = [
  {
    companyName: "Cavallo Point",
    companyLogo_img: 'images/client-logos/cavallo.png',
    companyPicture_img: 'https://si0.twimg.com/profile_images/1561258552/brad_frost_bigger.png',
    projectDescription: '"As entrepreneurs, my partner and I often still think of our hotel management company in terms of its small beginnings. However, over the years, our business has grown substantially and we now oversee various hotel operations with numerous employees. Partnering with The HR Manager has provided us with the human resources expertise we needed for our developing organization. As a consultant, Edna is always available to listen to issues that come up in the workplace, to provide valuable insights and to offer practical, sophisticated advice. Her assistance has helped us to spot employment issues before they became a problem and to organize better employment practices. Besides being knowledgeable and intelligent in her field, Edna is a pleasure to work with. I whole heartedly recommend Edna and the quality of her services to any business owner."',
    clientDescription: 'Cavallo Point is the most recent property operated by Passport Resorts. We have also worked closely with them at Post Ranch Inn.'
},
  
  {
    companyName: "Bright Computing",
    companyLogo_img: 'images/client-logos/bright_computing.png',
    companyPicture_img: 'https://si0.twimg.com/profile_images/1561258552/brad_frost_bigger.png',
    projectDescription: 'We worked with Bright to improve the management culture, refocus the company structure, and migrate their employee information to a contemporary HR information system. <br> We even got a chance to visit with their team in Amsterdam to solidify some things that we came up with on the plane ride. ',
    clientDescription: 'Bright Computing is an international company that provides software for enterprise-level cloud data management.'

  }
  
  /* more to come */

];

	// hold which thumbnail is clicked
	var clickedThumb;
	$('.image-popup').click(function(){
		clickedThumb = $('.image-popup').index(this);
	});
	

  // MagnificPopup
	function magnifPopup() {
		$('.image-popup').magnificPopup({
			key: 'my-popup',
			items: data,
			type: 'inline',
			inline: {

				markup: '<div class="client-popup"><div class ="mfp-close"></div>' +
							//'<h1 class="mfp-companyName"></h1>' +
							'<div class="mfp-companyLogo"></div>' +
							//'<div class="mfp-companyPicture"></div>' +
							'<p class="mfp-clientDescription"></p>' +
							'<p class="mfp-projectDescription"></p>' +
							
						'</div>'
			},
			gallery:{
				enabled:true
			},
			callbacks:{
				open: function() {$('.image-popup').magnificPopup('goTo',clickedThumb)}
			}
		})
	};

	// Call the functions 
	magnifPopup();

});

