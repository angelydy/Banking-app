export default function placeCommas(e) {
  if (
    (e.which >= 37 && e.which <= 40) ||
    (e.keyCode >= 37 && e.keyCode <= 40)
  ) {
    return;
  }
  e.target.value = e.target.value.replace(/,/gi, "")
    .split(/(?=(?:\d{3})+$)/)
    .join(",");
}
