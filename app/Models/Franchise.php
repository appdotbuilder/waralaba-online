<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * App\Models\Franchise
 *
 * @property int $id
 * @property string $brand_name
 * @property string $category
 * @property string $short_description
 * @property string $full_description
 * @property string|null $image_url
 * @property float $min_investment
 * @property float $max_investment
 * @property float|null $franchise_fee
 * @property float|null $royalty_fee
 * @property string|null $partnership_packages
 * @property string|null $potential_profits
 * @property string|null $support_provided
 * @property bool $is_featured
 * @property bool $is_active
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Inquiry> $inquiries
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|Franchise newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Franchise newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Franchise query()
 * @method static \Illuminate\Database\Eloquent\Builder|Franchise whereBrandName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Franchise whereCategory($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Franchise whereShortDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Franchise whereFullDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Franchise whereImageUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Franchise whereMinInvestment($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Franchise whereMaxInvestment($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Franchise whereFranchiseFee($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Franchise whereRoyaltyFee($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Franchise wherePartnershipPackages($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Franchise wherePotentialProfits($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Franchise whereSupportProvided($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Franchise whereIsFeatured($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Franchise whereIsActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Franchise whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Franchise whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Franchise whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Franchise active()
 * @method static \Illuminate\Database\Eloquent\Builder|Franchise featured()
 * @method static \Illuminate\Database\Eloquent\Builder|Franchise byCategory($category)
 * @method static \Database\Factories\FranchiseFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class Franchise extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'brand_name',
        'category',
        'short_description',
        'full_description',
        'image_url',
        'min_investment',
        'max_investment',
        'franchise_fee',
        'royalty_fee',
        'partnership_packages',
        'potential_profits',
        'support_provided',
        'is_featured',
        'is_active',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'min_investment' => 'decimal:2',
        'max_investment' => 'decimal:2',
        'franchise_fee' => 'decimal:2',
        'royalty_fee' => 'decimal:2',
        'is_featured' => 'boolean',
        'is_active' => 'boolean',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the inquiries for the franchise.
     */
    public function inquiries(): HasMany
    {
        return $this->hasMany(Inquiry::class);
    }

    /**
     * Scope a query to only include active franchises.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope a query to only include featured franchises.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }

    /**
     * Scope a query to filter by category.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @param  string  $category
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeByCategory($query, $category)
    {
        return $query->where('category', $category);
    }

    /**
     * Get formatted investment range.
     *
     * @return string
     */
    public function getInvestmentRangeAttribute(): string
    {
        $min = number_format($this->min_investment, 0, ',', '.');
        $max = number_format($this->max_investment, 0, ',', '.');
        
        return "Rp {$min} - Rp {$max}";
    }

    /**
     * Get formatted franchise fee.
     *
     * @return string|null
     */
    public function getFormattedFranchiseFeeAttribute(): ?string
    {
        if (!$this->franchise_fee) {
            return null;
        }
        
        return 'Rp ' . number_format($this->franchise_fee, 0, ',', '.');
    }
}