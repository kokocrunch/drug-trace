<template>
  <div class="distributor">
    <v-app-bar app color="#607D8B" outlined prominent dark>

      <v-toolbar-title class="pa-6"> Retailer's Dashboard </v-toolbar-title>

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

    <v-container class="pa-16 ma-16">
      <v-row class="pl-7"
      >
        <v-col
        >
        <v-hover v-slot="{ hover }">
          <v-card 
           :elevation= " hover ? 12: 6"
           :class="['pa-6', { 'on-hover': hover }]"
           height="100%"
           weight="40%"
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
              <v-btn icon to="/queryformr">
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
           height="100%"
           weight="40%"
           rounded
          >

          <v-card-title style="word-break: break-word">
           Buy Drug <br> Batch
          </v-card-title>

          <v-card-subtitle>
            .
          </v-card-subtitle>

          <v-card-actions>
            <v-spacer></v-spacer>
              <v-btn icon to="/buyform">
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
           height="100%"
           weight="40%"
           rounded
          >

          <v-card-title style="word-break: break-word">
           Recall <br> Requests
          </v-card-title>

          <v-card-subtitle>
            0 Requests
          </v-card-subtitle>

          <v-card-actions>
            <v-spacer></v-spacer>
              <v-btn icon to="">
                <v-icon> mdi-share-all </v-icon> 
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
           height="100%"
           weight="40%"
           rounded
          >

          <v-card-title style="word-break: break-word">
           Delete Drug <br> Batch
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
