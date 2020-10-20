export default (context, inject) => {
  window.onNuxtReady(() => {
    const MEC = new window.BridgeRestApi()
    inject('MEC', MEC)
  })
}
