<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Новое сообщение</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">Имя:</label>
                            <input v-model="name" type="text" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label for="message-text" class="col-form-label">Почта:</label>
                            <input v-model="email" type="text" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label for="message-text" class="col-form-label">Телефон:</label>
                            <input v-model="phone" type="tel" v-mask="'+7(###)###-##-##'" maxlength="18" class="form-control">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                    <button type="button" class="btn btn-primary" @click.prevent="editUser">Редактировать</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mask} from 'vue-the-mask'
import {mapState} from "vuex";

export default {
    name: "ModalWindow",
    directives: {mask},
    data() {
        return {
            id: '',
            name: '',
            email: '',
            phone: ''
        }
    },
    computed: {
        ...mapState(['user'])
    },
    watch: {
        '$store.state.user': function (value){
            this.id = value.id
            this.name = value.name
            this.email = value.email
            this.phone = value.number
        }
    },
    methods: {
        editUser(){
            this.axios.post('/api/editUser', {
                'id': this.id,
                'name': this.name,
                'email': this.email,
                'phone': this.phone
            })
                .then(res => {
                    if (res.data.status){
                        window.location.reload();
                    }
                    else{
                        alert('Что-то пошло не так ;(')
                    }
                })
        }
    }
}
</script>

<style scoped>

</style>
