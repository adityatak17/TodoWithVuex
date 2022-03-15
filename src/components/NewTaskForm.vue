<template>
    <form class="new-task-form" autocomplete="off" v-show="$store.state.addForm" @submit.prevent="newTaskFormSubmit">
        <fieldset id="field-set">
            <legend id="legend">
                    Add New Task:
            </legend>
            <input  type="text"
                    v-model="title"  
                    placeholder="Task Title" ><br>
            <input type="text"
                    v-model="description"  
                    placeholder="Task Description"><br>
            <div id="addingButtons">
                    <input type="submit" 
                            id="button0"
                            @click=" status='todolist' "    
                            value="Add to To Do List"><br>
                    <input type="submit"
                            id="button1"
                            @click=" status='ongoing' "
                            value="Add to Ongoing Tasks"><br>
                    <input type="submit"
                            id="button2"
                            @click=" status='completed' "
                            value="Add to Completed"><br>
            </div>
            <input type="submit"
                    id="button3"
                    @click="buttonid=3"
                    value="Done"><br>
        </fieldset>
    </form>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'

export default {
    name:'NewTaskForm',
    data(){
        return {
            title:'',
            description:'',
            status:'todolist',
            buttonid:0   
        }
    },
    methods: {
        async newTaskFormSubmit(){

            if (this.buttonid==3) {
                this.$store.state.addForm=false
            }
            else { 
                if(this.title=='' || this.description==''){
                    alert("Please Fill Out all the Details")
                    return
                }
                let newTaskCreated={
                    task_title:this.title,
                    task_description:this.description,
                    task_status:this.status         
                }
                await axios.post('http://localhost:8000/tasks/',newTaskCreated)
                this.getTasks()

                // location.reload() **(To manually reload the page)**
            }

            // To Reset the form data
            this.title=''
            this.description=''
            this.status='todolist'
            this.buttonid=0
        },
        ...mapActions(["getTasks"])
    }
}
</script>