<template>
  <div class='container py-5'>
    <NavTabs />
    <h1 class='mt-5'>最新動態</h1>
    <div class='row'>
      <div class='col-md-6'>
        <h3>最新餐廳</h3>
        <NewestRestaurants :restaurants="restaurants" />
      </div>
      <div class='col-md-6'>
        <h3>最新評論</h3>
        <NewestComments :comments="comments" />
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'
import NewestRestaurants from '../components/NewestRestaurants.vue'
import NewestComments from '../components/NewestComments.vue'

/* eslint-disable */
const dummyData = {
  "restaurants": [
    {
      "id": 1,
      "name": "Remington Shields",
      "tel": "(664) 474-5747 x14320",
      "address": "9340 Cornell Field",
      "opening_hours": "08:00",
      "description": "Et beatae molestiae optio quaerat dolores autem.\nDolorem et iste.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=14.732919933876175",
      "viewCounts": 0,
      "createdAt": "2022-07-07T09:45:55.000Z",
      "updatedAt": "2022-07-07T09:45:55.000Z",
      "CategoryId": 2,
      "Category": {
        "id": 2,
        "name": "日本料理",
        "createdAt": "2022-07-07T09:45:55.000Z",
        "updatedAt": "2022-07-07T09:45:55.000Z"
      }
    },
    {
      "id": 2,
      "name": "Eldora Rodriguez Sr.",
      "tel": "188.929.7442 x776",
      "address": "26185 Cruickshank Mall",
      "opening_hours": "08:00",
      "description": "non eos aliquid",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=87.58085476753624",
      "viewCounts": 0,
      "createdAt": "2022-07-07T09:45:55.000Z",
      "updatedAt": "2022-07-07T09:45:55.000Z",
      "CategoryId": 4,
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-07-07T09:45:55.000Z",
        "updatedAt": "2022-07-07T09:45:55.000Z"
      }
    },
    {
      "id": 3,
      "name": "Augusta Luettgen",
      "tel": "447.715.8122",
      "address": "229 Chasity Keys",
      "opening_hours": "08:00",
      "description": "Eligendi quam consequuntur perferendis laborum.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=34.64276134119248",
      "viewCounts": 0,
      "createdAt": "2022-07-07T09:45:55.000Z",
      "updatedAt": "2022-07-07T09:45:55.000Z",
      "CategoryId": 2,
      "Category": {
        "id": 2,
        "name": "日本料理",
        "createdAt": "2022-07-07T09:45:55.000Z",
        "updatedAt": "2022-07-07T09:45:55.000Z"
      }
    },
    {
      "id": 4,
      "name": "Anya White",
      "tel": "(289) 467-2073 x09712",
      "address": "85452 Shanie River",
      "opening_hours": "08:00",
      "description": "Ducimus voluptatem accusantium aspernatur nihil.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=21.76748712838723",
      "viewCounts": 0,
      "createdAt": "2022-07-07T09:45:55.000Z",
      "updatedAt": "2022-07-07T09:45:55.000Z",
      "CategoryId": 4,
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-07-07T09:45:55.000Z",
        "updatedAt": "2022-07-07T09:45:55.000Z"
      }
    },
    {
      "id": 5,
      "name": "Dennis Roob",
      "tel": "237.534.9979 x3430",
      "address": "40675 Romaguera Isle",
      "opening_hours": "08:00",
      "description": "laborum quaerat nesciunt",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=36.01734362458031",
      "viewCounts": 0,
      "createdAt": "2022-07-07T09:45:55.000Z",
      "updatedAt": "2022-07-07T09:45:55.000Z",
      "CategoryId": 1,
      "Category": {
        "id": 1,
        "name": "中式料理",
        "createdAt": "2022-07-07T09:45:55.000Z",
        "updatedAt": "2022-07-07T09:45:55.000Z"
      }
    },
    {
      "id": 6,
      "name": "Marshall Crona",
      "tel": "758-664-6132",
      "address": "301 Ella Forge",
      "opening_hours": "08:00",
      "description": "Reiciendis cumque laborum qui. Quisquam non tempore ut. Ab esse suscipit. Omnis dolorum dolore dolor et rerum.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=59.37747828093032",
      "viewCounts": 0,
      "createdAt": "2022-07-07T09:45:55.000Z",
      "updatedAt": "2022-07-07T09:45:55.000Z",
      "CategoryId": 1,
      "Category": {
        "id": 1,
        "name": "中式料理",
        "createdAt": "2022-07-07T09:45:55.000Z",
        "updatedAt": "2022-07-07T09:45:55.000Z"
      }
    },
    {
      "id": 7,
      "name": "Ernesto Little",
      "tel": "854-517-5215",
      "address": "889 Laney Manors",
      "opening_hours": "08:00",
      "description": "explicabo",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=34.62872218497235",
      "viewCounts": 0,
      "createdAt": "2022-07-07T09:45:55.000Z",
      "updatedAt": "2022-07-07T09:45:55.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-07-07T09:45:55.000Z",
        "updatedAt": "2022-07-07T09:45:55.000Z"
      }
    },
    {
      "id": 8,
      "name": "Zoie Mertz IV",
      "tel": "1-060-880-1600",
      "address": "850 Schumm Row",
      "opening_hours": "08:00",
      "description": "Quis facilis quo quos facilis commodi minima maiores est tempore. Consequatur explicabo quae temporibus excepturi quaerat dolor voluptatem. Molestiae temporibus expedita aliquam facere accusantium. Quam aut voluptates veniam iusto sed quas quam dolorum doloremque. Voluptatem blanditiis aliquid ipsa architecto vel earum explicabo perspiciatis.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=17.996061571087573",
      "viewCounts": 0,
      "createdAt": "2022-07-07T09:45:55.000Z",
      "updatedAt": "2022-07-07T09:45:55.000Z",
      "CategoryId": 5,
      "Category": {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2022-07-07T09:45:55.000Z",
        "updatedAt": "2022-07-07T09:45:55.000Z"
      }
    },
    {
      "id": 9,
      "name": "Martina VonRueden DDS",
      "tel": "1-850-334-4090",
      "address": "50160 Eva Terrace",
      "opening_hours": "08:00",
      "description": "Sit dolor impedit ut.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=20.25102349309713",
      "viewCounts": 0,
      "createdAt": "2022-07-07T09:45:55.000Z",
      "updatedAt": "2022-07-07T09:45:55.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-07-07T09:45:55.000Z",
        "updatedAt": "2022-07-07T09:45:55.000Z"
      }
    },
    {
      "id": 10,
      "name": "Presley Hermann",
      "tel": "972.063.6173 x9915",
      "address": "940 Collins Parkways",
      "opening_hours": "08:00",
      "description": "ratione",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=39.852711573668365",
      "viewCounts": 0,
      "createdAt": "2022-07-07T09:45:55.000Z",
      "updatedAt": "2022-07-07T09:45:55.000Z",
      "CategoryId": 5,
      "Category": {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2022-07-07T09:45:55.000Z",
        "updatedAt": "2022-07-07T09:45:55.000Z"
      }
    }
  ],
  "comments": [
    {
      "id": 1,
      "text": "Architecto molestiae illum.",
      "UserId": 2,
      "RestaurantId": 1,
      "createdAt": "2022-07-07T09:45:55.000Z",
      "updatedAt": "2022-07-07T09:45:55.000Z",
      "User": {
        "id": 2,
        "name": "user1",
        "email": "user1@example.com",
        "password": "$2a$10$SJp6xLGGUfwp4xZyow1x9eZMPicZcccBu7SkC5syFab6J/1HQ7UXS",
        "isAdmin": false,
        "image": null,
        "createdAt": "2022-07-07T09:45:55.000Z",
        "updatedAt": "2022-07-07T09:45:55.000Z"
      },
      "Restaurant": {
        "id": 1,
        "name": "Remington Shields",
        "tel": "(664) 474-5747 x14320",
        "address": "9340 Cornell Field",
        "opening_hours": "08:00",
        "description": "Et beatae molestiae optio quaerat dolores autem.\nDolorem et iste.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=14.732919933876175",
        "viewCounts": 0,
        "createdAt": "2022-07-07T09:45:55.000Z",
        "updatedAt": "2022-07-07T09:45:55.000Z",
        "CategoryId": 2
      }
    },
    {
      "id": 2,
      "text": "Est qui amet impedit odio vitae dolores.",
      "UserId": 3,
      "RestaurantId": 2,
      "createdAt": "2022-07-07T09:45:55.000Z",
      "updatedAt": "2022-07-07T09:45:55.000Z",
      "User": {
        "id": 3,
        "name": "user2",
        "email": "user2@example.com",
        "password": "$2a$10$AO.O77pnpFTWGbvBvEK/OOBaAxA93X9AlBk7NZOYyck0IRcooLudm",
        "isAdmin": false,
        "image": null,
        "createdAt": "2022-07-07T09:45:55.000Z",
        "updatedAt": "2022-07-07T09:45:55.000Z"
      },
      "Restaurant": {
        "id": 2,
        "name": "Eldora Rodriguez Sr.",
        "tel": "188.929.7442 x776",
        "address": "26185 Cruickshank Mall",
        "opening_hours": "08:00",
        "description": "non eos aliquid",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=87.58085476753624",
        "viewCounts": 0,
        "createdAt": "2022-07-07T09:45:55.000Z",
        "updatedAt": "2022-07-07T09:45:55.000Z",
        "CategoryId": 4
      }
    },
    {
      "id": 3,
      "text": "Dolorem est et doloremque.",
      "UserId": 2,
      "RestaurantId": 3,
      "createdAt": "2022-07-07T09:45:55.000Z",
      "updatedAt": "2022-07-07T09:45:55.000Z",
      "User": {
        "id": 2,
        "name": "user1",
        "email": "user1@example.com",
        "password": "$2a$10$SJp6xLGGUfwp4xZyow1x9eZMPicZcccBu7SkC5syFab6J/1HQ7UXS",
        "isAdmin": false,
        "image": null,
        "createdAt": "2022-07-07T09:45:55.000Z",
        "updatedAt": "2022-07-07T09:45:55.000Z"
      },
      "Restaurant": {
        "id": 3,
        "name": "Augusta Luettgen",
        "tel": "447.715.8122",
        "address": "229 Chasity Keys",
        "opening_hours": "08:00",
        "description": "Eligendi quam consequuntur perferendis laborum.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=34.64276134119248",
        "viewCounts": 0,
        "createdAt": "2022-07-07T09:45:55.000Z",
        "updatedAt": "2022-07-07T09:45:55.000Z",
        "CategoryId": 2
      }
    },
    {
      "id": 4,
      "text": "Nihil eum sed dignissimos.",
      "UserId": 3,
      "RestaurantId": 4,
      "createdAt": "2022-07-07T09:45:55.000Z",
      "updatedAt": "2022-07-07T09:45:55.000Z",
      "User": {
        "id": 3,
        "name": "user2",
        "email": "user2@example.com",
        "password": "$2a$10$AO.O77pnpFTWGbvBvEK/OOBaAxA93X9AlBk7NZOYyck0IRcooLudm",
        "isAdmin": false,
        "image": null,
        "createdAt": "2022-07-07T09:45:55.000Z",
        "updatedAt": "2022-07-07T09:45:55.000Z"
      },
      "Restaurant": {
        "id": 4,
        "name": "Anya White",
        "tel": "(289) 467-2073 x09712",
        "address": "85452 Shanie River",
        "opening_hours": "08:00",
        "description": "Ducimus voluptatem accusantium aspernatur nihil.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=21.76748712838723",
        "viewCounts": 0,
        "createdAt": "2022-07-07T09:45:55.000Z",
        "updatedAt": "2022-07-07T09:45:55.000Z",
        "CategoryId": 4
      }
    },
    {
      "id": 5,
      "text": "Pariatur quia voluptatem.",
      "UserId": 3,
      "RestaurantId": 5,
      "createdAt": "2022-07-07T09:45:55.000Z",
      "updatedAt": "2022-07-07T09:45:55.000Z",
      "User": {
        "id": 3,
        "name": "user2",
        "email": "user2@example.com",
        "password": "$2a$10$AO.O77pnpFTWGbvBvEK/OOBaAxA93X9AlBk7NZOYyck0IRcooLudm",
        "isAdmin": false,
        "image": null,
        "createdAt": "2022-07-07T09:45:55.000Z",
        "updatedAt": "2022-07-07T09:45:55.000Z"
      },
      "Restaurant": {
        "id": 5,
        "name": "Dennis Roob",
        "tel": "237.534.9979 x3430",
        "address": "40675 Romaguera Isle",
        "opening_hours": "08:00",
        "description": "laborum quaerat nesciunt",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=36.01734362458031",
        "viewCounts": 0,
        "createdAt": "2022-07-07T09:45:55.000Z",
        "updatedAt": "2022-07-07T09:45:55.000Z",
        "CategoryId": 1
      }
    },
    {
      "id": 6,
      "text": "Velit est sequi.",
      "UserId": 3,
      "RestaurantId": 6,
      "createdAt": "2022-07-07T09:45:55.000Z",
      "updatedAt": "2022-07-07T09:45:55.000Z",
      "User": {
        "id": 3,
        "name": "user2",
        "email": "user2@example.com",
        "password": "$2a$10$AO.O77pnpFTWGbvBvEK/OOBaAxA93X9AlBk7NZOYyck0IRcooLudm",
        "isAdmin": false,
        "image": null,
        "createdAt": "2022-07-07T09:45:55.000Z",
        "updatedAt": "2022-07-07T09:45:55.000Z"
      },
      "Restaurant": {
        "id": 6,
        "name": "Marshall Crona",
        "tel": "758-664-6132",
        "address": "301 Ella Forge",
        "opening_hours": "08:00",
        "description": "Reiciendis cumque laborum qui. Quisquam non tempore ut. Ab esse suscipit. Omnis dolorum dolore dolor et rerum.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=59.37747828093032",
        "viewCounts": 0,
        "createdAt": "2022-07-07T09:45:55.000Z",
        "updatedAt": "2022-07-07T09:45:55.000Z",
        "CategoryId": 1
      }
    },
    {
      "id": 7,
      "text": "Odit voluptatem voluptate quibusdam.",
      "UserId": 3,
      "RestaurantId": 7,
      "createdAt": "2022-07-07T09:45:55.000Z",
      "updatedAt": "2022-07-07T09:45:55.000Z",
      "User": {
        "id": 3,
        "name": "user2",
        "email": "user2@example.com",
        "password": "$2a$10$AO.O77pnpFTWGbvBvEK/OOBaAxA93X9AlBk7NZOYyck0IRcooLudm",
        "isAdmin": false,
        "image": null,
        "createdAt": "2022-07-07T09:45:55.000Z",
        "updatedAt": "2022-07-07T09:45:55.000Z"
      },
      "Restaurant": {
        "id": 7,
        "name": "Ernesto Little",
        "tel": "854-517-5215",
        "address": "889 Laney Manors",
        "opening_hours": "08:00",
        "description": "explicabo",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=34.62872218497235",
        "viewCounts": 0,
        "createdAt": "2022-07-07T09:45:55.000Z",
        "updatedAt": "2022-07-07T09:45:55.000Z",
        "CategoryId": 3
      }
    },
    {
      "id": 8,
      "text": "Sit minima rerum quia consequuntur.",
      "UserId": 1,
      "RestaurantId": 8,
      "createdAt": "2022-07-07T09:45:55.000Z",
      "updatedAt": "2022-07-07T09:45:55.000Z",
      "User": {
        "id": 1,
        "name": "root",
        "email": "root@example.com",
        "password": "$2a$10$RV9wcGC0JZip8.Hc4GGXYujrS2bcVVHW/094Blsd0tyAnizqc7EhS",
        "isAdmin": true,
        "image": null,
        "createdAt": "2022-07-07T09:45:55.000Z",
        "updatedAt": "2022-07-07T09:45:55.000Z"
      },
      "Restaurant": {
        "id": 8,
        "name": "Zoie Mertz IV",
        "tel": "1-060-880-1600",
        "address": "850 Schumm Row",
        "opening_hours": "08:00",
        "description": "Quis facilis quo quos facilis commodi minima maiores est tempore. Consequatur explicabo quae temporibus excepturi quaerat dolor voluptatem. Molestiae temporibus expedita aliquam facere accusantium. Quam aut voluptates veniam iusto sed quas quam dolorum doloremque. Voluptatem blanditiis aliquid ipsa architecto vel earum explicabo perspiciatis.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=17.996061571087573",
        "viewCounts": 0,
        "createdAt": "2022-07-07T09:45:55.000Z",
        "updatedAt": "2022-07-07T09:45:55.000Z",
        "CategoryId": 5
      }
    },
    {
      "id": 9,
      "text": "Esse excepturi facere eaque dolor minus unde.",
      "UserId": 2,
      "RestaurantId": 9,
      "createdAt": "2022-07-07T09:45:55.000Z",
      "updatedAt": "2022-07-07T09:45:55.000Z",
      "User": {
        "id": 2,
        "name": "user1",
        "email": "user1@example.com",
        "password": "$2a$10$SJp6xLGGUfwp4xZyow1x9eZMPicZcccBu7SkC5syFab6J/1HQ7UXS",
        "isAdmin": false,
        "image": null,
        "createdAt": "2022-07-07T09:45:55.000Z",
        "updatedAt": "2022-07-07T09:45:55.000Z"
      },
      "Restaurant": {
        "id": 9,
        "name": "Martina VonRueden DDS",
        "tel": "1-850-334-4090",
        "address": "50160 Eva Terrace",
        "opening_hours": "08:00",
        "description": "Sit dolor impedit ut.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=20.25102349309713",
        "viewCounts": 0,
        "createdAt": "2022-07-07T09:45:55.000Z",
        "updatedAt": "2022-07-07T09:45:55.000Z",
        "CategoryId": 3
      }
    },
    {
      "id": 10,
      "text": "Omnis sequi quia.",
      "UserId": 2,
      "RestaurantId": 10,
      "createdAt": "2022-07-07T09:45:55.000Z",
      "updatedAt": "2022-07-07T09:45:55.000Z",
      "User": {
        "id": 2,
        "name": "user1",
        "email": "user1@example.com",
        "password": "$2a$10$SJp6xLGGUfwp4xZyow1x9eZMPicZcccBu7SkC5syFab6J/1HQ7UXS",
        "isAdmin": false,
        "image": null,
        "createdAt": "2022-07-07T09:45:55.000Z",
        "updatedAt": "2022-07-07T09:45:55.000Z"
      },
      "Restaurant": {
        "id": 10,
        "name": "Presley Hermann",
        "tel": "972.063.6173 x9915",
        "address": "940 Collins Parkways",
        "opening_hours": "08:00",
        "description": "ratione",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=39.852711573668365",
        "viewCounts": 0,
        "createdAt": "2022-07-07T09:45:55.000Z",
        "updatedAt": "2022-07-07T09:45:55.000Z",
        "CategoryId": 5
      }
    }
  ]
}

export default {
  data() {
    return {
      restaurants: [],
      comments: []
    }
  },
  created() {
    this.fetchFeeds()
  },
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments
  },
  methods: {
    fetchFeeds() {
      this.restaurants = dummyData.restaurants
      this.comments = dummyData.comments
    }
  }
}
</script>
