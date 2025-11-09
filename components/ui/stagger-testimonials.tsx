"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "Avantage AI completely transformed the way we handle our accounting and vendor payments. Earlier, managing payments and accounts across two companies used to be a nightmare. Now, everything runs on autopilot — reminders, reconciliations, and even payment scheduling. It&apos;s like having an accountant who never sleeps. I&apos;ve saved countless hours every week, and my team finally has time to focus on growing the business instead of chasing paperwork.",
    by: "Ankush, Owner at Texas & Amrutlal",
    imgSrc: "https://i.pravatar.cc/150?img=1"
  },
  {
    tempId: 1,
    testimonial: "Before working with Avantage AI, we had bookings coming from multiple sources — website, partners, and offline agents — and managing them manually was chaotic. The team built us a unified system that not only syncs all our bookings in one place but also provides deep customer insights. I can now see which sources perform best and where our marketing money actually brings returns. It&apos;s been a total game-changer for our operations.",
    by: "Siraj, Owner at BTP Group",
    imgSrc: "https://i.pravatar.cc/150?img=2"
  },
  {
    tempId: 2,
    testimonial: "Our production team was constantly struggling to track the progress of multiple orders and parts. Avantage AI built a custom production management system that brought complete clarity and organization to our process. Now every stage is tracked in real-time — from moulding to delivery. We&apos;ve reduced delays, improved communication, and the system has literally become the backbone of our factory operations.",
    by: "Shubham, Owner at VRC Plasto Mould",
    imgSrc: "https://i.pravatar.cc/150?img=3"
  },
  {
    tempId: 3,
    testimonial: "Running a steel business means you&apos;re constantly needed everywhere — accounts, inventory, dispatch — and that used to tie me to my desk all day. Avantage AI built an ERP system that automates almost all of it. I can now monitor everything from my phone. I don&apos;t have to be physically present at the office for things to move. It&apos;s given me both time freedom and peace of mind — something every business owner dreams of.",
    by: "Harshad, Owner at Harshad Steel",
    imgSrc: "https://i.pravatar.cc/150?img=4"
  },
  {
    tempId: 4,
    testimonial: "We handle over 1,00,000 bookings every year, and managing leads, accounts, and clients was a massive headache. Avantage AI built us a complete CRM and accounting system that automated almost 70% of our work. What earlier required a full team of people is now handled effortlessly by the system. It&apos;s not just automation — it&apos;s intelligent automation that understands how our business actually works. Couldn&apos;t recommend them enough.",
    by: "Faizan, Owner at Tickat, Dubai",
    imgSrc: "https://i.pravatar.cc/150?img=5"
  },
  {
    tempId: 5,
    testimonial: "As an interior brand, we used to get so many client inquiries daily that it became hard to handle each one personally. Avantage AI helped us set up a smart enquiry automation and a chatbot that assists clients in choosing designs based on their preferences. It feels personal yet fully automated. Our conversion rate has gone up and customers love the quick responses — it&apos;s like having a 24x7 design consultant online.",
    by: "Sadiya, Owner at Mazana Interiors",
    imgSrc: "https://i.pravatar.cc/150?img=6"
  },
  {
    tempId: 6,
    testimonial: "Avantage AI designed our e-commerce store beautifully. It&apos;s fast, clean, and perfectly represents our brand online. What I loved most was how they combined great design with smart functionality — product management, order flow, and automation are all smooth. We&apos;ve seen a visible increase in both engagement and conversions after launching our new store.",
    by: "Mahek, Owner at Blossom & Bees",
    imgSrc: "https://i.pravatar.cc/150?img=7"
  },
  {
    tempId: 7,
    testimonial: "The team at Avantage AI helped us bring Whiff to life online. They handled everything — design, store setup, and even automation for inventory and checkout. The entire process felt effortless, and the final result is a store that not only looks premium but performs flawlessly. Our customers love the experience, and our operations are much smoother now.",
    by: "Daksh, Owner at Whiff",
    imgSrc: "https://i.pravatar.cc/150?img=8"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;
  const isMobile = cardSize === 340;
  const heightMultiplier = isMobile ? 1.68 : 1.4;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter 
          ? "z-10 bg-primary text-primary-foreground border-primary" 
          : "z-0 bg-card text-card-foreground border-border hover:border-primary/50"
      )}
      style={{
        width: cardSize,
        height: cardSize * heightMultiplier,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-border"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(',')[0]}`}
        className="mb-4 h-14 w-12 bg-muted object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px hsl(var(--background))"
        }}
      />
      <h3 className={cn(
        "text-base sm:text-xl font-medium",
        isCenter ? "text-primary-foreground" : "text-foreground"
      )}>
        &quot;{testimonial.testimonial}&quot;
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
        isCenter ? "text-primary-foreground/80" : "text-muted-foreground"
      )}>
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(450);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 450 : 340);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-muted/30"
      style={{ height: 850 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

