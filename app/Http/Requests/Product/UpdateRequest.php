<?php

namespace App\Http\Requests\Product;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
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
     */
    public function rules(): array
    {
        return [
            'title' => 'nullable|string',
            'description' => 'nullable',
            'content' => 'nullable',
            'preview_image' => 'nullable',
            'price' => 'nullable',
            'old_price' => 'nullable',
            'count' => 'nullable',
            'is_published' => 'nullable',
            'category_id' => 'nullable'
        ];
    }
}
