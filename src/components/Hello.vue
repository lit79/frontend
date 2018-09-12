<template>
  <div class="hello view">
    <div class="animated fadeInLeft background"></div>
    <h1 class="welcome animated zoomInRight">{{ randomWelcomeWord() }}</h1>
    <a  href="#/authticket"><b class="register">{ Подати заяву на доступ }</b></a>
    <a  href="#/login"><b class="login">[ Логін ]</b></a>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    randomWelcomeWord() {
      var things = ["Ліцей 79", "Привіт"];
      var thing = things[Math.floor(Math.random() * things.length)];
      return thing;
    }
  }
};
</script>

<style>
.register {
  position: absolute;
  right: 5vw;
  bottom: 5vh;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(190deg, #ef37a4, #fae62d);
  background-size: 200% 200%;

  -webkit-animation: login 4s ease infinite;
  -moz-animation: login 4s ease infinite;
  animation: login 4s ease infinite;
}
.login {
  position: absolute;
  left: 5vw;
  bottom: 15vh;
  font-size: 15vh;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  background-image: linear-gradient(190deg, #ef37a4, #fae62d);
  background-size: 200% 200%;

  -webkit-animation: login 4s ease infinite;
  -moz-animation: login 4s ease infinite;
  animation: login 4s ease infinite;
}
@-webkit-keyframes login {
  0% {
    background-position: 64% 0%;
  }
  50% {
    background-position: 37% 100%;
  }
  100% {
    background-position: 64% 0%;
  }
}
@-moz-keyframes login {
  0% {
    background-position: 64% 0%;
  }
  50% {
    background-position: 37% 100%;
  }
  100% {
    background-position: 64% 0%;
  }
}
@keyframes login {
  0% {
    background-position: 64% 0%;
  }
  50% {
    background-position: 37% 100%;
  }
  100% {
    background-position: 64% 0%;
  }
}
.welcome {
  position: absolute;
  right: 5%;
  top: 0;
  margin-top: 0;
  font-size: 20vh;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  background-image: linear-gradient(190deg, #fae62d, #ef37a4);
  background-size: 100% 250%;

  -webkit-animation: login 2s ease;
  -moz-animation: login 2s ease;
  animation: login 2s ease;
}
.hello {
  font-family: "Raleway Black", arial;
  position: absolute;
  z-index: 0;
  color: whitesmoke;
  background: black;
}
.background {
  position: absolute;
  z-index: -1;
  background-image: url("/static/bg-hello.svg");
  background-repeat: no-repeat;
  width: 878px;
  height: 676px;
  left: 17.6%;
  animation: float 4.12731298739812s ease-in-out;
  top: 10.6%;
}
@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-20px);
  }
  100% {
    transform: translatey(0px);
  }
}
</style>
