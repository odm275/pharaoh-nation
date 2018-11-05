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

    <h1>Clothes you like</h1>
    <div style="display: flex; flex-direction: row;">
      <img v-for="url in baseUrls" :src="url" style="height: 300px; width: auto;">
    </div>



    <h1>Clothes we have</h1>
    <!-- rows of apparel items -->
    <vs-row vs-justify="flex-start" vs-align="center" vs-w="12" type="flex" class="product-list ph-overflow-scroll">

      <vs-col v-for="product in products" :key="product.id" type="flex" vs-xs="12" vs-sm="5" vs-lg="4" class="product-col">

        <ProductListItem v-bind:key="product.id" v-bind:productData="product">
        </ProductListItem>
        <span v-for="concept in product.imagePrediction" :key="concept.id">{{concept.name}}</span>
      </vs-col>

    </vs-row>

    <button @click="findMatchingApparel()">Find an outfit</button>
    <h3>Results below</h3>

    <h1>The clothes meant for you</h1>
    <vs-row vs-justify="flex-start" vs-align="center" vs-w="12" type="flex" class="product-list ph-overflow-scroll">

      <vs-col v-for="product in matchedProducts" :key="product.id" type="flex" vs-xs="12" vs-sm="5" vs-lg="4" class="product-col">

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

import haveMatchingElement from '@/haveOneMatchingElement.js';

export default {
  name: 'ProductList',
  components: {
    Header,
    ProductListItem,
  },
  data() {
    return {
      products: [],
      baseUrls: [
        "https://successfulsigns.com/wp-content/uploads/2015/06/A-TB-G800_51_z1.png",
        "http://philippeperzi.com/assets/2013/07/Harvey-Specter6.png"
      ],
      baseConcepts: [],
      predConfig: {
        // confidence of concepts must be higher than this value
        minValue: 0.5
      },
      matchedProducts: []
    };
  },
  computed: {},

  methods: {

    getProductConcepts() {

      const imageUrls = this.products.map(product => product.long_desc);

      this.app.models.predict(Clarifai.APPAREL_MODEL, imageUrls, this.predConfig)
      .then(x => {

        const data = x.outputs;

        for (let i = 0; i < data.length; i++) {
          this.products[i].imagePrediction = data[i].data.concepts;
        }
      });
    },

    getBaseConcepts() {

      this.app.models.predict(Clarifai.APPAREL_MODEL, this.baseUrls, this.predConfig)
      .then(res => {

        res.outputs.forEach(output => {

          output.data.concepts.forEach(concept => {

            console.log(`${concept.name} pushed into this.baseConcepts`)
            this.baseConcepts.push(concept.name);
          });
        });
      })
      .catch(err => console.log(err))
    },

    findMatchingApparel() {

      //go through each product's concepts (predictions)
      this.products.forEach(product => {

        let currConcepts = product.imagePrediction.map(pred => pred.name);
        console.log(`product has: ${currConcepts}`)
        console.log(`being searched against: ${this.baseConcepts}\n\n`)

        if(haveMatchingElement(currConcepts, this.baseConcepts)) {
          
          console.log("there was a match")

          this.matchedProducts.push(product);
        }

      });
    },

  },

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
 
            this.getProductConcepts();
            this.getBaseConcepts();
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
