<template>
  <div class="home">
    <v-app
     :style="{ background: '#ECEFF1' }">

    <v-card
    height="70%"
    class="ma-auto"
    width="30%"
    rounded
    elevation="6"
  >
    <v-card-text>
      <p class="text-h4 text--primary pt-14">
        <center><b>Distributor Login</b></center>
      </p>
    </v-card-text>

    <v-form v-model="valid" class="pa-5 my-5">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            prepend-inner-icon="mdi-account"
            label="Username"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="passwordRules"
            :type="show1 ? 'text' : 'password'"
            prepend-inner-icon="mdi-lock"
            label="Password"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>

  </v-form>

    <div class="text-center">
    <v-btn
      width="50%"
      rounded
      color="#354A54"
      dark
      to="/distributor"
    >
      Login
    </v-btn>
  </div>

  <v-card-actions class="px-16 mx-11">
      <v-btn
        text
        color="#607D8B"
        @click="overlay = !overlay"
      >
        Go to Retailer Login
      </v-btn>
    </v-card-actions>

    <v-overlay
          :absolute="absolute"
          :opacity="opacity"
          :value="overlay"
        >
    <v-card-text>
      <p class="text-h4 text--light pt-14">
        <center><b>Retailer Login</b></center>
      </p>
    </v-card-text>

    <v-form v-model="valid" class="pa-10">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            prepend-inner-icon="mdi-account"
            label="Username"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="passwordRules"
            :type="show1 ? 'text' : 'password'"
            prepend-inner-icon="mdi-lock"
            label="Password"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>

  </v-form>

    <div class="text-center">
    <v-btn
      width="50%"
      rounded
      color="#354A54"
      dark
      to="/retailer"
    >
      Login
    </v-btn>
  </div>

  <v-card-actions class="px-16 mx-11">
      <v-btn
        text
        color="#607D8B"
        @click="overlay = false"
      >
        Go to Distributor Login
      </v-btn>
    </v-card-actions>

  
    </v-overlay>
    </v-card>
</v-app>
  </div>
</template>

<script>
  export default {
    data: () => ({

      absolute: true,
      opacity: 1,
      overlay: false,

      show1: false,
      password: '',
      passwordRules: [
         v => !!v || 'Password is required',
         v => v.length >= 8 || 'Min 8 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],

    }),
  }
</script>


