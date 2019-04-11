<template>
  <div class="select">
    <select @change="$emit('change', $event)">
      <slot></slot>
    </select>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scope>

</style>
