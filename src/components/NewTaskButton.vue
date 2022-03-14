<template>
    <div id="new-task-div">
        <button @click="buttonClicked" 
                class="button" 
                id="new-task-button">
            Add a New Task
        </button>
    </div>
</template>

<script>
export default {
    name:'NewTaskButton',
    methods: {
        buttonClicked(){
            this.$emit('new-task-button-clicked')
        }
    }
}
</script>