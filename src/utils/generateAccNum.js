function randomize(num) {
  return Math.floor(Math.random() * num);
}

export default function generateAccNum() {
  return `RP 142 ${randomize(9000) + 1000} ${randomize(900) + 100}`
}
