// One view instance to control entire app
new Vue({
  // import div id from index 
  // Vuejs takes all properties in data object 
  // Proxies them to the top of the Vue instance 
  el:'#vue-app',
	data:{
	  name: 'Banksy', 
	  job:  'Artist',
	  newAge: 20,
	  age: 23,
	  a: 0,
	  b: 0,
	  x: 0,
	  y: 0,
	  website: 'https://www.linkedin.com/in/frances-anastasia-84349711a/',
	  websiteTag: '<a href="https://www.linkedin.com/in/frances-anastasia-84349711a/">Linkedin</a>'
  },
  methods: {
  	greet: function(time){
  		return 'Good ' + time + ' ' + this.name;
  	},
  	add: function(inc){
  		this.age += inc;
  	},
  	subtract: function(dec){
  		this.age -= dec;
  	},
  	updateXY: function(event){
  		this.x = event.offsetX;
  		this.y = event.offsetY;
  	},
  	badclick: function(){
  		alert('You should not have clicked me');
  	},
  	logName: function(){
  		console.log("You entered your name");
  	},
  	logAge: function(){
  		console.log("You entered your age");
  	}
  },
  computed: {
  	addToA: function(){
  		console.log('addToA');
  		return this.a + this.newAge;
  	},
  	addToB: function(){
  		console.log('addToB');
  		return this.b + this.newAge;
  	}
  }
});
