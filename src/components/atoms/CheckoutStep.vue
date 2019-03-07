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

<style scope>
.checkout-step{
  font-size: 14px;
  color: black;
}
</style>
