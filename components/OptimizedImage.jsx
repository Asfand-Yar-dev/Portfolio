// import Image from 'next/image';
// import { motion } from 'framer-motion';

// export default function OptimizedImage({ src, alt, className, priority = false, fill = false, sizes = "100vw", ...props }) {
//   // Handle cases where src might be undefined (like in your Projects component)
//   if (!src) {
//     return (
//       <div className={`bg-gray-200 dark:bg-gray-800 flex items-center justify-center ${className}`}>
//         <span className="text-gray-400 dark:text-gray-600 text-sm">No image</span>
//       </div>
//     );
//   }
  
//   // For local images in public folder
//   if (typeof src === 'string' && src.startsWith('/')) {
//     return (
//       <div className={`relative ${className}`} style={{ position: 'relative' }}>
//         <Image
//           src={src}
//           alt={alt || "Image"}
//           fill={fill}
//           sizes={sizes}
//           priority={priority}
//           className="object-cover"
//           loading={priority ? "eager" : "lazy"}
//           {...props}
//         />
//       </div>
//     );
//   }
  
//   // For external images or imported images
//   return (
//     <div className={`relative ${className}`} style={{ position: 'relative' }}>
//       <Image
//         src={src}
//         alt={alt || "Image"}
//         fill={fill}
//         sizes={sizes}
//         priority={priority}
//         className="object-cover"
//         loading={priority ? "eager" : "lazy"}
//         {...props}
//       />
//     </div>
//   );
// }

// // Motion-wrapped version for animations
// export function MotionOptimizedImage({ src, alt, className, animate, transition, ...props }) {
//   return (
//     <motion.div
//       className={className}
//       animate={animate}
//       transition={transition}
//       style={{ position: 'relative', width: '100%', height: '100%' }}
//     >
//       <OptimizedImage 
//         src={src} 
//         alt={alt} 
//         className="w-full h-full" 
//         fill 
//         {...props} 
//       />
//     </motion.div>
//   );
// }