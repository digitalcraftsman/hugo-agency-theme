// Initial form validation
$(document).ready(function() {
  $.validate({
    modules : 'html5, toggleDisabled'
  });
});

// Revalidate on change
$('form[id=contactForm]').change(function() {
  $.validate({
    modules : 'html5, toggleDisabled'
  });
});

function clear() {
  $('form[id=contactForm] #error').hide();
  $('form[id=contactForm] #success').hide();
  $('form[id=contactForm] #val-error').hide();
}

// Async contact form
$('form[id=contactForm]').submit(function(e){
  e.preventDefault();
  clear();

  if ($('.g-recaptcha').length) {
    if (typeof grecaptcha != "undefined") {
      if (!grecaptcha.getResponse()) {
        $('form[id=contactForm] #val-error').show();
        return;
      }
    } else {
      $('form[id=contactForm] #val-error').show();
      return;
    }
  }

  // AJAX POST, with contact form data serialized, which expects a JSON response
  // Datatype must be set to 'json' to use formspree.io
  $.post($(this).attr('action'), $(this).serialize(), function(){
      $('form[id=contactForm] #success').show();
    }, 'json').fail(function(){
      $('form[id=contactForm] #error').show();
  });
});

// Callback function for captcha
function onSubmit(token) {
  $('form[id=contactForm]').submit();
}
