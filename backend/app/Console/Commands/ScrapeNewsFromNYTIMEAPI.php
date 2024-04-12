<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use App\Models\NewsArticle;
use App\Services\NewsArticleService;

class ScrapeNewsFromNYTIMEAPI extends Command
{
    protected $signature = 'scrape:nytimenews';
    protected $description = 'Scrape news articles from The New York Times API and store them in the database';

    protected $newsArticleService;

    public function __construct(NewsArticleService $newsArticleService)
    {
        parent::__construct();
        $this->newsArticleService = $newsArticleService;
    }

    public function handle()
    {
        $apiKey = config('services.news_api.nytimesnews_api_key');
        $url = config('services.news_api.nytimesnews_api_url');

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
            $response = Http::get("https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:(Sports)&api-key=$apiKey");

            if ($response->successful()) {
                $responseData = $response->json();
                
                if (isset($responseData['response']['docs'])) {
                    $articles = $responseData['response']['docs'];
    
                    foreach ($articles as $article) {
                        $articleData = [
                            'category' => $nav,
                            'article_source' => $article['source'] ?? null,
                            'source' => 'The New York Times',
                            'title' => $article['headline']['main'] ?? null,
                            'description' => $article['abstract'] ?? null,
                            'url' => $article['web_url'] ?? null,
                            'author' => isset($article['byline']['original']) ? $article['byline']['original'] : null,
                            'image' => isset($article['multimedia'][0]['url']) ? 'https://www.nytimes.com/' . $article['multimedia'][0]['url'] : null,
                            'publish_at' => $article['pub_date'] ?? null
                        ];
    
                        $this->newsArticleService->createArticle($articleData);
                    }
    
                    $this->info('News articles for category ' . $nav . ' scraped and stored successfully.');
                } else {
                    $this->error('Failed to fetch news articles for category ' . $nav);
                }
            } else {
                $this->error('Failed to fetch news articles.');
            }
        }

        $response = Http::get($url."?api-key=$apiKey");

        if ($response->successful()) {
            // Parse the JSON response
            $responseData = $response->json();

            // Check if the 'results' key exists in the response
            if (isset($responseData['results'])) {
                $articles = $responseData['results'];

                // Iterate through each article and store it in the database
                foreach ($articles as $article) {
                    // Extract necessary data from the article
                    $articleData = [
                        'article_source' => $article['source'] ?? null,
                        'source' => 'The New York Times',
                        'title' => $article['title'] ?? null,
                        'description' => $article['abstract'] ?? null,
                        'url' => $article['url'] ?? null,
                        'author' => $article['byline'] ?? null,
                        'image' => isset($article['media'][0]['media-metadata'][0]['url']) ? $article['media'][0]['media-metadata'][0]['url'] : null,
                        'publish_at' => $article['published_date'] ?? null
                    ];

                    // Store the article in the database
                    $this->newsArticleService->createArticle($articleData);
                }

                // Display success message
                $this->info('News articles scraped and stored successfully.');
            } else {
                // Display error message if 'results' key is missing in the response
                $this->error('No articles found in the response.');
            }
        } else {
            $this->error('Failed to fetch news articles.');
        }
    }
}
