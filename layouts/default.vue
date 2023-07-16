<script setup lang="ts">
import { ref } from 'vue'
const order = ref(1)
const navDrawer = ref(true)
</script>
<template>
    <div>
        <v-app>
            <!-- APP BAR -->
            <v-app-bar app :order="order">
                <v-app-bar-nav-icon @click.stop="navDrawer = !navDrawer"> </v-app-bar-nav-icon>
                App Bar
            </v-app-bar>
            <!-- Navigation Drawer -->
            <v-navigation-drawer elevation="4" v-model="navDrawer">
                Navigation Drawer
            </v-navigation-drawer>
            <!-- Main -->
            <v-main class="bg-grey-lighten-3">
                <v-container fluid class="h-full">
                    <slot />
                </v-container>
            </v-main>
            <!-- Footer -->
            <v-footer app height="72"> Footer </v-footer>
        </v-app>
    </div>
</template>

<style scoped lang="scss"></style>
