import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dateFilter from "@/filters/date.filter";
import currencyFilter from "@/filters/currency.filter";
import messagePlugin from "@/utils/message.plugin";
import Loader from "@/components/app/Loader"
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/compat/database";

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter("date", dateFilter);
Vue.filter("currency", currencyFilter);
Vue.component('Loader', Loader)

firebase.initializeApp({
  apiKey: "AIzaSyDxeHEr01cJS0qu4kIxSx82Gc5AZxqIi58",
  authDomain: "vue-crm-99828.firebaseapp.com",
  databaseURL: "https://vue-crm-99828-default-rtdb.firebaseio.com",
  projectId: "vue-crm-99828",
  storageBucket: "vue-crm-99828.appspot.com",
  messagingSenderId: "193393957694",
  appId: "1:193393957694:web:80e484776304d1a9002a6f",
  measurementId: "G-2R473CVE8Y"
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
