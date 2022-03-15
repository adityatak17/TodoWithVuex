<template>
    <div v-show="TodoTasks.length">
        <ul>
            <li v-for=" (task,index) in TodoTasks" :key="index" >
                <p>Title:   {{task.task_title}}</p>
                <p>Description: {{task.task_description}}</p>
                <div class="form-buttons">
                    <button class="button" @click="moveToOngoing(task)">Move to Ongoing Tasks</button>
                    <button class="button" @click="moveToCompleted(task)">Move to Completed Tasks</button>
                    <button class="button" @click="moveToDeleted(task)">Delete This Task</button>
                    <button class="button" @click="$store.state.Editting=true">Edit Task</button>
                </div>
                <template v-if="Editting">
                  <EdittingComponent :id="task.id">
                  </EdittingComponent>
                </template>
                <br>
            </li>
            
        </ul>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import EdittingComponent from './EdittingComponent.vue';

export default {
  name: "TodoComponent",
  components:{
    EdittingComponent,
  },
  methods: {
    ...mapActions(["moveToOngoing","moveToCompleted","moveToDeleted"]),
  },
  computed:{
    ...mapState(["TodoTasks","Editting"])
  }
};
</script>