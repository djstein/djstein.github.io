import React, { useState } from 'react'
import { Header } from './../../ui/Header'
import { Text } from './../../ui/Text'
import { Label } from './../../ui/Label'
import { Input } from './../../ui/Input'
import { FieldSet } from './../../ui/FieldSet'
import { Button } from './../../ui/Button'

export const Inquiries = () => {
  const inquiryFormFields = [
    { name: 'name', label: 'Name', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'description', label: 'Description', type: 'text', required: true },
    { name: 'company', label: 'Company', type: 'text' },
  ]

  const [inquiryForm, setInquiryForm] = useState({})

  const handleInquiryForm = (event, name) => {
    setInquiryForm({ ...inquiryForm, [name]: event.target.value })
  }

  const handleFormSubmit = () => {
    console.log(inquiryForm)
    const inquiryFormBody = `
Inquiry Form - dylanstein.dev%0D%0A${inquiryFormFields
      .map(
        field =>
          inquiryForm[field.name] &&
          `${field.label}: ${inquiryForm[field.name]}`
      )
      .join('%0D%0A')}`
    console.log(inquiryFormBody)
    alert(inquiryFormBody)
    window.open(
      `mailto:djstein@ncsu.edu?subject=Inquiry Request - ${inquiryForm.company ||
        inquiryForm.name}&body=${inquiryFormBody}`
    )
  }

  return (
    <div style={{ paddingBottom: '2rem' }}>
      <Header>Inquiries</Header>
      <Text>
        Please fill out this form to begin the process for inquires towards full
        time positions, open source contributions, or contract work. It will
        create a templated email for you!
      </Text>
      <form id="inquiryForm" onSubmit={() => handleFormSubmit()}>
        {inquiryFormFields.map(field => (
          <FieldSet key={field.name}>
            <Label key={`${field.name}_label`} htmlFor={field.name}>
              {field.label}
            </Label>
            <Input
              type={field.type}
              name={field.name}
              placeholder={field.label}
              onChange={event => handleInquiryForm(event, field.name)}
              required={field.required}
            />
          </FieldSet>
        ))}
        <Button type="submit">Submit</Button>
        <Text style={{ fontSize: '1rem' }}>
          * Rates and licensing will be provided on a case by case basis,
          determined by project specifications.
        </Text>
      </form>
    </div>
  )
}
