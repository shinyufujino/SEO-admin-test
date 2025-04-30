<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SEOController extends Controller
{
    public function index()
    {
        // 仮のデータを返す
        return response()->json([
            'rank' => 1,
            'keyword' => 'example keyword'
        ]);
    }
}