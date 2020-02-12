<template>
    <div class="wall">
        <div class="container">
            <div class="wall__column">
                <div class="wall__pic">
                    <img src="/Glyph.png" alt="image" class="wall__img">
                </div>
                <div class="wall__circle"></div>
                <div class="wall__circle"></div>
                <div class="wall__circle"></div>
                <div class="wall__circle"></div>
                <div class="wall__circle"></div>
                <div class="wall__circle"></div>
                <div class="wall__circle"></div>
                <div class="wall__circle"></div>
            </div>
            <div class="wall__main">
                <div class="wall__header">

                    <div class="wall__balance">
                        <div class="wall__balance-title">Balance</div>
                        <div class="wall__balance-money"
                             v-if="information"
                        >
                            {{information.header.balance}} &#8381;
                        </div>
                        <div class="wall__balance-money" v-else>search value ....</div>
                    </div>

                    <div class="wall__payoff">
                        <div class="wall__payoff-title">Payoff</div>
                        <div class="wall__payoff-money"
                             v-if="information"
                        >
                            {{information.header.next_payout}} &#8381;
                        </div>
                        <div class="wall__payoff-money" v-else>search value....</div>
                    </div>
                </div>
                <div class="wall__content">

                    <filterSev @filterList="filterList($event)">

                    </filterSev>
                    <div v-if="information">
                        <card class="wall__card"
                              v-for="card of cards"
                              :key = card.id
                              :card="card"
                        > </card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import filterSev from '@/components/FilterForCard.vue'
    import Card from '@/components/Card'
    export default {
        name: 'app-wall',
        data(){
            return{
                cards: null
            }
        },
        computed: {
            information(){
                return this.$store.state.data
            }
        },
        watch:{
            information(value){
                this.cards = value.cards
            }
        },
        components:{
            filterSev,
            card: Card
        },
        methods:{
            filterList(val){
                this.cards = this.information.cards
                if(val.trim()){
                    this.cards = this.cards.filter( card =>{
                        if(card.title.toLowerCase().includes(val.toLowerCase())){
                            return true;
                        }
                    })
                }
            }
        },
        filters:{

        }

    }
</script>

<style scoped lang="scss">
    .container{
        width: 1280px;
        margin: 0 auto;
        position: relative;
    }
    .wall{
        background: #E5E5E5;
        &__card{
            margin: 24px 0;
        }
        &__column{
            display: block;
            width: 80px;
            height: 100%;
            padding: 20px;
            position: absolute;
            top: 0;
            left: 0;
            background: #1B1D29;
            text-align: center;
        }
        &__pic{
            width: 27px;
            height: 40px;
            margin: 0 auto 44px auto;
        }
        &__img{
            max-width: 100px;
            height: auto;
        }
        &__circle{
            display: inline-block;
            width: 24px;
            height: 24px;
            margin: 28px auto;
            border-radius: 50%;
            border: 3px solid #888991;
            transition: 2s border;
            &:hover{
                border: 3px solid rgba(219, 0, 0, 0.59)
            }

        }
        &__main{
            display: block;
            width: 1200px;
            min-height: 900px;
            margin-left: 80px;
            padding-bottom: 50px;
        }
        &__header{
            width: 100%;
            height: 80px;
            background: #ffffff;
            padding: 18px 0 18px 32px;
            line-height: 1.4;
        }
        &__balance{
            display: inline-block;
            margin-right: 23px;
            text-align: left;
            &-title{
                font-size: 13px;
                color: #7D7D7D;
            }
            &-money{
                font-size: 19px;
                color: #262626;
            }
        }
        &__payoff{
            display: inline-block;
            text-align: left;
            &-title{
                font-size: 13px;
                color: #7D7D7D;
            }
            &-money{
                font-size: 19px;
                color: #262626;
            }
        }
        &__content{
            padding-left: 32px;
        }
    }
</style>
