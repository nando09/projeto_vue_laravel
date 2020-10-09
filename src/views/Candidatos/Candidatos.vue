<template>
	<Topo></Topo>
	<Lateral></Lateral>
	<Index></Index>
</template>

<script>
import Lateral from '@/components/Menus/Lateral.vue';
import Topo from '@/components/Menus/Topo.vue';
import Index from '@/components/Candidatos/Index.vue';

export default {
	name: "Curriculos",
	components: {
		Lateral,
		Topo,
		Index
	}
};
</script>
