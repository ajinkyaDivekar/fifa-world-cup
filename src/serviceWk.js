export function register(config) {

if ('serviceWorker' in navigator) {
  const swUrl = `${process.env.PUBLIC_URL}/service-wk.js`;

  window.addEventListener('load', function() {
    navigator.serviceWorker.register(swUrl).then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

}