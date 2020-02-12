<template>
    <div class="services">
        <h3 class="services__title">Services</h3>
        <div class="services__foundation">
            <label class="services__label">
                Filter
                <input type="text" class="services__input"
                       v-model="searchInputValue"
                       @input="$emit('filterList', searchInputValue)">
            </label>
            <button class="services__btn" @click="$emit('filterList', searchInputValue='')">Clear</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'filterSev',
        data(){
            return{
                searchInputValue:''
            }
        },
        methods:{
        }
        
    }
</script>

<style scoped lang="scss">
    .services{
        text-align: left;
        &__title{
            display: block;
            margin-top: 40px;
            font-weight: 300;
            font-size: 39px;

        }
        &__label{
            display: inline-block;
            vertical-align: bottom;
            margin-top: 16px;
            margin-right: 8px;
            font-size: 11px;
            color: #7D7D7D;
            text-transform: uppercase;


        }
        &__input{
            display: block;
            width: 300px;
            height: 48px;
            margin-top: 7px;
            padding: 15px 17px 11px 17px;
            border: 1px solid #2F80ED;
            border-radius: 4px;
            font-size: 15px;
        }
        &__btn{
            width: 85px;
            height: 48px;
            border: 1px solid #CFD2D9;
            border-radius: 4px;
            background: #F5F7FA;
            text-align: center;
            font-weight: normal;
            font-size: 19px;
        }

    }

</style>
