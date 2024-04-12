<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use App\Services\NewsArticleService;

class ScrapeNewsFromGAPI extends Command
{
    protected $signature = 'scrape:gnews';
    protected $description = 'Scrape news articles from an external API and store them in the database';

    protected $newsArticleService;

    public function __construct(NewsArticleService $newsArticleService)
    {
        parent::__construct();
        $this->newsArticleService = $newsArticleService;
    }

    public function handle()
    {
        $apiKey = config('services.news_api.gnews_api_key');
        $url = config('services.news_api.gnews_api_url');
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
            $response = Http::get($url . "?category=$nav&apikey=$apiKey");

            if ($response->successful()) {
                $articles = $response->json()['articles'];

                foreach ($articles as $article) {
                    $articleData = [
                        'category' => $nav,
                        'article_source' => $article['source']['name'] ?? null,
                        'source' => 'G API',
                        'title' => $article['title'],
                        'author' => null,
                        'description' => $article['description'],
                        'url' => $article['url'],
                        'image' => $article['image'] ?? null,
                        'publish_at' => $article['publishedAt'] ?? null
                    ];

                    $this->newsArticleService->createArticle($articleData);
                }

                $this->info('News articles for category ' . $nav . ' scraped and stored successfully.');
            } else {
                $this->error('Failed to fetch news articles for category ' . $nav);
            }
        }

        $response = Http::get($url."?country=$country&apikey=$apiKey");
            if ($response->successful()) {
                $articles = $response->json()['articles'];

                foreach ($articles as $article) {
                    $articleData = [
                        'category' => null,
                        'article_source' => $article['source']['name'] ?? null,
                        'source' => 'G API',
                        'title' => $article['title'],
                        'author' => null,
                        'description' => $article['description'],
                        'url' => $article['url'],
                        'image' => $article['image'] ?? null,
                        'publish_at' => $article['publishedAt'] ?? null
                    ];

                    $this->newsArticleService->createArticle($articleData);
                }

                $this->info('News articles Top Headlines scraped and stored successfully.');
            } else {
                $this->error('Failed to fetch news articles for Top Headlines');
            }

        $this->info('All news articles scraped and stored successfully.');
    }
}
