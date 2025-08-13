import Section from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Linkedin, Github, Instagram } from "lucide-react";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [statusType, setStatusType] = useState(null);
  const [visible, setVisible] = useState(false); // For fade animation

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;

    const templateParams = {
      from_name: form.name.value,
      from_email: form.email.value,
      message: form.message.value,
    };

    try {
      setSending(true);
      setStatusMessage(null);

      await emailjs.send(
        "service_ocex7sc",
        "template_fw8n9ve",
        templateParams,
        { publicKey: "qx_l4XdIqW4NLOkD4" }
      );

      form.reset();
      setStatusType("success");
      setStatusMessage("Thanks for reaching out! I'll get back to you soon.");
      setVisible(true);
    } catch (error) {
      console.error(error);
      setStatusType("error");
      setStatusMessage("Failed to send message. Please try again.");
      setVisible(true);
    } finally {
      setSending(false);
    }
  }

  // Auto-hide message after 5 seconds
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  return (
    <Section id="contact" title="Contact" subtitle="Have an opportunity or a question? Let’s talk.">
      <div className="grid md:grid-cols-2 gap-8">
        <form onSubmit={onSubmit} className="rounded-xl border p-6 space-y-4">
          <div>
            <label className="mb-1 block text-sm">Name</label>
            <Input name="name" required placeholder="Your name" />
          </div>
          <div>
            <label className="mb-1 block text-sm">Email</label>
            <Input type="email" name="email" required placeholder="you@example.com" />
          </div>
          <div>
            <label className="mb-1 block text-sm">Message</label>
            <Textarea name="message" required placeholder="How can I help?" rows={5} />
          </div>
          <div className="flex flex-col gap-2">
            <Button type="submit" variant="accent" className="hover-scale" disabled={sending}>
              {sending ? "Sending..." : "Send Message"}
            </Button>

            {/*  Animated status message */}
            {statusMessage && (
              <p
                className={`text-sm mt-1 transition-opacity duration-500 ease-in-out ${
                  visible ? "opacity-100" : "opacity-0"
                } ${statusType === "success" ? "text-green-600" : "text-red-600"}`}
              >
                {statusMessage}
              </p>
            )}
          </div>
        </form>

        {/* Right side contact info */}
        <div className="rounded-xl border p-6 text-sm text-muted-foreground glass">
          <ul className="space-y-3">
            <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/10 transition-colors">
              <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
              <span className="text-foreground">Thrissur, Kerala</span>
            </li>
            <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/10 transition-colors">
              <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
              <span className="text-foreground">+91 7034398881</span>
            </li>
            <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/10 transition-colors">
              <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
              <a href="mailto:amaljith829@gmail.com" className="story-link">amaljith829@gmail.com</a>
            </li>
            <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/10 transition-colors">
              <Linkedin className="h-5 w-5 text-primary" aria-hidden="true" />
              <a
                href="https://linkedin.com/in/amaljith-a-a-11202322a"
                target="_blank"
                rel="noreferrer noopener"
                className="story-link"
              >
                linkedin.com/in/amaljith-a-a-11202322a
              </a>
            </li>
            <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/10 transition-colors">
              <Github className="h-5 w-5 text-primary" aria-hidden="true" />
              <a
                href="https://github.com/amaljith829"
                target="_blank"
                rel="noreferrer noopener"
                className="story-link"
              >
                github.com/amaljith829
              </a>
            </li>
            <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/10 transition-colors">
              <Instagram className="h-5 w-5 text-primary" aria-hidden="true" />
              <a
                href="https://www.instagram.com/amaljith_a_j/"
                target="_blank"
                rel="noreferrer noopener"
                className="story-link"
              >
                instagram.com/amaljith_a_j
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
