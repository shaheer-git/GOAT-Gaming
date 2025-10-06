import React, { useState } from 'react';
import Text from '../../../assets/LetsConnect.svg';
import GetInTouch from '../../../assets/GetInTouch.svg';
import SeeUsOnGMaps from '../../../assets/SeeUsOnGMaps.svg';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    query: 'Slot Booking',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.trim() === '' ? 'Name is required' : '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Invalid email address' : '';
      case 'phone':
        const phoneRegex = /^[0-9]{10}$/;
        return !phoneRegex.test(value.replace(/\s/g, '')) ? 'Phone must be 10 digits' : '';
      case 'subject':
        return value.trim() === '' ? 'Subject is required' : '';
      case 'message':
        return value.trim() === '' ? 'Message is required' : '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      if (key !== 'query') {
        const error = validateField(key, formData[key]);
        if (error) newErrors[key] = error;
      }
    });

    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      phone: true,
      subject: true,
      message: true
    });

    if (Object.keys(newErrors).length === 0) {
      console.log('Form Data:', formData);
    //   alert('Form submitted successfully! Check console for data.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        query: 'Slot Booking',
        message: ''
      });
      setTouched({});
    }
  };

  return (
    <div className="flex justify-center items-center bg-[var(--goat-black)] w-full lg:w-4/5 h-full rounded-2xl">
      <div className="bg-[var(--goat-black)] p-8 rounded-2xl w-full max-w-[500px]">
        <h2 className="text-white text-2xl font-semibold mb-10">Contact</h2>

        <div className="flex flex-col gap-6">
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col flex-1">
              <label className="text-white text-sm mb-1">
                Name <span className="text-white">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="bg-transparent border-b border-[var(--goat-red)] focus:outline-none text-white py-1"
              />
              {touched.name && errors.name && (
                <span className="text-red-500 text-xs mt-1">{errors.name}</span>
              )}
            </div>
            <div className="flex flex-col flex-1">
              <label className="text-white text-sm mb-1">
                Email <span className="text-white">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="bg-transparent border-b border-[var(--goat-red)] focus:outline-none text-white py-1"
              />
              {touched.email && errors.email && (
                <span className="text-red-500 text-xs mt-1">{errors.email}</span>
              )}
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col flex-1">
              <label className="text-white text-sm mb-1">
                Phone <span className="text-white">*</span>
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className="bg-transparent border-b border-[var(--goat-red)] focus:outline-none text-white py-1"
              />
              {touched.phone && errors.phone && (
                <span className="text-red-500 text-xs mt-1">{errors.phone}</span>
              )}
            </div>
            <div className="flex flex-col flex-1">
              <label className="text-white text-sm mb-1">
                Subject <span className="text-white">*</span>
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                className="bg-transparent border-b border-[var(--goat-red)] focus:outline-none text-white py-1"
              />
              {touched.subject && errors.subject && (
                <span className="text-red-500 text-xs mt-1">{errors.subject}</span>
              )}
            </div>
          </div>

          {/* Dropdown */}
          <div className="flex flex-col">
            <label className="text-white text-sm mb-4">My Queries About</label>
            <select 
              name="query"
              value={formData.query}
              onChange={handleChange}
              className="bg-transparent w-1/4 text-[var(--goat-red)] focus:outline-none text-xs"
            >
              <option className="bg-[var(--goat-black)] text-white">Slot Booking</option>
              <option className="bg-[var(--goat-black)] text-white">General Query</option>
              <option className="bg-[var(--goat-black)] text-white">Support</option>
            </select>
          </div>

          {/* Textarea */}
          <div className="flex flex-col">
            <label className="text-white text-sm mb-1">
              Tell us how can we help you <span className="text-white">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              rows="3"
              className="bg-transparent border-b border-[var(--goat-red)] focus:outline-none text-white resize-none py-1"
            ></textarea>
            {touched.message && errors.message && (
              <span className="text-red-500 text-xs mt-1">{errors.message}</span>
            )}
          </div>

          {/* Button */}
          <button
            onClick={handleSubmit}
            className="cursor-pointer bg-[var(--goat-red)] text-white font-medium py-3 rounded-md hover:opacity-90 transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}



const Hero7 = () => {
  return (
    <div className="p-5 text-start mt-6" id="hero7">
      <img src={Text} alt="Services" className="mx-auto mb-8s pb-5" />
      
      <div className="w-full bg-white h-full hidden lg:flex items-center">
        <div className="w-1/2 h-full border border-[var(--goat-red)] border-r-0 ml-15 flex items-start justify-center flex-col py-10">
          <div className="w-full ml-10">
            <img src={GetInTouch} alt="GetInTouch" className="w-50 h-50" />
          </div>
          <div className="flex flex-col gap-5">
            <div className="ml-10">
              <p className="font-bold text-xl text-start">Talk to Us</p>
              <p className="font-bold text-xl text-start">We're Always in your Lobby!</p>
            </div>
            <div className="ml-10">
              <div className="mb-5">
                <p className="font-semibold text-[#E91D27] text-sm text-start">Phone</p>
                <p className="font-semibold text-[var(--goat-black)] text-sm text-start">+91 9751524186</p>
              </div>
              <div className="mb-5">
                <p className="font-semibold text-[#E91D27] text-sm text-start">Email</p>
                <p className="font-semibold text-[var(--goat-black)] text-sm text-start">hello@gmail.com</p>
              </div>
              <div className="mb-5">
                <p className="font-semibold text-[#E91D27] text-sm text-start">Location</p>
                <p className="font-semibold text-[var(--goat-black)] text-sm text-start w-3/4">
                  177A Bleecker Street, Greenwich Village, New York City
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 mt-2 group"
                  href="https://maps.app.goo.gl/hB63RThDwrSafxyt7"
                >
                  <p className="font-semibold text-[var(--goat-black)] text-sm text-start underline">
                    See on Google Map
                  </p>
                  <img
                    src={SeeUsOnGMaps}
                    alt=""
                    className="w-3 h-3 group-hover:-translate-y-1 transform transition-all duration-300"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 h-full border border-[var(--goat-red)] mr-15 flex items-center justify-center py-[16px]">
          <ContactForm />
        </div>
      </div>

      <div className="lg:hidden w-full flex justify-center items-center bg-[var(--goat-black)] min-h-screen">
        <div className="border border-[var(--goat-red)] rounded-2xl w-[90%]">
            <ContactForm />
        </div>
      </div>

    </div>
  );
};

export default Hero7;