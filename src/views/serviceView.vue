<template>
    <compheader />
    <compslider/>
    <div class="container ">
        <h1> DỊCH VỤ</h1>
        <div class="row justify-content-center">
            <div v-for="content in contents" :key="content.id" class="col-12 col-lg-4 col-md-6 mt-4" style="width: 24rem;">
                <div class="card">
                    <img v-bind:src="content.image" class="card-img-top" alt="...">
                    <div class="card-body text-center p-0 ps-3 pe-3">
                        <div class="title" style="height: 50px">
                            <a v-bind:href="content.detail.link" class="card-text m-0 text-uppercase"> {{ content.title }}</a>
                        </div>
                        <p > {{ content.detail.intro }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <compfooter />
</template>



<script>
import axios from 'axios';
import compheader from '../components/compheader.vue';
import compfooter from '../components/compfooter.vue';
import compslider from '../components/compslider.vue';

export default {
    components: {
        compheader,
        compfooter,
        compslider
    },
    data() {
        return {
            contents: null
        }
    },
    mounted() {
        axios
            .get('http://localhost:3000/service')
            .then((response) => (this.contents = response.data))

    }

}


</script>




<style scoped>
.card-img-top {
    width: 100%;
    height: 230px;
}

h1 {
    font-weight: 400;
    color: #E86A33;
    margin-top: 30px;
    font-family: 'Times New Roman', Times, serif;
    margin-left: 80px;
    font-size: 1.75rem;
}

.title a {
    text-decoration: none;
    font-weight: 600;
    color: #1587bb;
}

/* css cắt đoạn */
p {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-align: left;
}
</style>