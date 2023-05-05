<script >

  export default {
    name: 'Card',
    props:['mario']
  }
</script>

<template>
    <div class="card">
        <img :src="mario.card_images[0].image_url" alt="giacomino">
        <h3 class="nome">{{ mario.name }}</h3>
        <h4 class="tipo">{{ mario.type }}</h4>
    </div>
</template>

<style lang="scss" scoped>

</style>