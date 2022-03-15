<template>
    <div v-show="deleteForm && DeletedTasks.length">
        <h1>Deleted Tasks</h1>
        <ul>
            <li v-for=" (task,index) in DeletedTasks" :key="index">
                <p>Title: {{task.task_title}}</p>
                <p>Description: {{task.task_description}}</p>
                <div class="form-buttons">
                    <button class="button" @click="moveToTodo(task)">Move to Todo List</button>
                    <button class="button" @click="moveToOngoing(task)">Move to Ongoing Tasks</button>
                    <button class="button" @click="moveToCompleted(task)">Move to Completed Tasks</button>
                    <button class="button" @click="PermanentDeleteTask(task)">Permanently Delete This Task</button>
                </div>
                <br>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    name:'DeletedComponent',
    methods:{
        ...mapActions(["moveToTodo","moveToOngoing","moveToCompleted","PermanentDeleteTask"])
    },
    computed:{
        ...mapState(["DeletedTasks","deleteForm"])
    }
}
</script>