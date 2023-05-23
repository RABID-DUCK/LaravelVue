<?php

namespace App\Http\Controllers\API\Reviews;

use App\Http\Controllers\Controller;
use App\Http\Resources\Review\ReviewResources;
use App\Http\Controllers\API\Reviews\ReviewRequest;
use App\Models\Reviews;

class ReviewController extends Controller
{
    public function index(ReviewRequest $request){
        $data = $request->validated();
        $rev = Reviews::query()->create($data);

        return new ReviewResources($rev);
    }

    public function listRev(){
        $data = Reviews::all();

        return $data;
    }
}
