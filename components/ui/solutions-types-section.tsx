"use client";

import { ServicesCloud } from "@/components/ui/services-cloud";

const DEFAULT_SERVICES = [
  "AI Voice Agents",
  "WhatsApp Chatbots",
  "Sales Automation",
  "Lead Scoring",
  "RAG Knowledge Bases",
  "Real-estate Lead Funnels",
  "Gaming CRM & Wallets",
  "Appointment Booking Bots",
  "Call Campaigns & IVR",
  "Agent Assist Dashboards",
  "AI Analytics & Reporting",
  "Data Pipelines & ETL",
  "Shopify/Wix Stores",
  "Custom ERPs & CRMs",
  "Manufacturing Schedulers",
  "Travel Workflows",
  "Payments & Subscriptions",
  "N8n/Make Integrations",
  "LiveKit Voice Agents",
  "Supabase Apps",
];

type Props = {
  services?: string[];
  id?: string;
};

export default function SolutionsTypesSection({
  services = DEFAULT_SERVICES,
  id = "solutions-types",
}: Props) {
  return (
    <section id={id} className="w-full bg-black py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-white">
          Types of solutions we can build for you
        </h2>
        <p className="mt-4 text-center text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
          High-impact builds tailored to your business: convert more, automate more, scale faster.
        </p>
      </div>
      <div className="mx-auto max-w-7xl px-4 mt-10">
        <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-12">
          <ServicesCloud items={services} className="h-[550px] md:h-[650px] lg:h-[700px]" />
        </div>
      </div>
    </section>
  );
}

