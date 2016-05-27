function setAnimation(t_caffeine, t_calories, t_price) {
  
    
    
    // Define max values for data normalization
    var max_caffeine = 243
    var max_calories = 259
    var max_price = 1.0616659

    var caffeine = new Chartist.Pie('.caffeine', {
    series: [t_caffeine]

  }, {
    donut: true,
    donutWidth: 30,
    startAngle: 270,
    total: max_caffeine * 2,
    showLabel: false
  });
  
  var calories = new Chartist.Pie('.calories', {
  series: [t_calories]


  }, {
    donut: true,
    donutWidth: 30,
    startAngle: 270,
    total: max_calories * 2,
    showLabel: false
  });
  
  var price = new Chartist.Pie('.price', {
  series: [t_price]
  }, {
    donut: true,
    donutWidth: 30,
    startAngle: 270,
    total: max_price * 2,
    showLabel: false
  });   

    // Animate respective charts
    caffeine.on('draw', animateOnDraw)
    calories.on('draw', animateOnDraw)
    price.on('draw', animateOnDraw)
    
}
  
function animateOnDraw (data) {
    if(data.type === 'slice') {
      // Get the total path length in order to use for dash array animation
      var pathLength = data.element._node.getTotalLength();

      // Set a dasharray that matches the path length as prerequisite to animate dashoffset
      data.element.attr({
        'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
      });

      // Create animation definition while also assigning an ID to the animation for later sync usage
      var animationDefinition = {
        'stroke-dashoffset': {
          id: 'anim' + data.index,
          dur: 1500,
          from: -pathLength + 'px',
          to:  '0px',
          easing: Chartist.Svg.Easing.easeOutQuint,
          // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
          fill: 'freeze'
        }
      };

      // If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation
      if(data.index !== 0) {
        animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
      }

      // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
      data.element.attr({
        'stroke-dashoffset': -pathLength + 'px'
      });

      // We can't use guided mode as the animations need to rely on setting begin manually
      // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
      data.element.animate(animationDefinition, false);
    }
}

  // For the sake of the example we update the chart every time it's created with a delay of 8 seconds
  // caffeine.on('created', windowTimeout())
  // calories.on('created', windowTimeout())
  // price.on('created', windowTimeout())
  
  // function windowTimeout(chart) {
  //   if(window.__anim21278907124) {
  //     clearTimeout(window.__anim21278907124);
  //     window.__anim21278907124 = null;
  //   }
  //   window.__anim21278907124 = setTimeout(chart.update.bind(chart), 10000);
  // }
