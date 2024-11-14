console.log("aqui");



// Import core framework
import Framework7 from 'framework7';


// // Import additional components

// // Import components styles
// import 'framework7/components/calendar/css';
// import 'framework7/components/popup/css';
// import 'framework7/components/searchbar/css';

// // Install F7 Components using .use() method on class:
// // Framework7.use([Searchbar, Calendar, Popup]);

// Init app
var app = new Framework7({
    // App root element
    el: '#app',
    // App Name
    name: 'My App',
    // Enable swipe panel
    panel: {
      swipe: true,
    },
    // Add default routes
    routes: [
      {
        path: '/about/',
        url: 'about.html',
      },
    ],
    // ... other parameters
  });
  
  var mainView = app.views.create('.view-main');