<template>
    <div id="deleted-task-div">
        <button @click="buttonClicked" 
                class="button" 
                id="deleted-task-button">
                <p v-if="deleteform">Hide all the Deleted Tasks</p>
                <p v-else>Show all the Deleted Tasks</p>
        </button>
    </div>
</template>

<script>
export default {
    name:'DeletedTaskButton',
    props:{
        deleteform:{
            type:Boolean,
            required:true
        }
    },
    data(){
        return {

        }
    } ,
    methods:{
        buttonClicked(){
            this.$emit("deleted-task-button-clicked")
        }
    }
}
</script>