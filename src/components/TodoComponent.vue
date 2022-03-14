<template>
    <div v-show="todotaskslist.length">
        <ul>
            <li v-for=" (task,index) in todotaskslist" :key="index">
                <p>Title:   {{task.task_title}}</p>
                <p>Description: {{task.task_description}}</p>
                <div class="form-buttons">
                    <button class="button" @click="moveToOngoing(task)">Move to Ongoing Tasks</button>
                    <button class="button" @click="moveToCompleted(task)">Move to Completed Tasks</button>
                    <button class="button" @click="moveToDeleted(task)">Delete This Task</button>
                </div>
                <br>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "TodoComponent",
  props: {
    todotaskslist: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
    }
  },
  methods: {
    moveToOngoing(task) {
      this.$emit("move-to-ongoing", task);
    },
    moveToCompleted(task) {
      this.$emit("move-to-completed", task);
    },
    moveToDeleted(task) {
      this.$emit("move-to-deleted", task);
    },
  },
};
</script>