@extends('layouts.main')

@section('content')
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Редактировать продукт</h1>
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
            <form action="{{route('product.update', $product->id)}}" method="post" enctype="multipart/form-data">
                @method('patch')
                @csrf
                <div class="form-group">
                    <label>Название</label>
                    <input type="text" class="form-control" name="title" value="{{ $product->title ?? old('title') }}">
                </div>
                <div class="form-group">
                    <label>Описание</label>
                    <input type="text" class="form-control" name="description" value="{{ $product->description ?? old('description')}}">
                </div>
                <div class="form-group">
                    <label>Контент</label>
                    <input type="text" class="form-control" name="content" value="{{ $product->content ?? old('content') }}">
                </div>
                <div class="form-group">
                    <div class="input-group">
                        <div class="custom-file">
                            <input name="preview_image" type="file" class="custom-file-input" id="exampleInputFile" value="{{$product->preview_image ?? old('preview_image')}}">
                            <label class="custom-file-label" for="exampleInputFile">Выберите файл</label>
                        </div>
                        <div class="input-group-append">
                            <span class="input-group-text">Загрузка</span>
                        </div>
                    </div>
                    <span>{{$product->preview_image ?? old('preview_image')}}</span>
                </div>
                <div class="form-group">
                    <label>Цена</label>
                    <input type="text" class="form-control" name="old_price" value="{{ $product->old_price ?? old('old_price') }}">
                </div>
                <div class="form-group">
                    <label>Цена</label>
                    <input type="text" class="form-control" name="price" value="{{ $product->price ?? old('price') }}">
                </div>
                <div class="form-group">
                    <label>Количество</label>
                    <input type="text" class="form-control" name="count" value="{{ $product->count ?? old('count') }}">
                </div>
                <div class="form-group">
                    <label>В наличии(1 - да, 2 - нет)</label>
                    <input type="text" class="form-control" name="is_published" value="{{ $product->is_published ?? old('is_published') }}">
                </div>
                <div class="form-group">
                    <label>Категория</label>
                    <select name="category_id" class="tags" multiple="multiple" data-placeholder="Выберите категорию" style="width: 100%;">
{{--                        <option selected="selected">{{$category->category_id ?? old('id')}}</option>--}}
                        @foreach($categories as $category)
                            <option value="{{$category->id ?? old('id')}}">{{$category->title ?? old('category_id')}}</option>
                        @endforeach
                    </select>
                </div>
                <div class="form-group">
                    <label>Теги</label>
                    <select name="tags[]" class="tags" multiple="multiple" data-placeholder="Выберите тег" style="width: 100%;">
                        @foreach($tags as $tag)
                            <option value="{{$tag->id ?? old('id')}}">{{$tag->title ?? old('tags')}}</option>
                        @endforeach
                    </select>
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
