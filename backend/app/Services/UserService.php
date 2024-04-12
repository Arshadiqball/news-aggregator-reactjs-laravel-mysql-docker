<?php

namespace App\Services;

use App\Models\User;

class UserService
{
    public function updatePreferences(User $user, array $preferences)
    {
        $formattedPreferences = [];
        foreach ($preferences as $key => $value) {
            if (!empty($value)) {
                $serializedValue = json_encode($value);
                $formattedPreferences[$key] = $serializedValue;
            } else {
                $formattedPreferences[$key] = [];
            }
        }

        $user->preferences()->updateOrCreate([], $formattedPreferences);
    }


    public function getPreferences(User $user)
    {
        return $user->preferences;
    }
}