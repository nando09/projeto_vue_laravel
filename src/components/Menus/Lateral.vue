<template>
	<div class="menu-sidebar indigo darken-4">
		<ul>
			<li>
				<router-link class="grey-text text-lighten-3" to="/home"><i class="fas fa-home"></i></router-link>
			</li>
			<li>
				<router-link class="grey-text text-lighten-3" to="/candidatos"><i class="fas fa-users"></i></router-link>
			</li>
			<li>
				<router-link class="grey-text text-lighten-3" to="/curriculos"><i class="fas fa-paste"></i></router-link>
			</li>
			<li>
				<router-link class="grey-text text-lighten-3" to="/configuracao"><i class="fas fa-cogs"></i></router-link>
			</li>
		</ul>
	</div>
</template>

<script>
// @ is an alias to /src

export default {
	name: "Lateral",
	props: {
		msg: String
	}
};
</script>
<style type="text/css">
	.menu-sidebar{
		position: fixed;
		float: left;
		z-index: -1;
		width: 5%;
		max-width: 5%;
		margin-top: 10vh;
		height: 90vh;
		webkit-box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
		box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
	}

	ul{
		margin: 0;
	}

	li a{
		display: block;
		padding: 20px;
	}

	li > a:hover > i, li > a:hover{
		background: #eee;
		color: #303f9f;
	}
</style>
