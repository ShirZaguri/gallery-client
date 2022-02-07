<template>
  <div>
    <v-row class="ma-0 pa-0" style="height: 50vh">
      <v-col class="mr-2 white--text" style="background-color: black"
        >jjj</v-col
      >
      <v-col
        class="mr-2 d-flex align-self-center justify-center"
        style="background-color: pink"
        >Pinkiky</v-col
      >
      <v-col style="background-color: blue"></v-col>
    </v-row>
    <v-row class="text-center">
      <v-col class="mb-6" cols="5">
        <v-text-field
          v-model="username"
          label="User Name"
          filled
          rounded
          dense
        ></v-text-field>
        <v-btn rounded color="primary" dark> send </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { user } from "@/utils/types/user.type";
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";

const userStore = namespace("user");

@Component
export default class Login extends Vue {
  @userStore.State
  public user!: user;

  data(): { username: string } {
    return { username: "" };
  }

  // this.$router.push({ name: "Chats" });
}
</script>
