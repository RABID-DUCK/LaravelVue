<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use App\Models\ProductImage;
use App\Models\ProductTag;
use App\Models\Tag;

class EditController extends Controller
{
    public function __invoke(Product $product)
    {
        $tags = Tag::all();
        $categories = Category::all();
        $productImage = ProductImage::all();

        $productTagsTitle = ProductTag::join('tags', 'tags.id', '=', 'product_tags.tag_id')->
        select('tags.title', 'tags.id')->where('product_id', $product->id)->get();

        return view('product.edit', compact('product', 'tags', 'productTagsTitle',
            'categories', 'productImage'));
    }
}
