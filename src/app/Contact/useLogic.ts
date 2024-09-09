
import React, { useState } from 'react'

export const useLogicContact = () => {
  const [contact, setContact] = useState([
    {
      title:"Contact Us",
      dis:"We’re here to help! If you have any questions, comments, or need assistance, please don’t hesitate to reach out to us. Our dedicated team is ready to provide support and address any inquiries you may have. You can contact us via email, phone, or by filling out the form below. We look forward to hearing from you and will get back to you as soon as possible."
    }
  ])
    return{contact}
}
