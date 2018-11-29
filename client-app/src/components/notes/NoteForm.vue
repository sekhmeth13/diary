<template>
  <el-form ref="form" size="mini">
    <el-form-item label="Titre">
        <el-input v-model="title"></el-input>
    </el-form-item>
    <el-form-item label="Contenu">
        <el-input v-model="content" type="textarea"></el-input>
    </el-form-item>
    <el-button @click='sendForm' type="primary">Créer</el-button>
  </el-form>
</template>

<script>
export default {
  name: 'NoteForm',
  props: {
  },
  methods: {
    async sendForm() {
      const data = {
        title: this.title,
        content: this.content,
      };
      try {
        const response = await fetch('http://localhost:3000/api/notes',
          {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
          });
        const createdNote = await response.json();
        this.$emit('submit', createdNote);
        this.title = '';
        this.content = '';
      } catch (error) {
        console.log(error);
      }
    },
  },
  data() {
    return {
      title: '',
      content: '',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
