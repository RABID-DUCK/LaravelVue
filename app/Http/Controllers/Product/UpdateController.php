<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\UpdateRequest;
use App\Models\Product;
use Illuminate\Support\Facades\Storage;

class UpdateController extends Controller
{
    public function __invoke(UpdateRequest $request, Product $product)
    {
        $data = $request->validated();
        //$name_file = $request->file('preview_image')->getFilename();
        //$img = Storage::disk('public')->url('images/'.$name_file);
        //$img = explode("storage/", $img);
        // $data['preview_image'] = $img[1];
        if (array_key_exists('preview_image', $data)){
            $data['preview_image'] = Storage::disk('public')->put('/images', $data['preview_image']);
        }
        $product->update($data);

        return view('product.show', compact('product'));
    }
}
