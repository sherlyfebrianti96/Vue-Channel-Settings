<template>
  <div class="modal-wrapper fixed top-0 w-full h-screen z-10">
    <div
      class="w-full h-full bg-gray-800 opacity-70 animate-backdrop"
    />
    <div class="modal absolute top-0 bg-white w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 left-1/5 lg:left-1/3 rounded-md p-5">
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
.modal {
  width: calc(100% * 10 / 12);
  left: calc((100% - (100% * 10 / 12)) / 2);
  max-height: 90%;
  top: 5%;
  overflow: scroll;
}

@media (min-width: 768px) {
  .modal {
    width: calc(100% * 6 / 12);
    left: calc((100% - (100% * 6 / 12)) / 2);
  }
}

@media (min-width: 1200px) {
  .modal {
    width: calc(100% * 4 / 12);
    left: calc((100% - (100% * 4 / 12)) / 2);
  }
}
</style>
