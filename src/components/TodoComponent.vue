<template>
    <div v-show="TodoTasks.length">
        <ul>
            <li v-for=" (task,index) in TodoTasks" :key="index" >
                <EdittingComponent :task="task" :tasktype="task_type">
                </EdittingComponent>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import EdittingComponent from './EdittingComponent.vue';

export default {
  name: "TodoComponent",
  components:{
    EdittingComponent,
  },
  data(){
    return {
      task_type:"todo"
    }
  },
  computed:{
    ...mapState(["TodoTasks"])
  }
};
</script>