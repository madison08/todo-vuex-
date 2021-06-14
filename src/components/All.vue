<template>
    <div>

        <div class="label_todo_item">
            <div class="round">
            <input type="checkbox" id="checkbox" />
            </div>
            <label for="">{{ names }}</label>
        </div>
        <div class="label_todo_item">
            <div class="round">
            <input type="checkbox" id="checkbox" />
            </div>
            <label for="">Priez</label>
        </div>

    </div>
</template>
<script>
import { mapState } from 'vuex'
    export default{
        name: 'All',

        computed:{
            ...mapState({
                names: 'name'
            })
        }


    }
</script>