export default class History {
  static pushState(path: string): void {
    window.history.pushState({ path: path }, "", path);
  }
}
