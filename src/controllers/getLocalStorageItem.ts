export default function getLocalStorageItem() {
  if (localStorage.getItem("notes") !== null) {
    return JSON.parse(localStorage.getItem("notes")!);
  }
}
