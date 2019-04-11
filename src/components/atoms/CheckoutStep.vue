<template>
  <div class="checkout-step">
    <span class="number">{{ number }}</span>
    <span class="label">{{ label }}</span>
  </div>
</template>

<script>
export default {
  props: ['number', 'label']
}
</script>

<style lang="scss" scope>
.checkout-step{
  cursor: pointer;
  font-size: 14px;
  color: black;

  span{
    margin-right: 5px;
  }
}
</style>
