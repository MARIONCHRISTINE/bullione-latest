<?php

class DataTransformer {
    
    public static function transformUser($userData) {
        return [
            'id' => (string)$userData['id'], // Convert to string as expected by frontend
            'email' => $userData['email'],
            'name' => $userData['first_name'] . ' ' . $userData['last_name'], // Combine names
            'type' => $userData['user_type'], // Maps directly
            'avatar' => null, // You can add avatar logic later
            'createdAt' => $userData['created_at'],
            'profile' => [
                'company' => $userData['organization_name'] ?? null,
                'location' => $userData['country'] ?? null,
                'bio' => null, // Add bio field to database if needed
                'investmentFocus' => null, // Add this field if needed
                'fundingStage' => null, // Add this field if needed
                'industry' => $userData['organization_type'] ?? null,
                'website' => null, // Add website field to database if needed
                'linkedIn' => null, // Add social media fields if needed
                'twitter' => null
            ]
        ];
    }
    
    public static function transformApplication($appData) {
        return [
            'id' => (string)$appData['id'],
            'company_name' => $appData['company_name'],
            'funding_amount' => (float)$appData['funding_amount'],
            'status' => $appData['status'],
            'submitted_date' => $appData['submitted_date'] ?? $appData['created_at'],
            'last_update' => $appData['last_update'] ?? $appData['updated_at'],
            'description' => $appData['description'],
            'business_plan_url' => $appData['business_plan_url'],
            'financial_projections_url' => $appData['financial_projections_url'],
            'pitch_deck_url' => $appData['pitch_deck_url']
        ];
    }
    
    public static function transformMeeting($meetingData) {
        return [
            'id' => $meetingData['id'],
            'title' => $meetingData['title'],
            'date' => $meetingData['meeting_date'],
            'time' => $meetingData['meeting_time'],
            'type' => $meetingData['type'],
            'investor_name' => $meetingData['investor_name'] ?? 'TBD', // You'll need to join with users table
            'meeting_link' => $meetingData['meeting_link'],
            'status' => $meetingData['status']
        ];
    }
    
    public static function transformNotification($notificationData) {
        return [
            'id' => $notificationData['id'],
            'message' => $notificationData['message'],
            'type' => $notificationData['type'],
            'created_at' => $notificationData['created_at'],
            'read' => (bool)$notificationData['is_read'], // Transform is_read to read
            'application_id' => $notificationData['application_id'] ? (string)$notificationData['application_id'] : null
        ];
    }
}
