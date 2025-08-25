import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";


const ContactSection = () => {

    const form = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState<boolean | null>(null);


    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
        .sendForm(
        "service_t29y87d",   // Replace with your EmailJS service ID
        "template_5wyyi4d",  // Replace with your EmailJS template ID
        form.current!,
        "UlpMzLIvkpJvDPgxf"       // Replace with your EmailJS user/public key
        )
        .then(
        () => {
            setLoading(false);
            setSuccess(true);
            if (form.current) {
                form.current.reset();
            }
        },
        (error) => {
            setLoading(false);
            setSuccess(false);
            console.error(error.text);
        }
        );
    };


  return (
    <section id="contact" className="py-20 px-6 bg-gray-900/95">
        <div className="max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="1">
            <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Get In <span className="bg-gradient-to-r from-[#3ABEFF] to-[#CB52F8] bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Ready to bring your ideas to life? Let&apos;s discuss your next project!
            </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
                <div>
                <h3 className="text-2xl font-semibold mb-6 text-white">
                    Let&apos;s Connect
                </h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                    I&apos;m always excited to work on new projects and collaborate with amazing people. 
                    Whether you have a project in mind or just want to chat about technology, 
                    feel free to reach out!
                </p>
                </div>

                <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-blue-400/10">
                        <Mail className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                    <p className="font-medium text-white">Email</p>
                    <p className="text-gray-400">maharjanjeken@gmail.com</p>
                    </div>
                </div>
                
                <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-blue-400/10">
                    <Phone className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                    <p className="font-medium text-white">Phone</p>
                    <p className="text-gray-400">+977 9869026412</p>
                    </div>
                </div>
                
                <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-blue-400/10">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                    <p className="font-medium text-white">Location</p>
                    <p className="text-gray-400">Lalitpur, Nepal</p>
                    </div>
                </div>
                </div>

                {/* Availability */}
                <Card className="bg-gray-700/40 border-border/50">
                <CardContent className="p-6">
                    <h4 className="font-semibold text-white mb-2">Current Availability</h4>
                    <p className="text-gray-400 text-sm">
                    🟢 Available for freelance projects and full-time opportunities
                    </p>
                </CardContent>
                </Card>
            </div>

            {/* Contact Form */}
            <Card className="bg-gray-700/40 border-border/50">
                <CardHeader>
                    <CardTitle className="text-xl text-white font-semibold">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                    <form ref={form} onSubmit={sendEmail} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name" className="text-white">Name</Label>
                            <Input 
                            id="name" 
                            name="name" // matches {{name}}
                            placeholder="Your Name" 
                            className="bg-gray-900/65 text-white border-gray-600"
                            required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-white">Email</Label>
                            <Input 
                            id="email" 
                            name="email" // matches {{email}}
                            type="email" 
                            placeholder="your.email@example.com"
                            className="bg-gray-900/65 text-white border-gray-600"
                            required
                            />
                        </div>
                        </div>
                        
                        <div className="space-y-2">
                        <Label htmlFor="subject" className="text-white">Subject</Label>
                        <Input 
                            id="subject" 
                            name="title" // matches {{title}} (used title in EmailJS)
                            placeholder="Project Discussion"
                            className="bg-gray-900/65 text-white border-gray-600"
                            required
                        />
                        </div>
                        
                        <div className="space-y-2">
                        <Label htmlFor="message" className="text-white">Message</Label>
                        <Textarea 
                            id="message" 
                            name="message" // matches {{message}}
                            placeholder="Tell me about your project or idea..."
                            className="bg-gray-900/65 min-h-[120px] text-white border-gray-600"
                            required
                        />
                        </div>
                        
                        <Button
                            type="submit"
                            variant="default"
                            size="lg"
                            className="w-full cursor-pointer bg-gradient-to-r from-[#3ABEFF] to-[#CB52F8] text-black"
                            disabled={loading}
                            >
                            <Send className="w-4 h-4 mr-2" />
                            {loading ? "Sending..." : "Send Message"}
                        </Button>


                        {success === true && (
                            <p className="text-green-400 mt-2">Message sent successfully!</p>
                        )}
                        {success === false && (
                            <p className="text-red-400 mt-2">Oops, something went wrong. Please try again.</p>
                        )}

                    </form>
                </CardContent>
            </Card>
            </div>
        </div>
    </section>
  );
};

export default ContactSection;