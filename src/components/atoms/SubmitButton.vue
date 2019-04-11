<template>
  <button type="submit" class="button button--submit">{{ label }}</button>
</template>

<script>
export default {
  props: ['label']
}
</script>

<style lang="scss" scope>
.button {
  background: #0077E2;
  box-shadow: 0 2px 7px 0 rgba(120,137,149,0.25);
  border-radius: 3px;
  color: white;
  padding: 22px 50px;
  font-size: 14px;
  text-transform: uppercase;

  &--submit {
    &:hover, &:focus{
      outline: none;
      cursor: pointer;
    }
  }
}
</style>
