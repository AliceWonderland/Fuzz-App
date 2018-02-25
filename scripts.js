function init() {
	// get api
	var oReq = new XMLHttpRequest();
	oReq.addEventListener("load", reqListener);
	oReq.open("GET", "http://api.alicechuang.com/data-fuzz.json");
	oReq.send();

	// callback on success response
	function reqListener () {
		// set data
		var data={};
		data=JSON.parse(this.responseText).links;
		console.log(data);

		// make menu lists
		var resultLists="";
		for(var i=0; i<data.length; i++){
			resultLists+="<li>"+data[i].name+"</li>";
		}
		var lists = document.getElementsByClassName("menu-links");
		for(var x=0; x<lists.length; x++){
			lists[x].innerHTML=resultLists;
		}

		// make dd lists
		var resultDD="<option>Select Category</option>";
		for(var j=0; j<data.length; j++){
			resultDD+="<option>"+data[j].name+"</option>";
		}
		var dd = document.getElementsByClassName("menu-dd");
		for(var y=0; y<dd.length; y++){
			dd[y].innerHTML=resultDD;
		}
	}
}
window.onload=init;



























// ignore below
var app = new Vue({
	el: '#app-1',
	data: {
		message: 'Hello Vue.js!'
	}
});

var app2 = new Vue({
	el: '#app-2',
	data: {
		message: 'You loaded this page on ' + new Date().toLocaleString()
	}
});

var app3 = new Vue({
	el: '#app-3',
	data: {
		seen: true
	}
});

var app4 = new Vue({
	el: '#app-4',
	data: {
		todos: [
			{ text: 'Learn JavaScript' },
			{ text: 'Learn Vue' },
			{ text: 'Build something awesome' }
		]
	}
});


var app5 = new Vue({
	el: '#app-5',
	data: {
		message: 'Hello Vue.js!'
	},
	methods: {
		reverseMessage: function () {
			this.message = this.message.split('').reverse().join('')
		}
	}
});

var app6 = new Vue({
	el: '#app-6',
	data: {
		message: 'Hello Vue!'
	}
});

// COMPONENTS

Vue.component('todo-item', {
	props: ['todo'],
	template: '<li>{{ todo.text }}</li>'
});

var app7 = new Vue({
	el: '#app-7',
	data: {
		groceryList: [
			{ id: 0, text: 'Vegetables' },
			{ id: 1, text: 'Cheese' },
			{ id: 2, text: 'Whatever else humans are supposed to eat' }
		]
	}
});




