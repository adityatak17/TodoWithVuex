import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import axios from 'axios'
export const store=createStore({
    state(){
        return{
            addForm: false,
            deleteForm: false,
            TodoTasks: [],
            OngoingTasks: [],
            CompletedTasks: [],
            DeletedTasks: [],
            Editting:false,
            Title:'',
            Description:''
        }
    },
    mutations:{
        storeTasks(state,payload){
            state.TodoTasks=[]
            state.OngoingTasks=[]
            state.CompletedTasks=[]
            state.DeletedTasks=[]
            payload.forEach(task=>{
                if(task.task_status=='todolist'){ 
                  state.TodoTasks.push(task)
                }
                else if(task.task_status=='ongoing'){   
                  state.OngoingTasks.push(task)
                }
                else if(task.task_status=='completed'){ 
                  state.CompletedTasks.push(task)
                }
                else{
                  state.DeletedTasks.push(task)
                }
              })
        },
    },
    actions:{
        async getTasks(context){
            const response = await axios.get(`http://localhost:8000/tasks/`)
            context.commit('storeTasks',response.data)
        },
        async moveToOngoing(context,task) {
            await axios.patch(`http://localhost:8000/tasks/${task.id}/`,{task_status:'ongoing'});
            context.dispatch('getTasks')
          },
        async moveToCompleted(context,task) {
            await axios.patch(`http://localhost:8000/tasks/${task.id}/`,{task_status:'completed'});
            context.dispatch('getTasks')
          },
        async moveToDeleted(context,task) {
            await axios.patch(`http://localhost:8000/tasks/${task.id}/`,{task_status:'deleted'});
            context.dispatch('getTasks')
          },
        async moveToTodo(context,task) {
            await axios.patch(`http://localhost:8000/tasks/${task.id}/`,{task_status:'todolist'});
            context.dispatch('getTasks')
          },
        async EditTask(context,id){
            await axios.patch(`http://localhost:8000/tasks/${id}/`,{task_title:`${this.Title}`,task_description:`${this.Description}`})
            context.dispatch('getTasks')
        }, 
        async PermanentDeleteTask(context,task){
            await axios.delete(`http://localhost:8000/tasks/${task.id}/`);
            context.dispatch('getTasks')
          }
    }
})
const app=createApp(App)
app.use(store)
app.mount('#app')
