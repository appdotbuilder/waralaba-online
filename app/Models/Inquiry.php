<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\Inquiry
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property string $phone
 * @property string|null $location
 * @property int|null $franchise_id
 * @property string $message
 * @property string $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Franchise|null $franchise
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|Inquiry newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Inquiry newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Inquiry query()
 * @method static \Illuminate\Database\Eloquent\Builder|Inquiry whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Inquiry whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Inquiry wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Inquiry whereLocation($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Inquiry whereFranchiseId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Inquiry whereMessage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Inquiry whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Inquiry whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Inquiry whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Inquiry whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Inquiry pending()
 * @method static \Database\Factories\InquiryFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class Inquiry extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'phone',
        'location',
        'franchise_id',
        'message',
        'status',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'franchise_id' => 'integer',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the franchise that the inquiry is related to.
     */
    public function franchise(): BelongsTo
    {
        return $this->belongsTo(Franchise::class);
    }

    /**
     * Scope a query to only include pending inquiries.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopePending($query)
    {
        return $query->where('status', 'pending');
    }
}