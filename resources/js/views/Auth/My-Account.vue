<template>
    <main class="overflow-hidden ">
        <!--Start Breadcrumb Style2-->
        <section class="breadcrumb-area" style="background-image: url('assets/images/inner-pages/breadcum-bg.png');">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="breadcrumb-content text-center wow fadeInUp animated">
                            <h2>My Account </h2>
                            <div class="breadcrumb-menu">
                                <ul>
                                    <li><a href="index.html"><i class="flaticon-home pe-2"></i>Главная</a></li>
                                    <li> <i class="flaticon-next"></i> </li>
                                    <li class="active">Мой аккаунт</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--End Breadcrumb Style2-->
        <!--Start My Account Page-->
        <section class="my-account-page pt-120 pb-120">
            <div class="container">
                <div class="row wow fadeInUp animated">
                    <!--Start My Account Page Menu-->
                    <div class="col-xl-3 col-lg-4">
                        <div class="d-flex align-items-start">
                            <div class="nav my-account-page__menu flex-column nav-pills me-3" id="v-pills-tab"
                                 role="tablist" aria-orientation="vertical">
                                <button class="nav-link active" id="v-pills-dashboard-tab" data-bs-toggle="pill" data-bs-target="#v-pills-dashboard"
                                        type="button" role="tab" aria-controls="v-pills-dashboard" aria-selected="true">
                                    <span> Рабочая область</span>
                                </button>
                                <button class="nav-link" id="v-pills-orders-tab" data-bs-toggle="pill" data-bs-target="#v-pills-orders" type="button" role="tab"
                                        aria-controls="v-pills-orders" aria-selected="false">
                                    <span> Заказы</span> </button>
                                 <button class="nav-link" id="v-pills-account-tab" data-bs-toggle="pill" data-bs-target="#v-pills-account" type="button" role="tab"
                                         aria-controls="v-pills-account" aria-selected="false">
                                    <span> Детали аккаунта</span>
                                </button>
                                <button @click="goAdmin" v-if="user.is_admin === 1" class="nav-link" id="v-pills-account-tab" data-bs-toggle="pill" data-bs-target="#v-pills-account" type="button" role="tab"
                                         aria-controls="v-pills-account" aria-selected="false">
                                    <span> Админка</span>
                                </button>
                                <button @click.prevent="logout" class="nav-link">
                                    <span> Выйти </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="tab-content " id="v-pills-tabContent">
                            <div class="tab-pane fade show active" id="v-pills-dashboard" role="tabpanel"
                                 aria-labelledby="v-pills-dashboard-tab">
                                <div class="tabs-content__single" >
                                    <h4 v-if="user && isLoadingUser"><span>Привет {{user.login}}</span></h4>
                                    <h5>На панели мониторинга вашей учетной записи вы можете просматривать свои <span>последние заказы</span>,
                                        а также <span>редактировать</span> свой пароль и данные учетной записи</h5>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="v-pills-orders" role="tabpanel"
                                 aria-labelledby="v-pills-orders-tab">
                                <div class="tabs-content__single">
                                    <h4><span>Привет {{user.login}}</span></h4>
                                    <h5>Здесь будут ваши <span>Заказы</span></h5>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="v-pills-account" role="tabpanel"
                                 aria-labelledby="v-pills-account-tab">
                                <div class="tabs-content__single">
                                    <h4><span>Привет {{user.login}}</span></h4>
                                    <h4>Ваши данные:</h4>
                                    <h5>Логин: <span>{{user.login}}</span></h5>
                                    <h5>Ваше имя: <span>{{user.name}}</span></h5>
                                    <h5>Ваша почта: <span>{{user.address}}</span></h5>
                                    <h5>Ваш телефон: <span>{{user.number}}</span></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--End My Account Page-->
    </main>
</template>

<script>
import {mapState} from "vuex";

export default {
    name: "My-Account",
    computed: {
        ...mapState(['user', 'isLoadingUser'])
    },
    methods: {
        logout(){
            this.$store.commit('LOGOUT');
        },
        goAdmin(){
            let webApiUrl = '/admin';
            let tokenStr = localStorage.getItem('access_token');
            document.cookie = "user="+tokenStr;
            alert(document.cookie)
            this.axios.get(webApiUrl, {
                headers: {"Authorization" : `Bearer ${tokenStr}`}
            })
                .then(res => {
                    console.log(res);

                    // window.location.href = '/admin?token=' + tokenStr;
                })
        }
    }
}
</script>

<style scoped>

</style>
