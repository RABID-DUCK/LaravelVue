<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use PHPUnit\Exception;
use Symfony\Component\HttpFoundation\Response;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Facades\JWTAuth;

class CheckAdminToken
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        try {
            $headers = apache_request_headers();
            dd($headers);
            $url = $_SERVER['REQUEST_URI'];
            $url = explode('token=', $url);
            $request->headers->set('authorization', $url[1]);
            $user = JWTAuth::parseToken()->authenticate();
        } catch (\Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            return response()->json(['status' => 'Token is Invalid']);
        } catch (\Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
            return response()->json(['status' => 'Token is Expired']);
        } catch (Exception $e) {
            return response()->json(['status' => 'Authorization Token not found']);
        }
        return $next($request);
    }
}
