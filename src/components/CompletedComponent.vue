<template>
    <div v-show="completedtaskslist.length">
        <ul>
            <li v-for=" (task,index) in completedtaskslist" :key="index">
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
export default {
    name:'CompletedComponent',
    props: {
        completedtaskslist:{
            type:Array,
            required:true
        }
    },
    data(){
        return {
        }
    } ,
    methods: {
        moveToDeleted(task){
            this.$emit("move-to-deleted",task)
        },
        moveToTodo(task){
            this.$emit("move-to-todo",task)
        },
        moveToOngoing(task){
            this.$emit("move-to-ongoing",task)
        }
    }
}
</script>