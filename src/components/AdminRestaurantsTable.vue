<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">
          #
        </th>
        <th scope="col">
          Category
        </th>
        <th scope="col">
          Name
        </th>
        <th scope="col" width="300">
          操作
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : '未分類' }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link :to="{ name: 'admin-restaurant', params: { id: restaurant.id } }" class="btn btn-link">Show
          </router-link>

          <a href="#" class="btn btn-link">Edit</a>

          <button type="button" class="btn btn-link" @click.stop.prevent="deleteRestaurant(restaurant.id)">
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const dummyData = {
  restaurants: [
    {
      id: 1,
      name: 'Remington Shields',
      tel: '(664) 474-5747 x14320',
      address: '9340 Cornell Field',
      opening_hours: '08:00',
      description: 'Et beatae molestiae optio quaerat dolores autem.\nDolorem et iste.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=14.732919933876175',
      viewCounts: 1,
      createdAt: '2022-07-07T09:45:55.000Z',
      updatedAt: '2022-07-09T15:27:59.000Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
      id: 2,
      name: 'Eldora Rodriguez Sr.',
      tel: '188.929.7442 x776',
      address: '26185 Cruickshank Mall',
      opening_hours: '08:00',
      description: 'non eos aliquid',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=87.58085476753624',
      viewCounts: 0,
      createdAt: '2022-07-07T09:45:55.000Z',
      updatedAt: '2022-07-07T09:45:55.000Z',
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
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
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
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
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
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
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
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
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
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
      CategoryId: 3,
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
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
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
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
      CategoryId: 3,
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
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
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
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
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
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
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
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
      CategoryId: 3,
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
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
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
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
      CategoryId: 3,
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
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
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
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
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
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
      CategoryId: 3,
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
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
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
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
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
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
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
      id: 22,
      name: 'Kristy Wehner',
      tel: '044.072.3539 x315',
      address: '8911 Corkery Ports',
      opening_hours: '08:00',
      description: 'Cum voluptas reiciendis cupiditate sit accusantium.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=38.722645786694',
      viewCounts: 0,
      createdAt: '2022-07-07T09:45:55.000Z',
      updatedAt: '2022-07-07T09:45:55.000Z',
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
      id: 23,
      name: 'Tia Hand',
      tel: '620.431.1446',
      address: '85752 Lane Freeway',
      opening_hours: '08:00',
      description: 'mollitia aut voluptatem',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=94.89446391013479',
      viewCounts: 0,
      createdAt: '2022-07-07T09:45:55.000Z',
      updatedAt: '2022-07-07T09:45:55.000Z',
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
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
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
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
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
      id: 26,
      name: 'Camryn Koss',
      tel: '000-255-7546 x1060',
      address: '784 Davon Ville',
      opening_hours: '08:00',
      description: 'Magni repellat nulla eligendi temporibus.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=66.65140050057904',
      viewCounts: 0,
      createdAt: '2022-07-07T09:45:55.000Z',
      updatedAt: '2022-07-07T09:45:55.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
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
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
      id: 28,
      name: 'Leora Sporer MD',
      tel: '813-325-2125 x66380',
      address: '64893 West Square',
      opening_hours: '08:00',
      description: 'Fuga porro blanditiis ut et voluptas ut.\nEum repellat ut eum omnis tempore.\nQui ratione et pariatur qui rerum labore odit aut.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=57.57871817516653',
      viewCounts: 0,
      createdAt: '2022-07-07T09:45:55.000Z',
      updatedAt: '2022-07-07T09:45:55.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
      id: 29,
      name: 'Corine Bergnaum',
      tel: '431-193-3795 x64007',
      address: '5737 Wilbert Parks',
      opening_hours: '08:00',
      description: 'Eum illo nam est fuga similique iusto et. Commodi sunt iusto hic iure. Vel quibusdam voluptates.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=85.4712566958813',
      viewCounts: 0,
      createdAt: '2022-07-07T09:45:55.000Z',
      updatedAt: '2022-07-07T09:45:55.000Z',
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
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
      CategoryId: 3,
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
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
      CategoryId: 3,
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
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
      CategoryId: 3,
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
      id: 33,
      name: 'Alvis Hills',
      tel: '660-586-1971',
      address: '6536 Bergstrom Forge',
      opening_hours: '08:00',
      description: 'Voluptatem dolorem et id eum aut velit. Quo dolores quidem veritatis in omnis occaecati. Ab ducimus ea blanditiis temporibus eum impedit et quae.\n \rQui vel officiis ea. Culpa iure nemo officiis iusto a reiciendis praesentium. Perferendis id rerum velit totam.\n \rQuisquam qui id. Laborum eum ducimus beatae pariatur ut blanditiis. Necessitatibus veritatis quo distinctio dolores perferendis. Veniam et deserunt. Eligendi nisi fugiat eius incidunt.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=56.25955126479412',
      viewCounts: 0,
      createdAt: '2022-07-07T09:45:55.000Z',
      updatedAt: '2022-07-07T09:45:55.000Z',
      CategoryId: 3,
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
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
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
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
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
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
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
      id: 37,
      name: 'Tre Larkin',
      tel: '(355) 363-0563 x98579',
      address: '4429 Senger Drive',
      opening_hours: '08:00',
      description: 'commodi',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=2.1357196537706846',
      viewCounts: 0,
      createdAt: '2022-07-07T09:45:55.000Z',
      updatedAt: '2022-07-07T09:45:55.000Z',
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
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
      CategoryId: 3,
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
      id: 39,
      name: 'Gabe Gusikowski',
      tel: '(961) 963-0454',
      address: '3625 Boyer Club',
      opening_hours: '08:00',
      description: 'Odit amet ratione a et laboriosam.\nConsequatur laudantium nam eius consequatur itaque.\nSint consequuntur voluptatem rerum.\nConsequatur dolorum impedit.\nEarum in dolores qui non eum ea eligendi.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=49.11796924365548',
      viewCounts: 0,
      createdAt: '2022-07-07T09:45:55.000Z',
      updatedAt: '2022-07-07T09:45:55.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
      id: 40,
      name: 'Tracy Dicki',
      tel: '1-211-998-5386 x82710',
      address: '1953 Asha Trail',
      opening_hours: '08:00',
      description: 'Et saepe odit et.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=21.01085971701462',
      viewCounts: 0,
      createdAt: '2022-07-07T09:45:55.000Z',
      updatedAt: '2022-07-07T09:45:55.000Z',
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
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
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
      id: 42,
      name: 'Jorge King MD',
      tel: '(085) 840-9397 x395',
      address: '9524 Dylan Freeway',
      opening_hours: '08:00',
      description: 'Facere dolor porro aut. Eius molestias rerum sapiente et.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=48.22252300535701',
      viewCounts: 0,
      createdAt: '2022-07-07T09:45:55.000Z',
      updatedAt: '2022-07-07T09:45:55.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
      id: 43,
      name: 'Ms. Fausto Zemlak',
      tel: '971.062.4712 x698',
      address: '181 Kerluke Crest',
      opening_hours: '08:00',
      description: 'Eum et quod nesciunt eos. Iure sed sit necessitatibus voluptatibus nemo pariatur similique ex sint. Non et minus rem vitae ut odio molestias omnis. Repellat ullam est dolor qui reprehenderit voluptas beatae deserunt ea. Ex pariatur iste quo. Aut culpa iste reprehenderit.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=9.791609076152241',
      viewCounts: 0,
      createdAt: '2022-07-07T09:45:55.000Z',
      updatedAt: '2022-07-07T09:45:55.000Z',
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
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
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
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
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
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
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
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
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
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
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
      id: 49,
      name: 'Luella Mitchell',
      tel: '1-811-936-7012 x770',
      address: '44027 Anderson Way',
      opening_hours: '08:00',
      description: 'Voluptates fuga eius pariatur aut corrupti aliquid quo velit amet.\nQui odio eos sit a.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=68.0514481293508',
      viewCounts: 0,
      createdAt: '2022-07-07T09:45:55.000Z',
      updatedAt: '2022-07-07T09:45:55.000Z',
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    },
    {
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
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      }
    }
  ]
}

export default {
  data () {
    return {
      restaurants: []
    }
  },
  created () {
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants () {
      this.restaurants = dummyData.restaurants
    },
    deleteRestaurant (restaurantId) {
      // 只從畫面中隱藏
      this.restaurants = this.restaurants.filter(restaurant => restaurant.id !== restaurantId)
    }
  }
}
</script>
