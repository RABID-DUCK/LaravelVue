<?php

namespace App\Http\Controllers\API\Order;

use App\Http\Controllers\Controller;
use App\Http\Resources\Order\OrderResource;
use App\Models\Order;
use App\Models\User;
use Illuminate\Support\Facades\Hash;


class ListOrdersController extends Controller
{
    public function __invoke(StoreRequest $request)
    {
        $data = $request->validated();
        $user = User::where('id', $data['id'])->first();
        dd($user);
        if ($user){
            return response()->json(['products:' => $data]);
        }

        $order = Order::create([
            'products' => json_encode($data['products']),
            'user_id' => json_encode($user->id),
            'total_price' => $data['total_price']
        ]);
        return new OrderResource($order, $data['number_phone']);
    }
}
