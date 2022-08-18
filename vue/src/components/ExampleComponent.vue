<script setup>
import { ref } from 'vue'

defineProps({
	msg: String
})

const count = ref(0)
</script>

<template>
	<h1>{{ msg }}</h1>
	<p>Heres some example text</p>
</template>

<style scoped>

</style>
