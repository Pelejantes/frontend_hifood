<template>
    <div class="body-pagina-logada">
        <!-- // Aqui aui -->
        <ModalEndereco v-if="modalOpen" @closeModal="closeModal" />
        <div class="filter-container">
            <label class="filter" for="inputFilter">
                <img src="@/assets/lupa.png" alt="icon_filter">
                <input type="text" id="inputFilter" placeholder="Busque por item ou loja">
            </label>
            <button v-if="!modalOpen" @click="openModal">Endereço</button>
        </div>


        <section>
            <h4>Produtos</h4>
            <SliderComp>
                <CardProduto v-for="(rotaProduto, i) in Object.values(rotas)[2].data" :key="`rotaProduto-${i}`"
                    :nomeProps="`${rotaProduto.nomeProd}`" :imagemPathProps="imagemSrc(rotaProduto.imagemProd)"
                    :precoProps="rotaProduto.preco"
                    :nomeEstabProps="puxarEstab(rotaProduto.estabelecimentoId).nomeEstab"
                    :imagemPathEstabProps="imagemSrc(puxarEstab(rotaProduto.estabelecimentoId).imagemEstab)" />
            </SliderComp>
        </section>
        <section class="section-categorias">
            <h4>Categorias</h4>
            <SliderComp>
                <CardCategoria v-for="(rotaCategoria, i) in Object.values(rotas)[3].data" :key="`rotaCategoria-${i}`"
                    :nome="`${rotaCategoria.nomeCategoria}`" :imagemPathProps="imagemSrc(rotaCategoria.imagem)" />
            </SliderComp>
        </section>
        <section class="section-estabelecimentos">
            <h4>Estabelecimentos Parceiros</h4>
            <SliderComp>
                <CardEstabelecimento v-for="(rotaEstabelecimento, i) in Object.values(rotas)[0].data"
                    :key="`rotaEstabelecimento-${i}`" :nomeEstabProps="rotaEstabelecimento.nomeEstab"
                    :nomeCategoriaProps="puxarCategoria(rotaEstabelecimento.categoriaId).nomeCategoria"
                    :imagemPathProps="imagemSrc(rotaEstabelecimento.imagemEstab)"
                    :estabelecimentoIdProps="rotaEstabelecimento.estabelecimentoId" />
            </SliderComp>
        </section>
    </div>
</template>

<script>
import CardProduto from '@/components/base/CardProduto.vue'
import CardCategoria from '@/components/base/CardCategoria.vue'
import CardEstabelecimento from '@/components/base/CardEstabelecimento.vue'
import SliderComp from '@/components/base/SliderComp.vue'
import ModalEndereco from '@/components/forms/ModalEndereco.vue'
import { requisicao } from '../../utils/funcsGerais'

export default {
    name: "PaginaLogada",
    data() {
        return {
            modalOpen: false,
            qtdCards: 8,
            usuario: {},
            token_jwt: localStorage.getItem('token_jwt') || '',
            rotas: [
                {
                    nomeRota: "estabelecimentos",
                    url: "https://backendhifood-production.up.railway.app/estabelecimentos",
                    data: []
                },
                {
                    nomeRota: "cuponsUsuario",
                    url: "https://backendhifood-production.up.railway.app/cuponsUsuario",
                    data: []
                },
                {
                    nomeRota: "produtos",
                    url: "https://backendhifood-production.up.railway.app/produtos",
                    data: []
                },
                {
                    nomeRota: "categorias",
                    url: "https://backendhifood-production.up.railway.app/categorias",
                    data: []
                },
            ]
        }
    },
    components: {
        ModalEndereco,
        CardProduto,
        CardCategoria,
        CardEstabelecimento,
        SliderComp
    },
    methods: {
        closeModal() {
            this.modalOpen = false
        },
        openModal() {
            this.modalOpen = true
        },
        requisicao: requisicao,
        puxarEstab(estabelecimentoId) {
            let estabelecimentos = Object.values(this.rotas[0].data)
            for (let estabelecimento of estabelecimentos) {
                if (estabelecimento.estabelecimentoId == estabelecimentoId) {
                    return estabelecimento
                }
            }
        },
        puxarCategoria(categoriaId) {
            let categorias = Object.values(this.rotas[3].data)
            for (let categoria of categorias) {
                if (categoria.categoriaId == categoriaId) {
                    return categoria
                }
            }
            return {}
        },
        imagemSrc(imageBase64) {
            // Retorna Url Blob da imagem codificada, caso nada seja passado, retorna imagem default
            return imageBase64 ?
                `data:image/png;base64,${imageBase64}` :
                "data:image/png;base64,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AnQESHIIQCBcAggw3NiRcwhAwJEAAnQESHIIQCBcAggw3NiRcwhAwJEAAnQESHIIQCBcAggw3NiRcwhAwJEAAnQESHIIQCBcAggw3NiRcwhAwJEAAnQESHIIQCBcAggw3NiRcwhAwJEAAnQESHIIQCBcAggw3NiRcwhAwJEAAnQESHIIQCBcAggw3NiRcwhAwJEAAnQESHIIQCBcAggw3NiRcwhAwJEAAnQESHIIQCBcAggw3NiRcwhAwJEAAnQESHIIQCBcAggw3NiRcwhAwJEAAnQESHIIQCBcAggw3NiRcwhAwJEAAnQESHIIQCBcAggw3NiRcwhAwJEAAnQESHIIQCBcAggw3NiRcwhAwJEAAnQESHIIQCBcAggw3NiRcwhAwJEAAnQESHIIQCBcAggw3NiRcwhAwJEAAnQESHIIQCBcAggw3NiRcwhAwJEAAnQESHIIQCBcAggw3NiRcwhAwJEAAnQESHIIQCBcAggw3NiRcwhAwJEAAnQESHIIQCBcAggw3NiRcwhAwJEAAnQESHIIQCBcAggw3NiRcwhAwJEAAnQESHIIQCBcAggw3NiRcwhAwJEAAnQESHIIQCBcAggw3NiRcwhAwJEAAnQESHIIQCBcAggw3NiRcwhAwJEAAnQESHIIQCBcAggw3NiRcwhAwJEAAnQESHIIQCBcAggw3NiRcwhAwJEAAnQESHIIQCBcAggw3NiRcwhAwJEAAnQESHIIQCBcAggw3NiRcwhAwJEAAnQESHIIQCBcAggw3NiRcwhAwJEAAnQESHIIQCBcAggw3NiRcwhAwJEAAnQESHIIQCBcAggw3NiRcwhAwJEAAnQESHIIQCBcAggw3NiRcwhAwJEAAnQESHIIQCBcAggw3NiRcwhAwJHA/wDvDFas2yjoVwAAAABJRU5ErkJggg=="
        },
        openAddressForm() {
            this.modalOpen = true;
        }
    },
    async created() {
        let token = localStorage.getItem('tokenJWT')
        let idUsu = localStorage.getItem('usuarioId');
        if (!token || !idUsu) {
            this.$router.push('/')
            return
        }
        if (!localStorage.getItem('indexEnderecoSelecionado')) {
            let retornaDados = await this.requisicao(`https://backendhifood-production.up.railway.app/enderecos/usuario/${28}`, 'GET', token)
            if (Array.isArray(retornaDados)) {
                if (retornaDados.length == 0) {
                    this.modalOpen = true
                }
            }
        }
        for (let rota of this.rotas) {
            try {
                rota.data = await this.requisicao(rota.url);
            } catch (error) {
                console.log(error)
            }
        }
        if (!localStorage.getItem('itensPedido')) {
            localStorage.setItem('itensPedido', JSON.stringify([]))
        }
    },
    async beforeMount() {
        let token = localStorage.getItem('tokenJWT')
        let telefoneUsu = localStorage.getItem('telefoneUsu')
        if (!token || !telefoneUsu) {
            this.$router.push('/')
            return
        }
        let usuario = await this.requisicao(`https://backendhifood-production.up.railway.app/telefoneUsu/ler/${telefoneUsu}`, 'GET', token)
        localStorage.setItem('usuarioId', usuario.usuarioId)
    }

}
</script>

<style scoped>
.filter-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4vw;
    gap: 5%;
}

.body-pagina-logada button {
    background-color: #ff6f61;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
    margin-left: auto;
}

.body-pagina-logada {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;

}

.filter {
    display: flex;
    align-items: center;
    background-color: rgb(219, 232, 255);
    border-radius: 0.4rem;
    padding: 0.5rem 1rem;
    width: 20vw;
    min-width: fit-content;
}

input:focus {
    outline: none;
}

.filter img {
    width: 1.5rem;
}

.filter input {
    border: 0;
    background-color: transparent;
    padding: 0.3rem 4rem 0.3rem 1rem;
}

h4 {
    text-align: left;
    margin-left: 2vw;
}


/*
* {
    border: 1px solid red !important;
}
*/
</style>