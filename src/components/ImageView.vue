<template>
  <div
    class="image-container"
    @mouseenter="toggleShowAuthor"
    @mouseleave="toggleShowAuthor"
  >
    <v-img class="image main-image" :src="src" @click="imageClicked">
      <v-row
        class="ma-0 pa-4 author-container"
        v-if="showAuthor"
        justify="center"
      >
        <span class="font-weight-bold white--text">{{ author }}</span>
      </v-row>
    </v-img>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ImageView extends Vue {
  @Prop() private height?: number;
  @Prop() private width?: number;
  @Prop() private src?: string;
  @Prop() private author?: string;

  data(): { showAuthor: boolean } {
    return { showAuthor: false };
  }

  imageClicked(): void {
    this.$emit("image-clicked");
  }

  toggleShowAuthor(): void {
    if (this.author !== undefined)
      this.$data.showAuthor = !this.$data.showAuthor;
  }
}
</script>

<style scoped>
.author-container {
  background-color: rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 2;
}

.image {
  cursor: pointer;
  display: flex;
  align-items: end;
  max-height: 65vh;
  max-width: 100%;
}
</style>
