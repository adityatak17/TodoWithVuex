<template>
    <div id="new-task-div">
        <button @click="$store.state.addForm=true" 
                class="button" 
                id="new-task-button">
            Add a New Task
        </button>
    </div>
</template>

<script>
export default {
    name:'NewTaskButton',
}
</script>