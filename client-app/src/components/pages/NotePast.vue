<template>
  <div class="notesPast">
<NoteList :notes='notes'></NoteList>
</div>
</template>

<script>
import NoteList from '../notes/NoteList.vue';


export default {
  name: 'NotePast',
  methods: {
  },
  data() {
    const notes = [];
    return { notes };
  },
  async created() {
    try {
      const notes = await fetch('http://localhost:3000/api/notes?date=past');
      const json = await notes.json();
      this.notes = json;
    } catch (error) {
      console.log(error);
    }
  },
  components: {
    NoteList,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
