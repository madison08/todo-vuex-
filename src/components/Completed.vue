<template>
    <div>

        <div class="label_todo_item" v-for="(task, key) in store_taskcompleted" :key="key">
            <div class="round">
            <input type="checkbox" v-model="task.completed" id="checkbox" />
            </div>
            <label for="" :class="{ textTrans: task.completed }">{{ task.title }} -- {{ task.completed }} -- {{ task.id }} -- {{ completedCheck }}</label>
            <div class="deleteTask" @click="deleteTask(task)">Delete</div>
        </div>

    </div>
</template>
<script>
import { mapGetters } from 'vuex' 
    export default{
        name: 'Completed',


        computed:{
            ...mapGetters({
                store_taskcompleted :'taskCompleted'
            })
        },

        methods:{
            deleteTask(task){
                this.$store.commit('DELETE_TASK', task)
            },


        },
    }

</script>