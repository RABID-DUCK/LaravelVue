<?php

namespace App\Http\Controllers\API\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;

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

    public function resetPasswordEmail(Request $request){
        if (User::query()->where('email', $request->only('email'))->first() !== null) {
            $status = Password::sendResetLink(
                $request->only('email')
            );
            return $status = Password::RESET_LINK_SENT
                ? back()->with(['status' => __($status)])
                : back()->withErrors(['email' => __($status)]);
        }
        else{
            return response()->json(['message' => 'Пользователя с такой почтой не существует!'], 403);
        }

    }

    public function resetPassword(Request $request){
        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function (User $user, string $password){
                $user->forceFill([
                    'password' => Hash::make($password)
                ]);
                $user->save();
                event(new PasswordReset($user));
            }
        );

        return $status === Password::PASSWORD_RESET ? response()->json(['message' => 'Пароль успешно изменён'], 200)
            : response()->json(['message' => 'Произошла ошибка'], 500);
    }
}
