<?php

namespace App\Http\Controllers\API\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function editUser(Request $request){
            $data = $request->validate([
                'id' => 'nullable|integer',
                'name' => 'nullable|string',
                'email' => 'nullable|string',
                'phone' => 'nullable|string'
            ]);
            $dataUser = User::where('id', $data['id'])->get();

        if ($dataUser){
                DB::table('users')->where('id', $data['id'])->update([
                    'name' => $data['name'],
                    'address' => $data['email'],
                    'number' =>$data['phone']
                ]);

                return response()->json(['status' => true]);
            } else{
                return response()->json(['status' => false]);
            }
    }
}
