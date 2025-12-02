import React from 'react';
import { MessageCircle } from 'lucide-react';

interface ButtonProps {
  text: string;
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  icon?: boolean;
  onClick?: () => void;
  className?: string;
  whatsappMessage?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  text, 
  variant = 'primary', 
  fullWidth = false, 
  icon = true,
  onClick,
  className = '',
  whatsappMessage
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg";
  
  const variants = {
    primary: "bg-brand-gold hover:bg-brand-goldLight text-brand-navy shadow-amber-500/30",
    secondary: "bg-brand-navy hover:bg-slate-800 text-white border border-brand-gold/20",
    outline: "border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-navy"
  };

  const defaultMessage = "Olá, vim pelo site e gostaria de um orçamento para coberturas.";
  const finalMessage = whatsappMessage ? encodeURIComponent(whatsappMessage) : encodeURIComponent(defaultMessage);
  const whatsappLink = `https://wa.me/554832460673?text=${finalMessage}`;

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.open(whatsappLink, '_blank');
    }
  };

  return (
    <button 
      onClick={handleClick}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {icon && <MessageCircle className="w-5 h-5" />}
      {text}
    </button>
  );
};