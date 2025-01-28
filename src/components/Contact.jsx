import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-white_smoke">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-600 text-licorice text-center mb-8">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Contact Information */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold  mb-4">Get in Touch</h3>
            <p className="text-ebony mb-2">
              <strong>Address:</strong> Raipur Rani, Road, Behlon, Haryana 134205
            </p>
            <p className="text-ebony mb-2">
              <strong>Email:</strong>{" "}
              <a href="mailto:dharoharfarmmorni@gmail.com" className="text-tan underline">
                dharoharfarmmorni@gmail.com
              </a>
            </p>
            <p className="text-ebony mb-2">
              <strong>Phone:</strong>{" "}
              <a href="tel:8168402612" className="text-tan underline">
                8168402612
              </a>
            </p>
          </div>

          {/* Google Map */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <iframe
              title="Dharohar Farmstay Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.8114862807147!2d77.07038497503608!3d30.695579687428094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f99a26bef8517%3A0xcea3a2d45131f241!2sDHAROHAR%20FARM%20HOUSE%2C%20MORNI%20HILLS!5e0!3m2!1sen!2sin!4v1738005025629!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
