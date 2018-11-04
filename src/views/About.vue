<template>
  <div class="about">
    <Header />
    <div class="container">
      <div class="about-content">
        <h1>About this Project</h1>
        <p>Apparel pharaoh is a FCC Online Hackathon project. <br>This project was done in less than 40hrs by 5 great pharoahs.</p>
        <p>Idea was born through a thorough brainstorm (Obviously false because of the time we had) we wanted to create a big time apparel classification e-commerce with all the techy stuff like NLP, Fast request, FBI-like security etc.</p>
        <p>However, as you'd imagine none of that was done 😂. We the pharaoh knights, kings and ultimate ninjas of the ancient Sphinx. We created a nice little JAMStack app which intergrates the new <a href="https://pilon.io/" target="_blank" rel="noopener noreferrer">Pilon API</a> (If you are reading this later, maybe it's much easier but you really can't imagine the work we put in this). </p>
        <h2>Tech Used</h2>
        <p><a href="https://medium.freecodecamp.org/freecodecamp-is-hosting-a-free-hackathon-at-github-in-san-francisco-and-an-online-hackathon-too-2078088df278" target="_blank">The FreeCodeCamp Online Hackathon</a> proposed a series of API we could use and we made choices based on these </p>
        <br>
        <h3>APIs</h3>
        <p>
          <b><a href="https://pilon.io/" target="_blank" rel="noopener noreferrer">Pilon API</a></b>: Used to create all the e-commerce looking stuff in the app.
        </p>
        <p>
          <b> <a href="https://clarifai.com/" target="_blank">Clarifai (Partially Implemented) </a></b>: Used to suggest to users images based on what the user likes.
        </p>
        <br>
        <h3>Front End & Design</h3>
        <p>
          <b><a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">VueJS</a></b>: The frontend framework used to create all this.
        </p>
        <p>
          <b><a href="https://lusaxweb.github.io/vuesax/" target="_blank" rel="noopener noreferrer">Vuesax</a></b>: OG in visual components for Vue.
        </p>
        <br>
        <h2>The 5 Great Pharoahs (the order doesn't change their Pharaoism)</h2>
        <vs-avatar size="70px" src="https://avatars3.githubusercontent.com/u/20306697?s=460&v=4" /> <a href="http://github.com/odm235" target="_blank" rel="noopener noreferrer">Pwii</a> - Big time piloneer
        <vs-avatar size="70px" src="https://avatars0.githubusercontent.com/u/39972411?s=460&v=4" /><a href="http://github.com/ChrisSMendoza" target="_blank" rel="noopener noreferrer">ChrisCodes</a> - the Clarifaier
        <vs-avatar size="70px" src="https://avatars3.githubusercontent.com/u/20648461?s=460&v=4" /><a href="http://github.com/ChrisSMendoza" target="_blank" rel="noopener noreferrer">dSkilly</a> - StackOverOverOverFlow
        <vs-avatar size="70px" src="https://avatars0.githubusercontent.com/u/39972411?s=460&v=4" /><a href="http://github.com/bkwillia052" target="_blank" rel="noopener noreferrer">BKWillia</a> - Gatsboy
        <vs-avatar size="70px" src="https://avatars3.githubusercontent.com/u/26802924?s=460&v=4" /><a href="http://github.com/blurdylan" target="_blank" rel="noopener noreferrer">DylanBlur</a> - Clutch
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'About',
  components: {
    Header,
  },
};
</script>

<style scoped lang="scss">
.about-content {
  margin-top: 80px;
  min-height: 360px;
}
p {
  line-height: 2rem;
}
</style>
