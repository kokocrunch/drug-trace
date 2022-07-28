<template>
  <div class="addForm">
    <v-app-bar app color="#607D8B" outlined prominent dark>

        <v-btn icon to="/retailer"><v-icon> mdi-arrow-left </v-icon> </v-btn>

      <v-toolbar-title class="pa-6"> Buy Drug Batch </v-toolbar-title>


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

    <v-row justify="center" class="pa-6">
    <v-col
      cols="12"
      sm="10"
      md="8"
      lg="6"
    >
      <v-card ref="form" class="pa-6">
        <v-card-text>
          <h2>
          Please fill up the form.</h2>
          <v-row>
             <v-col
         cols="12"
          sm="6"
      >
          <v-text-field
            ref="distributor"
            v-model="distributor"
            :rules="[() => !!distributor || 'This field is required']"
            label="Distributor"
            required
          ></v-text-field>
             </v-col>
          <v-col
         cols="12"
          sm="6"
      >
      <v-text-field
            ref="quantity"
            type="number"
            v-model="quantity"
            :rules="[() => !!quantity || 'This field is required']"
            label="Quantity"
            required
          ></v-text-field>
          </v-col>
          </v-row>
          
        
          <v-textarea
          ref="description"
          v-model="description"
          :rules="[() => !!description || 'This field is required']"
          label="Description"
          hint="Enter drug description."
        ></v-textarea>

        
        
        

        </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-btn text  @click="resetForm">
            Clear
          </v-btn>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
            <v-tooltip
              v-if="formHasErrors"
              left
            >
              
            </v-tooltip>
          </v-slide-x-reverse-transition>
          <v-btn
            color="primary"
            text
            @click="submit"
          >
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
    
  
  </div>
</template>

<script>
  export default {
    data: vm => ({
      errorMessages: '',
      distributor: null,
      description: null,
      quantity: null,
      formHasErrors: false,
    }),

    computed: {
      form () {
        return {
          distributor: this.distributor,
          description: this.description,
          quantity: this.quantity,
        }
      },
    },

    watch: {
      name () {
        this.errorMessages = ''
      },
    },

    methods: {
      resetForm () {
        this.errorMessages = []
        this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
          this.$refs[f].reset()
        })
      },
      submit () {
        this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
          if (!this.form[f]) this.formHasErrors = true

          this.$refs[f].validate(true)
        })
      },
    },
  }
</script>