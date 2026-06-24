"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FiMail, FiMapPin, FiSend, FiUser, FiMessageSquare, FiPhone } from "react-icons/fi"
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa"

const SOCIAL = [
  { Icon: FaLinkedinIn, url: "https://www.linkedin.com/in/asfandyar100/",  label: "LinkedIn",  color: "hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5]" },
  { Icon: FaGithub,     url: "https://github.com/Asfand-Yar-dev",          label: "GitHub",    color: "hover:bg-zinc-800 hover:text-white hover:border-zinc-800"   },
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
  const [form, setForm]             = useState({ name: "", email: "", subject: "", message: "" })
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
    ? "bg-zinc-900 border border-zinc-800"
    : "bg-white border border-zinc-200 shadow-sm"

  const input = isDarkMode
    ? "bg-zinc-950 border border-zinc-800 text-zinc-100 placeholder-zinc-700 focus:border-emerald-600"
    : "bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:border-emerald-500"

  const btnPrimary = "bg-emerald-600 hover:bg-emerald-500 text-white"

  return (
    <section
      id="contact"
      className={`relative py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-16 overflow-hidden transition-colors duration-300 ${isDarkMode ? "bg-[#09090b]" : "bg-[#fafafa]"}`}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div {...fadeUp()} className="text-center mb-10 sm:mb-14">
          <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 ${isDarkMode ? "bg-emerald-900/20 text-emerald-400 border border-emerald-800/40" : "bg-emerald-50 text-emerald-700 border border-emerald-200"}`}>
            Contact
          </span>
          <h2 className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${isDarkMode ? "text-white" : "text-zinc-900"}`}>
            Let's <span className="shiny-text">Work Together</span>
          </h2>
          <p className={`mt-4 text-base max-w-lg mx-auto ${isDarkMode ? "text-zinc-400" : "text-zinc-500"}`}>
            Have a project in mind or just want to chat? Fill in the form or reach out directly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* LEFT info panel */}
          <motion.div {...fadeUp(0.1)} className="lg:col-span-2 space-y-5">
            <div className={`p-6 rounded-2xl ${card} space-y-5`}>
              <h3 className={`text-lg font-bold ${isDarkMode ? "text-white" : "text-zinc-900"}`}>
                Contact Information
              </h3>
              {INFO.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className={`p-2.5 rounded-xl mt-0.5 ${isDarkMode ? "bg-emerald-900/30 text-emerald-400" : "bg-emerald-50 text-emerald-600"}`}>
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className={`text-xs font-semibold uppercase tracking-wider mb-0.5 ${isDarkMode ? "text-zinc-600" : "text-zinc-400"}`}>{label}</p>
                    <p className={`text-sm font-medium ${isDarkMode ? "text-zinc-300" : "text-zinc-700"}`}>{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className={`p-6 rounded-2xl ${card}`}>
              <h3 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${isDarkMode ? "text-zinc-500" : "text-zinc-500"}`}>
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
                    className={`p-3 rounded-xl border-2 transition-all duration-200 ${isDarkMode ? "border-zinc-800 text-zinc-500" : "border-zinc-200 text-zinc-500"} ${color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.94 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className={`p-5 rounded-2xl border-2 border-dashed ${isDarkMode ? "border-zinc-700 bg-zinc-900/50" : "border-zinc-300 bg-zinc-50"}`}>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <p className={`text-sm font-bold ${isDarkMode ? "text-zinc-300" : "text-zinc-700"}`}>Available for hire</p>
              </div>
              <p className={`text-xs ${isDarkMode ? "text-zinc-600" : "text-zinc-500"}`}>
                Open to freelance projects and full-time roles.
              </p>
            </div>
          </motion.div>

          {/* RIGHT form */}
          <motion.div {...fadeUp(0.2)} className={`lg:col-span-3 p-6 sm:p-8 rounded-2xl ${card}`}>
            <h3 className={`text-xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-zinc-900"}`}>
              Send a Message
            </h3>

            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`flex flex-col items-center justify-center py-16 rounded-xl ${isDarkMode ? "bg-zinc-800 border border-zinc-700" : "bg-zinc-50 border border-zinc-200"}`}
              >
                <div className="text-5xl mb-4">✅</div>
                <h4 className={`text-xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-zinc-900"}`}>Message Sent!</h4>
                <p className={`text-sm text-center ${isDarkMode ? "text-zinc-400" : "text-zinc-500"}`}>
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-xs font-semibold mb-1.5 ${isDarkMode ? "text-zinc-400" : "text-zinc-600"}`}>Your Name</label>
                    <div className="relative">
                      <FiUser className={`absolute left-3 top-1/2 -translate-y-1/2 ${isDarkMode ? "text-zinc-600" : "text-zinc-400"}`} size={15} />
                      <input
                        type="text" name="name" value={form.name}
                        onChange={handleChange} required
                        placeholder="John Doe"
                        className={`w-full pl-9 pr-4 py-3 rounded-xl text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-zinc-500/20 ${input}`}
                      />
                    </div>
                  </div>
                  <div>
                    <label className={`block text-xs font-semibold mb-1.5 ${isDarkMode ? "text-zinc-400" : "text-zinc-600"}`}>Email Address</label>
                    <div className="relative">
                      <FiMail className={`absolute left-3 top-1/2 -translate-y-1/2 ${isDarkMode ? "text-zinc-600" : "text-zinc-400"}`} size={15} />
                      <input
                        type="email" name="email" value={form.email}
                        onChange={handleChange} required
                        placeholder="john@example.com"
                        className={`w-full pl-9 pr-4 py-3 rounded-xl text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-zinc-500/20 ${input}`}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${isDarkMode ? "text-zinc-400" : "text-zinc-600"}`}>Subject</label>
                  <input
                    type="text" name="subject" value={form.subject}
                    onChange={handleChange} required
                    placeholder="Project inquiry / Collaboration / Say hello"
                    className={`w-full px-4 py-3 rounded-xl text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-zinc-500/20 ${input}`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${isDarkMode ? "text-zinc-400" : "text-zinc-600"}`}>Message</label>
                  <div className="relative">
                    <FiMessageSquare className={`absolute left-3 top-3.5 ${isDarkMode ? "text-zinc-600" : "text-zinc-400"}`} size={15} />
                    <textarea
                      name="message" value={form.message}
                      onChange={handleChange} required rows={5}
                      placeholder="Tell me about your project or idea..."
                      className={`w-full pl-9 pr-4 py-3 rounded-xl text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-zinc-500/20 resize-none ${input}`}
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={submitting}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 shadow-sm ${submitting ? "opacity-60 cursor-not-allowed" : ""} ${btnPrimary}`}
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
