# BBQ - Event Planning Web Application

## Overview
BBQ is a Ruby on Rails web application that allows users to register, create BBQ parties, and invite friends to join. Each party has a dedicated event page with followers, a comment section, a photo gallery, and a location displayed on a map. Users receive email notifications about new comments on the events they follow or host. The app supports multiple languages, including English and Russian.

## Features
- **User Registration:** Users can sign up and log in to manage their events.
- **Event Management:** Users can create, edit, and delete BBQ events.
- **Invitations & Followers:** Users can invite friends to their events and follow other events.
- **Comments Section:** Event attendees can leave comments on the event page.
- **Photo Gallery:** Users can upload and view photos related to an event.
- **Location with Maps:** Each event has a location that is displayed on a map.
- **Email Notifications:** Event followers and hosts receive notifications about new comments.
- **Multi-language Support:** The application supports English and Russian.

## Installation
### Prerequisites
Ensure you have the following installed on your system:
- Ruby 3.0.1
- Rails 7.0.2
- Bundler
- SQLite3 (for development)
- PostgreSQL (for production)
- Node.js and Yarn

### Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/bbq.git
   cd bbq
   ```

2. Install dependencies:
   ```sh
   bundle install
   ```

3. Set up the database:
   ```sh
   rails db:migrate
   ```

4. Start the Rails server:
   ```sh
   rails server
   ```

5. Open the application in your browser at `http://localhost:3000/`.

## Database Schema
The project has several models:
- **User**: Stores user details such as name, email, and password.
- **Event**: Represents a BBQ event with details like title, description, address, and datetime.
- **Comment**: Users can comment on events.
- **Photo**: Stores event-related images.
- **Subscription**: Tracks event followers.

### Simplified Schema
- **Users**: `name`, `email`, `password`, `avatar`
- **Events**: `title`, `description`, `address`, `datetime`, `user_id`
- **Comments**: `body`, `user_name`, `event_id`, `user_id`
- **Photos**: `photo`, `event_id`, `user_id`
- **Subscriptions**: `user_name`, `user_email`, `event_id`, `user_id`

## Multi-language Support
The application supports both English and Russian. Localization files are found in:
```
config/locales/en.yml
config/locales/ru.yml
```
You can change the default locale in:
```
config/application.rb
```

## Deployment
### Development Database
SQLite3 is used for development.

### Production Database
PostgreSQL is used for production.

