import { ref } from 'vue'
const outFileRef = ref('outFile')

setTimeout(() => {
  outFileRef.value = 'outFileRef!!!!'
}, 3000)
export { outFileRef }
