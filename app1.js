new Vue({
	el: '#vue-app',
	data: {
		characters: ['Sven','Riki','Zues','Drow'],
		things: [
			{name:'Creep', dps:'10'},
			{name:'Tower', dps:'75'},
			{name:'Ancient', dps:'250'}
		],		
		available: true,
		nearby: false,
		error: false,
		sucess: false
	},
	methods: {

	},
	computed: {
		compClasses: function(){
			return {
				available: this.available,
				nearby: this.nearby
			}
		}
	}
});
