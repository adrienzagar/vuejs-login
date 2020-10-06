<template>
  <div class="loggedin">
    <Loggedin/>
  </div>
</template>

<script>
// @ is an alias to /src
import Loggedin from '@/components/Loggedin.vue'

export default {
  name: 'logged',
  components: {
    Loggedin
  }
}
</script>
