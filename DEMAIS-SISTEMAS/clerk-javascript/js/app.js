
const VITE_SUPABASE_API_KEY_LOCAL = import.meta.env.VITE_SUPABASE_API_KEY_LOCAL;
const VITE_CLERK_PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

import Framework7 from 'framework7';

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
      {
        path: '/instituicao/',
        url: 'instituicao.html',
      },
    ],
    // ... other parameters
  });
  
console.log("VARIAVEL AMBIENTE - SUPABASE_API_KEY: " + VITE_SUPABASE_API_KEY_LOCAL);
console.log("VARIAVEL AMBIENTE - VITE_CLERK_PUBLISHABLE_KEY: " + VITE_CLERK_PUBLISHABLE_KEY);


var mainView = app.views.create('.view-main');