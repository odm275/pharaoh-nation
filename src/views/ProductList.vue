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
      <vs-row vs-justify="flex-start" vs-align="center" vs-w="12"
        type="flex" class="product-list ph-overflow-scroll">
        
        <vs-col 
          v-for="product,index in products"
          :key="index"

          type="flex"
          vs-xs="12" vs-sm="5" vs-lg="4"

          class="product-col"
        >

          <ProductListItem 
            v-bind:key="product.id"
            v-bind:productData="product">
          </ProductListItem>

        </vs-col>

      </vs-row>

    </main>

</template>

<script>
import Header from '@/components/Header.vue';
import ProductListItem from '@/components/ProductListItem.vue';
import config from '../config';

export default {
  name: 'ProductList',
  components: {
    Header,
    ProductListItem,
  },
  data() {
    return {
      products: []
    };
  },
  computed: {},
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
