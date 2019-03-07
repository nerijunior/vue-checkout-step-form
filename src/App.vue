<template>
  <div id="app">

    <div id="content">
      <CheckoutSteps />

      <!-- <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div> -->
      <router-view/>
    </div>

    <ShoppingCart />

  </div>
</template>

<script lang="ts">
import CheckoutSteps from '@/components/molecules/CheckoutSteps'
import ShoppingCart from '@/components/organisms/ShoppingCart'

export default {
  components: {
    CheckoutSteps,
    ShoppingCart
  }
}
</script>

<style lang="scss" scope>
#app{
  display: flex;
  flex-direction: row;
}
#content{
  width: calc(100% - 290px);
}

.shopping-cart{
  width: 290px;
}
</style>
