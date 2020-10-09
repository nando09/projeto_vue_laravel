<template>
	<Topo></Topo>
	<Lateral></Lateral>
	<Home></Home>
</template>

<script>
import Lateral from '@/components/Menus/Lateral.vue';
import Topo from '@/components/Menus/Topo.vue';
import Home from '@/components/Home/Index.vue';

export default {
	name: "Index",
	components: {
		Lateral,
		Topo,
		Home
	}
};
</script>
