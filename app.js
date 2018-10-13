// One view instance to control entire app
new Vue({
  // import div id from index 
  // Vuejs takes all properties in data object 
  // Proxies them to the top of the Vue instance 
  el:'#vue-app',
	data:{
	  name: 'Banksy', 
	  job:  'Artist',
	  website: 'https://www.linkedin.com/in/frances-anastasia-84349711a/',
	  websiteTag: '<a href="https://www.linkedin.com/in/frances-anastasia-84349711a/">Linkedin</a>'
  },
  methods: {
  	greet: function(time){
  		return 'Good ' + time + ' ' + this.name;
  	}
  }
});
