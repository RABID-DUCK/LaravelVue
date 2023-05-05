<?php

namespace App\Http\Resources\Order;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
{
    public $phone_number;
    public function __construct($resource, $phone_number)
    {
        parent::__construct($resource);
        $this->phone_number = $phone_number;
    }

    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'user' => $this->user_id,
            'total_price' => $this->total_price,
            'payment_status' => $this->payment_status,
            'number_phone' => $this->phone_number,
            'products' => json_decode($this->products)
        ];
    }
}
