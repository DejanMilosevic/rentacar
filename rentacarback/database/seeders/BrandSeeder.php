<?php

namespace Database\Seeders;

use App\Models\Brand;
use Illuminate\Database\Seeder;

class BrandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $brands = ['Mercedes-Benz', 'BMW', 'Audi', 'Toyota', 'Ford'];

        foreach ($brands as $brandName) {
            Brand::create(['name' => $brandName]);
        }
    }
}
