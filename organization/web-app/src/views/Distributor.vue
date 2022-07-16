<template>
  <div class="distributor">
    <v-app-bar app color="#607D8B" outlined prominent dark>

      <v-toolbar-title class="pa-6"> Distributor's Dashbaord </v-toolbar-title>

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

    <v-container class="py-16 my-15">
      <v-row justify="space-around">
        <v-col
         v-for="card in cards"
         :key="card.title"
        >
        <v-hover v-slot="{ hover }">
          <v-card 
           height="100%"
           :elevation= " hover ? 12: 6"
           :class="['pa-6', { 'on-hover': hover }]"
           rounded
          >

          <v-card-title style="word-break: break-word">
           {{ card.title }}
          </v-card-title>

          <v-card-subtitle>
            {{ card.desc }}
          </v-card-subtitle>

          <v-card-actions>
            <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon> {{ card.icon }} </v-icon> 
              </v-btn>
          </v-card-actions>
        
        </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
  
  </div>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Query Drug Information', desc: '.', icon: 'mdi-database-search'},
        { title: 'Add Drug Batch', desc: '0 Batches of Drugs', icon: 'mdi-package-variant-closed-plus' },
        { title: 'Drug Batch Orders', desc: '0 Total Orders', icon: 'mdi-pill'},
        { title: 'Request for Recall', desc: '.', icon: 'mdi-archive-clock-outline'},
        { title: 'Delete Drug Batch', desc: '.', icon: 'mdi-package-variant-closed-minus'},
      ],

    }),
  }
</script>

<style scoped>
.v-card:on-hover {
  opacity: 0.6;
 }

</style>
