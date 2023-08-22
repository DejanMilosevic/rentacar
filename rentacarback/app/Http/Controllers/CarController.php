<?php

namespace App\Http\Controllers;

use App\Models\Car;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CarController extends Controller
{
    
    public function index()
    {
        $cars = Car::all();
        return response()->json(['cars' => $cars], 200);
    }

    public function show(Car $car)
    {
        return view('cars.show', ['car' => $car]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'brand_id' => 'required|exists:brands,id',
            'model' => 'required|string|max:255',
            'year' => 'required|integer',
            'price_per_day' => 'required|numeric',
            'is_available' => 'required|boolean'
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        $car = Car::create($validator->validated());
        return redirect()->route('cars.index')->with('success', 'Car successfully added!');
    }

    public function update(Request $request, Car $car)
    {
        $validator = Validator::make($request->all(), [
            'brand_id' => 'sometimes|required|exists:brands,id',
            'model' => 'sometimes|required|string|max:255',
            'year' => 'sometimes|required|integer',
            'price_per_day' => 'sometimes|required|numeric',
            'is_available' => 'sometimes|required|boolean'
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        $car->update($validator->validated());
        return redirect()->route('cars.index')->with('success', 'Car successfully updated!');
    }

    public function destroy(Car $car)
    {
        $car->delete();
        return redirect()->route('cars.index')->with('success', 'Car successfully deleted!');
    }
}
