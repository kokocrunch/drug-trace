<template>
  <div class="queryForm">
    <v-app-bar app color="#607D8B" outlined prominent dark>

        <v-btn icon to="/retailer"><v-icon> mdi-arrow-left </v-icon> </v-btn>

      <v-toolbar-title class="pa-6"> Query Drug Information </v-toolbar-title>


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
              <v-list-item-subtitle>Retailer</v-list-item-subtitle>
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


<v-row justify="center" class="pt-16 mt-16">
    <v-card 
           :elevation= " hover ? 12: 6"
           :class="['pa-6', { 'on-hover': hover }]"
           rounded
           width="25%"
          >

<v-row justify="center">
          <v-card-title style="word-break: break-word">
           Query By:
          </v-card-title>
</v-row>
          <v-row justify="center" class="pa-6">
    <v-col
     cols="12"
          sm="6"
    >
    <v-dialog
      v-model="dialogmm1"
      scrollable
      max-width="300px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="#607D8B"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Owner
        </v-btn>
      </template>
      <v-card>
        <v-card-text style="height: 100px;">
          <v-radio-group
            v-model="dialogm1"
            column
          >
            <v-radio
              label="Distributor"
              value="distributor"
            ></v-radio>
            <v-radio
              label="Retailer"
              value="retailer"
            ></v-radio>
          </v-radio-group>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            color="blue darken-1"
            text
            @click="dialogmm1 = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialogmm1 = false"
          >
            Choose
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-col>
    <v-col
     cols="12"
          sm="6"
    >
    <v-dialog
      v-model="dialogmm2"
      scrollable
      max-width="300px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="#607D8B"
          dark
          v-bind="attrs"
          v-on="on"
        >
          State
        </v-btn>
      </template>
      <v-card>
        <v-card-text style="height: 100px;">
          <v-radio-group
            v-model="dialogm2"
            column
          >
            <v-radio
              label="Procured"
              value="procured"
            ></v-radio>
            <v-radio
              label="State"
              value="state"
            ></v-radio>
          </v-radio-group>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            color="blue darken-1"
            text
            @click="dialogmm2 = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialogmm2 = false"
          >
            Choose
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-col>
          </v-row>
    </v-card>
  </v-row>
  
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dialogm1: '',
        dialogmm1: false,
        dialogm2: '',
        dialogmm2: false,
      }
    },
  }
</script>