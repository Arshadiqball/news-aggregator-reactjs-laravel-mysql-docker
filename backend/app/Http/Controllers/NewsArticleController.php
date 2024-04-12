<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\NewsArticleService;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class NewsArticleController extends Controller
{
    protected $articleService;

    public function __construct(NewsArticleService $articleService)
    {
        $this->articleService = $articleService;
    }

    public function index()
    {
        $user = auth()->user();
        $articles = $this->articleService->getAllArticles($user);
        return response()->json($articles);
    }

    public function getNewsByCategory(Request $request, $category, $date, $source)
    {
        $articles = $this->articleService->getNewsByCategory($category, $date, $source);
        return response()->json($articles);
    }

    public function getNewsBySearch(Request $request, $search, $date, $source)
    {
        $articles = $this->articleService->getNewsBySearch($search, $date, $source);
        return response()->json($articles);
    }

    public function show($id)
    {
        try {
            $article = $this->articleService->getArticleById($id);
            return response()->json($article);
        } catch (ModelNotFoundException $exception) {
            return response()->json(['message' => 'Article not found'], 400);
        }
    }

    public function store(Request $request)
    {
        $article = $this->articleService->createArticle($request->all());
        return response()->json($article, 201);
    }

    public function update(Request $request, $id)
    {
        $article = $this->articleService->updateArticle($id, $request->all());
        return response()->json($article, 200);
    }

    public function destroy($id)
    {
        $this->articleService->deleteArticle($id);
        return response()->json(null, 204);
    }
}
