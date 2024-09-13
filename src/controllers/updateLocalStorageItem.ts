export default function updateLocalStorageItem(update: Array<any>) {
  localStorage.setItem("notes", JSON.stringify(update));
}
