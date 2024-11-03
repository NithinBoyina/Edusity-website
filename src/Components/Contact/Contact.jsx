import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bd9eb321-d30c-49e8-9260-304683a6978e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res)=>res.json());


    if (res.success) {
      console.log("success",res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt=""/></h3>
        <p>The reason perhaps that there wasn't an academy in West Delhi before the late 90s is quite obvious; this is very much refugee country, where the needs of the people were humble ones: shelter, food, ration, transport and education. Back in 1947, before India gained its independence from the British, the westward corner of Delhi was Karol Bagh, which is today very much in and around the centre of the city.</p>
        <ul>
          <li><img src={mail_icon} alt=""/>Contact Edusity.com</li>
          <li><img src={phone_icon} alt=""/>+1 123-456-7890</li>
          <li><img src={location_icon} alt=""/>Massachussets Ave,cambridge<br/>MA 02139 United states</li>


        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
        <label>Your Name</label>
        <input type="text" name="name" placeholder='Enter your name' required/>
        <label>Phone Number</label>
        <input type='tel' name='phone' placeholder='Enter your mobile number' required/>
        <label>Enter your messages here</label>
        <textarea  rows={6} name='Message' placeholder='Enter your message' required></textarea>
        <button type='submit' className='btn dark-btn'>Submit now<img src={white_arrow} /></button>
        </form>
        <span>{result}</span>

      </div>

    </div>
  )
}

export default Contact
