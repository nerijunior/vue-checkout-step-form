<template>
  <input type="text"
    class="input text-input"
    @focus="$emit('focus')"
    @blur="$emit('blur')"
    @input="$emit('input')"
    />
</template>

<script>
export default {

}
</script>

<style lang="scss" scope>
.text-input {}
</style>
