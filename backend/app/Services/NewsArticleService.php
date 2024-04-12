<?php

namespace App\Services;

use App\Models\NewsArticle;
use App\Repositories\NewsArticleRepository;

class NewsArticleService
{
    protected $articleRepository;

    public function __construct(NewsArticleRepository $articleRepository)
    {
        $this->articleRepository = $articleRepository;
    }

    public function getAllArticles($user)
    {
        return $this->articleRepository->getAll($user);
    }

    public function getNewsByCategory($category, $date, $source)
    {
        return $this->articleRepository->getNewsByCategory($category, $date, $source);
    }
    
    public function getNewsBySearch($search, $date, $source)
    {
        return $this->articleRepository->getNewsBySearch($search, $date, $source);
    }

    public function getArticleById($id)
    {
        return $this->articleRepository->findById($id);
    }

    public function createArticle($data)
    {
        return $this->articleRepository->create($data);
    }

    public function updateArticle($id, $data)
    {
        return $this->articleRepository->update($id, $data);
    }

    public function deleteArticle($id)
    {
        return $this->articleRepository->delete($id);
    }
}