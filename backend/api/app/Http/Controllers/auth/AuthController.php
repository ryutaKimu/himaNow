<?php

namespace App\Http\Controllers\auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json(['message' => 'ログイン失敗です'], 401);
        }
        $user = Auth::user();
        $token = $user->createToken('himaNow')->plainTextToken;
        return response()->json(['token' => $token]);
    }
}
