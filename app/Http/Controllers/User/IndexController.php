<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\StoreRequest;
use App\Models\User;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function __invoke(StoreRequest $request)
    {
        $data = $request->all();
        User::firstOrCreate([
            'address' => $data['address']
        ], $data);

        return redirect()->route('user.index');
    }
}
