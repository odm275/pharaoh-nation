
  <template>
  <div id="login">
    <Header />

    <div class="login-form">
      <h2 class="title">Ready to Get Pharaoed?</h2>
      <form @submit.prevent="onSubmit">
        <div class="input">
          <vs-input size="large" type="text" label="First Name" placeholder="Amenhotep" v-model="firstName" />
        </div>
        <div class="input">
          <vs-input size="large" type="text" label="Last Name" placeholder="IV" v-model="lastName" />
        </div>
        <div class="input">
          <vs-input size="large" type="email" label="Email" placeholder="pharaoh@pyramid.com" v-model="email" />
        </div>
        <div class="input">
          <vs-input size="large" type="password" label="Password" placeholder="" v-model="password" />
        </div>
        <div class="submit">
          <vs-button color="#663695" type="relief" v-on:click="submit">REGISTER</vs-button>
          <br>
          <vs-button to="/login" line-origin="left" color="warning" type="line">I already have an account yet! Login</vs-button>
        </div>
      </form>
    </div>

  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };
  },
  components: {
    Header,
  },
  methods: {
    submit: function() {
      const formData = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch('register', formData);
    },
  },
};
</script>

<style scoped>
.login-form {
  width: 500px;
  margin: 100px auto 40px;
  border: 1px solid #eee;
  padding: 20px;
  box-shadow: 0 2px 3px #ccc;
  border-radius: 15px;
}

.vs-button {
  font-family: 'Fira Sans', sans-serif !important;
  font-weight: 600;
  font-size: 15px !important;
  margin-top: 10px;
  width: 100%;
  padding: 20px 100px;
}

.title {
  text-align: center;
}

.vs-input {
  width: 100%;
  font-size: 35px !important;
}

.label {
  font-size: 35px !important;
}
</style>
