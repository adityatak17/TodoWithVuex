<template>
    <div v-show="deleteForm && DeletedTasks.length">
        <h1>Deleted Tasks</h1>
        <ul>
            <li v-for="(task,index) in DeletedTasks" :key="index">
                <EdittingComponent :task="task" :tasktype="task_type" />
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import EdittingComponent from './EdittingComponent.vue';
export default {
    name:'DeletedComponent',
    components:{
        EdittingComponent,
    },
    data(){
        return {
            task_type:"deleted"
        }
    },
    computed:{
        ...mapState(["DeletedTasks","deleteForm"])
    }
}
</script>