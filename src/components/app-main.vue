<template>
    <router-view/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AppMain extends Vue {
    name = 'AppMain';
}
</script>