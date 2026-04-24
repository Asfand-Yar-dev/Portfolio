"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FiMail, FiMapPin, FiSend, FiUser, FiMessageSquare, FiPhone } from "react-icons/fi"
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa"

const SOCIAL = [
  { Icon: FaLinkedinIn, url: "https://www.linkedin.com/in/asfandyar100/",  label: "LinkedIn",  color: "hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5]" },
  { Icon: FaGithub,     url: "https://github.com/Asfand-Yar-dev",          label: "GitHub",    color: "hover:bg-gray-800 hover:text-white hover:border-gray-800"   },
  { Icon: FaWhatsapp,   url: "https://wa.me/923310329489",                  label: "WhatsApp",  color: "hover:bg-[#25D366] hover:text-white hover:border-[#25D366]"  },
]

const INFO = [
  { icon: FiMail,   label: "Email",    value: "asfandyar273263@gmail.com" },
  { icon: FiMapPin, label: "Location", value: "Quetta, Pakistan"           },
  { icon: FiPhone,  label: "Response", value: "Within 24 hours"            },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay },
  viewport: { once: true },
})

export default function Contact({ isDarkMode }) {
  const [form, setForm]           = useState({ name: "", email: "", subject: "", message: "" })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess]       = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 1500))
    setSuccess(true)
    setForm({ name: "", email: "", subject: "", message: "" })
    setSubmitting(false)
    setTimeout(() => setSuccess(false), 4000)
  }

  const card = isDarkMode
    ? "bg-[#1c1c1e] border border-[#2d2d33]"
    : "bg-white border border-gray-200 shadow-sm"

  const input = isDarkMode
    ? "bg-[#0c0c0e] border border-[#2d2d33] text-gray-100 placeholder-gray-600 focus:border-amber-500"
    : "bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-amber-500"

  return (
    <section
      id="contact"
      className={`relative py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-16 overflow-hidden transition-colors duration-300 ${isDarkMode ? "bg-[#0c0c0e]" : "bg-[#faf9f7]"}`}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[150px] ${isDarkMode ? "bg-amber-900/12" : "bg-amber-100/50"}`} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div {...fadeUp()} className="text-center mb-10 sm:mb-14">
          <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 ${isDarkMode ? "bg-amber-900/30 text-amber-400 border border-amber-800/40" : "bg-amber-50 text-amber-600 border border-amber-200"}`}>
            Contact
          </span>
          <h2 className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            Let's <span className="shiny-text">Work Together</span>
          </h2>
          <p className={`mt-4 text-base max-w-lg mx-auto ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
            Have a project in mind or just want to chat? Fill in the form or reach out directly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* LEFT info panel */}
          <motion.div {...fadeUp(0.1)} className="lg:col-span-2 space-y-5">
            <div className={`p-6 rounded-2xl ${card} space-y-5`}>
              <h3 className={`text-lg font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                Contact Information
              </h3>
              {INFO.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className={`p-2.5 rounded-xl mt-0.5 ${isDarkMode ? "bg-amber-900/30 text-amber-400" : "bg-amber-50 text-amber-600"}`}>
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className={`text-xs font-semibold uppercase tracking-wider mb-0.5 ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}>{label}</p>
                    <p className={`text-sm font-medium ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className={`p-6 rounded-2xl ${card}`}>
              <h3 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                Find Me Online
              </h3>
              <div className="flex gap-3">
                {SOCIAL.map(({ Icon, url, label, color }) => (
                  <motion.a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`p-3 rounded-xl border-2 transition-all duration-200 ${isDarkMode ? "border-[#2d2d33] text-gray-400" : "border-gray-200 text-gray-500"} ${color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.94 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className={`p-5 rounded-2xl border-2 border-dashed ${isDarkMode ? "border-green-800/50 bg-green-900/10" : "border-green-300 bg-green-50"}`}>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <p className={`text-sm font-bold ${isDarkMode ? "text-green-400" : "text-green-700"}`}>Available for hire</p>
              </div>
              <p className={`text-xs ${isDarkMode ? "text-green-600" : "text-green-600"}`}>
                Open to freelance projects and full-time roles.
              </p>
            </div>
          </motion.div>

          {/* RIGHT form */}
          <motion.div {...fadeUp(0.2)} className={`lg:col-span-3 p-6 sm:p-8 rounded-2xl ${card}`}>
            <h3 className={`text-xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              Send a Message
            </h3>

            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`flex flex-col items-center justify-center py-16 rounded-xl ${isDarkMode ? "bg-green-900/20 border border-green-800/40" : "bg-green-50 border border-green-200"}`}
              >
                <div className="text-5xl mb-4">✅</div>
                <h4 className={`text-xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Message Sent!</h4>
                <p className={`text-sm text-center ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-xs font-semibold mb-1.5 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Your Name</label>
                    <div className="relative">
                      <FiUser className={`absolute left-3 top-1/2 -translate-y-1/2 ${isDarkMode ? "text-gray-600" : "text-gray-400"}`} size={15} />
                      <input
                        type="text" name="name" value={form.name}
                        onChange={handleChange} required
                        placeholder="John Doe"
                        className={`w-full pl-9 pr-4 py-3 rounded-xl text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500/30 ${input}`}
                      />
                    </div>
                  </div>
                  <div>
                    <label className={`block text-xs font-semibold mb-1.5 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Email Address</label>
                    <div className="relative">
                      <FiMail className={`absolute left-3 top-1/2 -translate-y-1/2 ${isDarkMode ? "text-gray-600" : "text-gray-400"}`} size={15} />
                      <input
                        type="email" name="email" value={form.email}
                        onChange={handleChange} required
                        placeholder="john@example.com"
                        className={`w-full pl-9 pr-4 py-3 rounded-xl text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500/30 ${input}`}
                      />
                    </div>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Subject</label>
                  <input
                    type="text" name="subject" value={form.subject}
                    onChange={handleChange} required
                    placeholder="Project inquiry / Collaboration / Say hello"
                    className={`w-full px-4 py-3 rounded-xl text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500/30 ${input}`}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Message</label>
                  <div className="relative">
                    <FiMessageSquare className={`absolute left-3 top-3.5 ${isDarkMode ? "text-gray-600" : "text-gray-400"}`} size={15} />
                    <textarea
                      name="message" value={form.message}
                      onChange={handleChange} required rows={5}
                      placeholder="Tell me about your project or idea..."
                      className={`w-full pl-9 pr-4 py-3 rounded-xl text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500/30 resize-none ${input}`}
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={submitting}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 ${submitting ? "opacity-70 cursor-not-allowed bg-gradient-to-r from-blue-600 to-purple-600" : "bg-gradient-to-r from-amber-500 to-teal-600 hover:from-amber-600 hover:to-teal-700"} text-white shadow-lg shadow-amber-500/20`}
                  whileHover={!submitting ? { scale: 1.02 } : {}}
                  whileTap={!submitting ? { scale: 0.98 } : {}}
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      <FiSend size={15} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
