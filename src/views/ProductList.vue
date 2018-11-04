<template>

  <main class="ph-h-section-first">

    <!-- catalog header -->
    <vs-row vs-justify="center" vs-align="center" vs-w="12">

      <!-- logo, company name, section name -->
      <vs-col class="ph-text-center " vs-w="4" vs-xs="12">
        <h1>Apparel Pharaoh</h1>
        <h4>Catalog</h4>
      </vs-col>

    </vs-row>

    <!-- rows of apparel items -->
    <vs-row vs-justify="flex-start" vs-align="center" vs-w="12" type="flex" class="product-list ph-overflow-scroll">

      <vs-col v-for="product in products" :key="product.id" type="flex" vs-xs="12" vs-sm="5" vs-lg="4" class="product-col">

        <ProductListItem v-bind:key="product.id" v-bind:productData="product">
        </ProductListItem>
        <span v-for="concept in product.imagePrediction" :key="concept.id">{{concept.name}}</span>
      </vs-col>

    </vs-row>

  </main>

</template>

<script>
import Header from '@/components/Header.vue';
import ProductListItem from '@/components/ProductListItem.vue';
import config from '../config';
import clarifai from 'clarifai';

export default {
  name: 'ProductList',
  components: {
    Header,
    ProductListItem,
  },
  data() {
    return {
      products: [],
    };
  },
  computed: {},
  created() {
    this.app = new Clarifai.App({ apiKey: '359480b570054322b902c0b9f3978ac4' });
  },

  mounted() {
    // Get a public token
    config.pilonApi
      .post('/token', {
        token_scope: 'public',
        environment_id: config.environmentId,
      })
      .then(resToken => {
        config.pilonApi
          .get('/products', {
            headers: {
              Authorization: `Bearer ${resToken.data.token}`,
              Accept: 'application/json',
            },
          })
          .then(res => {
            console.log(res.data);
            this.products = res.data;
            const images = res.data.map(data => data.long_desc);

            this.app.models.predict(Clarifai.APPAREL_MODEL, images).then(x => {
              const data = x.outputs;
              console.log(data);
              for (let i = 0; i < data.length; i++) {
                this.products[i].imagePrediction = data[i].data.concepts;
              }
              console.log(this.products);
            });
          });
      });
  },
};
</script>

<style>
.product-list {
  height: 80vh;
}
.product-col {
  padding: 15px;
  height: 40vh;
}

.ph-overflow-scroll {
  overflow: scroll;
}

.ph-h-100 {
  height: 100%;
}
.ph-h-section-first {
  height: 95vh;
}

.ph-obj-fit-contain {
  object-fit: contain;
}

.ph-text-center {
  text-align: center;
}
.ph-mt-2 {
  margin-top: 20px;
}

.ph-ms-2 {
  margin-left: 20px;
  margin-right: 20px;
}

.ph-vh-40 {
  height: 40vh;
}
</style>
