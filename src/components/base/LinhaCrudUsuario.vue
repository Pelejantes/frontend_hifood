<template>
    <label v-bind:for="'radio' + linhaData.usuarioId">
        <div class="linhaCrud" v-bind:id="'linhaCrudUsu' + linhaData.usuarioId">
            <input type="radio" v-bind:id="'radio' + linhaData.usuarioId" name="selecionar"
                @click="toggleSelecao">
            <p>{{ linhaData.usuarioId }}</p>
            <p>{{ linhaData.nomeUsu }}</p>
            <p>{{ formatarStatus }}</p>
            <p>{{ formatarTipo }}</p>
            <p>{{ linhaData.dataCriacao }}</p>
        </div>
    </label>
</template>

<script>
export default {
    name: 'LinhaCrudUsuario',
    data() {
        return {
            ultimoRadio: '',
            usuarioId: null,
            focado: false
        }
    },
    props: {
        linhaData: Object
    },
    methods: {
        salvarId() {
            this.$emit('salvarId', this.usuarioId)
        },
        toggleSelecao(event) {
            if (event.target.parentElement.id == this.ultimoRadio) {
                event.target.checked = false
                this.ultimoRadio = ''
                this.usuarioId = null
            } else {
                event.target.checked = true
                this.ultimoRadio = event.target.parentElement.id
                this.usuarioId = this.linhaData.usuarioId
            }
            this.salvarId()
        }
    }
    , computed: {
        formatarTipo() {
            if (this.linhaData.tipoUsuarioId == 0) {
                return 'Comprador'
            } else {
                return 'Entregador'
            }
        },
        formatarStatus() {
            if (this.linhaData.statusAtivo == 0) {
                return 'Desativada'
            } else {
                return 'Ativada'
            }
        },
    }
}
</script>

<style scoped>
.linhaCrud {
    display: grid;
    gap: 2%;
    grid-template-columns: 0.2fr 1fr 2fr 1fr 1fr 2fr;
    padding: 1.3% 1%;
    font-weight: bold;
    color: #3c3b4c;
    font-size: 0.6rem;
}

label:nth-child(even) div {
    background-color: #f2f2f7;
}

p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.linhaCrud p {
    margin: 0px 0px;
    text-align: left;
}
</style>