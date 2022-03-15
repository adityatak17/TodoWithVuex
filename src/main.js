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
        async moveToDeleted({dispatch},task) {
            await axios.patch(`http://localhost:8000/tasks/${task.id}/`,{task_status:'deleted'});
            dispatch('getTasks')
          },
        async moveToTodo({dispatch},task) {
            await axios.patch(`http://localhost:8000/tasks/${task.id}/`,{task_status:'todolist'});
            dispatch('getTasks')
          },
        async EditTask({dispatch},{task,title,description}){
            await axios.patch(`http://localhost:8000/tasks/${task.id}/`,{task_title:`${title}`,task_description:`${description}`})
            dispatch('getTasks')
        }, 
        async PermanentDeleteTask({dispatch},task){
            await axios.delete(`http://localhost:8000/tasks/${task.id}/`);
            dispatch('getTasks')
          }
    }
})
const app=createApp(App)
app.use(store)
app.mount('#app')
