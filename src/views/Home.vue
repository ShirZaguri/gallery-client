<template>
  <div>
    <v-row class="ma-0 pa-0" style="height: 65vh">
      <v-col
        class="mr-2 d-flex align-center justify-center"
        style="background-color: pink"
      >
        <image-view
          :src="selectedImage.url"
          :height="100"
          :width="100"
          :author="selectedImage.author"
        ></image-view>
      </v-col>
    </v-row>

    <gallery-slider :photos="photos" @select-image="selectImage" />
  </div>
</template>

<script lang="ts">
import GallerySlider from "@/components/GallerySlider.vue";
import ImageView from "@/components/ImageView.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({ components: { GallerySlider, ImageView } })
export default class Home extends Vue {
  data() {
    return {
      selectedImageIndex: 0,
      photos: [
        {
          id: "1",
          author: "amit",
          width: 50,
          height: 30,
          url: "https://picsum.photos/id/11/500/300",
          download_url: "http",
        },
        {
          id: "2",
          author: "amiti",
          width: 50,
          height: 30,
          url: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
          download_url: "http",
        },
        {
          id: "3",
          author: "amitush",
          width: 50,
          height: 30,
          url: "https://picsum.photos/id/11/500/300",
          download_url: "http",
        },
        {
          id: "4",
          author: "amitpush",
          width: 50,
          height: 30,
          url: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
          download_url: "http",
        },
        {
          id: "5",
          author: "amitpia",
          width: 50,
          height: 30,
          url: "https://picsum.photos/id/11/500/300",
          download_url: "http",
        },
      ],
    };
  }
  selectImage(index: number): void {
    this.$data.selectedImageIndex = index;
    console.log("selected");
  }
  get selectedImage(): any {
    return this.$data.photos[this.$data.selectedImageIndex];
  }
}
</script>
