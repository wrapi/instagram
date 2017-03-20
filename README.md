# Instagram API Wrapper

Client interface for accessing [Instagram API](https://www.instagram.com/developer/).

[![NPM version](https://img.shields.io/npm/v/instagram-wrapi.svg?style=flat)](https://www.npmjs.org/package/instagram-wrapi)


## Installation

Install via [npm](https://www.npmjs.org/package/instagram-wrapi)

```bash
npm install instagram-wrapi --save
```

## Setup

Instagram API requires authentication and uses the [OAuth 2.0 protocol](http://tools.ietf.org/html/draft-ietf-oauth-v2-12). Authenticated requests require an **access_token**.

More details on getting an `access_token` can be found  [here](https://www.instagram.com/developer/authentication/).

Also, some calls require `public_content` scope set for your app. Please refer to [scope documentation](https://www.instagram.com/developer/authorization/).

## Usage

Create a client object to connect to Instagram API [endpoints](https://www.instagram.com/developer/endpoints/) with your `access_token`.

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

### Users
* [users.self](https://www.instagram.com/developer/endpoints/users/#get_users_self)
* [users.get](https://www.instagram.com/developer/endpoints/users/#get_users)
* [users.media.recent.self](https://www.instagram.com/developer/endpoints/users/#get_users_media_recent_self)
* [users.media.recent](https://www.instagram.com/developer/endpoints/users/#get_users_media_recent)
* [users.feed.liked](https://www.instagram.com/developer/endpoints/users/#get_users_feed_liked)
* [users.search](https://www.instagram.com/developer/endpoints/users/#get_users_search)

### Relationship
* [users.follows](https://www.instagram.com/developer/endpoints/relationships/#get_users_follows)
* [users.followed.by](https://www.instagram.com/developer/endpoints/relationships/#get_users_followed_by)
* [incoming.requests](https://www.instagram.com/developer/endpoints/relationships/#get_incoming_requests)
* [relationship.get](https://www.instagram.com/developer/endpoints/relationships/#get_relationship)
* [relationship.post](https://www.instagram.com/developer/endpoints/relationships/#post_relationship)

### Media
* [media.get](https://www.instagram.com/developer/endpoints/media/#get_media)
* [media.by.shortcode](https://www.instagram.com/developer/endpoints/media/#get_media_by_shortcode)
* [media.search](https://www.instagram.com/developer/endpoints/media/#get_media_search)

### Comments
* [media.comments](https://www.instagram.com/developer/endpoints/comments/#get_media_comments)
* [media.comments.post](https://www.instagram.com/developer/endpoints/comments/#post_media_comments)
* [media.comments.delete](https://www.instagram.com/developer/endpoints/comments/#delete_media_comments)

### Likes
* [media.likes](https://www.instagram.com/developer/endpoints/likes/#get_media_likes)
* [likes.post](https://www.instagram.com/developer/endpoints/likes/#post_likes)
* [likes.delete](https://www.instagram.com/developer/endpoints/likes/#delete_likes)

### Tags
* [tags.get](https://www.instagram.com/developer/endpoints/tags/#get_tags)
* [tags.media.recent](https://www.instagram.com/developer/endpoints/tags/#get_tags_media_recent)
* [tags.search](https://www.instagram.com/developer/endpoints/tags/#get_tags_search)

### Locations
* [locations.get](https://www.instagram.com/developer/endpoints/locations/#get_locations)
* [locations.media.recent](https://www.instagram.com/developer/endpoints/locations/#get_locations_media_recent)
* [locations.search](https://www.instagram.com/developer/endpoints/locations/#get_locations_search)

## License

  [MIT](LICENSE)
