<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserPreferences extends Model
{
    use HasFactory;

    protected $fillable = ['category', 'source', 'author'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}