<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use App\Models\NewsArticle;
use App\Services\NewsArticleService;

class ScrapeNewsFromNewsAPI extends Command
{
    protected $signature = 'scrape:apinews';
    protected $description = 'Scrape news articles from an external API and store them in the database';

    protected $newsArticleService;

    public function __construct(NewsArticleService $newsArticleService)
    {
        parent::__construct();
        $this->newsArticleService = $newsArticleService;
    }

    public function handle()
    {
        $apiKey = config('services.news_api.news_api_key');
        $url = config('services.news_api.news_api_url');
        $country = 'us'; 

        $navs = [
            "general", 
            "business", 
            "sports", 
            "science", 
            "health", 
            "entertainment", 
            "technology"
        ];

        foreach ($navs as $nav) {
            $response = Http::get($url."/sources?category=$nav&apiKey=$apiKey");

            if ($response->successful()) {
                $articles = $response->json()['sources'];

                foreach ($articles as $article) {
                    $articleData = [
                        'category' => $nav,
                        'article_source' => null,
                        'source' => 'News API',
                        'title' => $article['name'] ?? null,
                        'description' => $article['description'] ?? null,
                        'url' => $article['url'] ?? null,
                        'author' => null,
                        'image' => null,
                        'publish_at' => null
                    ];

                    $this->newsArticleService->createArticle($articleData);
                }

                $this->info('News articles for category ' . $nav . ' scraped and stored successfully.');
            } else {
                $this->error('Failed to fetch news articles for category ' . $nav);
            }
        }

        $url = $url."?country=$country&apiKey=$apiKey";
        $response = Http::get($url);

        if ($response->successful()) {
            $articles = $response->json()['articles'];

            foreach ($articles as $article) {
                $articleData = [
                    'category' => null,
                    'article_source' => $article['source']['name'] ?? null,
                    'source' => 'News API',
                    'title' => $article['title'],
                    'description' => $article['description'],
                    'url' => $article['url'],
                    'author' => $article['author'] ?? null,
                    'image' => $article['urlToImage'] ?? null,
                    'publish_at' => $article['publishedAt'] ?? null
                ];

                $this->newsArticleService->createArticle($articleData);
            }

            $this->info('News articles scraped and stored successfully.');
        } else {
            $this->error('Failed to fetch news articles.');
        }
    }
}
