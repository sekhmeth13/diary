<template>
  <div class="notesToday">
    <NoteForm @submit='handleCreatedNote'></NoteForm>
    <NoteList :notes="notes"></NoteList>
  </div>
</template>

<script>
import NoteForm from '../notes/NoteForm.vue';
import NoteList from '../notes/NoteList.vue';

const fetch = require('node-fetch');

export default {
  name: 'NoteToday',
  methods: {
    handleCreatedNote(note) {
      this.notes.unshift(note);
    },
  },
  data() {
    const notes = [];
    return { notes };
  },
  async created() {
    try {
      const notes = await fetch('http://localhost:3000/api/notes?date=today');
      const json = await notes.json();
      this.notes = json;
    } catch (error) {
      console.log(error);
    }
  },
  components: {
    NoteForm,
    NoteList,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
