import { Button } from "@/components/ui/button";

export function PricingPage({}) {
  const pricingTiers = [
    {
      title: "Basic",
      desc: "Lorem ipsum dolor sit amet, qui minimim sint cillum sint consectetur cupidatat.",
      price: 29,
      features: [
        "AI Powered Opportunity Search",
        "Pipeline Management",
        "Keyword Tracking",
        "AI Insights",
        "Government Contracts Database",
      ],
      isPopular: false,
    },
    {
      title: "Premium",
      desc: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim s",
      price: 59,
      features: [
        "AI Powered Opportunity Search",
        "Pipeline Management",
        "Keyword Tracking",
        "AI Insights",
        "Government Contracts Database",
      ],
      isPopular: true,
    },
    {
      title: "White Glove Solution",
      desc: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum ",
      price: null,
      features: [
        "AI Powered Opportunity Search",
        "Pipeline Management",
        "Keyword Tracking",
        "AI Insights",
        "Government Contracts Database",
      ],
      isPopular: false,
    },
  ];

  const steps = ["1", "2", "3"];
  return (
    <section className="min-h-screen w-full py-12 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-zinc-900 dark:to-zinc-800 flex items-center justify-center">
      <div className="container px-4 max-w-6xl md:px-6">
        <div className="flex flex-col justify-center items-center">
          <div className="flex items-center pb-4 justify-center">
            {steps.map((el, index) => (
              <div key={index} className="flex flex-row items-center">
                {" "}
                {/* Add flex-col for vertical alignment */}
                <button className="rounded-full size-6 bg-purple-800 text-background relative">
                  <p className="absolute font-bold text-xs top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    {el}
                  </p>
                </button>
                {index < steps.length - 1 && ( // Only show line if it's not the last step
                  <div className="w-4 h-[1px] bg-purple-600 mt-1"> </div> // Add mt-1 for spacing
                )}
              </div>
            ))}
          </div>
          <h1 className="font-bold text-purple-900 dark:text-purple-500 text-2xl">
            Get Augier AI premium subscription today!
          </h1>
          <h1 className="text-xl pb-8 font-bold">
            Designed for business teams like yours
          </h1>
          <p className="text-sm text-black/50 dark:text-white/50 font-bold">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consec
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8 lg:gap-12">
          {pricingTiers.map((tier) => (
            <PricingTier key={tier.title} {...tier} />
          ))}
        </div>
        <div className="flex py-8 w-full items-center ">
          <div className="w-full h-[1px] bg-purple-600"></div>
          <p className="px-8 text-sm">or</p>
          <div className="w-full h-[1px] bg-purple-600"></div>
        </div>
        <div className="w-full justify-center flex items-center">
          <button className="text-purple-900 p-1 font-semibold rounded-sm ring-1 ring-purple-900">
            Get a Free Trial
          </button>
        </div>
      </div>
    </section>
  );
}

function PricingTier({ title, desc, price, features, isPopular }) {
  return (
    <div
      className={`relative flex flex-col p-8 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border ${
        isPopular
          ? "bg-gradient-to-t text-background from-violet-950 to-violet-900"
          : ""
      }`}
    >
      {isPopular && (
        <div className="px-3 py-1 text-sm text-white bg-green-500 rounded-full inline-block absolute top-2 left-2">
          Recommended
        </div>
      )}
      <div>
        <h3 className="text-xl pb-2 font-extrabold text-center">{title}</h3>
        <h3 className="text-sm text-center">{desc}</h3>
        <div className="mt-4 text-center ">
          <span className="text-4xl font-bold">
            {" "}
            {!price ? "Custom" : "$" + price}
          </span>{" "}
          <span className="text-sm">/month</span>
        </div>
        <ul className="mt-4 text-sm space-y-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-center">
              <CheckIcon className="text-white text-xs mr-2 p-1" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <Button
          className={`w-full  ${
            !isPopular
              ? "bg-gradient-to-b from-violet-900 to-violet-950"
              : "bg-background font-bold  text-purple-800"
          }`}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="text-green-500 mr-2"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
