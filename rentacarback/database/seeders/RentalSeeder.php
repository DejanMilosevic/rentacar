<?php

namespace Database\Seeders;

use App\Models\Car;
use App\Models\Rental;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class RentalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
          // Učitaj sve automobile i korisnike
          $cars = Car::all();
          $users = User::all();
  
          // Ako nema dostupnih automobila ili korisnika, ne radimo ništa
          if ($cars->isEmpty() || $users->isEmpty()) {
              return;
          }
  
          for ($i = 0; $i < 3; $i++) {
              $randomCar = $cars->random();
              $randomUser = $users->random();
  
              $startDate = Carbon::now()->addDays(rand(1, 10));
              $endDate = $startDate->copy()->addDays(rand(1, 5));
              $totalPrice = $randomCar->price_per_day * $startDate->diffInDays($endDate);
  
              Rental::create([
                  'car_id' => $randomCar->id,
                  'user_id' => $randomUser->id,
                  'rent_start_date' => $startDate,
                  'rent_end_date' => $endDate,
                  'total_price' => $totalPrice
              ]);
          }
    }
}
