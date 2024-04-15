<script>
import { ref, reactive, shallowRef } from 'vue'
import { outFileRef } from '@/utils/util'
const outRef = ref('outRef')
export default {
  //name: 'App',
  setup() {
    const count = ref(0)
    const obj = ref({
      skill: [1, 2, 3, 4],
      obj: {
        name: 'jack',
        age: 18
      }
    })
    const reobj = ref(obj)
    let relativeObj = reactive({
      name: '奇数1',
      age: 10
    })
    const shallowRefTest = shallowRef({
      skill: [3, 4, 5],
      obj: {
        name: 'KL',
        age: 45
      }
    })

    setTimeout(() => {
      reobj.value.skill.push(5)
      reobj.value.obj.age = 20
    }, 3000)
    setTimeout(() => {
      obj.value.skill.push(6)
      obj.value.obj.name = '小明'
    }, 3000)
    setTimeout(() => {
      relativeObj.age = 89
    }, 3000)
    setTimeout(() => {
      shallowRefTest.value = { skill: [0], obj: { name: 'zhangsan', age: 88 } }
    }, 3000)
    return {
      count,
      obj,
      relativeObj,
      shallowRefTest,
      outRef,
      outFileRef
    }
  }
}
</script>

<template>
  <div class="stn">hello</div>
  <div>{{ count }}</div>
  <div>{{ obj.skill }}</div>
  <div>{{ obj.obj.age }}</div>
  <div>{{ obj.obj.name }}</div>
  <div>{{ relativeObj.age }}</div>
  <div>{{ shallowRefTest.skill }}</div>
  <div>{{ outRef }}</div>
  <div>{{ outFileRef }}</div>
</template>

<style scoped>
.stn {
  color: red;
}
</style>
