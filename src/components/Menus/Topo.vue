<template>
	<nav class="indigo lighten-1 topo">
		<div class="nav-wrapper">
			<a href="#" class="brand-logo"><i class="material-icons">cloud</i>Logo</a>
			<ul class="right hide-on-med-and-down">
				<li>
					<router-link to="/about">About</router-link>
				</li>
				<li><a href="#"><i class="material-icons">view_module</i></a></li>
				<li><a href="#"><i class="material-icons">refresh</i></a></li>
				<li><a href="#"><i class="material-icons">more_vert</i></a></li>
			</ul>
		</div>
	</nav>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Topo",
  components: {
    // HelloWorld
  }
};
</script>
<style type="text/css">
	.topo{
		height: 10vh;
	}
</style>