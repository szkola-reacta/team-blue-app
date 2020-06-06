# Blue Shopper

## What is it?

It's a simple demo app, which allows user to list categories, categories' offers and offers itself.

## Technology Stack

- React

- Reach Router

- MirageJS (for mocking data)

- Faker (for generating random data)

## API URLs

`GET /api/categories`

    [{
	  name:  "Motoryzacja",
	  id:  "1"
	}, {
	  name:  "Nieruchomości",
	  id:  "2"
	}, {
	  name:  "Praca",
	  id:  "3"
	}]

`GET /api/categories/{category_id}`

  {
    name: "Nieruchomości",
    id: 2
  }

`GET /api/categories/{category_id}/offers`

    [{
	  added_at:  "18/05/2020",
	  city:  "Gdańsk",
	  description:  "Quod quia minus et ipsum cum. Dolores quia omnis.",
	  id:  "21",
	  location:  {
	    latitude:  "-39.0610",
	    longitude:  "113.9959
	  },
	  name:  "Unbranded Concrete Cheese",
	  price:  "PLN 7061.00",
	  seller:  {
	    phone:  "25-310-58-29",
	    name:  "Rudolf Drzewiecki",
	    id:  "2"
	  },
	  thumbnail_url:  "https://picsum.photos/id/200/200/300"
	}]

`GET /api/offers/{offer_id}`

    {
	  added_at:  "18/05/2020",
	  city:  "Gdańsk",
	  description:  "Quod quia minus et ipsum cum. Dolores quia omnis.",
	  id:  "21",
	  location:  {
	    latitude:  "-39.0610",
	    longitude:  "113.9959
	  },
	  name:  "Unbranded Concrete Cheese",
	  price:  "PLN 7061.00",
	  seller:  {
	    phone:  "25-310-58-29",
	    name:  "Rudolf Drzewiecki",
	    id:  "2"
	  },
	  thumbnail_url:  "https://picsum.photos/id/200/200/300"
	}

### Sources

The project uses:
[react-bootstrap](https://github.com/react-bootstrap/react-bootstrap)