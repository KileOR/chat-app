<template>
  <div class="new-message">
    <form @submit.prevent="addMessage">
      <label for="new-message">New Message (enter to add)</label>
      <input type="text" name="new-message" v-model="newMessage">
      <p v-if="validationMsg" class="red-text">{{ validationMsg }}</p>
    </form>
  </div>
</template>

<script>
import db from '@/firebase/init'

export default {
  name: 'NewMessage',
  props: ['name'],
  data() {
    return {
      newMessage: null,
      validationMsg: null
    }
  },
  methods: {
    addMessage() {
      if (this.newMessage) {
        db.collection('messages').add({
          content: this.newMessage,
          name: this.name,
          time: Date.now()
        }).catch(err => {
          console.log(err)
        })

        this.newMessage = null
        this.validationMsg = null
      } else {
        this.validationMsg = 'You must enter message for send it'
      }
    }
  }
}
</script>
