<template>
  <section>
    <p> Notes crées aujourd'hui : {{ stats.createdToday }}</p>
    <p> Total notes crées : {{ stats.totalCreated }}</p>
    <p> Notes de plus de 10 charactères : {{ stats.moreThan10WordsNotes }}</p>
    <section>
</section>
  </section>
</template>

<script>
export default {
  name: 'NoteStats',
  props: {
  },
  methods: {
  },
  data() {
    const stats = {};
    return { stats };
  },
  async created() {
    try {
      const notes = await fetch('http://localhost:3000/api/stats');
      const json = await notes.json();
      this.stats = json;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
