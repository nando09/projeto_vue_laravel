<template>
<!-- 	<div id="nav">
		<router-link v-for='menu in menus' :to='menu.route' :key='menu.route'>
			{{ menu.name }} |
		</router-link>
		<router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link> |
		<router-link to="/padrao">Padrao</router-link>
	</div>
 -->
 	<router-view />
</template>
// <script type="text/javascript">
// export default {
// 	data () {
// 		return {
// 			menus: [
// 				{
// 					route:	'/',
// 					name:		'Index'
// 				},
// 				{
// 					route:	'/about',
// 					name:		'Sobre'
// 				},
// 				{
// 					route:	'/padrao',
// 					name:		'Padrao'
// 				}
// 			]
// 		}
// 	}
// };
// </script>
<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>
