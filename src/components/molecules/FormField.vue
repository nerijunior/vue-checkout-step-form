<template>
  <div class="form-field"
    :class="{ 'form-field--focused': focused }"
    @focus="onFocus"
    @change="$emit('change', $event.target.value)"
    @input="$emit('input', $event.target.value)"
    @blur="onBlur">
    <label v-if="label">{{ label }}</label>
    <slot>
      <TextInput @input="$emit('input', $event)" @focus="onFocus" @blur="onBlur" :type="type" />
    </slot>
  </div>
</template>

<script>
import TextInput from '@/components/atoms/TextInput'

export default {
  components: { TextInput },

  data () {
    return {
      focused: false
    }
  },

  computed: {
    hasInputSlot () {
      return !!this.$slots['content']
    }
  },

  props: {
    label: {
      required: true
    },
    type: {
      default: 'text'
    }
  },

  methods: {
    onFocus () {
      this.focused = true
    },

    onBlur () {
      this.focused = false
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

  &--focused{
    label {
      color: #71B6EF;
    }
  }
}
</style>
