<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;

class BlogsController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function store(Request $request) {
        Blog::create([
            'title' => $request['title'],
            'body' => $request['body']
        ]);

        return response()->json(["result" => "ok"], 201);
    }

    public function index() {
        $blogs = Blog::all();
        return response()->json($blogs);
    }
}
