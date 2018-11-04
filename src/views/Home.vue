<template>
  <div class="home">
    <div>
      <div>
        <img class="decor" alt="Decoration" src="../assets/decor.svg">
        <img class="decor-bottom" alt="Decoration" src="../assets/decor.svg">
      </div>

      <div class="wrapper">
        <vs-row>
          <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
            <div class="logo">
              <img alt="AP logo" src="../assets/landing-page-logo.svg">
            </div>
          </vs-col>
        </vs-row>

        <div class="button--wrapper">
          <br>
          <vs-row vs-type="flex" vs-justify="center">
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="3" vs-sm="6" vs-xs="12">
              <vs-button color="warning" type="line" to="login">LOGIN</vs-button>
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="3" vs-sm="6" vs-xs="12">
              <vs-button color="#663695" type="line" to="register">SIGN UP</vs-button>
            </vs-col>
          </vs-row>

          <br>
          <vs-row vs-type="flex" vs-justify="center">
            <vs-col vs-type="flex" vs-justify="center" vs-align="center">
              <vs-button class="catalog-button" color="#663695" gradient-color-secondary="#8F5FBF" type="gradient" to="shop">
                VIEW CATALOG
              </vs-button>
            </vs-col>
          </vs-row>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import HomeHeader from '@/components/HomeHeader.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    HomeHeader,
  },
};
</script>

<style scoped lang="scss">
.home-content {
  text-align: center;
  padding-top: 20px;
}

.vs-button {
  font-family: 'Fira Sans', sans-serif !important;
  font-size: 25px !important;
  font-weight: 600 !important;
  padding: 30px 100px;
}

.button--wrapper {
  margin-top: 20px;
}

.logo {
  width: 50%;
}

.wrapper {
  position: fixed;
  margin-top: -10%;
  width: 100%;
  height: auto;
  top: 50%;
}

.catalog-button {
  padding: 30px 300px !important;
}

.decor {
  position: fixed;
  left: 10%;
  top: -25%;
}
.decor-bottom {
  position: fixed;
  right: 80%;
  bottom: -25%;
}
</style>
