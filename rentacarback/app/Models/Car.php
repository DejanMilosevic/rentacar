<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    use HasFactory;
       protected $fillable = [
        'brand_id',
        'model',
        'year',
        'price_per_day',
        'is_available',
    ];

    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }

    public function rentals()
    {
        return $this->hasMany(Rental::class);
    }
}
