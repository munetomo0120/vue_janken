<template>
    <div id="app">
        <h1>じゃんけんゲーム</h1>
        <ul class="nav">
            <li><router-link to="/game">ゲーム</router-link></li>
            <li><router-link to="/score">せいせき</router-link></li>
        </ul>
        <div class="inner">
            <transition name="fade">
                <router-view scores="scores"></router-view>
            </transition>
        </div>
    </div>
</template>
 
<script>
    import Game from './components/Game.vue';
    import Score from './components/Score.vue';
    import Storage from './util/Storage';
    let storage = new Storage();
    export default {
        name: 'app',
        data () {
            return {
                scores: storage.getData('scores') || []
            };
        },
        watch: {
            scores : 'saveData'
        },
        components:{
            Game,
            Score
        },
        methods: {
            saveData() {
                storage.setData('scores', this.scores);
            }
        }
    };
</script>
<style scoped>
    /* css（省略）*/
</style>