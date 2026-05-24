"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Instagram,
  MessageCircle,
  Send,
  Check,
  AlertCircle,
  Loader2,
} from "lucide-react";

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import type { ContactFormData } from "@/types";

const SOCIAL_LINKS = [
  {
    platform: "Email",
    icon: Mail,
    href: "mailto:amritniraula9@gmail.com",
    label: "amritniraula9@gmail.com",
    accent: "#FF2D55",
  },
  {
    platform: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/this_is._amrit/",
    label: "@this_is._amrit",
    accent: "#BF5AF2",
  },
  {
    platform: "Facebook",
    icon: FacebookIcon,
    href: "https://www.facebook.com/share/1Enop2SNK2/?mibextid=wwXIfr",
    label: "facebook.com/amritniraula",
    accent: "#1877F2",
  },
  {
    platform: "LinkedIn",
    icon: LinkedInIcon,
    href: "https://www.linkedin.com/in/amritniraula/",
    label: "linkedin.com/in/amritniraula",
    accent: "#0A84FF",
  },
  {
    platform: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/9779816384882",
    label: "+977 981-6384882",
    accent: "#30D158",
  },
];

const INITIAL_FORM: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [form, setForm] = useState<ContactFormData>(INITIAL_FORM);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const validate = () => {
    const newErrors: Partial<ContactFormData> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim() || form.message.length < 10)
      newErrors.message = "Message must be at least 10 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
      setForm(INITIAL_FORM);
      toast.success("Message sent! I'll get back to you soon.", { duration: 5000 });
    } catch {
      setStatus("error");
      toast.error("Failed to send. Try emailing directly.", { duration: 5000 });
    } finally {
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#080808]" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(255,45,85,0.04) 0%, transparent 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#FF2D55]" />
            <span className="text-xs text-[#FF2D55] uppercase tracking-[0.3em] font-medium">
              Contact
            </span>
            <div className="w-8 h-px bg-[#FF2D55]" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-4"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Let&apos;s Create{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                background: "linear-gradient(135deg, #FF2D55, #BF5AF2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Together
            </span>
          </h2>
          <p className="text-white/40 max-w-lg mx-auto text-sm">
            Have a project in mind? I&apos;d love to hear about it. Send me a
            message and I&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <h3
              className="text-2xl font-bold text-white mb-3"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Get in Touch
            </h3>
            <p className="text-white/40 text-sm mb-8 leading-relaxed">
              Whether you need a full project edit, a short reel, a commercial,
              or just want to say hello — my inbox is always open.
            </p>

            {/* Social links */}
            <div className="space-y-3">
              {SOCIAL_LINKS.map((link, i) => (
                <motion.a
                  key={link.platform}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-2xl border border-white/[0.05] hover:border-white/10 transition-all duration-300"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.07 }}
                  whileHover={{
                    x: 4,
                    borderColor: `${link.accent}30`,
                    boxShadow: `0 0 20px ${link.accent}10`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${link.accent}15`,
                      border: `1px solid ${link.accent}25`,
                    }}
                  >
                    <link.icon size={16} style={{ color: link.accent }} />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-wider mb-0.5">
                      {link.platform}
                    </div>
                    <div className="text-sm text-white/70 group-hover:text-white transition-colors duration-200">
                      {link.label}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl p-6 md:p-8 space-y-5"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Name + Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <FormField
                  label="Your Name"
                  name="name"
                  type="text"
                  placeholder="Amrit Niroula"
                  value={form.name}
                  onChange={handleChange}
                  error={errors.name}
                />
                <FormField
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                />
              </div>

              {/* Subject */}
              <FormField
                label="Subject"
                name="subject"
                type="text"
                placeholder="Cinematic Edit for Brand Campaign"
                value={form.subject}
                onChange={handleChange}
                error={errors.subject}
              />

              {/* Message */}
              <div>
                <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl text-sm text-white/80 placeholder-white/20 outline-none resize-none transition-all duration-300 ${
                    errors.message
                      ? "border-[#FF2D55]/50"
                      : "border-white/[0.08] focus:border-[rgba(255,45,85,0.4)]"
                  }`}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: `1px solid ${errors.message ? "rgba(255,45,85,0.5)" : "rgba(255,255,255,0.08)"}`,
                  }}
                />
                {errors.message && (
                  <p className="mt-1.5 text-[11px] text-[#FF2D55] flex items-center gap-1">
                    <AlertCircle size={10} /> {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="w-full py-4 rounded-xl text-sm font-bold text-white relative overflow-hidden disabled:opacity-70"
                style={{
                  background:
                    status === "success"
                      ? "linear-gradient(135deg, #30D158, #30D15880)"
                      : "linear-gradient(135deg, #FF2D55, #BF5AF2)",
                  boxShadow:
                    status === "success"
                      ? "0 0 20px rgba(48,209,88,0.3)"
                      : "0 0 20px rgba(255,45,85,0.2)",
                }}
                whileHover={
                  status === "idle" ? { scale: 1.01, boxShadow: "0 0 30px rgba(255,45,85,0.4)" } : {}
                }
                whileTap={status === "idle" ? { scale: 0.99 } : {}}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {status === "loading" ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      Sending...
                    </>
                  ) : status === "success" ? (
                    <>
                      <Check size={14} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      Send Message
                    </>
                  )}
                </span>
              </motion.button>

              <p className="text-[11px] text-center text-white/20">
                Typically responds within 24 hours · Based in Nepal
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  error,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl text-sm text-white/80 placeholder-white/20 outline-none transition-all duration-300"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: `1px solid ${error ? "rgba(255,45,85,0.5)" : "rgba(255,255,255,0.08)"}`,
        }}
        onFocus={(e) => {
          e.target.style.borderColor = "rgba(255,45,85,0.4)";
        }}
        onBlur={(e) => {
          e.target.style.borderColor = error
            ? "rgba(255,45,85,0.5)"
            : "rgba(255,255,255,0.08)";
        }}
      />
      {error && (
        <p className="mt-1.5 text-[11px] text-[#FF2D55] flex items-center gap-1">
          <AlertCircle size={10} /> {error}
        </p>
      )}
    </div>
  );
}
