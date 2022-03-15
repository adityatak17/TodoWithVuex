<template>
            <p>Title:   {{task.task_title}}</p>
            <p>Description: {{task.task_description}}</p>
            <div class="form-buttons">
                <template v-if="tasktype=='todo'">
                    <button class="button" @click="moveToOngoing(task)">Move to Ongoing Tasks</button>
                    <button class="button" @click="moveToCompleted(task)">Move to Completed Tasks</button>
                    <button class="button" @click="moveToDeleted(task)">Delete This Task</button>
                    <button class="button" @click="EditTaskDetails(task)">Edit This Task</button>
                </template>

                <template v-if="tasktype=='ongoing'">
                    <button class="button" @click="moveToCompleted(task)">Move to Completed Tasks</button>
                    <button class="button" @click="moveToTodo(task)">Move to Todo List</button>
                    <button class="button" @click="moveToDeleted(task)">Delete This Task</button>
                    <button class="button" @click="EditTaskDetails(task)">Edit This Task</button>
                </template>

                <template v-if="tasktype=='completed'">
                    <button class="button" @click="moveToTodo(task)">Move to Todo List</button>
                    <button class="button" @click="moveToOngoing(task)">Move to Ongoing Tasks</button>
                    <button class="button" @click="moveToDeleted(task)">Delete This Task</button>
                    <button class="button" @click="EditTaskDetails(task)">Edit This Task</button>
                </template>

                <template v-if="tasktype=='deleted'">
                    <button class="button" @click="moveToTodo(task)">Move to Todo List</button>
                    <button class="button" @click="moveToOngoing(task)">Move to Ongoing Tasks</button>
                    <button class="button" @click="moveToCompleted(task)">Move to Completed Tasks</button>
                    <button class="button" @click="PermanentDeleteTask(task)">Permanently Delete This Task</button>
                    <button class="button" @click="EditTaskDetails(task)">Edit This Task</button>
                </template>
            </div>
            
    <form class="new-task-form" id="editting-div" autocomplete="off" v-show="editting" @submit.prevent="EditTask(task)">
            <input  type="text"
                    v-model="$store.state.Title"  
                    placeholder="Task Title"><br>
            <input  type="text"
                    v-model="$store.state.Description"  
                    placeholder="Task Description"><br>
            <input  type="submit"
                    value="**Save Changes**"
                    id="editting-button"
                    @click="editting=false"><br>
    </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name:'EdittingComponent',
    data(){
        return {
            editting: false,
            title:'',
            description:''
        }
    },
    props:{
        task:{
            type:Object,
            required:true
        },
        tasktype:{
            type:String,
            required:true
        }
    },
    methods:{
        ...mapActions(["moveToTodo","moveToOngoing","moveToCompleted","moveToDeleted","PermanentDeleteTask","EditTask"]),
        EditTaskDetails(task){
            this.editting=!this.editting
            this.$store.state.Title=task.task_title
            this.$store.state.Description=task.task_description
        }
    }

}
</script>