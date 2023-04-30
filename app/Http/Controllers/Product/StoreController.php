<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\IndexRequest;
use App\Models\Product;
use App\Models\ProductImage;
use App\Models\ProductTag;
use Illuminate\Support\Facades\Storage;

class StoreController extends Controller
{
    public function __invoke(IndexRequest $request)
    {
        $data = $request->validated();
        if (array_key_exists('product_images', $data)){
            $productImages = $data['product_images'];
        }
        $data['preview_image'] = Storage::disk('public')->put('/images', $data['preview_image']);

        if (array_key_exists('tags', $data)){
            $tagsIds = $data['tags'];
        }


        unset($data['tags'], $data['product_images']);

        $product = Product::firstOrCreate([
            'title' => $data['title']
        ], $data);

        if (isset($tagsId)) {
            foreach ($tagsIds as $tagId) {
                ProductTag::firstOrCreate([
                    'product_id' => $product->id,
                    'tag_id' => $tagId
                ]);
            }
        }

        if (isset($productImages)){
            foreach($productImages as $productImage){
                $currentImages = ProductImage::where('product_id', $product->id)->get();

                if (count($currentImages) > 3) continue;
                $filePath = Storage::disk('public')->put('/images', $productImage);
                ProductImage::create([
                    'product_id' => $product->id,
                    'file_path' => $filePath
                ]);
            }

        }

        return redirect()->route('product.index');
    }
}
