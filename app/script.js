// Authentication
function logout() {
  ref.unauth();
  var newUrl = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;
  window.location.replace(newUrl);
}

// Get the auth Name
function getName(authData) {
  switch(authData.provider) {
     case 'password':
       return authData.password.email.replace(/@.*/, '');
     case 'twitter':
       return authData.twitter.displayName;
     case 'facebook':
       return authData.facebook.displayName;
  }
}



// Helpers
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function createValidation(methodName,regex,message) {
  $.validator.addMethod(methodName,
    function(value,element) {
      return this.optional(element) || regex.test(value);
    },
    message
  );
}


$(document).foundation();
