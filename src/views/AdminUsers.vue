<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Email
          </th>
          <th scope="col">
            Role
          </th>
          <th scope="col" width="140">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">
            {{ user.id }}
          </th>
          <td>{{ user.email }}</td>
          <td>{{ user.isAdmin ? 'Admin' : 'User' }}</td>
          <td>
            <button type="button" class="btn btn-link" v-show="!user.isAdmin"
              @click.prevent.stop="toggleUserRole(user.id)">
              set as admin
            </button>
            <button type="button" class="btn btn-link" v-show="user.isAdmin" v-if="currentUser.id !== user.id"
              @click.prevent.stop="toggleUserRole(user.id)">
              set as user
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from '../components/AdminNav.vue'

const dummyUsers = {
  users: [
    {
      id: 1,
      name: 'root',
      email: 'root@example.com',
      password: '$2a$10$RV9wcGC0JZip8.Hc4GGXYujrS2bcVVHW/094Blsd0tyAnizqc7EhS',
      isAdmin: true,
      image: null,
      createdAt: '2022-07-07T09:45:55.000Z',
      updatedAt: '2022-07-07T09:45:55.000Z'
    },
    {
      id: 2,
      name: 'user1',
      email: 'user1@example.com',
      password: '$2a$10$SJp6xLGGUfwp4xZyow1x9eZMPicZcccBu7SkC5syFab6J/1HQ7UXS',
      isAdmin: false,
      image: null,
      createdAt: '2022-07-07T09:45:55.000Z',
      updatedAt: '2022-07-07T09:45:55.000Z'
    },
    {
      id: 3,
      name: 'user2',
      email: 'user2@example.com',
      password: '$2a$10$AO.O77pnpFTWGbvBvEK/OOBaAxA93X9AlBk7NZOYyck0IRcooLudm',
      isAdmin: false,
      image: null,
      createdAt: '2022-07-07T09:45:55.000Z',
      updatedAt: '2022-07-07T09:45:55.000Z'
    }
  ]
}

const dummyCurrentUser = {
  profile: {
    id: 1,
    name: 'root',
    email: 'root@example.com',
    password: '$2a$10$RV9wcGC0JZip8.Hc4GGXYujrS2bcVVHW/094Blsd0tyAnizqc7EhS',
    isAdmin: true,
    image: null,
    createdAt: '2022-07-07T09:45:55.000Z',
    updatedAt: '2022-07-07T09:45:55.000Z',
    Comments: [
      {
        id: 8,
        text: 'Sit minima rerum quia consequuntur.',
        UserId: 1,
        RestaurantId: 8,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 8,
          name: 'Zoie Mertz IV',
          tel: '1-060-880-1600',
          address: '850 Schumm Row',
          opening_hours: '08:00',
          description: 'Quis facilis quo quos facilis commodi minima maiores est tempore. Consequatur explicabo quae temporibus excepturi quaerat dolor voluptatem. Molestiae temporibus expedita aliquam facere accusantium. Quam aut voluptates veniam iusto sed quas quam dolorum doloremque. Voluptatem blanditiis aliquid ipsa architecto vel earum explicabo perspiciatis.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=17.996061571087573',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 5
        }
      },
      {
        id: 12,
        text: 'Sed ea et quo quisquam atque quae inventore qui.',
        UserId: 1,
        RestaurantId: 12,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 12,
          name: 'Kailyn Kirlin',
          tel: '(056) 476-4413',
          address: '772 Bailey Lane',
          opening_hours: '08:00',
          description: 'Dolorum ipsam architecto consequatur et. Possimus saepe eveniet eos assumenda dolor inventore. Et reprehenderit quis eius ut explicabo vel dolorem. Est rem hic vel alias laudantium.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=31.35268322207887',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 2
        }
      },
      {
        id: 13,
        text: 'Voluptatem odit corrupti minima omnis quo voluptatem incidunt.',
        UserId: 1,
        RestaurantId: 13,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 13,
          name: 'Michaela Gleichner',
          tel: '1-306-234-7124',
          address: '30957 Marilou Summit',
          opening_hours: '08:00',
          description: 'Est aliquam sed dolore blanditiis quibusdam.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=39.14024870763973',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 3
        }
      },
      {
        id: 15,
        text: 'Itaque animi aut quo minima possimus a expedita.',
        UserId: 1,
        RestaurantId: 15,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 15,
          name: 'Hardy Hauck',
          tel: '1-583-976-7718',
          address: '008 Pfannerstill Canyon',
          opening_hours: '08:00',
          description: 'Voluptates rerum voluptatem.\nAutem est perspiciatis pariatur iste earum ea cupiditate unde.\nNon neque aspernatur harum consectetur vel.\nEt ut voluptatem accusamus eius ratione.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=93.80755048550475',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 3
        }
      },
      {
        id: 17,
        text: 'Saepe voluptates modi sapiente sunt natus.',
        UserId: 1,
        RestaurantId: 17,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 17,
          name: 'Cristian Carroll',
          tel: '817-574-7398',
          address: '361 Sporer Turnpike',
          opening_hours: '08:00',
          description: 'Repellendus aliquid harum et voluptates rerum dolores ut totam temporibus. Tenetur quis esse reprehenderit corrupti nihil aliquid id minima dolore. Dolorem vitae nulla velit corrupti porro quidem mollitia.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=68.96344207792662',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 5
        }
      },
      {
        id: 32,
        text: 'Ea repellat aut qui reiciendis animi non deserunt est.',
        UserId: 1,
        RestaurantId: 32,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 32,
          name: 'Abagail Cole',
          tel: '827.464.0303 x652',
          address: '61629 Baumbach Knoll',
          opening_hours: '08:00',
          description: 'Ut eveniet velit sint id odio facere voluptates architecto.\nAspernatur quia possimus nostrum.\nMagni mollitia et quod quibusdam eos velit sint.\nQuibusdam aut autem.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=9.606473592754238',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 3
        }
      },
      {
        id: 34,
        text: 'Sunt ex corrupti veniam.',
        UserId: 1,
        RestaurantId: 34,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 34,
          name: 'Andres Bernhard',
          tel: '194-659-7703 x9304',
          address: '67018 Bradtke Islands',
          opening_hours: '08:00',
          description: 'Qui qui ea dolorum rerum non distinctio alias. Cumque nemo qui nam non quidem voluptates est. Facilis laboriosam sapiente. Dicta blanditiis provident porro consequatur modi voluptas necessitatibus occaecati. Sapiente ut soluta consequatur voluptate exercitationem delectus. Neque ratione incidunt ex.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=49.11792798020591',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 4
        }
      },
      {
        id: 35,
        text: 'Dolorum ex perspiciatis praesentium aut non est labore.',
        UserId: 1,
        RestaurantId: 35,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 35,
          name: 'Ardith Simonis',
          tel: '1-068-465-5658',
          address: '7931 Oran Heights',
          opening_hours: '08:00',
          description: 'Et illo aliquam quia quo consequatur voluptatem. Perferendis vero consectetur labore voluptas nostrum voluptas nobis facere. Ut similique expedita aut recusandae deleniti omnis.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=0.4413339625530366',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 5
        }
      },
      {
        id: 36,
        text: 'Et dolorum est.',
        UserId: 1,
        RestaurantId: 36,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 36,
          name: 'Dora Leuschke',
          tel: '119-827-0809 x416',
          address: '15051 Pacocha Inlet',
          opening_hours: '08:00',
          description: 'Eum reiciendis cum.\nDoloribus excepturi quia alias cupiditate rerum ipsam non commodi provident.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=19.57924349843969',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 1
        }
      },
      {
        id: 41,
        text: 'Velit quo et consequuntur qui praesentium voluptatem neque vero architecto.',
        UserId: 1,
        RestaurantId: 41,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 41,
          name: 'Lilian Harris DVM',
          tel: '(751) 949-5503 x5298',
          address: '0650 Lebsack Burgs',
          opening_hours: '08:00',
          description: 'Est qui quasi molestiae exercitationem.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=30.37709554547172',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 2
        }
      },
      {
        id: 44,
        text: 'Inventore deleniti et facere nemo libero beatae.',
        UserId: 1,
        RestaurantId: 44,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 44,
          name: 'Everette Borer III',
          tel: '461.696.7708 x82592',
          address: '33016 Gorczany Shoals',
          opening_hours: '08:00',
          description: 'Optio in et architecto est. Quia explicabo nemo veniam officia dolor enim asperiores. Temporibus quia ratione quasi mollitia porro. Amet amet ad est voluptas voluptas eligendi consequatur ut et.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=29.1824875633532',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 4
        }
      },
      {
        id: 45,
        text: 'Ea magni officiis sunt beatae.',
        UserId: 1,
        RestaurantId: 45,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 45,
          name: "Carley O'Keefe",
          tel: '1-424-306-3247',
          address: '914 Grant Corners',
          opening_hours: '08:00',
          description: 'Eligendi est numquam possimus in est et sunt.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=11.017929450680718',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 4
        }
      },
      {
        id: 46,
        text: 'Similique aspernatur praesentium corporis.',
        UserId: 1,
        RestaurantId: 46,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 46,
          name: 'Reginald Bartoletti',
          tel: '(217) 067-7629 x511',
          address: '0824 Gleason Mountains',
          opening_hours: '08:00',
          description: 'laboriosam',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=96.84271017569459',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 4
        }
      },
      {
        id: 47,
        text: 'Unde dolor recusandae.',
        UserId: 1,
        RestaurantId: 47,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 47,
          name: 'Emmie Reichel',
          tel: '694-324-7471 x6975',
          address: '300 Balistreri Camp',
          opening_hours: '08:00',
          description: 'et',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=69.65442308198624',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 5
        }
      },
      {
        id: 50,
        text: 'Quas autem aut nam in hic.',
        UserId: 1,
        RestaurantId: 50,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 50,
          name: 'Jovany Tromp',
          tel: '(628) 103-8357 x131',
          address: '404 Jessica Manor',
          opening_hours: '08:00',
          description: 'Voluptas ab illo perspiciatis aut eos sint modi eum quos. Dolores enim corrupti labore nam. Et enim minima temporibus. Occaecati ipsam ut. Aspernatur voluptates sunt sunt quaerat minus porro dolore aspernatur.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=12.671019539178797',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 2
        }
      },
      {
        id: 53,
        text: 'Eum laudantium earum corrupti.',
        UserId: 1,
        RestaurantId: 3,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 3,
          name: 'Augusta Luettgen',
          tel: '447.715.8122',
          address: '229 Chasity Keys',
          opening_hours: '08:00',
          description: 'Eligendi quam consequuntur perferendis laborum.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=34.64276134119248',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 2
        }
      },
      {
        id: 54,
        text: 'Nisi iusto fugiat suscipit sapiente perspiciatis.',
        UserId: 1,
        RestaurantId: 4,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 4,
          name: 'Anya White',
          tel: '(289) 467-2073 x09712',
          address: '85452 Shanie River',
          opening_hours: '08:00',
          description: 'Ducimus voluptatem accusantium aspernatur nihil.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=21.76748712838723',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 4
        }
      },
      {
        id: 57,
        text: 'Cupiditate odio occaecati.',
        UserId: 1,
        RestaurantId: 7,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 7,
          name: 'Ernesto Little',
          tel: '854-517-5215',
          address: '889 Laney Manors',
          opening_hours: '08:00',
          description: 'explicabo',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=34.62872218497235',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 3
        }
      },
      {
        id: 59,
        text: 'Ut sint quisquam ullam hic autem deleniti voluptas sint aut.',
        UserId: 1,
        RestaurantId: 9,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 9,
          name: 'Martina VonRueden DDS',
          tel: '1-850-334-4090',
          address: '50160 Eva Terrace',
          opening_hours: '08:00',
          description: 'Sit dolor impedit ut.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=20.25102349309713',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 3
        }
      },
      {
        id: 60,
        text: 'Qui ipsam totam enim minima voluptate similique ut dolor enim.',
        UserId: 1,
        RestaurantId: 10,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 10,
          name: 'Presley Hermann',
          tel: '972.063.6173 x9915',
          address: '940 Collins Parkways',
          opening_hours: '08:00',
          description: 'ratione',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=39.852711573668365',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 5
        }
      },
      {
        id: 61,
        text: 'Ea molestiae ab aut.',
        UserId: 1,
        RestaurantId: 11,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 11,
          name: 'Albertha Vandervort',
          tel: '(819) 138-5131 x58293',
          address: '970 McKenzie Plains',
          opening_hours: '08:00',
          description: 'Sit nihil qui dolor earum ut voluptatem veniam et quia.\nAliquam accusamus nihil in consequatur praesentium.\nRerum fugiat quia quis.\nSimilique quaerat sed nam fugiat expedita est.\nExplicabo assumenda nam vel doloremque atque sed excepturi ut.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=49.04078192232999',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 4
        }
      },
      {
        id: 65,
        text: 'Aut eligendi quam omnis repellat libero quos modi consequatur repellendus.',
        UserId: 1,
        RestaurantId: 15,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 15,
          name: 'Hardy Hauck',
          tel: '1-583-976-7718',
          address: '008 Pfannerstill Canyon',
          opening_hours: '08:00',
          description: 'Voluptates rerum voluptatem.\nAutem est perspiciatis pariatur iste earum ea cupiditate unde.\nNon neque aspernatur harum consectetur vel.\nEt ut voluptatem accusamus eius ratione.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=93.80755048550475',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 3
        }
      },
      {
        id: 66,
        text: 'Placeat eum vero ullam mollitia rem minima eligendi accusantium deserunt.',
        UserId: 1,
        RestaurantId: 16,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 16,
          name: 'Blaze Fay',
          tel: '1-545-943-2349 x15822',
          address: '52475 Goldner Valleys',
          opening_hours: '08:00',
          description: 'Illum magnam adipisci voluptatum repudiandae.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=71.99217983965373',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 5
        }
      },
      {
        id: 68,
        text: 'Eos commodi non numquam dolores tempora quam.',
        UserId: 1,
        RestaurantId: 18,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 18,
          name: 'Aylin Heller',
          tel: '(551) 690-9556',
          address: '898 Windler Causeway',
          opening_hours: '08:00',
          description: 'Blanditiis dicta blanditiis nemo dolorem odit sed.\nHic nostrum doloribus voluptatum dicta consequatur cupiditate laborum alias dolor.\nIusto nisi illo fuga.\nNon ad nihil.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=89.98515306391901',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 3
        }
      },
      {
        id: 69,
        text: 'Error qui sed tenetur omnis.',
        UserId: 1,
        RestaurantId: 19,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 19,
          name: 'Mrs. Rachel Hamill',
          tel: '1-535-238-4821',
          address: '091 Schinner Alley',
          opening_hours: '08:00',
          description: 'Deserunt dignissimos veniam eligendi autem voluptas eligendi. Consequatur fugit rerum neque sed doloribus. Molestiae voluptatibus eaque eum unde labore aut voluptatibus optio. Quia ea praesentium iste nesciunt qui sunt. Vitae sint quia nulla quo nobis. Consequatur accusantium a doloribus.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=34.4035175396463',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 5
        }
      },
      {
        id: 71,
        text: 'Est aut nihil quos.',
        UserId: 1,
        RestaurantId: 21,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 21,
          name: 'Carrie Macejkovic',
          tel: '501.620.4111',
          address: '466 Windler Canyon',
          opening_hours: '08:00',
          description: 'Voluptas assumenda voluptatem rerum. Et et dolorum inventore optio. Libero voluptas odit. Fugit a qui odio dolores porro qui consequatur quod et. Repudiandae soluta molestias et fugiat quo. Assumenda perspiciatis cupiditate et tenetur.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=56.032459831016055',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 1
        }
      },
      {
        id: 77,
        text: 'Corporis incidunt deleniti consequatur.',
        UserId: 1,
        RestaurantId: 27,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 27,
          name: 'Virgie Walker',
          tel: '(234) 867-3309 x146',
          address: '5078 Emiliano Stravenue',
          opening_hours: '08:00',
          description: 'ipsam',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=55.128870310578804',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 5
        }
      },
      {
        id: 80,
        text: 'Officiis nesciunt distinctio culpa est eum.',
        UserId: 1,
        RestaurantId: 30,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 30,
          name: 'Mabelle Weimann',
          tel: '306-944-3079 x022',
          address: '5628 Neva Prairie',
          opening_hours: '08:00',
          description: 'Eaque odio qui consectetur ut laborum maiores quia incidunt ratione. Tempore nostrum saepe alias sed aperiam magni ut dolores adipisci.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=67.82895867310476',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 3
        }
      },
      {
        id: 81,
        text: 'Sed non laboriosam et rerum ut facilis est blanditiis officiis.',
        UserId: 1,
        RestaurantId: 31,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 31,
          name: 'Virginia Bashirian',
          tel: '198-830-1643',
          address: '89584 Bradley Fort',
          opening_hours: '08:00',
          description: 'Aut laudantium architecto odio similique non voluptatem et. Rerum beatae laborum ut. Quia quaerat qui unde et ea est omnis. Cum impedit et. Officiis quisquam quasi.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=96.86179372249362',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 3
        }
      },
      {
        id: 82,
        text: 'Delectus commodi est deleniti labore voluptatem illo id harum vero.',
        UserId: 1,
        RestaurantId: 32,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 32,
          name: 'Abagail Cole',
          tel: '827.464.0303 x652',
          address: '61629 Baumbach Knoll',
          opening_hours: '08:00',
          description: 'Ut eveniet velit sint id odio facere voluptates architecto.\nAspernatur quia possimus nostrum.\nMagni mollitia et quod quibusdam eos velit sint.\nQuibusdam aut autem.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=9.606473592754238',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 3
        }
      },
      {
        id: 85,
        text: 'Deserunt unde qui.',
        UserId: 1,
        RestaurantId: 35,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 35,
          name: 'Ardith Simonis',
          tel: '1-068-465-5658',
          address: '7931 Oran Heights',
          opening_hours: '08:00',
          description: 'Et illo aliquam quia quo consequatur voluptatem. Perferendis vero consectetur labore voluptas nostrum voluptas nobis facere. Ut similique expedita aut recusandae deleniti omnis.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=0.4413339625530366',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 5
        }
      },
      {
        id: 88,
        text: 'Possimus doloremque culpa eligendi eos nam eum expedita rem.',
        UserId: 1,
        RestaurantId: 38,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 38,
          name: 'Michel Mohr',
          tel: '575-333-7187 x68843',
          address: '61150 Grant Lodge',
          opening_hours: '08:00',
          description: 'cupiditate',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=90.82980545018846',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 3
        }
      },
      {
        id: 91,
        text: 'Voluptates nesciunt ducimus ex dignissimos esse recusandae rerum laboriosam error.',
        UserId: 1,
        RestaurantId: 41,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 41,
          name: 'Lilian Harris DVM',
          tel: '(751) 949-5503 x5298',
          address: '0650 Lebsack Burgs',
          opening_hours: '08:00',
          description: 'Est qui quasi molestiae exercitationem.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=30.37709554547172',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 2
        }
      },
      {
        id: 94,
        text: 'Vel et consequatur fugit optio sapiente est nihil.',
        UserId: 1,
        RestaurantId: 44,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 44,
          name: 'Everette Borer III',
          tel: '461.696.7708 x82592',
          address: '33016 Gorczany Shoals',
          opening_hours: '08:00',
          description: 'Optio in et architecto est. Quia explicabo nemo veniam officia dolor enim asperiores. Temporibus quia ratione quasi mollitia porro. Amet amet ad est voluptas voluptas eligendi consequatur ut et.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=29.1824875633532',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 4
        }
      },
      {
        id: 96,
        text: 'Laudantium iste sed consequatur.',
        UserId: 1,
        RestaurantId: 46,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 46,
          name: 'Reginald Bartoletti',
          tel: '(217) 067-7629 x511',
          address: '0824 Gleason Mountains',
          opening_hours: '08:00',
          description: 'laboriosam',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=96.84271017569459',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 4
        }
      },
      {
        id: 98,
        text: 'Sunt quisquam et velit quia enim nulla possimus.',
        UserId: 1,
        RestaurantId: 48,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 48,
          name: 'Zion Thompson',
          tel: '(087) 370-5855 x33853',
          address: '4534 Bechtelar Dam',
          opening_hours: '08:00',
          description: 'aut repudiandae nihil',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=13.425463360365297',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 4
        }
      },
      {
        id: 100,
        text: 'Illo consequatur odit facilis ut qui eos doloremque.',
        UserId: 1,
        RestaurantId: 50,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 50,
          name: 'Jovany Tromp',
          tel: '(628) 103-8357 x131',
          address: '404 Jessica Manor',
          opening_hours: '08:00',
          description: 'Voluptas ab illo perspiciatis aut eos sint modi eum quos. Dolores enim corrupti labore nam. Et enim minima temporibus. Occaecati ipsam ut. Aspernatur voluptates sunt sunt quaerat minus porro dolore aspernatur.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=12.671019539178797',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 2
        }
      },
      {
        id: 105,
        text: 'Repudiandae exercitationem placeat incidunt sed atque.',
        UserId: 1,
        RestaurantId: 5,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 5,
          name: 'Dennis Roob',
          tel: '237.534.9979 x3430',
          address: '40675 Romaguera Isle',
          opening_hours: '08:00',
          description: 'laborum quaerat nesciunt',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=36.01734362458031',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 1
        }
      },
      {
        id: 106,
        text: 'Rem et id at eligendi animi aut perferendis.',
        UserId: 1,
        RestaurantId: 6,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 6,
          name: 'Marshall Crona',
          tel: '758-664-6132',
          address: '301 Ella Forge',
          opening_hours: '08:00',
          description: 'Reiciendis cumque laborum qui. Quisquam non tempore ut. Ab esse suscipit. Omnis dolorum dolore dolor et rerum.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=59.37747828093032',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 1
        }
      },
      {
        id: 107,
        text: 'Quia dolor velit occaecati.',
        UserId: 1,
        RestaurantId: 7,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 7,
          name: 'Ernesto Little',
          tel: '854-517-5215',
          address: '889 Laney Manors',
          opening_hours: '08:00',
          description: 'explicabo',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=34.62872218497235',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 3
        }
      },
      {
        id: 112,
        text: 'Repudiandae quis sit laudantium qui qui.',
        UserId: 1,
        RestaurantId: 12,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 12,
          name: 'Kailyn Kirlin',
          tel: '(056) 476-4413',
          address: '772 Bailey Lane',
          opening_hours: '08:00',
          description: 'Dolorum ipsam architecto consequatur et. Possimus saepe eveniet eos assumenda dolor inventore. Et reprehenderit quis eius ut explicabo vel dolorem. Est rem hic vel alias laudantium.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=31.35268322207887',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 2
        }
      },
      {
        id: 113,
        text: 'Non veritatis ratione necessitatibus voluptatem provident delectus.',
        UserId: 1,
        RestaurantId: 13,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 13,
          name: 'Michaela Gleichner',
          tel: '1-306-234-7124',
          address: '30957 Marilou Summit',
          opening_hours: '08:00',
          description: 'Est aliquam sed dolore blanditiis quibusdam.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=39.14024870763973',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 3
        }
      },
      {
        id: 114,
        text: 'Quidem enim officia.',
        UserId: 1,
        RestaurantId: 14,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 14,
          name: 'Kelsi Becker',
          tel: '(258) 676-6829',
          address: '70382 Mante Plains',
          opening_hours: '08:00',
          description: 'Sunt eveniet molestiae similique eos necessitatibus quasi. Qui sint non cupiditate qui debitis qui nemo. Tempora quia eaque commodi molestias iste nesciunt quos repudiandae eligendi. Ut totam veniam veritatis aliquid. Reiciendis et rerum reprehenderit facilis alias.\n \rId quo soluta labore eligendi odit recusandae. Voluptate dignissimos laudantium fugit adipisci rerum a sed repellat nulla. A quibusdam assumenda eius aut. Nobis necessitatibus nemo eos et quibusdam quisquam vel qui.\n \rOptio quia omnis possimus quae et vel. Voluptatem earum natus numquam reiciendis rerum porro consectetur sint sequi. Sed eaque voluptatibus omnis. Quam est eos sed. Atque totam ipsa sit occaecati saepe consequuntur. Et et voluptate dolorem.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=54.942412547400174',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 5
        }
      },
      {
        id: 116,
        text: 'Earum sint et at.',
        UserId: 1,
        RestaurantId: 16,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 16,
          name: 'Blaze Fay',
          tel: '1-545-943-2349 x15822',
          address: '52475 Goldner Valleys',
          opening_hours: '08:00',
          description: 'Illum magnam adipisci voluptatum repudiandae.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=71.99217983965373',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 5
        }
      },
      {
        id: 119,
        text: 'Quis fugit distinctio dolores.',
        UserId: 1,
        RestaurantId: 19,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 19,
          name: 'Mrs. Rachel Hamill',
          tel: '1-535-238-4821',
          address: '091 Schinner Alley',
          opening_hours: '08:00',
          description: 'Deserunt dignissimos veniam eligendi autem voluptas eligendi. Consequatur fugit rerum neque sed doloribus. Molestiae voluptatibus eaque eum unde labore aut voluptatibus optio. Quia ea praesentium iste nesciunt qui sunt. Vitae sint quia nulla quo nobis. Consequatur accusantium a doloribus.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=34.4035175396463',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 5
        }
      },
      {
        id: 120,
        text: 'Temporibus numquam dolores odio at id illum quisquam et.',
        UserId: 1,
        RestaurantId: 20,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 20,
          name: 'Rose Cremin',
          tel: '1-772-806-1082 x8107',
          address: '4325 Berry Harbor',
          opening_hours: '08:00',
          description: 'aut',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=0.5557717702970644',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 5
        }
      },
      {
        id: 124,
        text: 'Nesciunt vero laborum ea alias rerum explicabo quidem rerum.',
        UserId: 1,
        RestaurantId: 24,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 24,
          name: 'Lyla Feeney',
          tel: '643.485.0533',
          address: '001 Efren Loop',
          opening_hours: '08:00',
          description: 'Laudantium dolore totam officia velit commodi et commodi. Et quo nostrum. Nulla deleniti maiores. Asperiores nemo quis aperiam vel perferendis cupiditate vero fugiat.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=97.97689664949773',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 4
        }
      },
      {
        id: 125,
        text: 'Atque officiis nam pariatur consequuntur quasi enim.',
        UserId: 1,
        RestaurantId: 25,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 25,
          name: 'Titus Hegmann',
          tel: '720.271.1070 x497',
          address: '4140 Stracke Shores',
          opening_hours: '08:00',
          description: 'molestiae magnam blanditiis',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=87.9832822297644',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 5
        }
      },
      {
        id: 131,
        text: 'Qui voluptas placeat aliquam minima itaque a autem nemo.',
        UserId: 1,
        RestaurantId: 31,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 31,
          name: 'Virginia Bashirian',
          tel: '198-830-1643',
          address: '89584 Bradley Fort',
          opening_hours: '08:00',
          description: 'Aut laudantium architecto odio similique non voluptatem et. Rerum beatae laborum ut. Quia quaerat qui unde et ea est omnis. Cum impedit et. Officiis quisquam quasi.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=96.86179372249362',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 3
        }
      },
      {
        id: 132,
        text: 'Explicabo quidem voluptate ea dolorem.',
        UserId: 1,
        RestaurantId: 32,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 32,
          name: 'Abagail Cole',
          tel: '827.464.0303 x652',
          address: '61629 Baumbach Knoll',
          opening_hours: '08:00',
          description: 'Ut eveniet velit sint id odio facere voluptates architecto.\nAspernatur quia possimus nostrum.\nMagni mollitia et quod quibusdam eos velit sint.\nQuibusdam aut autem.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=9.606473592754238',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 3
        }
      },
      {
        id: 145,
        text: 'Aut tenetur sunt voluptas et consectetur nihil culpa magnam nihil.',
        UserId: 1,
        RestaurantId: 45,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 45,
          name: "Carley O'Keefe",
          tel: '1-424-306-3247',
          address: '914 Grant Corners',
          opening_hours: '08:00',
          description: 'Eligendi est numquam possimus in est et sunt.',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=11.017929450680718',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 4
        }
      },
      {
        id: 148,
        text: 'Voluptatem minima aut possimus quasi aliquid deleniti.',
        UserId: 1,
        RestaurantId: 48,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        Restaurant: {
          id: 48,
          name: 'Zion Thompson',
          tel: '(087) 370-5855 x33853',
          address: '4534 Bechtelar Dam',
          opening_hours: '08:00',
          description: 'aut repudiandae nihil',
          image: 'https://loremflickr.com/320/240/restaurant,food/?random=13.425463360365297',
          viewCounts: 0,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z',
          CategoryId: 4
        }
      }
    ],
    FavoritedRestaurants: [],
    Followers: [],
    Followings: []
  },
  isFollowed: false
}

export default {
  components: {
    AdminNav
  },
  data () {
    return {
      users: [],
      currentUser: {
        id: -1,
        name: '',
        email: '',
        isAdmin: null
      }
    }
  },
  methods: {
    fetchUsers () {
      // TODO:get users from API
      this.users = dummyUsers.users
    },
    fetchCurrentUser () {
      const { id, name, email, isAdmin } = dummyCurrentUser.profile
      this.currentUser = { ...this.currentUser, id, name, email, isAdmin }
    },
    toggleUserRole (userId) {
      this.users = this.users.map(user => {
        return user.id === userId ? {
          ...user,
          isAdmin: !user.isAdmin
        } : user
      })
    }
  },
  created () {
    this.fetchUsers()
    this.fetchCurrentUser()
  }
}
</script>
