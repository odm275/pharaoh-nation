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
      <vs-row vs-justify="space-around" vs-align="center" vs-w="12"
        type="flex" class="ph-overflow-scroll">
        
        <vs-col 
          v-for="item,index in catalogItems"
          :key="index"

          type="flex"
          vs-xs="12" vs-sm="5" vs-lg="4"

          class="catalog-col"
        >

          <ProductListItem 
            v-for="product in products"
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
      products: [],
      catalogItems: [
        {
          name: "Versace",
          price: "$300",
          imgSrc: "black_dress.png"
        },
        {
          name: "Supreme",
          price: "$60",
          imgSrc: "suit.jpg"
        },
        {
          name: "Gucci Belt",
          price: "$150",
          imgSrc: "tan_w_hat.png"
        },
        {
          name: "Hanes Tee",
          price: "$10",
          imgSrc: "white_sweater.jpeg"
        },
        {
          name: "Janowski",
          price: "$55",
          imgSrc: "pink_dress.png"
        }
      ]
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
.product-list-content {
  margin-top: 80px;
  min-height: 360px;
}
.product-list-items {
  display: flex;
}
.catalog-col {
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
