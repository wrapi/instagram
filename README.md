# Instagram API Wrapper

Client interface for accessing [Instagram API](https://www.instagram.com/developer/).


## Installation

Install via [npm](https://www.npmjs.org/package/instagram-wrapi)

```bash
npm install instagram-wrapi --save
```

## Usage

Create a client object to connect to Instagram API [endpoints](https://www.instagram.com/developer/endpoints/).

```JS
var instagramWrapi = require('instagram-wrapi');

var client = new instagramWrapi(INSTAGRAM_ACCESS_TOKEN);

// Now you are ready to make API calls to Instagram.
```

Provide parameters and a callback. 

API calls follow this syntax:

`client.apigroup.action(param1, ..., queryString, callback);`

* `param` - (*if required*) url parameters - eg: For [users.get](#users.get) the value for `:user-id`.
* `queryString` - (*as required*) API method parameters as key-value pairs.

### Examples

#### Get information about the user of the access_token.
```JS
client.users.self(function(err, data) {
  if (!err) {
    console.log(data);
  } 
});
```

#### Get the most recent media published by a user.
```JS
client.users.media.recent('1574083', function(err, data) {
  if (!err) {
    console.log(data);
  }	
});
```

#### List of media recently tagged as **spring**.
```JS
client.tags.media.recent('spring', function(err, data) {
  if (!err) {
    console.log(data);
  } 
});
```

#### Search for recent media in a given location within 5km range. (What's happening in your area)
```JS
client.media.search({lat:'48.858844', lng:'2.294351', distance:5000}, function(err, data) {
  if (!err) {
    console.log(data);
  } 
});
```


## API Functions

### User Endpoints
* [users.self](https://www.instagram.com/developer/endpoints/users/#get_users_self)
* [users.get](https://www.instagram.com/developer/endpoints/users/#get_users)
* [users.media.recent.self](https://www.instagram.com/developer/endpoints/users/#get_users_media_recent_self)
* [users.media.recent](https://www.instagram.com/developer/endpoints/users/#get_users_media_recent)
* [users.feed.liked](https://www.instagram.com/developer/endpoints/users/#get_users_feed_liked)
* [users.search](https://www.instagram.com/developer/endpoints/users/#get_users_search)

### Relationship Endpoints
* [users.follows](https://www.instagram.com/developer/endpoints/relationships/#get_users_follows)
* [users.followed.by](https://www.instagram.com/developer/endpoints/relationships/#get_users_followed_by)
* [incoming.requests](https://www.instagram.com/developer/endpoints/relationships/#get_incoming_requests)
* [relationship.get](https://www.instagram.com/developer/endpoints/relationships/#get_relationship)
* [relationship.post](https://www.instagram.com/developer/endpoints/relationships/#post_relationship)

### Media Endpoints
* [media.get](https://www.instagram.com/developer/endpoints/media/#get_media)
* [media.by.shortcode](https://www.instagram.com/developer/endpoints/media/#get_media_by_shortcode)
* [media.search](https://www.instagram.com/developer/endpoints/media/#get_media_search)

### Comment Endpoints
* [media.comments](https://www.instagram.com/developer/endpoints/comments/#get_media_comments)
* [media.comments.post](https://www.instagram.com/developer/endpoints/comments/#post_media_comments)
* [media.comments.delete](https://www.instagram.com/developer/endpoints/comments/#delete_media_comments)

### Like Endpoints
* [media.likes](https://www.instagram.com/developer/endpoints/likes/#get_media_likes)
* [likes.post](https://www.instagram.com/developer/endpoints/likes/#post_likes)
* [likes.delete](https://www.instagram.com/developer/endpoints/likes/#delete_likes)

### Tag Endpoints
* [tags.get](https://www.instagram.com/developer/endpoints/tags/#get_tags)
* [tags.media.recent](https://www.instagram.com/developer/endpoints/tags/#get_tags_media_recent)
* [tags.search](https://www.instagram.com/developer/endpoints/tags/#get_tags_search)

### Location Endpoints
* [locations.get](https://www.instagram.com/developer/endpoints/locations/#get_locations)
* [locations.media.recent](https://www.instagram.com/developer/endpoints/locations/#get_locations_media_recent)
* [locations.search](https://www.instagram.com/developer/endpoints/locations/#get_locations_search)

## License

  [MIT](LICENSE)
