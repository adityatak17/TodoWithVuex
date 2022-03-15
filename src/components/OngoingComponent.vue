<template>
    <div v-show="OngoingTasks.length">
        <ul>
            <li v-for=" (task,index) in OngoingTasks" :key="index">
                <p>Title: {{task.task_title}}</p>
                <p>Description: {{task.task_description}}</p>
                <div class="form-buttons">    
                    <button class="button" @click="moveToCompleted(task)">Move to Completed Tasks</button>
                    <button class="button" @click="moveToTodo(task)">Move to Todo List</button>
                    <button class="button" @click="moveToDeleted(task)">Delete This Task</button>
                </div>
                <br>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    name:'OngoingComponent',
    methods: {
        ...mapActions(["moveToCompleted","moveToDeleted","moveToTodo"]),
    },
    computed:{
        ...mapState(["OngoingTasks"])
    }
}
</script>