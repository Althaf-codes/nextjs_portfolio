'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react';

const skills = ["Flutter", "Dart", "Firebase", "React", "Node.js"];

export default function Banner() {
  const [skillIndex, setSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Graph paper background */}
      <div className="absolute inset-0 bg-graph-paper opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center">
        <div className="w-full flex flex-col md:flex-row items-center justify-between px-4">
          {/* Left side - Text content */}
          <div className="md:w-1/2 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-blue-400">Hi, I'm</span>{' '}
              <span className="text-purple-400">Althaf</span>
            </h1>
            <p className="text-2xl md:text-3xl mb-8">
              I'm experienced in{' '}
              <span className="inline-block min-w-[200px]">
                <span className="text-green-400 animate-fade-in-out">{skills[skillIndex]}</span>
              </span>
            </p>
          </div>

          {/* Right side - Image */}
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 to-purple-600/50 rounded-full blur-xl"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden">
               
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

///////////////////////////////////////////////////////////////////////










// 'use client'

// import { useEffect, useRef } from 'react'

// export default function Banner() {
//   const canvasRef = useRef<HTMLCanvasElement>(null)
//   const typedTextRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const messages = ["Fullstack Flutter Developer", "Mobile App Enthusiast", "UI/UX Lover"]
//     let messageIndex = 0
//     let charIndex = 0
//     let isDeleting = false

//     function typeMessage() {
//       const currentMessage = messages[messageIndex]
//       const typedTextElement = typedTextRef.current

//       if (typedTextElement) {
//         if (isDeleting) {
//           typedTextElement.textContent = currentMessage.substring(0, charIndex - 1)
//           charIndex--
//         } else {
//           typedTextElement.textContent = currentMessage.substring(0, charIndex + 1)
//           charIndex++
//         }

//         if (!isDeleting && charIndex === currentMessage.length) {
//           isDeleting = true
//           setTimeout(typeMessage, 1000)
//         } else if (isDeleting && charIndex === 0) {
//           isDeleting = false
//           messageIndex = (messageIndex + 1) % messages.length
//           setTimeout(typeMessage, 100)
//         } else {
//           setTimeout(typeMessage, isDeleting ? 50 : 100)
//         }
//       }
//     }

//     typeMessage()

//     // Animated background
//     const canvas = canvasRef.current
//     const ctx = canvas?.getContext('2d')
//     let particles: Array<{x: number, y: number, radius: number, dx: number, dy: number}> = []

//     function resizeCanvas() {
//       if (canvas) {
//         canvas.width = window.innerWidth
//         canvas.height = window.innerHeight
//       }
//     }

//     function createParticles() {
//       particles = []
//       const particleCount = 100

//       if (canvas) {
//         for (let i = 0; i < particleCount; i++) {
//           particles.push({
//             x: Math.random() * canvas.width,
//             y: Math.random() * canvas.height,
//             radius: Math.random() * 2 + 1,
//             dx: (Math.random() - 0.5) * 0.5,
//             dy: (Math.random() - 0.5) * 0.5
//           })
//         }
//       }
//     }

//     function drawParticles() {
//       if (ctx && canvas) {
//         ctx.clearRect(0, 0, canvas.width, canvas.height)
//         ctx.fillStyle = 'rgba(59, 130, 246, 0.5)'
//         ctx.lineWidth = 0.5
//         ctx.strokeStyle = 'rgba(59, 130, 246, 0.5)'

//         particles.forEach((particle, i) => {
//           particle.x += particle.dx
//           particle.y += particle.dy

//           if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1
//           if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1

//           ctx.beginPath()
//           ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
//           ctx.fill()

//           for (let j = i + 1; j < particles.length; j++) {
//             const dx = particles[j].x - particle.x
//             const dy = particles[j].y - particle.y
//             const distance = Math.sqrt(dx * dx + dy * dy)

//             if (distance < 100) {
//               ctx.beginPath()
//               ctx.moveTo(particle.x, particle.y)
//               ctx.lineTo(particles[j].x, particles[j].y)
//               ctx.stroke()
//             }
//           }
//         })

//         requestAnimationFrame(drawParticles)
//       }
//     }

//     function initBannerBackground() {
//       resizeCanvas()
//       createParticles()
//       drawParticles()
//     }

//     window.addEventListener('resize', () => {
//       resizeCanvas()
//       createParticles()
//     })

//     initBannerBackground()

//     return () => {
//       window.removeEventListener('resize', resizeCanvas)
//     }
//   }, [])

//   return (
//     <section className="relative h-screen flex items-center justify-center">
//       <canvas ref={canvasRef} className="absolute inset-0" />
//       <div className="relative z-10 text-center">
//         <h1 className="text-4xl font-bold mb-4">John Doe</h1>
//         <div ref={typedTextRef} className="text-xl mb-6"></div>
//         <div className="space-x-4">
//           <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">GitHub</a>
//           <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">LinkedIn</a>
//           <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Twitter</a>
//         </div>
//       </div>
//     </section>
//   )
// }