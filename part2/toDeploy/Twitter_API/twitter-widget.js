//load widget.js script at top of page before doing anything else. I think widget.js make sure it looks good...?
<script>window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));</script>

////////////////////////////////////////////////////////////

//An element with a DOM ID of container exists on the page.
<div id="container"></div>


//The code snippet below will create a embedded Moment for Moment ID “650667182356082688” 
//inserted into a page inside an element with a unique ID of container.
twttr.widgets.createMoment(
    '650667182356082688',
    document.getElementById('container'),
    {
      limit: 3
    }
  );

//The twttr.widgets.createMoment function returns a Promise. You can execute code after a widget 
//has been inserted onto your page by passing a callback to the resulting promise’s then function.
  twttr.widgets.createMoment(...)
.then( function( el ) {
  console.log('Moment added.');
});