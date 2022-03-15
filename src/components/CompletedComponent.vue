<template>
    <div v-show="CompletedTasks.length">
        <ul>
            <li v-for=" (task,index) in CompletedTasks" :key="index">
                <p>Title: {{task.task_title}}</p>
                <p>Description: {{task.task_description}}</p>
                <div class="form-buttons">
                    <button class="button" @click="moveToTodo(task)">Move to Todo List</button>
                    <button class="button" @click="moveToOngoing(task)">Move to Ongoing Tasks</button>
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
    name:'CompletedComponent',
    methods: {
        ...mapActions(["moveToTodo","moveToOngoing","moveToDeleted"])
    },
    computed:{
        ...mapState(["CompletedTasks"])
    }
}
</script>