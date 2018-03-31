//new Vue({
//el: '#email-password',
//render:function(){
//		var login = document.getElementById('login');
//		login.onclick=function(){
//			login.setAttribute("value","登录");
//		}
//			return {
//				isshow:true
//			}
//}
//})

//var myVue = new Vue({
//      el: '#app',
//      methods: {   //这里使用methods
//        sayHi: function (message) {
//          alert(message)
//        }
//      }
//    })

var myVue1 = new Vue({
	el:"#loginBtn",
	methods:{
		change:function(){
			var login = document.getElementById('login');
			var passW = document.getElementById("password");
			var forgetPsw = document.getElementById('forgetPsw');
			var forgetPswa = document.getElementById('forgetPsw-a');
				login.setAttribute("value","登录");
				passW.style.height="18px";
				passW.style.padding="9.5px 12px";
				passW.style.border="1px solid #d7d7d7";
				forgetPsw.style.height = "16px";
				forgetPsw.style.marginTop = "10px";
				forgetPswa.style.fontSize = "12px";
		}
	}
})
