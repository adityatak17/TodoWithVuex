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

                <!-- <template v-if="tasktype=='ongoing'">

                </template>

                <template v-if="tasktype=='completed'">
                    
                </template> -->
            </div>
            
    <form class="new-task-form" autocomplete="off" v-show="editting" @submit.prevent="EditTask(task)">
            <input  type="text"
                    v-model="$store.state.Title"  
                    placeholder="Task Title"><br>
            <input  type="text"
                    v-model="$store.state.Description"  
                    placeholder="Task Description"><br>
            <input  type="submit"
                    value="Edit Task"
                    @click="editting=false"><br>
    </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name:'EdittingComponent',
    data(){
        return {
            editting: false
        }
    },
    props:{
        task:{
            type:Object,
            required:true
        },
        tasktype:{
            type:Boolean,
            required:true
        }
    },
    methods:{
        ...mapActions(["moveToOngoing","moveToCompleted","moveToDeleted","EditTask"]),
        EditTaskDetails(task){
            this.editting=!this.editting
            this.$store.state.Title=task.task_title
            this.$store.state.Description=task.task_description
        }
    }

}
</script>