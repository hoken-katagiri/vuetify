import VParallax from './VParallax'

/* istanbul ignore next */
VParallax.install = function install (Vue) {
  Vue.component(VParallax.name, VParallax)
}

export { VParallax }
export default VParallax
