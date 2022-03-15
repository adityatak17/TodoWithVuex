<template>
    <div v-show="CompletedTasks.length">
        <ul>
            <li v-for="(task,index) in CompletedTasks" :key="index">
                <EdittingComponent :task="task" :tasktype="task_type" />
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import EdittingComponent from './EdittingComponent.vue';

export default {
    name:'CompletedComponent',
    components:{
        EdittingComponent,
    },
    data(){
        return {
            task_type:"completed"
        }
    },
    computed:{
        ...mapState(["CompletedTasks"])
    }
}
</script>