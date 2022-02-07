import { user } from "@/utils/types/user.type";
import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";

@Module({ namespaced: true })
export default class User extends VuexModule {
  user: user | null = null;

  @Mutation
  updateUser(user: user): void {
    this.user = user;
  }

  @Action
  setUser(user: user): void {
    this.context.commit("updateUser", user);
  }
}
