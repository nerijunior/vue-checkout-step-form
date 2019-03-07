<template>
  <div class="checkout-steps">
    <CheckoutStep :class="{ 'active' : currentStep === 1 }" number="01" label="Customer Info" />
    <CheckoutStep :class="{ 'active' : currentStep === 2 }" number="02" label="Shipping Info" />
    <CheckoutStep :class="{ 'active' : currentStep === 3 }" number="03" label="Payment Selection" />
  </div>
</template>

<script>
import CheckoutStep from '@/components/atoms/CheckoutStep'

export default {
  components: { CheckoutStep },
  data () {
    return {
      currentStep: 1
    }
  }
}
</script>

<style lang="scss" scope>
.checkout-steps{
  display: flex;
  flex-direction: row;

  .checkout-step{
    padding: 34px 50px;
    border-bottom: 1px solid #D4D9DD;

    &.active{
      border-bottom: 1px solid black;
    }
  }
}
</style>
