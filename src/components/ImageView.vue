<template>
  <div>
    <v-img
      lazy-src="https://picsum.photos/id/11/10/6"
      :max-height="height"
      :max-width="width"
      :src="src"
      @mouseover="showAuthor = true"
      @mouseout="showAuthor = false"
      @click="imageClicked"
    ></v-img>
    <div v-show="showAuthor">{{ author }}</div>
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
    this.$data.showAuthor = !this.$data.showAuthor;
  }
}
</script>
