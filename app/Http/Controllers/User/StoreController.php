<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\StoreRequest;
use App\Models\User;
use Illuminate\Http\Request;

class UpdateController extends Controller
{
    public function __invoke(StoreRequest $request, User $user)
    {
        $data = $request->validated();
        $user->update($data);

        return redirect()->route('user.show', compact('user'));
    }
}
