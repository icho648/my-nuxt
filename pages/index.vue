<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const appConfig = useAppConfig()
</script>
<template>
    <v-card min-height="87vh"> Index </v-card>
    <DefineSample @change="" @update="" name>
        <template #default="props"></template>
        <template #slot1="props"></template>
    </DefineSample>
</template>

<style scoped lang="scss"></style>
s