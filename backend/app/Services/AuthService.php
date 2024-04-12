<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Repositories\UserRepository;
use Illuminate\Database\QueryException;
use App\Http\Requests\LoginRequest;
use Laravel\Passport\Token;

class AuthService
{
    protected $userRepo;

    public function __construct(UserRepository $userRepo)
    {
        $this->userRepo = $userRepo;
    }

    public function register(array $data)
    {
        try {
            User::create([
                'name' => $data['name'],
                'email' => $data['email'],
                'password' => Hash::make($data['password']),
            ]);
            
            return response()->json(['message' => 'Successfull Account Created'], 200);
        } catch (QueryException $e) {
            return response()->json(['error' => 'Database error: ' . $e->getMessage()], 400);
        } catch (\Exception $e) {
            return response()->json(['error' => 'An error occurred: ' . $e->getMessage()], 400);
        }
    }

    public function login(LoginRequest $request)
    {
        if (Auth::attempt($request->only('email', 'password'))) {
            return response()->json(['message' => 'Login successful', 'user' => Auth::user(),'token' => Auth::user()->createToken('News Feed')->accessToken], 200);
        }
        return response()->json(['message' => 'Invalid credentials'], 400);
    }

    public function logout()
    {
        $user = Auth::user()->token();
        $user->revoke();

        return response()->json(['message' => 'Logout successful'], 200);
    }
}