<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use App\Models\ProductImage;

class ShowController extends Controller
{
    public function __invoke(Product $product, ProductImage $productImage)
    {
        $productImage = ProductImage::all();
        if (!empty($productImage[0])){
            $productImage = $productImage[0];
        }
        $category = Category::find($product->category_id);
        return view('product.show', compact('product', 'productImage', 'category'));
    }
}
