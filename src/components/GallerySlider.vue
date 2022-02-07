<template>
  <v-row
    class="text-center"
    justify="center"
    align="center"
    style="height: 35vh"
  >
    <v-col cols="1">
      <v-btn @click="prev" :disabled="isMinScroll"> prev </v-btn>
    </v-col>
    <v-col
      cols="3"
      v-for="(photo, i) of photos.slice(startIndex, endIndex)"
      :key="i"
    >
      <image-view
        :src="photo.url"
        @image-clicked="selectImage(photo.id)"
      ></image-view>
    </v-col>
    <v-col cols="1">
      <v-btn @click="next" :disabled="isMaxScroll">next</v-btn>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ImageView from "./ImageView.vue";

@Component({ components: { ImageView } })
export default class GallerySlider extends Vue {
  @Prop() private photos?: any;

  data(): { startIndex: number; endIndex: number } {
    return { startIndex: 1, endIndex: 4 };
  }
  next(): void {
    // Meaning no more moving forword
    if (this.photos.length > this.$data.endIndex) {
      this.$data.startIndex++;
      this.$data.endIndex++;
    }
  }
  prev(): void {
    // Meaning no more moving backwards
    if (0 < this.$data.startIndex) {
      this.$data.endIndex--;
      this.$data.startIndex--;
    }
  }

  get isMaxScroll() {
    return this.photos.length == this.$data.endIndex;
  }

  get isMinScroll() {
    return this.$data.startIndex == 0;
  }

  selectImage(photoId: number): void {
    this.$emit("select-image", photoId);
  }
}
</script>
