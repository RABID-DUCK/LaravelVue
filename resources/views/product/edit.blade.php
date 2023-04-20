@extends('layouts.main')

@section('content')
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Редактировать пользователя</h1>
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
            <form action="{{route('user.update', $user->id)}}" method="post">
                @method('patch')
                @csrf
                <div class="form-group">
                    <input type="text" class="form-control" name="login" value="{{ $user->login ?? old('login') }}">
                    <input type="text" class="form-control" name="name" value="{{ $user->name ?? old('name')}}">
                    <input type="text" class="form-control" name="address" value="{{ $user->address ?? old('address') }}">
                    <input type="text" class="form-control" name="number" value="{{ $user->number ?? old('number') }}">
                </div>
                <div class="form-group">
                    <input type="submit" class="btn btn-primary" value="Редактировать">
                </div>
            </form>
            </div>
        </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
@endsection
