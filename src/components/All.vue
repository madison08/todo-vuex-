<template>
    <div>

        <div class="label_todo_item" v-for="(task, key) in store_getAllTaks" :key="key">
            <div class="round">
            <input type="checkbox" v-model="task.completed" id="checkbox" />
            </div>
            <label for="" :class="{ textTrans: task.completed }">{{ task.title }}</label>
            <div class="deleteTask" @click="deleteTask(task)">Delete</div>
        </div>

    </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
    export default{
        name: 'All',

        data(){
            return{
                completedCheck: ''
            }
        },

        methods:{
            deleteTask(task){
                this.$store.commit('DELETE_TASK', task)
            },


        },

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