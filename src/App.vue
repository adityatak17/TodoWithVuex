<template>  
  <NewTaskButton @new-task-button-clicked="addForm=true" />
  <NewTaskForm @task-adding-done="addForm=false" @new-task-added="getTasks" :addform="addForm" />
  <table>
      <tr>
        <th>Todo Tasks</th>
        <th>Ongoing Tasks</th>
        <th>Completed Tasks</th>
      </tr>
      <tr>
        <td>
          <!-- To Do List Component -->
          <TodoComponent  @move-to-ongoing="moveToOngoing" 
                          @move-to-completed="moveToCompleted" 
                          @move-to-deleted="moveToDeleted" 
                          :todotaskslist="TodoTasks">
          </TodoComponent>
        </td>
        <td>
          <!-- Ongoing Task Component -->
          <OngoingComponent   @move-to-completed="moveToCompleted"
                              @move-to-deleted="moveToDeleted"
                              @move-to-todo="moveToTodo"
                              :ongoingtaskslist="OngoingTasks">
          </OngoingComponent>
        </td>
        <td>
            <!-- Completed Task Component -->
            <CompletedComponent @move-to-deleted="moveToDeleted"
                                @move-to-todo="moveToTodo"
                                @move-to-ongoing="moveToOngoing"
                                :completedtaskslist="CompletedTasks">
            </CompletedComponent>
        </td>
      </tr>
    </table>

    <!-- Button to Show Deleted Tasks -->
    <DeletedTaskButton @deleted-task-button-clicked="deleteForm=!deleteForm" 
                             :deleteform="deleteForm">
    </DeletedTaskButton>
    <!-- Deleted Task Component -->
    <DeletedComponent @move-to-todo="moveToTodo"
                      @move-to-ongoing="moveToOngoing"
                      @move-to-completed="moveToCompleted" 
                      @permanently-delete-task="PermanentDeleteTask"
                      :deletedtaskslist="DeletedTasks"
                      :deleteform="deleteForm">
    </DeletedComponent>
  
</template>

<script>

import NewTaskButton from "./components/NewTaskButton.vue";
import NewTaskForm from "./components/NewTaskForm.vue";
import TodoComponent from "./components/TodoComponent.vue";
import OngoingComponent from "./components/OngoingComponent.vue";
import CompletedComponent from "./components/CompletedComponent.vue";
import DeletedTaskButton from "./components/DeletedTaskButton.vue";
import DeletedComponent from "./components/DeletedComponent.vue";

import axios from 'axios';
// import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

export default {
  name: "App",
  components: {
    NewTaskButton,
    NewTaskForm,
    TodoComponent,
    OngoingComponent,
    CompletedComponent,
    DeletedTaskButton,
    DeletedComponent,
  },
  data(){
    return {
      addForm: false,
      deleteForm: false,
      TodoTasks: [],
      OngoingTasks: [],
      CompletedTasks: [],
      DeletedTasks: [],
    };
  },
  methods: {
    async moveToOngoing(task) {
      await axios.patch(`http://localhost:8000/tasks/${task.id}/`,{task_status:'ongoing'});
      this.getTasks();
    },
    async moveToCompleted(task) {
      await axios.patch(`http://localhost:8000/tasks/${task.id}/`,{task_status:'completed'});
      this.getTasks();
    },
    async moveToDeleted(task) {
      await axios.patch(`http://localhost:8000/tasks/${task.id}/`,{task_status:'deleted'});
      this.getTasks();
    },
    async moveToTodo(task) {
      await axios.patch(`http://localhost:8000/tasks/${task.id}/`,{task_status:'todolist'});
      this.getTasks();
    },
    async getTasks(){
      this.TodoTasks=[]
      this.OngoingTasks=[]
      this.CompletedTasks=[]
      this.DeletedTasks=[]

      const response = await axios.get(`http://localhost:8000/tasks/`)
      response.data.forEach(task=>{
        if(task.task_status=='todolist'){ 
          this.TodoTasks.push(task)
        }
        else if(task.task_status=='ongoing'){   
          this.OngoingTasks.push(task)
        }
        else if(task.task_status=='completed'){ 
          this.CompletedTasks.push(task)
        }
        else{
          this.DeletedTasks.push(task)
        }
      })
    },
    async PermanentDeleteTask(task){
      await axios.delete(`http://localhost:8000/tasks/${task.id}/`);
      this.getTasks();
    }
  },
  async created() {
    this.getTasks()
  },
};
</script>

<style>
body{
    /* background-color: #FFBCB5; */
    background-color: #938BA1;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


/* New Task Button */

#new-task-div,#deleted-task-div,#todo-task-div,#completed-task-div,#ongoing-task-div{
    text-align: center;
}

#new-task-button,#deleted-task-button,#todo-task-button,#completed-task-button,#ongoing-task-button{
    margin-top: 50px;
}

#new-task-button p,#deleted-task-button p,#todo-task-button p,#completed-task-button p,#ongoing-task-button p{
    margin: 0;
    padding: 3px;
}

.button,#button3{
    width: 20%;
    font-size: 15px;
    padding: 3px;
    border-radius: 20px;
    margin-top: 25px;
    background-color: #D9DBF1;
    color: #8F2D56;
    font-weight: 550;
    cursor: pointer;
}

.button:hover,#button3:hover{
    background-color: #8F2D56; 
    color: #D9DBF1;
}


/* New Task Form */
.new-task-form{
    text-align: center;
    margin:50px 100px;
}

.new-task-form fieldset{
    padding: 30px;
    border-radius: 50px;
    border: 3px solid #B8D0EB;
}
.new-task-form fieldset:hover{
    border: 3px solid #416165;
}

.new-task-form input {
    width: 40%;
    margin-top: 15px;
    background-color: transparent;
    color: #612940;
    border: none;
    border-bottom-style: groove;
    font-size: 15px;
}

input:focus{
    outline: none;
}

#legend{
    background-color: #416165;
    color: #D8E2DC;
}

::placeholder{
    text-align: center;
    color: #FDECEF;
}

#button0,#button1,#button2{
    width: 20%;
    border-radius: 20px;
    margin-top: 25px;
    background-color: #BBDBD1;
    color: #416165;
    font-weight: 550;
    cursor: pointer;
}

#button0:hover,#button1:hover,#button2:hover{
    background-color: #416165; 
    color: #BBDBD1;
}

#addingButtons {
    display: flex;
    flex-wrap: wrap;
}

#addingButtons input{
    margin: auto;
    margin-top: 40px;
}

li{
    list-style-type: none;
}
.form-buttons{
    text-align: center;
}
.form-buttons button{
    margin: 30px;
    padding: 3px;
}

div>h1{
    text-align: center;
    background-color: #C6D8FF; 
    margin-top:40px ;
    color: #416165;
}

li>p{
    text-align: center;
    background-color: #416165;
    text-transform: uppercase;
    color: whitesmoke;
}

ul{
    margin:0px;
    padding: 0px;
}

li{
    border: 5px solid #98A6D4;
    border-radius: 30px;
    margin-bottom:25px ;
}

td,th,table{
    border: 2px solid #612940;
    border-collapse: collapse;
    text-align: center;
}
td{
    text-align: center;
    margin: auto;
}
button.button{
    text-align: center;
    margin: auto;
}
th{
    font-size:30px ;
    color:#416165 ;
    background-color: #C6D8FF; 
}
table{
    margin: auto;
    margin-top: 50px;
}
th{
    padding: 10px;
}
td{
    padding: 0;
}
</style>
