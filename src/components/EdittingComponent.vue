<template>
    <form class="new-task-form" autocomplete="off" v-show="$store.state.Editting" @submit.prevent="EditTask(id)">
            <input  type="text"
                    v-model="$store.state.Title"  
                    placeholder="Task Title"><br>
            <input  type="text"
                    v-model="$store.state.Description"  
                    placeholder="Task Description"><br>
            <input  type="submit"
                    value="Done"
                    @click="$store.state.Editting=false"><br>
    </form>
</template>

<script>
import { mapActions,mapState } from 'vuex'

export default {
    name:'EdittingComponent',
    methods:{
        ...mapActions(["EditTask"])
    },
    props:{
        id:{
            type:Number,
            required:true
        }
    },
    components:{
        ...mapState(["Title","Description","Editting"])
    }

}
</script>