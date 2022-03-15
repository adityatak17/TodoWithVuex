<template>
    <div v-show="OngoingTasks.length">
        <ul>
            <li v-for="(task,index) in OngoingTasks" :key="index">
                <EdittingComponent :task="task" :tasktype="task_type" />
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import EdittingComponent from './EdittingComponent.vue';

export default {
    name:'OngoingComponent',
    components:{
        EdittingComponent,
    },
    data(){
        return {
            task_type:"ongoing"
        }
    },
    computed:{
        ...mapState(["OngoingTasks"])
    }
}
</script>