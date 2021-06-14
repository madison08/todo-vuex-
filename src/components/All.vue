<template>
    <div>

        <div class="label_todo_item" v-for="task in store_getAllTaks" :key="task.taskName">
            <div class="round">
            <input type="checkbox" id="checkbox" />
            </div>
            <label for="">{{ task.taskName }} </label>
        </div>

    </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
    export default{
        name: 'All',

        computed:{
            ...mapState({
                names: 'name'
            }),

            ...mapGetters({
                store_getAllTaks: 'allTasks'
            })
        }


    }
</script>