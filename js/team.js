// external js: masonry.pkgd.js

$('.team .grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true,
  stagger: '.02s',
  gutter: 20
});

$('.team .grid-item').click(function(){
  $('.team .grid-item').off('mouseenter').off('mouseleave'); //turn off listener for hover events cuz they interfere with masonry layout func (destroys event)
  $(this).addClass('open');
  $('.team .grid-item').not($(this)).removeClass('open');
  $(this).find('span').css("display", "none");
  $(this).css("transform","translateY(0)");
  $(this).css("box-shadow","none");
  $('.grid').masonry({ //rerun masonry layout
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
  });
  setTimeout(function(){ //turn hover listeners back on
  $('.team .grid-item').on('mouseenter').on('mouseleave');
  $('.team .grid-item').hover(mhover,ohover); //recreate event
  }, 800);
});


$('.team .grid-item').hover(mhover,ohover); //attach event + listener for "read more" span

function mhover(){
  if (!$(this).hasClass("open")) {
  $(this).find('span').css("display", "block");
  $(this).css("transform","translateY(-2px)");
  $(this).css("box-shadow","1px 4px 8px rgba(0,0,0,0.1)");
  }
}

function ohover(){
  $(this).find('span').css("display", "none");
  $(this).css("transform","translateY(0)");
  $(this).css("box-shadow","none");
}

//need to rerun masonry whenever item is selected