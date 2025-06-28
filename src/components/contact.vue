<script setup>
import { ref, reactive } from 'vue';

// Define Props
const props = defineProps({
  initialTitle: {
    type: String,
    default: 'Get in Touch with Comic Universe Customer Support'
  },
  initialProducts: {
    type: Array,
    default: () => [
      { value: "Marvel Insider", text: "Marvel Insider" },
      { value: "Marvel Digital Comics Redeem Codes", text: "Marvel Digital Comics Redeem Codes" },
      { value: "MyDisney Account", text: "MyDisney Account" },
      { value: "Marvel Print Subscriptions", text: "Marvel Print Subscriptions" },
      { value: "Something Else", text: "Something Else" }
    ]
  },
  initialHelpOptions: {
    type: Array,
    default: () => [
      { value: "Purchased / Redeemed Digital Comics", text: "Purchased / Redeemed Digital Comics" },
      { value: "Login Issue", text: "Login Issue" },
      { value: "Technical Issue", text: "Technical Issue" },
      { value: "Upgrade My Membership", text: "Upgrade My Membership" },
      { value: "Marvel Unlimited Annual Plus Inquiry", text: "Marvel Unlimited Annual Plus Inquiry" },
      { value: "Billing Issue", text: "Billing Issue" },
      { value: "Promotion or Gift Subscription Inquiry", text: "Promotion or Gift Subscription Inquiry" },
      { value: "Feedback", text: "Feedback" },
      { value: "Something Else", text: "Something Else" }
    ]
  }
});

// Define Emits
const emit = defineEmits(['form-submitted', 'form-validation-failed']);

// Reactive Variables
const title = ref(props.initialTitle);
const products = ref(props.initialProducts);
const helpOptions = ref(props.initialHelpOptions);

const formData = reactive({
  product: "",
  email: "",
  firstName: "",
  lastName: "",
  phone: "",
  help: "",
  description: "",
  terms: false,
  contactMethod: ""
});

// Success message ref
const successMessage = ref('');
const errors = ref({});
const submittedData = ref(null);

// Form validation
const validateForm = () => {
  errors.value = {};
  let isValid = true;

  if (!formData.product) {
    errors.value.product = "Please select a product";
    isValid = false;
  }
  if (!formData.email) {
    errors.value.email = "Please enter a valid email address";
    isValid = false;
  }
  if (!formData.firstName) {
    errors.value.firstName = "First name is required";
    isValid = false;
  }
  if (!formData.lastName) {
    errors.value.lastName = "Last name is required";
    isValid = false;
  }
  const phoneRegex = /^\d{10}$/;
  if (!formData.phone || !phoneRegex.test(formData.phone.toString())) {
    errors.value.phone = "Phone number must be exactly 10 digits";
    isValid = false;
  }
  if (!formData.help) {
    errors.value.help = "Please specify how we can help you";
    isValid = false;
  }
  if (!formData.description) {
    errors.value.description = "Description is required";
    isValid = false;
  }
  if (!formData.terms) {
    errors.value.terms = "You must agree to the terms and conditions";
    isValid = false;
  }
  if (!formData.contactMethod) {
    errors.value.contactMethod = "Please select a preferred contact method";
    isValid = false;
  }

  return isValid;
};

// Handle submission emits
const handleSubmit = () => {
  if (validateForm()) {
    submittedData.value = { ...formData };
    console.log('Form submitted:', submittedData.value);

    // Sanitize inputs if necessary before using v-html
    successMessage.value = `
      Form submitted successfully!<br>
      Product: ${escapeHtml(formData.product)}<br>
      Email: ${escapeHtml(formData.email)}<br>
      First Name: ${escapeHtml(formData.firstName)}<br>
      Last Name: ${escapeHtml(formData.lastName)}<br>
      Phone: ${escapeHtml(formData.phone)}<br>
      Help: ${escapeHtml(formData.help)}<br>
      Description: ${escapeHtml(formData.description)}<br>
      Preferred Contact Method: ${escapeHtml(formData.contactMethod)}
    `;

    // Emit success message
    emit('form-submitted', successMessage.value);

    // Clear formData
    Object.keys(formData).forEach(key => {
      if (typeof formData[key] === 'string') {
        formData[key] = '';
      } else if (typeof formData[key] === 'boolean') {
        formData[key] = false;
      }
    });
  } else {
    // Emit error messages
    emit('form-validation-failed', errors.value);
  }
};


function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
</script>

<style scoped>
@import '/src/assets/style.css';
@import '/src/assets/contact.css';
</style>

<template>
  <div>
    <h1 class="mb-4">{{ title }}</h1>
    <form @submit.prevent="handleSubmit">
      <!-- Product Select Input -->
      <div class="mb-3">
        <label for="product" class="form-label">Product:</label>
        <select id="product" v-model="formData.product" class="form-select" required>
          <option value="" disabled>Select a product</option>
          <option v-for="product in products" :key="product.value" :value="product.value">
            {{ product.text }}
          </option>
        </select>
        <span v-if="errors.product" class="error-message">{{ errors.product }}</span>
      </div>

      <!-- Email Input -->
      <div class="mb-3">
        <label for="email" class="form-label">Email:</label>
        <input type="email" id="email" v-model="formData.email" class="form-control" placeholder="Enter your email address" required />
        <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
      </div>

      <!-- First Name Input -->
      <div class="mb-3">
        <label for="firstName" class="form-label">First Name:</label>
        <input type="text" id="firstName" v-model="formData.firstName" class="form-control" placeholder="Your first name" required />
        <span v-if="errors.firstName" class="error-message">{{ errors.firstName }}</span>
      </div>

      <!-- Last Name Input -->
      <div class="mb-3">
        <label for="lastName" class="form-label">Last Name:</label>
        <input type="text" id="lastName" v-model="formData.lastName" class="form-control" placeholder="Your last name" required />
        <span v-if="errors.lastName" class="error-message">{{ errors.lastName }}</span>
      </div>

      <!-- Phone Input with .number Modifier -->
      <div class="mb-3">
        <label for="phone" class="form-label">Phone Number:</label>
        <input type="tel" id="phone" v-model="formData.phone" class="form-control" placeholder="Your phone number" required pattern="^\d{10}$" />
        <span v-if="errors.phone" class="error-message">{{ errors.phone }}</span>
      </div>

      <!-- Help -->
      <div class="mb-3">
        <label for="help" class="form-label">How can we help?</label>
        <select id="help" v-model="formData.help" class="form-select" required>
          <option value="" disabled>Select an option</option>
          <option v-for="option in helpOptions" :key="option.value" :value="option.value">
            {{ option.text }}
          </option>
        </select>
        <span v-if="errors.help" class="error-message">{{ errors.help }}</span>
      </div>

      <!-- Description Input -->
      <div class="mb-3">
        <label for="description" class="form-label">Description:</label>
        <textarea id="description" v-model="formData.description" class="form-control" rows="5" placeholder="Please provide an overview of your issue..." required></textarea>
        <span v-if="errors.description" class="error-message">{{ errors.description }}</span>
      </div>

      <!-- Checkbox -->
      <div class="mb-3 form-check">
        <input type="checkbox" id="terms" v-model="formData.terms" class="form-check-input checkbox" required />
        <label for="terms" class="form-check-label">I agree to the terms and conditions</label>
        <span v-if="errors.terms" class="error-message">{{ errors.terms }}</span>
      </div>

      <!-- Radio Buttons -->
      <div class="mb-3">
        <label class="form-label">Preferred Contact Method:</label>
        <div class="d-flex align-items-center">
          <input type="radio" id="contactEmail" value="email" v-model="formData.contactMethod" required />
          <label for="contactEmail" class="ms-2">Email</label>
        </div>
        <div class="d-flex align-items-center">
          <input type="radio" id="contactPhone" value="phone" v-model="formData.contactMethod" required />
          <label for="contactPhone" class="ms-2">Phone</label>
        </div>
        <span v-if="errors.contactMethod" class="error-message">{{ errors.contactMethod }}</span>
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>

    <!-- Success Message -->
    <div v-if="successMessage" class="alert alert-success mt-4" v-html="successMessage"></div>
  </div>
</template>


