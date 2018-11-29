<template>
<section>
    <el-table :data="notes">
      <!-- <el-table-column :width="50">
        <template slot-scope="scope">
          <el-button type="danger" plain circle @click="delete(scope.row._id)">
            <font-awesome-icon icon="trash-alt"></font-awesome-icon>
          </el-button>
        </template>
      </el-table-column> -->
      <el-table-column class=''
      label="Date" prop="date" sortable :width="isTodayNotes ? 180 : 220">
        <template slot-scope="scope">
          <span class='timeData' v-if='!isTodayNotes'>
            <font-awesome-icon icon="calendar-alt"></font-awesome-icon>
            {{ scope.row.createdAt | date }}
            <br />
          </span>
          <span class='timeData'>
            <font-awesome-icon icon="clock"></font-awesome-icon>
            {{ scope.row.createdAt | time }}
          </span>
        </template>
    </el-table-column>
    <el-table-column
      label="Titre" sortable  prop="title">
      <template slot-scope="scope">
          <span class='titleData'>{{ scope.row.title | truncate(50) }}</span>
        </template>
    </el-table-column>
    <el-table-column
      label="Contenu"
      prop="content">
      <template slot-scope="scope">
          <span class='contentData'>{{ scope.row.content | truncate(200) }}</span>
        </template>
    </el-table-column>
    </el-table>
</section>
</template>

<script>
function pad(number) {
  return (number < 10 ? '0' : '') + number;
}
function formatDate(isoDateString) {
  const noteDate = new Date(isoDateString);

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return noteDate.toLocaleDateString('fr-FR', options);
}

function formatTime(isoDateString) {
  const noteDate = new Date(isoDateString);
  return `${pad(noteDate.getHours())} h ${pad(noteDate.getMinutes())} min  ${pad(noteDate.getSeconds())} sec `;
}

export default {
  name: 'NoteList',
  props: {
    notes: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    isTodayNotes() {
      if (this.notes[0]) {
        const today = new Date();
        const dateFirstNote = new Date(this.notes[0].createdAt);
        today.setHours(0, 0, 0, 0);
        dateFirstNote.setHours(0, 0, 0, 0);
        if (dateFirstNote.getTime() === today.getTime()) {
          return true;
        }
      }

      return false;
    },
  },
  filters: {
    date: date => formatDate(date),
    time: date => formatTime(date),
    truncate: (string, charNumber) => {
      if (!string || string.length <= charNumber) { return string; }
      const subString = string.substring(0, charNumber - 1);
      return `${subString}...`;
    },
  },

};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.timeData {
  margin-left: 10px;
}
</style>
