export default function () {
  const florestSound = new Audio('assets/Floresta.wav')

  const rainSound = new Audio('assets/Chuva.wav')

  const cafeSound = new Audio('assets/Cafeteria.wav')

  const fireSound = new Audio('assets/Lareira.wav')

  function BtnFlorestSound() {
    florestSound.play()
    rainSound.pause()
    cafeSound.pause()
    fireSound.pause()
  }

  function BtnRainSound() {
    florestSound.pause()
    rainSound.play()
    cafeSound.pause()
    fireSound.pause()
  }

  function BtnCafeSound() {
    florestSound.pause()
    rainSound.pause()
    cafeSound.play()
    fireSound.pause()
  }

  function BtnFireSound() {
    florestSound.pause()
    rainSound.pause()
    cafeSound.pause()
    fireSound.play()
  }

  return {
    BtnFlorestSound,
    BtnRainSound,
    BtnCafeSound,
    BtnFireSound
  }
}
