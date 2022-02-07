<template>
  <v-row class="text-center" justify="center" style="height: 35vh">
    <v-col cols="1">
      <v-btn @click="prev">prev</v-btn>
    </v-col>
    <v-col
      cols="3"
      v-for="(photo, i) of photos.slice(startIndex, endIndex)"
      :key="i"
    >
      <image-view :src="photo.url" @image-clicked="selectImage(i)"></image-view>
      <div>{{ photo.id }}</div>
      <!-- :height="photo.height"
        :width="photo.width" -->
    </v-col>
    <v-col cols="1">
      <v-btn @click="next">next</v-btn>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ImageView from "./ImageView.vue";
const GALLERY_SIZE = 5;

@Component({ components: { ImageView } })
export default class GallerySlider extends Vue {
  @Prop() private photos?: any;

  data(): { startIndex: number; endIndex: number } {
    return { startIndex: 1, endIndex: 4 };
  }
  next(): void {
    // Meaning no more moving forword
    if (GALLERY_SIZE - 1 > this.$data.endIndex) {
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

  selectImage(index: number): void {
    console.log("inside");
    this.$emit("select-image", index);
  }
}
</script>
