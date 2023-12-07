<script setup>
const play = ref(false)
</script>

<template>
    <NuxtLayout>
      <main>
        <div v-if="!play" class="logo">
          <img src="/img/logo.png" alt="Vue.js logo"/>
        </div>
        <button v-if="!play" @click="play = !play" class="playbtn">
          Jouer
        </button>
        <Swiper v-if="play" />
      </main>
    </NuxtLayout>
</template>

<style>

* {
  box-sizing: border-box;
  border: 0;
}

@font-face {
  font-family: 'Inter';
  src: url("/fonts/Inter.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section {
  display: block;
}
body {
  line-height: 1;
}
ol,ul {
  list-style: none;
}
blockquote,q {
  quotes: none;
}
blockquote:before,blockquote:after,q:before,q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

html {
  scroll-behavior: smooth;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  background-color: #f5f5f5;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 250px;
  background-color: #ececec;
  border-radius: 150px;
  box-shadow: inset 0 0 0 10px #ececec;
  box-shadow: 0 0 10px 10px rgba(237, 237, 237, 0.2);
}

.dark .logo {
  background: #343434;
  box-shadow: inset 0 0 0 10px #343434;
  box-shadow: 0 0 10px 10px rgba(26, 181, 172, 0.2);
}

.logo img {
  height: 100%;
}

.playbtn {
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  margin-top: 30px;
  font-family: Inter;
  font-size: 64px;
  font-weight: 900;
  line-height: 77px;
  letter-spacing: 0.1em;
  padding: 10px 15px;
  color: #1AB5AC;
  background: #ececec;
  transition: all 0.2s ease-in-out;
}

.dark .playbtn {
  background: #343434;
  color: #fff;
}

.playbtn:hover {
  transform: scale(1.05);
  background-color: #1AB5AC;
  color: #fff;
  cursor: pointer;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

</style>
