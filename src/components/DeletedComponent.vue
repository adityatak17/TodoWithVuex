<template>
    <div v-show="deleteform && deletedtaskslist.length">
        <h1>Deleted Tasks</h1>
        <ul>
            <li v-for=" (task,index) in deletedtaskslist" :key="index">
                <p>Title: {{task.task_title}}</p>
                <p>Description: {{task.task_description}}</p>
                <div class="form-buttons">
                    <button class="button" @click="moveToTodo(task)">Move to Todo List</button>
                    <button class="button" @click="moveToOngoing(task)">Move to Ongoing Tasks</button>
                    <button class="button" @click="moveToCompleted(task)">Move to Completed Tasks</button>
                    <button class="button" @click="PermanentDelete(task)">Permanently Delete This Task</button>
                </div>
                <br>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'DeletedComponent',
    props:{
        deletedtaskslist: {
            type:Array,
            required:true
        },
        deleteform: {
            type:Boolean,
            required:true
        }
    },
    data(){
        return {
            
        }
    } ,
    methods:{
        moveToTodo(task){
            this.$emit("move-to-todo",task)
        },
        moveToOngoing(task){
            this.$emit("move-to-ongoing",task)
        },
        moveToCompleted(task){
            this.$emit("move-to-completed",task)
        },
        PermanentDelete(task){
            this.$emit('permanently-delete-task',task)
        }
    }
}
</script>