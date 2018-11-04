<template>

  <vs-card actionable class="product-item" fixedHeight>

    <div slot="header">
      <p>{{productData.name}}</p>
    </div>

    <div slot="media">
      <img :src="productData.long_desc" class="product-item-img">
    </div>

    <div slot="footer">
      <p>
        {{productData.short_desc}}
      </p>
    </div>
  </vs-card>

</template>

<script>
export default {
  name: 'ProductListItem',
  components: {},
  props: {
    productData: {
      type: Object,
      default() {
        return {
          id: '',
          sku: '',
          name: '',
          short_desc: '',
          long_desc: '',
        };
      },
    },
  },
};
</script>

<style>
.product-item {
  margin: 0px;
  padding: 5px;
}

.product-item-img {
  height: 25vh;
  object-fit: contain;
}
</style>
