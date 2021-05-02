<template>
  <div class="absolute top-0 w-full h-screen">
    <div
      class="w-full h-full bg-gray-800 opacity-70 animate-backdrop"
    />
    <div class="fixed top-0 bg-white w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 left-1/3 top-20 rounded-md p-5">
      <h1 class="text-2xl mb-3">
        <strong>{{ header }}</strong>
      </h1>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalWrapper',
  props: {
    header: {
      type: String,
      required: true,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
