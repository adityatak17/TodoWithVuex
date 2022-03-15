<template>
            <p>Title:   {{task.task_title}}</p>
            <p>Description: {{task.task_description}}</p>
            <div class="form-buttons">
                <button v-if="tasktype!='todo'" class="button" @click="moveToTodo(task)">Move to Todo List</button>
                <button v-if="tasktype!='ongoing'" class="button" @click="moveToOngoing(task)">Move to Ongoing Tasks</button>
                <button v-if="tasktype!='completed'" class="button" @click="moveToCompleted(task)">Move to Completed Tasks</button>
                <button v-if="tasktype!='deleted'" class="button" @click="moveToDeleted(task)">Delete This Task</button>
                <button v-if="tasktype=='deleted'" class="button" @click="PermanentDeleteTask(task)">Permanently Delete This Task</button>
                <button class="button" @click="EditTaskDetails(task)">Edit This Task</button>
            </div>
            
    <form class="new-task-form" id="editting-div" autocomplete="off" v-show="editting" @submit.prevent="EditTask({task,title,description})">
            <input  type="text"
                    v-model="title"  
                    placeholder="Task Title"><br>
            <input  type="text"
                    v-model="description"  
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
            this.title=task.task_title
            this.description=task.task_description
        }
    }

}
</script>