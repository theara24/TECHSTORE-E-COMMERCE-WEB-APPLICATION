import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="container mx-auto px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Get in Touch</h1>
        <p className="text-xl text-gray-600">Have questions? We're here to help you find the perfect tech.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
            <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Email Us</h3>
              <p className="text-gray-600">support@techstore.com</p>
              <p className="text-gray-600">sales@techstore.com</p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
            <div className="bg-green-100 p-3 rounded-lg text-green-600">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Call Us</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
              <p className="text-gray-600">Mon-Fri, 9am - 6pm EST</p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
            <div className="bg-purple-100 p-3 rounded-lg text-purple-600">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Visit Us</h3>
              <p className="text-gray-600">123 Tech Avenue, Silicon Valley</p>
              <p className="text-gray-600">California, CA 94025</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-white p-10 rounded-2xl shadow-md border border-gray-100">
            {submitted ? (
              <div className="text-center py-12">
                <div className="bg-green-100 text-green-600 p-4 rounded-full inline-block mb-4">
                  <Send size={40} />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Message Sent!</h2>
                <p className="text-gray-600">Thank you for reaching out. We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Inquiry about product"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea 
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 flex items-center justify-center gap-2"
                >
                  Send Message <Send size={20} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
