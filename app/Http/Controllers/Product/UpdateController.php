<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\UpdateRequest;
use App\Models\Category;
use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class UpdateController extends Controller
{
    public function __invoke(UpdateRequest $request, Product $product, Category $category)
    {
        $data = $request->validated();
        $category->id = $product->category_id ;

        if (array_key_exists('preview_image', $data)){
            $data['preview_image'] = Storage::disk('public')->put('/images', $data['preview_image']);
        }
       if (isset($data['product_images'])){
           $productImages = $data['product_images'];
                foreach($productImages as $productImage){
                    $currentImages = ProductImage::where('id', $product->id)->get();

                    if (count($currentImages) > 3) continue;
                    $filePath = Storage::disk('public')->put('/images', $productImage);
                    DB::table('product_images')->where('product_id', $product->id)->delete();
                    ProductImage::create([
                        'product_id' => $product->id,
                        'file_path' => $filePath
                    ]);
                }
        }

        $product->update($data);

        return view('product.show', compact('product', 'category'));
    }
}
