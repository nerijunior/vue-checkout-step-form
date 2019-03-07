<template>
  <div class="shopping-cart">
    <div class="cart-header">
      <span class="title">Shopping Cart</span>
      <span class="badge">2</span>
    </div>

    <div class="cart-contents">
      <ShoppingCartItems v-if="items" :items="items" />
    </div>

    <div class="cart-values">

    </div>
  </div>
</template>

<script>
import ShoppingCartItems from '@/components/molecules/ShoppingCartItems'

export default {
  components: {
    ShoppingCartItems
  },
  props: {
    items: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scope>
.shopping-cart{
  background-color: #F8FAFB;
  height: 100vh;
  padding: 70px 50px 0;

  .cart-header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 20px;
    border-bottom: 1px solid #E4EAEE;

    .title{
      font-size: 24px;
    }

    .badge{
     background-color: #0095F8;
     color: white;
     font-size: 14px;
     display: inline-block;
     width: 24px;
     height: 24px;
     border-radius: 50px;
     text-align: center;
     line-height: 24px;
    }
  }
}
</style>
