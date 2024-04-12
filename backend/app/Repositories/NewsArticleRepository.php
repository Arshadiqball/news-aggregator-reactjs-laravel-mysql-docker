<?php

namespace App\Repositories;

use App\Models\NewsArticle;
use Carbon\Carbon;

class NewsArticleRepository
{
    public function getAll($user)
    {
        $userPreferences = $user->preferences;
        $query = NewsArticle::query();
        if (count(json_decode($userPreferences->source)) > 0) {
            $query->whereIn('source', json_decode($userPreferences->source));
        }
        
        if (count(json_decode($userPreferences->category)) > 0) {
            $query->whereIn('category', json_decode($userPreferences->category));
        }
        
        if (count(json_decode($userPreferences->author)) > 0) {
            $query->whereIn('author', json_decode($userPreferences->author));
        }
        
        return $query->selectRaw('*, publish_at as publish_at_human')
            ->get()
            ->map(function ($article) {
                $article->publish_at_human = Carbon::parse($article->publish_at_human)->diffForHumans();
                return $article;
            });
    }

    public function getNewsBySearch($search, $date, $source)
    {
        if($source == null || $source == ""){
            $source = "G API";
        }
        $query = NewsArticle::where('title', 'LIKE', '%' . $search . '%')
                ->where('source', $source);
    
        if ($date === 'today') {
            $query->whereDate('publish_at', now());
        } elseif ($date === 'thisWeek') {
            $query->whereBetween('publish_at', [now()->startOfWeek(), now()->endOfWeek()]);
        } elseif ($date === 'thisMonth') {
            $query->whereMonth('publish_at', now()->month);
        }
    
        return $query->selectRaw('*, publish_at as publish_at_human')
        ->get()
        ->map(function ($article) {
            $article->publish_at_human = Carbon::parse($article->publish_at_human)->diffForHumans();
            return $article;
        });
    }

    public function getNewsByCategory($category, $date, $source)
    {
        if($source == null || $source == "" && $date == null || $date == ""){
            return NewsArticle::where(
                [
                    'source' => 'G API',
                    'category' => $category
                ]
            )->selectRaw('*, publish_at as publish_at_human')
            ->get()
            ->map(function ($article) {
                $article->publish_at_human = Carbon::parse($article->publish_at_human)->diffForHumans();
                return $article;
            });
        }
        
        $query = NewsArticle::where('category', $category);

        if ($date === 'today') {
            $query->whereDate('publish_at', now());
        } elseif ($date === 'thisWeek') {
            $query->whereBetween('publish_at', [now()->startOfWeek(), now()->endOfWeek()]);
        } elseif ($date === 'thisMonth') {
            $query->whereMonth('publish_at', now()->month);
        } elseif ($date === 'thisYear') {
            $query->whereYear('publish_at', now()->year);
        }
        $query->where('source', $source);
        return $query->selectRaw('*, publish_at as publish_at_human')
        ->get()
        ->map(function ($article) {
            $article->publish_at_human = Carbon::parse($article->publish_at_human)->diffForHumans();
            return $article;
        });
    }

    public function findById($id)
    {
        return NewsArticle::where('source', 'G API')->findOrFail($id);
    }

    public function create($data)
    {
        return NewsArticle::create($data);
    }

    public function update($id, $data)
    {
        $article = NewsArticle::findOrFail($id);
        $article->update($data);
        return $article;
    }

    public function delete($id)
    {
        $article = NewsArticle::findOrFail($id);
        $article->delete();
    }
}