<?php

namespace App\Http\Controllers;

use App\Models\Car;
use App\Models\Rental;
use Illuminate\Http\Request;

class RentalController extends Controller
{
    public function index()
{
    $rentals = Rental::with(['user', 'car'])->get();
    return response()->json(['rentals' => $rentals], 200);
}

public function store(Request $request)
{
    
    $validatedData = $request->validate([
        'car_id' => 'required|exists:cars,id',
        'user_id' => 'required|exists:users,id',
        'rent_start_date' => 'required|date',
        'rent_end_date' => 'required|date|after_or_equal:rent_start_date',
        'total_price' => 'numeric'
    ]);

    // Pronađi automobil u bazi
    $car = Car::find($validatedData['car_id']);
    
    // Proveri da li je automobil dostupan pre nego što ga rezervišete
    if (!$car->is_available) {
        return response()->json(['message' => 'Car is already reserved!'], 400);
    }

    // Postavi automobil kao nedostupan
    $car->is_available = false;
    $car->save();

    // Kreiraj novo iznajmljivanje
    $rental = Rental::create($validatedData);
    return response()->json(['rental' => $rental, 'message' => 'Rental successfully added!'], 201);
}
 



 
 

}
