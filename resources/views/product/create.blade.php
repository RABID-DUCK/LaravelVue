@extends('layouts.main')

@section('content')
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Добавить продукт</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item active">Главная</li>
                    </ol>
                </div><!-- /.col -->
            </div><!-- /.row -->
        </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">
            <!-- Small boxes (Stat box) -->
            <div class="row">
                <form action="{{route('product.store')}}" method="post">
                    @csrf
                    <div class="form-group">
                        <input type="text" class="form-control" value="{{old('login')}}" name="login" placeholder="Логин">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" value="{{old('address')}}" name="address" placeholder="Почта">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" value="{{old('password')}}" name="password" placeholder="Пароль">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" value="{{old('password_confirmation')}}" name="password_confirmation" placeholder="Подтвердите пароль">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" value="{{old('name')}}" name="name" placeholder="Имя">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" value="{{old('number')}}" name="number" placeholder="Телефон">
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Добавить">
                    </div>
                </form>
            </div>
        </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
@endsection
