<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            ['name' => 'Pera', 'email' => 'pera@example.com', 'password' => Hash::make('pera123')],
            ['name' => 'Mika', 'email' => 'mika@example.com', 'password' => Hash::make('mika123')],
            ['name' => 'Zika', 'email' => 'zika@example.com', 'password' => Hash::make('zika123')]
        ];

        foreach ($users as $userData) {
            User::create($userData);
        }
        $this->call([
          
            BrandSeeder::class,
            CarSeeder::class,
            RentalSeeder::class
        ]);
    }
}
