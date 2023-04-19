<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;

class UpdateController extends Controller
{
    public function __invoke(User $user)
    {
        return view('user.edit', compact('user'));
    }
}
