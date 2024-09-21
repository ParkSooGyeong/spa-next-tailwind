'use client';

import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:tuna3636@naver.com?subject=Inquiry from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <section className="container mx-auto p-8">
        <div className="page-heading">
          <span className="icon text-4xl"><i className="lnr lnr-license"></i></span>
          <h2>Contact Me.</h2>
        </div>
        <div className="container mx-auto text-left pb-1">
          <div className="subheading text-center mb-12">
            <h3>Inquiries</h3>
          </div>
        </div>

        <div className="text-center mb-16">
          <form className="max-w-xl mx-auto" onSubmit={handleSendMail}>
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full md:w-1/2 bg-transparent border-b-2 border-gray-600 text-white p-2 focus:outline-none focus:border-blue-400"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full md:w-1/2 bg-transparent border-b-2 border-gray-600 text-white p-2 focus:outline-none focus:border-blue-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <textarea
              placeholder="How can we help you?"
              className="w-full bg-transparent border-b-2 border-gray-600 text-white p-2 mt-6 focus:outline-none focus:border-blue-400"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-transparent border-2 border-blue-400 text-blue-400 px-6 py-2 rounded mt-6 hover:bg-blue-400 hover:text-white transition duration-300"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

        <div className="text-center mb-16">
          <div className="flex flex-col md:flex-row justify-center md:space-x-16 space-y-8 md:space-y-0">
            <div className="text-center">
              <FaEnvelope className="text-blue-400 text-4xl mx-auto" />
              <p className="text-gray-300 mt-2">tuna3636@naver.com</p>
            </div>
            <div className="text-center">
              <FaPhone className="text-blue-400 text-4xl mx-auto" />
              <p className="text-gray-300 mt-2">+82 010 9399 9969</p>
            </div>
            <div className="text-center">
              <FaMapMarkerAlt className="text-blue-400 text-4xl mx-auto" />
              <p className="text-gray-300 mt-2">서울특별시 노원구</p>
            </div>
          </div>
        </div>

        <div className="w-full h-64 grayscale">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.479625304866!2d127.07208667626872!3d37.65556817182607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cbe050a0e3935%3A0x9acb6f8a8037b17b!2z7ISc7Jq47Yq567OE7ZqMIO2ajOyekOyImOq1rCDslZzsmrDrj5kg7IK87Iud66GcIDIwOA!5e0!3m2!1sko!2skr!4v1635730035619!5m2!1sko!2skr"
            width="100%"
            height="100%"
            allowFullScreen={false}
            loading="lazy"
            style={{ filter: "grayscale(100%)" }}
          ></iframe>
        </div>
      </section>
    </div>
  );
}
