<template>
    <div id="deleted-task-div">
        <button @click="$store.state.deleteForm=!$store.state.deleteForm" 
                class="button" 
                id="deleted-task-button">
                <p v-if="$store.state.deleteForm">Hide all the Deleted Tasks</p>
                <p v-else>Show all the Deleted Tasks</p>
        </button>
    </div>
</template>

<script>
export default {
    name:'DeletedTaskButton',
}
</script>