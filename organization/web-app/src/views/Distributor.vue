<template>
  <div class="distributor">
    <v-app-bar app color="#607D8B" outlined prominent dark>
       

      <v-toolbar-title class="pa-6"> Distributor's Dashboard </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu
       open-on-hover
       top
       offset
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

    <v-container class="py-16 my-15">
      <v-row justify="space-around"
      >
        <v-col
        >
        <v-hover v-slot="{ hover }">
          <v-card 
           :elevation= " hover ? 12: 6"
           :class="['pa-6', { 'on-hover': hover }]"
           rounded
          >

          <v-card-title style="word-break: break-word">
           Query Drug Information
          </v-card-title>

          <v-card-subtitle>
            .
          </v-card-subtitle>

          <v-card-actions>
            <v-spacer></v-spacer>
              <v-btn icon to="/queryform">
                <v-icon> mdi-database-search </v-icon> 
              </v-btn>
          </v-card-actions>
        
        </v-card>
        </v-hover>
      </v-col>
      <v-col
        >
        <v-hover v-slot="{ hover }">
          <v-card 
           :elevation= " hover ? 12: 6"
           :class="['pa-6', { 'on-hover': hover }]"
           rounded
          >

          <v-card-title style="word-break: break-word">
           Add Drug Batch
          </v-card-title>

          <v-card-subtitle>
            0 Batches of Drugs
          </v-card-subtitle>

          <v-card-actions>
            <v-spacer></v-spacer>
              <v-btn icon to="/addform">
                <v-icon> mdi-package-variant-closed-plus </v-icon> 
              </v-btn>
          </v-card-actions>
        
        </v-card>
        </v-hover>
      </v-col>
      <v-col
        >
        <v-hover v-slot="{ hover }">
          <v-card 
           :elevation= " hover ? 12: 6"
           :class="['pa-6', { 'on-hover': hover }]"
           rounded
          >

          <v-card-title style="word-break: break-word">
           Drug Batch Orders
          </v-card-title>

          <v-card-subtitle>
            0 Total Orders
          </v-card-subtitle>

          <v-card-actions>
            <v-spacer></v-spacer>
              <v-btn icon to="/pending">
                <v-icon> mdi-pill </v-icon> 
              </v-btn>
          </v-card-actions>
        
        </v-card>
        </v-hover>
      </v-col>
      <v-col
        >
        <v-hover v-slot="{ hover }">
          <v-card 
           :elevation= " hover ? 12: 6"
           :class="['pa-6', { 'on-hover': hover }]"
           rounded
          >

          <v-card-title style="word-break: break-word">
           Request for Recall
          </v-card-title>

          <v-card-subtitle>
            .
          </v-card-subtitle>

          <v-card-actions>
            <v-spacer></v-spacer>
              <v-btn icon to="">
                <v-icon> mdi-archive-clock-outline </v-icon> 
              </v-btn>
          </v-card-actions>
        
        </v-card>
        </v-hover>
      </v-col>
       <v-col
        >
        <v-hover v-slot="{ hover }">
          <v-card 
           :elevation= " hover ? 12: 6"
           :class="['pa-6', { 'on-hover': hover }]"
           rounded
          >

          <v-card-title style="word-break: break-word">
           Delete Drug Batch
          </v-card-title>

          <v-card-subtitle>
            .
          </v-card-subtitle>

          <v-card-actions>
            <v-spacer></v-spacer>
              <v-btn icon to="">
                <v-icon> mdi-package-variant-closed-minus </v-icon> 
              </v-btn>
          </v-card-actions>
        
        </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
  
  </div>
</template>


<style scoped>
.v-card:on-hover {
  opacity: 0.6;
 }

</style>
