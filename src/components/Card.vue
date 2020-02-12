<template>
    <div class="card">

            <div class="card__item">
                <div class="card__title">{{card.title}}</div>
                <div class="card__descr">{{card.description}}</div>
            </div>
            <div class="card__item">
                <p  class="card__label">промокод</p>
                <input type="text" class="card__input" :value=card.promocode>
                <div class="card__icon">
                    <img src="/Icon.png" alt="icon" class="card__img">
                </div>
            </div>
            <div class="card__item">
                <button class="card__btn" @click="ReferenceTo(card.link)">Получить бонус</button>
            </div>

    </div>
</template>

<script>
    export default {
        name: 'app-card',
        props:['card'],
        methods:{
            ReferenceTo(ref){
                location.href = ref
            }
        }
    }
</script>


<style scoped lang="scss">
    *{
        box-sizing: border-box;
    }
    .card{
        width: 1136px;
        height: 120px;
        background: #ffffff;
        padding: 0 32px 24px 32px;
        border: 1px solid red;
        border-radius: 6px;
        text-align: left;
        display: flex;
        justify-content: flex-end;
        transition: 0.5s box-shadow;
        &:hover{
            box-shadow: 0 0 10px rgba(255, 0, 0, 0.29);
        }
        &__item{
            display: block;
            position: relative;
            margin-bottom: 0;
            margin-top: auto;
            width: 300px;
            &:nth-child(2n){
                margin-right: 24px;
            }
            &:first-child{
                color: red !important;
                margin-right: auto;
                margin-left: 0;
            }
        }
        &__title{
            font-size: 29px;
            line-height: 42px;
            text-transform: capitalize;
        }
        &__descr{
            font-size: 15px;
            color: #7D7D7D;
            text-align: left;
            margin-top: 5px;
            line-height: 22px;
            text-transform: capitalize;
        }
        &__label{
            display: block;
            font-size: 11px;
            color: #7D7D7D;
            text-transform: uppercase;

        }
        &__input{
            display: block;
            width: 300px;
            height: 48px;
            margin-top: 7px;
            border-radius: 4px;
            outline: none;
            border: 1px solid #CFD2D9;
            font-size: 15px;
            padding: 15px 17px 11px 17px;
            box-sizing: border-box;
        }
        &__icon{
            position: absolute;
            top: 50%;
            right: 17px;
        }
        &__btn{
            display: block;
            width: 300px;
            height: 48px;
            background: #0085FF;
            border-radius: 4px;
            color: #ffffff;
            font-size: 19px;
            text-align: center;
            outline: none;
            border: none;
            cursor: pointer;
            transition: 0.3s background;
            &:active{
                background: #0073d6;
            }

        }
    }

</style>
