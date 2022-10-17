export const schema = {
  title: 'Guest',
  properties: {
    firstName: { type: 'text' },
    lastName: { type: 'text' },
    workExperience: {
      type: 'text',
      constraints: {
        required: true, maxLength: 20
      }
    },
    age: {
      type: 'number',
      constraints: {
        required: true,
        min: 18, max: 99
      },
      errors: {
        required: 'Age is required',
        min: 'Should be at least 18 years old',
        max: 'Age greater than 99 is ineligible'
      }
    },
    gender: {
      type: 'select',
      options: {
        male: 'male',
        female: 'female',
        value: 'text'
      }
    },
    agreed: {
      type: 'checkbox',
      text: 'I agree to the terms and conditions',
      constraints: {
        required: true
      },
      errors: {
        required: 'Terms and conditions are not met'
      },
    },
    profession: { type: 'text' },
    additionalInfo: { type: 'text' }
  }
}