<?php

namespace App\Http\Resources;

use App\Models\Brand;
use Illuminate\Http\Resources\Json\JsonResource;

class CarResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'brand' => Brand::find($this->brand_id),
           
            'model' => $this->model,
            'year' => $this->year,
            'price_per_day' => $this->price_per_day,
            'is_available' => $this->is_available
        ];
    }
}
