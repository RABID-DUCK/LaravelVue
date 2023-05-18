<?php

namespace App\Http\Controllers\Main;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Product;
use App\Models\User;

class indexController extends Controller
{
    public function __invoke()
    {
        $count_orders = Order::count();
        $count_products = Product::count();
        $count_users = User::count();
        return view('main.index', compact('count_orders', 'count_products', 'count_users'));
    }
}
