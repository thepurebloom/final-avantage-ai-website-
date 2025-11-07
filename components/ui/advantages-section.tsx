const ADVANTAGES = [
  {
    title: "Save Time",
    description: "Automate repetitive tasks and free up your team to focus on what matters most.",
  },
  {
    title: "Reduce Costs",
    description: "Cut operational expenses with intelligent automation and optimization.",
  },
  {
    title: "Boost Speed",
    description: "Accelerate your processes and deliver results faster than ever before.",
  },
  {
    title: "Personalize & Customize Everything",
    description: "Tailor solutions to your unique business needs and customer preferences.",
  },
  {
    title: "Increase Profit",
    description: "Drive revenue growth through smarter operations and better decision-making.",
  },
  {
    title: "Enhance Customer Experience",
    description: "Delight your customers with seamless, intelligent, and personalized interactions.",
  },
  {
    title: "Accelerate Growth",
    description: "Scale your business rapidly with AI-powered solutions that grow with you.",
  },
  {
    title: "Reduce Workforce Dependency",
    description: "Minimize reliance on manual labor with intelligent automation systems.",
  },
  {
    title: "Maximize Productivity",
    description: "Get more done in less time with AI-driven efficiency improvements.",
  },
  {
    title: "Automate Your Operations",
    description: "Streamline workflows and eliminate manual processes across your business.",
  },
  {
    title: "Eliminate Human Error",
    description: "Ensure accuracy and consistency with AI-powered quality control.",
  },
  {
    title: "Recover Pending Payments Instantly",
    description: "Automate payment reminders and recovery processes for better cash flow.",
  },
];

export function AdvantagesSection() {
  return (
    <div className="w-full py-8 bg-black">
      <div className="container mx-auto px-4">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADVANTAGES.map((advantage, index) => (
              <div key={index} className="flex flex-row gap-3 items-start group">
                <div className="mt-2 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300" />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-semibold text-white group-hover:text-purple-200 transition-colors duration-300">
                    {advantage.title}
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

