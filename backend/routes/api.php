use App\Http\Controllers\SEOController;

Route::get('/seo-rankings', [SEOController::class, 'index']);