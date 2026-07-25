import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const defaultSocialLinks = [
  { id: "1", name: "Instagram", href: "https://www.instagram.com/photossubha?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
  { id: "2", name: "Facebook", href: "https://www.facebook.com/velan.shan" },
  { id: "3", name: "Justdial", href: "https://jsdl.in/DT-99IIIAYQA6Q" },
];

const projectTypeOptions = [
  "Wedding Photography",
  "Baby Photoshoot",
  "Maternity Session",
  "Outdoor Portraits",
  "Events",
  "Other",
];

export function ContactSection() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
    projectType: [] as string[],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (type: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      projectType: checked
        ? [...prev.projectType, type]
        : prev.projectType.filter((t) => t !== type),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message, projectType } = formData;
    const text = `Hi, I am ${name}.\nEmail: ${email}\nLooking for: ${projectType.join(', ') || 'General Enquiry'}\n\nMessage: ${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/916383775280?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
    setFormData({ name: "", email: "", message: "", projectType: [] });
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 z-0 overflow-hidden">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="animate-bubble absolute rounded-full bg-white/20"
              style={{
                width: `${Math.random() * 20 + 10}px`,
                height: `${Math.random() * 20 + 10}px`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${Math.random() * 14 + 10}s`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 gap-6 px-4 py-12 sm:gap-8 sm:px-8 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-8 lg:px-14 lg:py-20">
        <div className="flex flex-col justify-center p-2 sm:p-4 lg:p-8 text-white space-y-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">Subha Modeling Studio</span>
            <h2 className="mt-2 font-serif text-[clamp(1.75rem,5vw,3.5rem)] leading-tight text-white drop-shadow-lg">
              Turning Moments Into Timeless Art
            </h2>
            <p className="mt-2 text-sm text-zinc-300">Proprietors: <strong className="text-white">N. S. Velan & S. Mala</strong></p>
          </div>

          <div className="space-y-4 rounded-xl bg-black/40 backdrop-blur-md p-5 border border-white/10 text-sm">
            <div>
              <p className="text-xs uppercase font-semibold text-orange-400 tracking-wider">Branch 1</p>
              <p className="text-zinc-200 mt-1">#25, Arni Road, Arcot - 632503</p>
              <p className="text-xs text-zinc-400">Ranipet District (Opp. Lakshmi Theatre)</p>
            </div>
            <hr className="border-white/10" />
            <div>
              <p className="text-xs uppercase font-semibold text-orange-400 tracking-wider">Branch 2</p>
              <p className="text-zinc-200 mt-1">#53, Arni Road, Arcot - 632503</p>
              <p className="text-xs text-zinc-400">Ranipet District</p>
            </div>
            <hr className="border-white/10" />
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
              <div>
                <span className="text-zinc-400">Phone: </span>
                <a href="tel:7868084814" className="text-white hover:underline">7868084814</a>, <a href="tel:9677511384" className="text-white hover:underline">9677511384</a>
              </div>
              <div>
                <span className="text-zinc-400">WhatsApp: </span>
                <a href="https://wa.me/916383775280" target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">916383775280</a>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-white/20 bg-white/95 p-5 shadow-xl sm:p-6 md:p-8">
          <h3 className="text-xl font-bold text-black sm:text-2xl">
            Get in touch
          </h3>

          <div className="mt-6">
            <p className="mb-1 text-sm text-zinc-500">Mail us at</p>
            <a
              href="mailto:subhastudioarcot@gmail.com"
              className="font-medium text-black hover:underline"
            >
              subhastudioarcot@gmail.com
            </a>
            <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="text-sm text-zinc-500">OR</span>
              {defaultSocialLinks.map((link) => (
                <Button key={link.id} variant="outline" size="default" asChild>
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.name}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <hr className="my-6 border-zinc-200" />

          <form onSubmit={handleSubmit} className="space-y-5">
            <p className="text-sm text-zinc-500">Leave us a brief message</p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Your name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Your message</Label>
              <Textarea
                id="message"
                name="message"
                className="min-h-[100px]"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-3">
              <p className="text-sm text-zinc-500">I&apos;m looking for...</p>
              <div className="grid grid-cols-1 gap-2 min-[400px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3">
                {projectTypeOptions.map((option) => (
                  <div key={option} className="flex items-center gap-2">
                    <Checkbox
                      id={option}
                      checked={formData.projectType.includes(option)}
                      onCheckedChange={(checked) =>
                        handleCheckboxChange(option, checked)
                      }
                    />
                    <Label htmlFor={option} className="text-xs font-normal">
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <Button type="submit" className="w-full">
              Send a message
            </Button>
          </form>
        </div>
      </div>

      <style>{`
        @keyframes bubble {
          0% { transform: translateY(0) scale(0.5); opacity: 0; }
          50% { opacity: 0.6; }
          100% { transform: translateY(-100vh) scale(1.1); opacity: 0; }
        }
        .animate-bubble {
          animation: bubble 15s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
