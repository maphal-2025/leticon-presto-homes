import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MessageCircle, X, Send, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! Welcome to Leticon Multi Service Group. How can we help you today?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const botResponses = {
    greeting: ["hi", "hello", "hey", "good morning", "good afternoon"],
    services: ["services", "what do you do", "help", "construction", "cleaning", "security", "plumbing", "landscaping"],
    quote: ["quote", "price", "cost", "estimate", "how much"],
    contact: ["contact", "phone", "email", "address", "location"]
  };

  const getRandomResponse = (responses: string[]) => {
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (botResponses.greeting.some(word => message.includes(word))) {
      return getRandomResponse([
        "Hello! Thanks for contacting Leticon. How can we assist you today?",
        "Hi there! We're here to help with all your construction and property service needs.",
        "Good day! What can we help you with today?"
      ]);
    }
    
    if (botResponses.services.some(word => message.includes(word))) {
      return "We offer comprehensive services including:\n\n🏗️ Construction Services\n🧽 Professional Cleaning\n🛡️ Security Services\n🔧 Plumbing Solutions\n🌿 Landscaping\n🧴 Sanitizing Services\n\nWhich service interests you?";
    }
    
    if (botResponses.quote.some(word => message.includes(word))) {
      return "I'd be happy to help you get a quote! For an accurate estimate, please call us at 067 685 8645 or tell me more about your specific needs.";
    }
    
    if (botResponses.contact.some(word => message.includes(word))) {
      return "Here's how to reach us:\n\n📱 WhatsApp: 067 685 8645\n📞 Phone: +27 12 345 6789\n✉️ Email: info@leticon.co.za\n📍 Address: 100 James Clark Street, Med Village, Pretoria\n\nWe're available Mon-Fri 8AM-5PM, with 24/7 emergency services!";
    }
    
    return getRandomResponse([
      "Thanks for your message! For detailed assistance, please call us at 067 685 8645 or email info@leticon.co.za",
      "I'd love to help you with that! Please contact our team directly at 067 685 8645 for personalized service.",
      "That's a great question! Our team can provide detailed information. WhatsApp us at 067 685 8645 or call +27 12 345 6789."
    ]);
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputMessage),
        sender: "bot",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleCallNow = () => {
    window.open("tel:+27676858645", "_self");
  };

  const handleWhatsAppRedirect = () => {
    window.open("https://wa.me/27676858645?text=Hi, I'm interested in your services", "_blank");
    toast({
      title: "Redirecting to WhatsApp",
      description: "Opening WhatsApp to continue the conversation...",
    });
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 rounded-full bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/25 text-white"
            size="icon"
          >
            <MessageCircle className="w-8 h-8" />
          </Button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 h-96">
          <Card className="w-full h-full shadow-2xl border-red-200">
            {/* Header */}
            <CardHeader className="bg-red-500 text-white p-4 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Leticon Support</h3>
                    <p className="text-xs text-red-100">Usually replies instantly</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </CardHeader>

            {/* Messages */}
            <CardContent className="flex-1 p-4 overflow-y-auto h-64 bg-gray-50">
              <div className="space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-xs p-3 rounded-lg ${
                        message.sender === "user"
                          ? "bg-red-500 text-white"
                          : "bg-white text-gray-800 shadow-sm"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                      <p
                        className={`text-xs mt-1 ${
                          message.sender === "user" ? "text-red-100" : "text-gray-500"
                        }`}
                      >
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </CardContent>

            {/* Input Area */}
            <div className="p-4 border-t bg-white rounded-b-lg">
              <div className="flex space-x-2 mb-3">
                <Button
                  onClick={handleCallNow}
                  size="sm"
                  variant="outline"
                  className="flex-1 text-red-600 border-red-200 hover:bg-red-50"
                >
                  <Phone className="w-4 h-4 mr-1" />
                  Call Now
                </Button>
                <Button
                  onClick={handleWhatsAppRedirect}
                  size="sm"
                  className="flex-1 bg-red-500 hover:bg-red-600"
                >
                  <MessageCircle className="w-4 h-4 mr-1" />
                  WhatsApp
                </Button>
              </div>
              
              <div className="flex space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  className="bg-red-500 hover:bg-red-600"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default WhatsAppChat;