<!-- src/views/Login.vue -->
<template>
  <div class=" fundo ">
    <router-link to="/">
      <img src="../assets/HifoodPrincipal.png" id="imagem-principal">
    </router-link>
    <section class="sectionPagLogin">
      <section>
        <img id="imgPessoas" src="../assets/bg_login-removebg-preview.png" alt="">
      </section>
    </section>
    <section class="formulario">
      <CardFormCadastro />
    </section>
  </div>
</template>

<script>
import CardFormCadastro from '@/components/forms/CardFormCadastro.vue'
export default {
  name: "PaginaLogin",
  data() {
    return {
      
    }
  },
  components: {
    CardFormCadastro,
  },
  methods: {
  }
}
</script>

<style scoped>
.sectionPagLogin {
  display: flex;
  align-items: center;
  height: 100vh;
  justify-content: space-evenly;
  overflow: hidden;
}

main {
  display: flex;
  justify-content: space-evenly;
  width: 85vw;
  align-items: center;
  height: 80vh;
}

#imgPessoas {
  width: 80%;
  margin-top: 5vw;
}


.btnsIntegracao1 {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 1vh;
}

.btnsIntegracao1 img {
  width: 20px;
}

#btnFacebook {
  background-color: rgb(92, 137, 210);
}

#btnFacebook input {
  color: white;
}

#btnGoogle {
  background-color: rgb(255, 255, 255);
}

.btnsIntegracao1 label {
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 10%;
  padding: 3% 5%;
  width: 80%;
}


.formulario {
  background-color: white;
  padding: 1.5%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: min-content;
  justify-content: center;
  align-items: center;
  width: 30%;
  gap: 3vh;
  box-shadow: 5px 5px 5px rgb(245, 245, 245);
}

h2 {
  margin: 0;
  color: rgb(90, 90, 90);
}

p {
  color: gray;
}

hr {
  width: 100%;
  border-color: rgba(255, 248, 248, 0.302);
}

.btnsIntegracao2 {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 2vh;
}

.btnsIntegracao1 input[type="button"] {
  border-color: transparent;
}

.btnsIntegracao2 input[type="button"] {
  width: 43%;
  padding: 3% 0%;
  color: gray;
}

.btnsIntegracao2 input[type="button"]:hover {
  background-color: rgb(213, 89, 89);
  color: white;
  transition: all 0.5s;
}

.btns {
  border-radius: 5px;
  border: solid 1px lightgray;
}

input[type="button"] {
  background-color: transparent;
}

#imagem-principal {
  width: 120px;
  height: auto;
  margin-left: 0;
  /* Remova o valor negativo de margin-left */
  position: absolute;
  /* Ou use 'relative' se desejar que ela fique relativa ao fluxo do documento */
  top: 30px;
  left: 30px;
  /* Posiciona a imagem 30px da borda esquerda */

}

.fundo {
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-image: url('../assets/Ellipse\ 10.png');
  background-size: 70vw;
  background-position: left;
  background-repeat: no-repeat;
}

</style>
