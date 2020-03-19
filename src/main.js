import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase';

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyCRA4InAZrIcAJBXm0DidBx_kjoz0zZ-F0",
  authDomain: "fir-upload-d1641.firebaseapp.com",
  databaseURL: "https://fir-upload-d1641.firebaseio.com",
  projectId: "fir-upload-d1641",
  storageBucket: "fir-upload-d1641.appspot.com",
  messagingSenderId: "605565085908",
  appId: "1:605565085908:web:3b2e3909ea60cc35fd3341",
  measurementId: "G-8G8H7GMXWM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  render: h => h(App),
}).$mount('#app')
