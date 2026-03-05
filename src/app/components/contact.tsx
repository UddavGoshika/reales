import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Landmark, Globe, ChevronDown } from 'lucide-react';
import { ArchitecturalCurves } from './ui/ArchitecturalCurves';

export function Contact() {
  return (
    <section id="contact" className="py-32 px-8 relative overflow-hidden bg-[#0B0B0D]">
      {/* Architectural Accent Curves */}
      <ArchitecturalCurves className="scale-x-[-1]" opacity={0.07} />

      {/* 1. LAYERED LIGHTING DEPTH SECTION */}
      <div className="absolute top-1/2 left-[-10%] w-[60%] h-[60%] bg-[radial-gradient(circle,rgba(198,167,94,0.1)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">

        {/* Section Heading - Royal Discipline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-[#C6A75E] tracking-[6px] text-xs font-bold uppercase mb-4 block">Reservation & Consultation</span>
          <h2 className="text-4xl md:text-5xl mb-6 text-[#C6A75E]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
            Secure Your Legacy
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start mx-auto max-w-7xl">

          {/* Contact Narrative & Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-16"
          >
            {/* Left Text Block */}
            <div className="space-y-8">
              <p className="text-[#B5B5B5] text-xl leading-relaxed font-light tracking-wide lg:max-w-md" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Our consultants are available 24/7 for high-value portfolio consultation and direct architectural reviews.
              </p>

              {/* Visual Location Card Concept */}
              <div className="bg-[#161618]/40 border border-[#C6A75E]/10 p-10 lg:p-12 relative overflow-hidden group">
                <div className="absolute -inset-2 bg-gradient-to-br from-[#C6A75E]/5 to-transparent blur-2xl group-hover:from-[#C6A75E]/10 transition-all duration-1000" />

                <div className="relative z-10 space-y-12">
                  <div className="flex gap-8 group/item">
                    <div className="w-14 h-14 border border-[#C6A75E]/30 bg-black/40 flex items-center justify-center text-[#C6A75E] transition-all duration-700 group-hover:bg-[#C6A75E] group-hover:text-black shadow-[0_0_20px_rgba(198,167,94,0.1)] group-hover:shadow-[0_0_40px_rgba(198,167,94,0.4)]">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm tracking-[4px] uppercase text-[#F5F5F5] font-bold mb-4">Location</h4>
                      <p className="text-[#7A7A7A] leading-relaxed font-light font-serif text-xl">
                        Tirupati, Andhra Pradesh<br />

                        517501, India


                      </p>
                    </div>
                  </div>

                  <div className="flex gap-8 group/item">
                    <div className="w-14 h-14 border border-[#C6A75E]/30 bg-black/40 flex items-center justify-center text-[#C6A75E] transition-all duration-700 group-hover:bg-[#C6A75E] group-hover:text-black">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm tracking-[4px] uppercase text-[#F5F5F5] font-bold mb-4">Email</h4>
                      <p className="text-[#7A7A7A] leading-relaxed font-light font-serif text-xl">
                        tatitoprojects@gmail.com,

                        support@tatitoprojects.com<br />
                        contact@tatitodevelopers.com</p>
                    </div>
                  </div>

                  <div className="flex gap-8 group/item">
                    <div className="w-14 h-14 border border-[#C6A75E]/30 bg-black/40 flex items-center justify-center text-[#C6A75E] transition-all duration-700 group-hover:bg-[#C6A75E] group-hover:text-black">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm tracking-[4px] uppercase text-[#F5F5F5] font-bold mb-4">Phone</h4>
                      <p className="text-[#7A7A7A] leading-relaxed font-light font-serif text-xl">
                        +91 91543 55555 , +91 70937 04706                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map Visual */}
            {/* <div className="bg-[#161618] border border-[#C6A75E]/20 h-[380px] overflow-hidden grayscale contrast-125 brightness-75 hover:grayscale-0 hover:contrast-100 hover:brightness-100 transition-all duration-2000">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121600.51475877478!2d83.17878345155949!3d17.723127599059762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39431389e6973d%3A0xfe819d5943f3d57c!2sVisakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1709400000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div> */}
          </motion.div>

          {/* Luxury Form System Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Form Card Background with Subtle Glow */}
            <div className="bg-[#161618] border border-[#C6A75E]/20 p-12 shadow-[0_30px_100px_rgba(0,0,0,0.8)] relative z-10 transition-all duration-1000 hover:shadow-[0_40px_120px_rgba(198,167,94,0.15)] group rounded-[2.5rem]">

              {/* Form Grouping with Floating Labels Logic */}
              <div className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative group/field">
                    <input type="text" placeholder=" " className="w-full bg-transparent border-b border-[#C6A75E]/20 py-4 text-[#F5F5F5] focus:outline-none focus:border-[#C6A75E] transition-all duration-700 peer" />
                    <label className="absolute left-0 top-4 text-[#7A7A7A] transition-all duration-500 pointer-events-none peer-focus:-top-4 peer-focus:text-[10px] peer-focus:tracking-[4px] peer-focus:uppercase peer-focus:text-[#C6A75E] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:tracking-[4px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-[#C6A75E]">First Name</label>
                  </div>
                  <div className="relative group/field">
                    <input type="text" placeholder=" " className="w-full bg-transparent border-b border-[#C6A75E]/20 py-4 text-[#F5F5F5] focus:outline-none focus:border-[#C6A75E] transition-all duration-700 peer" />
                    <label className="absolute left-0 top-4 text-[#7A7A7A] transition-all duration-500 pointer-events-none peer-focus:-top-4 peer-focus:text-[10px] peer-focus:tracking-[4px] peer-focus:uppercase peer-focus:text-[#C6A75E] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:tracking-[4px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-[#C6A75E]">Last Name</label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative group/field">
                    <input type="email" placeholder=" " className="w-full bg-transparent border-b border-[#C6A75E]/20 py-4 text-[#F5F5F5] focus:outline-none focus:border-[#C6A75E] transition-all duration-700 peer" />
                    <label className="absolute left-0 top-4 text-[#7A7A7A] transition-all duration-500 pointer-events-none peer-focus:-top-4 peer-focus:text-[10px] peer-focus:tracking-[4px] peer-focus:uppercase peer-focus:text-[#C6A75E] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:tracking-[4px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-[#C6A75E]">Email Address</label>
                  </div>
                  <div className="relative group/field">
                    <input type="tel" placeholder=" " className="w-full bg-transparent border-b border-[#C6A75E]/20 py-4 text-[#F5F5F5] focus:outline-none focus:border-[#C6A75E] transition-all duration-700 peer" />
                    <label className="absolute left-0 top-4 text-[#7A7A7A] transition-all duration-500 pointer-events-none peer-focus:-top-4 peer-focus:text-[10px] peer-focus:tracking-[4px] peer-focus:uppercase peer-focus:text-[#C6A75E] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:tracking-[4px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-[#C6A75E]">Phone Number</label>
                  </div>
                </div>

                <div className="relative group/field">
                  <input type="text" placeholder=" " className="w-full bg-transparent border-b border-[#C6A75E]/20 py-4 text-[#F5F5F5] focus:outline-none focus:border-[#C6A75E] transition-all duration-700 peer" />
                  <label className="absolute left-0 top-4 text-[#7A7A7A] transition-all duration-500 pointer-events-none peer-focus:-top-4 peer-focus:text-[10px] peer-focus:tracking-[4px] peer-focus:uppercase peer-focus:text-[#C6A75E] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:tracking-[4px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-[#C6A75E]">Residential Address</label>
                </div>

                <div className="relative group/field">
                  <select className="w-full bg-transparent border-b border-[#C6A75E]/20 py-4 text-[#F5F5F5] focus:outline-none focus:border-[#C6A75E] transition-all duration-700 appearance-none">
                    <option value="" className="bg-[#111113]">What are you looking for?</option>
                    <option value="plots" className="bg-[#111113]">Premium Open Plots</option>
                    <option value="apartments" className="bg-[#111113]">Luxury Apartments</option>
                    <option value="villas" className="bg-[#111113]">Bespoke Villas</option>
                    <option value="investment" className="bg-[#111113]">Strategic Land Investment</option>
                    <option value="commercial" className="bg-[#111113]">Commercial Opportunities</option>
                  </select>
                  <div className="absolute right-0 bottom-4 pointer-events-none">
                    <ChevronDown className="w-4 h-4 text-[#C6A75E]" />
                  </div>
                </div>

                <div className="relative pt-4">
                  <textarea
                    rows={3}
                    placeholder=" "
                    className="w-full bg-transparent border-b border-[#C6A75E]/20 py-4 text-[#F5F5F5] focus:outline-none focus:border-[#C6A75E] transition-all duration-700 peer resize-none"
                  />
                  <label className="absolute left-0 top-8 text-[#7A7A7A] transition-all duration-500 pointer-events-none peer-focus:top-0 peer-focus:text-[10px] peer-focus:tracking-[4px] peer-focus:uppercase peer-focus:text-[#C6A75E] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:tracking-[4px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-[#C6A75E]">
                    Additional Investment Details
                  </label>
                </div>

                {/* Premium Submit Button System */}
                <div className="pt-8">
                  <button className="w-full relative py-6 bg-[#C6A75E] text-black font-bold tracking-[6px] text-xs transition-all duration-700 hover:bg-[#E8D8A0] hover:shadow-[0_0_40px_rgba(198,167,94,0.4)] group-hover:scale-[1.02] transform rounded-full">
                    SUBMIT PORTFOLIO ENQUIRY
                  </button>

                  {/* Trust Badge Below Form */}
                  <div className="flex items-center justify-center gap-6 mt-12 opacity-40 group-hover:opacity-60 transition-opacity duration-1000">
                    <div className="flex items-center gap-2 text-[9px] tracking-[3px] uppercase text-[#F5F5F5]">
                      <Landmark className="w-3 h-3 text-[#C6A75E]" />
                      <span>Regulated Asset Management</span>
                    </div>
                    <div className="h-4 w-[1px] bg-white/10" />
                    <div className="flex items-center gap-2 text-[9px] tracking-[3px] uppercase text-[#F5F5F5]">
                      <Globe className="w-3 h-3 text-[#C6A75E]" />
                      <span>Global Investment Standard</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decoration Elements */}
            <div className="absolute top-12 right-[-24px] w-48 h-48 border border-[#C6A75E]/30 z-0 pointer-events-none opacity-20" />
            <div className="absolute bottom-12 left-[-24px] w-32 h-32 border border-[#C6A75E]/30 z-0 pointer-events-none opacity-20" />
          </motion.div>
        </div>
      </div >
    </section >
  );
}
