import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'


Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.filter('dataFormt',function (datastring,pattern) {
  var dt=new Date(datastring);
  var y=dt.getFullYear();
  var m=(dt.getMonth()+1).toString().padStart(2,0);
  var d=dt.getDate();

  if (pattern && pattern.toLowerCase()==='yyyy-mm-dd'){
    return `${y}-${m}-${d}`;
  }
  else {
    var hh=dt.getHours();
    var mm=dt.getMinutes();
    var ss=dt.getSeconds();

    return `${y}-${m}-${d} ${hh}:${mm}:${mm}`
  }


})

const router=new VueRouter({
  routes:Routes,
  mode:"history",
})


new Vue({
  render: h => h(App),
  el:'#app',
  template:'<App/>',
  components:{App},
  router:router,
}).$mount('#app')
