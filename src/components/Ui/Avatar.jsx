import React from 'react';
import { 
  FaDesktop, 
  FaChair, 
  FaPrint, 
  FaLaptop, 
  FaTabletAlt, 
  FaHeadphones, 
  FaKeyboard, 
  FaMouse, 
  FaServer, 
  FaNetworkWired,
  FaUser,
  FaBox,
  FaTools,
  FaLightbulb,
  FaShieldAlt
} from 'react-icons/fa';

const Avatar = ({ 
  name, 
  category, 
  size = 'md', 
  className = '',
  type = 'product' // 'product' or 'user'
}) => {
  // Size classes
  const sizeClasses = {
    sm: 'w-6 h-6 text-xs',
    md: 'w-8 h-8 text-sm',
    lg: 'w-10 h-10 text-base',
    xl: 'w-12 h-12 text-lg',
    '2xl': 'w-16 h-16 text-xl'
  };

  // Color classes based on category
  const getColorClasses = (category) => {
    const colors = {
      'Electronics': 'bg-blue-100 text-blue-600',
      'Furniture': 'bg-green-100 text-green-600',
      'Appliances': 'bg-purple-100 text-purple-600',
      'Office Supplies': 'bg-yellow-100 text-yellow-600',
      'IT Equipment': 'bg-indigo-100 text-indigo-600',
      'Networking': 'bg-cyan-100 text-cyan-600',
      'Printing & Imaging': 'bg-pink-100 text-pink-600',
      'Audio Visual': 'bg-orange-100 text-orange-600',
      'Security Equipment': 'bg-red-100 text-red-600',
      'Storage Solutions': 'bg-gray-100 text-gray-600'
    };
    return colors[category] || 'bg-gray-100 text-gray-600';
  };

  // Get icon based on category or name
  const getIcon = (category, name) => {
    const categoryIcons = {
      'Electronics': FaDesktop,
      'Furniture': FaChair,
      'Appliances': FaTools,
      'Office Supplies': FaBox,
      'IT Equipment': FaLaptop,
      'Networking': FaNetworkWired,
      'Printing & Imaging': FaPrint,
      'Audio Visual': FaHeadphones,
      'Security Equipment': FaShieldAlt,
      'Storage Solutions': FaServer
    };

    // Check for specific product types in name
    const nameLower = name.toLowerCase();
    if (nameLower.includes('laptop')) return FaLaptop;
    if (nameLower.includes('desktop') || nameLower.includes('computer')) return FaDesktop;
    if (nameLower.includes('printer')) return FaPrint;
    if (nameLower.includes('chair')) return FaChair;
    if (nameLower.includes('tablet')) return FaTabletAlt;
    if (nameLower.includes('keyboard')) return FaKeyboard;
    if (nameLower.includes('mouse')) return FaMouse;
    if (nameLower.includes('headphone') || nameLower.includes('speaker')) return FaHeadphones;
    if (nameLower.includes('lamp') || nameLower.includes('light')) return FaLightbulb;

    return categoryIcons[category] || FaBox;
  };

  // Get initials for user avatars
  const getInitials = (name) => {
    if (!name) return '?';
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  if (type === 'user') {
    return (
      <div className={`${sizeClasses[size]} ${getColorClasses('Office Supplies')} rounded-full flex items-center justify-center font-semibold ${className}`}>
        {getInitials(name)}
      </div>
    );
  }

  const IconComponent = getIcon(category, name);

  return (
    <div className={`${sizeClasses[size]} ${getColorClasses(category)} rounded-lg flex items-center justify-center ${className}`}>
      <IconComponent className="w-1/2 h-1/2" />
    </div>
  );
};

export default Avatar; 