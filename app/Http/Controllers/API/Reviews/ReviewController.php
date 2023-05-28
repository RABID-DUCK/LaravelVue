<?php

namespace App\Http\Controllers\API\Reviews;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
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

    public function getRew(Reviews $reviews, $rew){
        $rews = Reviews::query()->where('product_id', $rew)->get();

        return $rews;
    }

    public function getListRews(){
        return Reviews::all()->take(20);
    }
}
