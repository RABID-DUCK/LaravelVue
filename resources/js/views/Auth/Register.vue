<template>
    <section class="login-page pt-120 pb-120">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-6 col-lg-8 col-md-9 wow fadeInUp animated">
                    <div class="login-register-form"
                         style="background-image: url('assets/images/inner-pages/login-bg.png');">
                        <div class="top-title text-center ">
                            <h2>Регистрация</h2>
                            <p>Уже есть аккаунт? <router-link to="/login">Войти в</router-link></p>
                        </div>
                        <form class="common-form">
                            <div class="form-group">
                                <label>Введите ваше имя</label>
                                <input type="text" class="form-control"  placeholder="Виктор"> </div>
                            <div class="form-group">
                                <label>Придумайте логин</label>
                                <input type="text" class="form-control" placeholder="Username123">
                            </div>
                            <div class="form-group">
                                <label>Ваша почта</label>
                                <input type="email" class="form-control"  placeholder="dropZew@gmail.com"> </div>
                            <div class="form-group">
                                <label>Ваш телефон</label>
                                <input type="email" class="form-control"  placeholder="89004567614"> </div>
                            <div class="form-group eye">
                                <div class="icon icon-1"> <i class="flaticon-hidden"></i></div>
                                <label>Придумайте пароль</label>
                                <input type="password" id="password-field" class="form-control" placeholder="Password">
                                <div class="icon icon-2 "><i class="flaticon-visibility"></i> </div>
                            </div>
                            <div class="checkk ">
                                <div class="form-check p-0 m-0">
                                    <input type="checkbox" id="remember"> <label
                                    class="p-0" for="remember"> Примите условия и Политику конфиденциальности </label>
                                </div>
                            </div> <button type="submit" class="btn--primary style2">Зарегистрироваться </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Register"
}
</script>

<style scoped>

</style>
