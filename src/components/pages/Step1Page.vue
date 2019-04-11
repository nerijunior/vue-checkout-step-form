<template>
  <div class="step-1-page">

    <h3 class="heading">Customer Information</h3>

    <form @submit.prevent="onSubmit">

      <div class="row">
        <div class="column">
          <FormField v-model="firstName" label="First Name" />
        </div>
        <div class="column">
          <FormField v-model="lastName" label="Last Name" />
        </div>
      </div>

      <div class="row">
        <div class="column">
          <FormField v-model="address" label="Address" />
        </div>
      </div>

      <div class="row">
        <div class="column">
          <FormField label="Country">
            <SelectBox v-model="country">
              <option value="">Select your Country</option>
              <option value="BR">Brazil</option>
              <option value="MX">Mexico</option>
              <option value="AR">Argentina</option>
            </SelectBox>
          </FormField>
        </div>
        <div class="column">
          <FormField v-model="city" label="City" />
        </div>
      </div>

      <div class="row">
        <div class="column">
          <FormField v-model="postalCode" label="Postal Code" />
        </div>
        <div class="column">
          <FormField v-model="phone" label="Phone" />
        </div>
      </div>

      <div class="row">
        <div class="column">
          <SubmitButton label="Continue to Shipping" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import FormField from '@/components/molecules/FormField'
import SelectBox from '@/components/molecules/SelectBox'
import SubmitButton from '@/components/atoms/SubmitButton'

export default {
  name: 'Step1Page',

  components: {
    FormField,
    SubmitButton,
    SelectBox
  },

  data () {
    return {
      firstName: '',
      lastName: '',
      address: '',
      country: '',
      city: '',
      postalCode: '',
      phone: ''
    }
  },

  methods: {
    onSubmit () {

    }
  }
}
</script>

<style lang="scss" scope>
.heading{
  font-size: 24px;
  color: #1B2125;
  margin-left: .75rem;
}
.select{

  select {
    width: 100%;
    border: none;
  }

  &:focus{
    border-color: #71B6EF;
  }
}
</style>
