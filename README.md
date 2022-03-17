## metronome client
this is a metronome app designed with added functionality to aid musicians in their practice. The metronome updates every measure with a new random key which the musician is to use as reference to play the patterns they are practicing in the new key, in time. Within setting users can customize which keys are randomly chosen and save, load, edit and delete these presets. 

The design of this application takes into account basic music theory that will make adding more functionality feasible and straightforward. Tempo and rhythm settings are saved in state and used by the metronome to set the interval length. The number of intervals played and other settings are referenced by the metronome as parameters in order to update the display.


### Still to Come

In future updates the tone of the metronome click will match the displayed key and users will further be able to customize the pattern of the tones beat-by-beat by specifying the scale degrees to play. Audio playback will be enabled using the npm package Howl. Additionally, users will be able to specify the intervals between keys measure to measure. For example, a user may want to practice a major walking bassline 1-2-3-5 pattern (corresponding to 1-3-5-7 in scale degrees) in 4/4 time from the starting key C, and only move in major thirds and fifths. The metronome would be in the key of C major for the duration of the first measure, play C for the first beat, D for the second beat, E for the third beat, and G for the fourth beat. For the next measure the scale display may change to G (a perfect fifth from C) or E (a major third from C), in the prior case the first beat would have a tone of G, the next would have a tone of A, the next would have a tone of C, and the fourth would have a tone of D. The following measure may generate the scale C again (a major third from G) or D (a perfect fifth from G) and follow the same major pattern in scale degrees as the previous measures.

Also coming more accurate timing through use of self-correcting logic on a per-beat basis which will calculate the drift of the metronome every interval through comparing the actual time with the expected time given the beat start time and metronome tempo. Similar logic will be employed to give users added control over the 'swing' of the metronome's clicks beat-by-beat as a percentage of the interval's expected length (essentially, re-adding the drift in either a positive or negative direction to simulate a groove). 

### How to Use
In order to use the metronome, simply navigate to the client site and press the button at the bottom of the application that displays the current number of beats played. You will see the count set up beat by beat, and the count above will step up as well. The above number will reset when it reaches the length of the measure specified, and the Notes Display will update as well: you should play your practice pattern in reference to the note on the left (Current Note). The note to the right (Note Preview) will become the Current Note in the following measure. Use the Settings menu to customize which notes the Display will choose to update from.

### Links
Client Site: https://trevorlomba.github.io/metronome-client/
Client Repo: https://github.com/trevorlomba/metronome-client
Backend Site: https://calm-scrubland-98993.herokuapp.com/
Backend Repo: https://github.com/trevorlomba/metronome

### Technologies Used
ReactJS, Express, MongoDB, JavaScript, JQuery,  HTML, CSS

### User Stories:
User can sign up and sign in
User can start and stop metronome
User can adjust the tempo, time that metronome plays from main interface
User can select notes to be included in display from settings
User can save and load presets when signed in from settings

### Wireframes:
![Metronome](https://media.git.generalassemb.ly/user/38444/files/b41c0480-9a7c-11ec-9b82-10366dfa4edf)
![Metronome Menu(1)](https://media.git.generalassemb.ly/user/38444/files/1a088c00-9a7d-11ec-8cc9-1b4b956ba8a3)
![Metronome Sign Up(1)](https://media.git.generalassemb.ly/user/38444/files/1a088c00-9a7d-11ec-894e-b9aaf71e1654)
![Metronome Signed In(1)](https://media.git.generalassemb.ly/user/38444/files/1a088c00-9a7d-11ec-844f-6dd335cf1491)


### ERD:
![Metronome ERD(1)](https://media.git.generalassemb.ly/user/38444/files/71a6f780-9a7d-11ec-8ca9-bcf4d53ef870)


### API Routes and Methods
## API

Use this as the basis for your own API documentation. Add a new third-level
heading for your custom entities, and follow the pattern provided for the
built-in user authentication documentation.

Scripts are included in [`curl-scripts`](curl-scripts) to test built-in actions.
Add your own scripts to test your custom API.

### Authentication

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password/` | `users#changepw`  |
| DELETE | `/sign-out/`        | `users#signout`   |

#### POST /sign-up

Request:

```sh
curl --include --request POST http://localhost:4741/sign-up \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "an@example.email",
      "password": "an example password",
      "password_confirmation": "an example password"
    }
  }'
```

```sh
curl-scripts/sign-up.sh
```

Response:

```md
HTTP/1.1 201 Created
Content-Type: application/json; charset=utf-8

{
  "user": {
    "id": 1,
    "email": "an@example.email"
  }
}
```

#### POST /sign-in

Request:

```sh
curl --include --request POST http://localhost:4741/sign-in \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "an@example.email",
      "password": "an example password"
    }
  }'
```

```sh
curl-scripts/sign-in.sh
```

Response:

```md
HTTP/1.1 201 CREATED
Content-Type: application/json; charset=utf-8

{
  "user": {
    "id": 1,
    "email": "an@example.email",
    "token": "33ad6372f795694b333ec5f329ebeaaa"
  }
}
```

#### PATCH /change-password/

Request:

```sh
curl --include --request PATCH http://localhost:4741/change-password/ \
  --header "Authorization: Bearer $TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "an example password",
      "new": "super sekrit"
    }
  }'
```

```sh
TOKEN=33ad6372f795694b333ec5f329ebeaaa curl-scripts/change-password.sh
```

Response:

```md
HTTP/1.1 204 No Content
```

#### DELETE /sign-out/

Request:

```sh
curl --include --request DELETE http://localhost:4741/sign-out/ \
  --header "Authorization: Bearer $TOKEN"
```

```sh
TOKEN=33ad6372f795694b333ec5f329ebeaaa curl-scripts/sign-out.sh
```

Response:

```md
HTTP/1.1 204 No Content
```

### Presets

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| GET   | `/presets`             | `presets#index`    |
| GET   | `/presets/:id`             | `preset#show`    |
| CREATE   | `/presets`             | `preset#create`    |
| PATCH  | `/presets/:id` | `preset#update`  |
| DELETE | `/presets/id`        | `preset#delete`   |

#### GET /presets

Request:

```sh
curl "http://localhost:4741/presets" \
  --include \
  --request GET \
  --header "Authorization: Bearer $TOKEN"
```

#### GET /presets/:id

Request:

```sh
curl "http://localhost:4741/presets/ID" \
  --include \
  --request GET \
  --header "Authorization: Bearer $TOKEN"
```

#### CREATE /presets

Request: 

```sh
curl "http://localhost:4741/presets" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer $TOKEN" \
  --data '{
    "example": {
      "name": "name",
      "tempo": "tempo",
      "measures": "measures",
      "checks": "checks",
      "notes": "notes",
      "owner": "owner",
    }
  }'

```

###  UPDATE /presets/:id

Request:
```sh
curl "http://localhost:4741/presets/$ID" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer $TOKEN" \
--data '{
    "preset": {
      "key": "value"
    }
  }'
  ```

### DELETE /presets/:id

Request:

```sh
curl "http://localhost:4741/presets/$ID" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer Token"
```
