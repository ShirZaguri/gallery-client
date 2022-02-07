<template>
  <div>
    <v-row style="height: 65vh" v-if="loaded">
      <v-col>
        <image-view
          :src="selectedImage.url"
          :height="100"
          :width="100"
          :author="selectedImage.author"
        ></image-view>
      </v-col>
    </v-row>

    <gallery-slider
      v-if="loaded"
      :photos="photos"
      @select-image="selectImage"
    />
  </div>
</template>

<script lang="ts">
import GallerySlider from "@/components/GallerySlider.vue";
import ImageView from "@/components/ImageView.vue";
import { Component, Vue } from "vue-property-decorator";
import PhotosService from "@/services/photos.service";
import { image } from "@/utils/types/image.type";

@Component({ components: { GallerySlider, ImageView } })
export default class Home extends Vue {
  data() {
    return {
      selectedImageId: 1,
      photos: [],
      // in seconds
      refreshTime: 30,
    };
  }

  mounted(): void {
    this.initNewPhotos();
    // Fetch for new photos after the refresh time
    setInterval(() => {
      this.initNewPhotos();
    }, this.$data.refreshTime * 1000);
  }

  async initNewPhotos(): Promise<void> {
    this.$data.photos = await PhotosService.getPhotos();
    this.$data.selectedImageId = this.$data.photos[0].id;
  }

  selectImage(imageId: number): void {
    this.$data.selectedImageId = imageId;
  }

  get selectedImage(): image {
    return this.$data.photos.find(
      (image: image) => image.id === this.$data.selectedImageId
    );
  }

  get loaded(): boolean {
    return this.$data.photos.length > 0;
  }
}
</script>
