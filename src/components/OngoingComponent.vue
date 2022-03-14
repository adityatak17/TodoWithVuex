<template>
    <div v-show="ongoingtaskslist.length">
        <ul>
            <li v-for=" (task,index) in ongoingtaskslist" :key="index">
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
export default {
    name:'OngoingComponent',
    props: {
        ongoingtaskslist:{
            type:Array,
            required:true
        }
    },
    data(){
        return {
        }
    } ,
    methods: {
        moveToCompleted(task){
            this.$emit("move-to-completed",task)
        },
        moveToDeleted(task){
            this.$emit("move-to-deleted",task)
        },
        moveToTodo(task){
            this.$emit("move-to-todo",task)
        }

    }

}
</script>