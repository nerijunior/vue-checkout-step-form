<template>
  <div class="form-field">
    <label v-if="label">{{ label }}</label>
    <TextInput :type="type" />
  </div>
</template>

<script>
import TextInput from '@/components/atoms/TextInput'

export default {
  components: { TextInput },
  props: {
    label: {
      required: true
    },
    type: {
      default: 'text'
    }
  }
}
</script>

<style lang="scss" scope>
.form-field{
  display: flex;
  flex-direction: column;

  label {
    font-weight: bold;
    text-transform: uppercase;
    color: #D4D9DD;
    margin-bottom: 10px;
  }
}
</style>
