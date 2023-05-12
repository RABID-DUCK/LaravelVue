<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */public function rules(): array
{
    return [
        'login' => 'required|string|unique:users',
        'name' => 'nullable|string',
        'password' => 'required|string|confirmed',
        'address' => 'required|string|unique:users,address',
        'number' => 'nullable|integer',
        'is_admin' => 'required|boolean'
    ];
}

    public function messages()
    {
        return [
            'login.required' => 'Это поле обязательно!',
            'login.unique' => 'Пользователь с таким логином уже существует!',
            'password.required' => 'Подтверждение пароля является обязательным полем!',
            'password.confirmed' => 'Пароли не совпадают!',
        ];
    }

}
