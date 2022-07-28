<template>
  <div class="pending">
    <v-app-bar app color="#607D8B" outlined prominent dark>

        <v-btn icon to="/distributor"><v-icon> mdi-arrow-left </v-icon> </v-btn>

      <v-toolbar-title class="pa-6"> Pending Orders </v-toolbar-title>


      <v-spacer></v-spacer>

      <v-menu
       open-on-hover
       top
       offset-x
      >

      <template v-slot:activator="{ on, attrs }">
        <v-btn icon
         v-bind="attrs"
         v-on="on">

        <v-icon dense class="pr-3 pt-1"> mdi-account </v-icon>

        </v-btn>
      </template>

      <v-list>
        <v-list-item>
          <v-list-item-avatar color="#98AFBA">
            <v-icon dark>
              mdi-account-circle
            </v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
              <v-list-item-title>Sofia Beltran</v-list-item-title>
              <v-list-item-subtitle>Distributor</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list>
        <v-list-item>
          <v-btn 
           plain
           to="/"
           >
           Logout</v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
      
    </v-app-bar>

     <v-simple-table height="500px" class="pa-7"  :footer-props="{
      showFirstLastPage: true,
      firstIcon: 'mdi-arrow-collapse-left',
      lastIcon: 'mdi-arrow-collapse-right',
      prevIcon: 'mdi-minus',
      nextIcon: 'mdi-plus'
    }">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Retailer
          </th>
          <th class="text-left">
            Description
          </th>
          <th class="text-left">
            Quantity
          </th>
           <th class="text-left">
            Purchase Date
          </th>
           <th class="text-left">
            Purchase Time
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in orders"
          :key="item.retailer"
        >
          <td>{{ item.retailer }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.time }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
    
  
  </div>
</template>

<script>
  export default {
    data () {
      return {
        orders: [
          {
            retailer: 'Watsons Pharmacy',
            description: 'Gaviscon',
            quantity: 12345,
            date: '07/28/22',
            time: '7:00AM'
          },
          {
            retailer: 'Mercury Drug',
            description: 'Biogesic 500 grams',
            quantity: 875,
            date: '07/29/22',
            time: '7:45AM'
          },
        ],
      }
    },
  }
</script>