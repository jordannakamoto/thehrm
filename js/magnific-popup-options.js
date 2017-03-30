$(document).ready(function() {


	var data = [
  {
    companyName: "Post Ranch Inn",
    companyLogo_img: 'http://www.passportresorts.com/images/post-ranch-inn-logo.png',
    companyPicture_img: 'http://www.johnmirandaphoto.com/bigsur2009/_DSC1472.jpg',
    companyDescription: 'Built on a cliff 1,200 feet above the Pacific, the Post Ranch Inn embraces the dramatic beauty of the coastline with glorious ocean, mountain, and forest views.',
    Summary: 'Over the past few years we have built many things for these peeps.',
    Achievements: '<li>Cleaned my room</li><li>Emptied the Dishwasher</li><li>Rode a BIke</li>',
    Feedback: '"Besides being knowledgeable and intelligent in her field, Edna is a pleasure to work with. I whole heartedly recommend Edna and the quality of her services to any business owner."'
},
  
  {
    companyName: "Bright Computing",
    companyLogo_img: 'images/client-logos/bright_white.png',
    companyPicture_img: 'http://partner.brightcomputing.com/screenshots/hadoop-monitoring-800.png',
    companyDescription: 'Bright Computing provides comprehensive software solutions for deploying and managing HPC clusters, big data clusters, and OpenStack in the data center and in the cloud.',
    Summary: 'We worked with Bright to improve the management culture, refocus the company structure, and migrate their employee information to a contemporary HR information system. <br> We even got a chance to visit with their team in Amsterdam to solidify some things that we came up with on the plane ride. ',
    Achievements: 'Bright Computing is an international company that provides software for enterprise-level cloud data management.',
    Feedback: 'Cavallo Point is the most recent property operated by Passport Resorts. We have also worked closely with them at Post Ranch Inn.'

  },
  
  {
    companyName: "ASCIP",
    companyLogo_img: 'https://media.licdn.com/media/p/3/000/29d/145/2c0534f.png',
    companyPicture_img: 'images/bestpicture.png',
    companyDescription: "ASCIP’s mission is to provide the highest quality of service and the most extensive coverage available to its members at a competitive price.",
    Summary: 'We worked with Bright to improve the management culture, refocus the company structure, and migrate their employee information to a contemporary HR information system. <br> We even got a chance to visit with their team in Amsterdam to solidify some things that we came up with on the plane ride. ',
    Achievements: 'Bright Computing is an international company that provides software for enterprise-level cloud data management.',
    Feedback: 'Cavallo Point is the most recent property operated by Passport Resorts. We have also worked closely with them at Post Ranch Inn.'

  }
  
  /* more to come */

];

	// hold which thumbnail is clicked
	var clickedThumb;
	$('.image-popup').click(function(){
		clickedThumb = $('.image-popup').index(this);
		console.log(clickedThumb);
	});
	

  // MagnificPopup
	function magnifPopup() {
		$('.image-popup').magnificPopup({
			key: 'my-popup',
			items: data,
			type: 'inline',
			inline: {

				markup: '<div class="client-popup"><div id="cs_banner"><div class="mfp-companyLogo"></div><div class ="mfp-close"></div></div>' +
							'<div class="cs_wrapper">' +
							'<div id="cs_left">'+
							'<h4>Summary</h4><p class="mfp-Summary"></p>' +
							'<h4>Achievements</h4><ul class="mfp-Achievements"></ul>' +
							'<h4>Feedback</h4><p class="mfp-Feedback"></p>' +
							'</div>' +
							'<div id="cs_right">' +
							'<div class="mfp-companyPicture"></div>' + 
							'<p class="mfp-companyDescription"></p>' + 
							'</div>' +
							'</div>' +
							
						'</div>'
			},
			gallery:{
				enabled:true
			},
			callbacks:{
				open: function() {$('.image-popup').magnificPopup('goTo',clickedThumb)},

			}
		})
	};

	// Call the functions 
	magnifPopup();

});

