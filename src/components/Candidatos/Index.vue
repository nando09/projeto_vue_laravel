<template>
	<div class="row conteudo">
		<div class="col s3">
			<ul class="collection">
				<li class="collection-item avatar" v-for="candidato in candidatos" :key="candidato.id">
					<img :src="'data:image/jpeg;base64,' + candidato.image" alt="" class="circle">
					<span class="title">{{candidato.nome}}</span>
					<p>{{candidato.descricao.substring(0,8)}} ...</p>
					<div class="">
						<i class="material-icons icons-mat" @click="buscarCanditato(candidato.id)">visibility</i>
						<i class="material-icons icons-mat icon-ativo" v-if="candidato.favorito == 1">star</i>
						<i class="material-icons icons-mat" v-else>star_border</i>
					</div>
				</li>
			</ul>
		</div>
		<div class="col s9">
			<div class="card">
				<div class="card-content">
					<p>{{candidato.descricao || 'Não tem nenhum comentário!' }}</p>
				</div>
				<div class="card-tabs">
					<ul class="tabs tabs-fixed-width white">
						<li class="tab"><a href="#home" class="indigo darken-4 white-text">Início</a></li>
						<li class="tab"><a class="active indigo darken-4 white-text" href="#curriculo">Currículo</a></li>
						<li class="tab"><a href="#informacao" class="indigo darken-4 white-text">Informações</a></li>
					</ul>
				</div>
				<div class="card-content grey lighten-4">
					<div id="home">Test 1</div>
					<div id="curriculo">Test 2</div>
					<div id="informacao">Test 3</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from "axios";

	export default {
		name: 'Candidatos',
		components:{
		},
		created() {
		},
		data () {
			return {
				candidatos: [],
				candidato: 0,
			}
		},
		computed: {
		},
		mounted() {
			this.getCadidatos();
		},
		methods: {
			getCadidatos() {
				axios.get("http://localhost:3000/candidatos", {
					// axios.get('http://localhost:8000/api/produto', {
					headers: {
						"Content-Type": "application/json",
						// Authorization: "Bearer " + this.user.token
					}
				})
					.then(response => {
						console.log(response.data);
						this.candidatos = response.data;
					})
					.catch(e => {
						console.log(e);
						alert("servidor fora de área");
					});
			},

			buscarCanditato(id_cadidato){
				axios.get("http://localhost:3000/candidatos/" + id_cadidato, {
					// axios.get('http://localhost:8000/api/produto', {
					headers: {
						"Content-Type": "application/json",
						// Authorization: "Bearer " + this.user.token
					}
				})
					.then(response => {
						console.log(response.data);
						this.candidato = response.data;
					})
					.catch(e => {
						console.log(e);
						alert("servidor fora de área");
					});
			},
		}
	};
// export default {
// 	name: "Candidatos",
//     data () {
//         return {
//           user:			JSON.parse(sessionStorage.getItem('usuario')),
//             fields: [
//                 { key: 'Nome', sortable: true, },
//                 { key: 'Anunciante', sortable: true, },
//                 { key: 'Valor', sortable: true, },
//             ],
//             // items: [
//             //     { isActive: true, nome: "%Nome%", categoria: "%Categoria%", preco: "%Preço%", quantidade: "%Quantidade%", data: "%Data%"},
//             //     { isActive: true, nome: "%Nome%", categoria: "%Categoria%", preco: "%Preço%", quantidade: "%Quantidade%", data: "%Data%"},
//             //     { isActive: true, nome: "%Nome%", categoria: "%Categoria%", preco: "%Preço%", quantidade: "%Quantidade%", data: "%Data%"},
//             // ],
//             totalRows: 1,
//             currentPage: 1,
//             perPage: 5,
//             pageOptions: [5, 10, 15],
//             sortBy: '',
//             sortDesc: false,
//             sortDirection: 'asc',
//             filter: null,
//             filterOn: [],
//         }
//     },
// };
</script>
<style type="text/css">
	.icons-mat{
		margin: 0 10px;
	}

	.icon-ativo{
		color: blue;
	}

	.tabs .indicator {
		background-color: #5c6bc0;
	}
</style>