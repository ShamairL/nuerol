"use client";

import { Compare } from "@/components/ui/compare";
import { Check, X, Star } from "lucide-react";

type Competitor = {
  name: string;
  price: string;
  highlight: string;
};

export default function PricingCompare() {
  const platforms = {
    neuronLearn: {
      name: "Neuron Learn",
      price: "$19/mo or $190/yr",
      highlight: "Save 17%",
      description: "Neuroscience-based learning",
    },
    competitors: [
      {
        name: "Udemy",
        price: "$19-199 per course",
        highlight: "Pay per course",
      },
      {
        name: "Frontend Masters",
        price: "$39/mo or $390/yr",
        highlight: "Premium pricing",
      },
      {
        name: "Pluralsight",
        price: "$45/mo or $449/yr",
        highlight: "Enterprise focus",
      },
    ],
  };

  const features = [
    {
      name: "Learning Algorithm",
      neuronLearn: "AI-driven adaptive learning",
      udemy: "None",
      frontendMasters: "Basic",
      pluralsight: "Basic",
      highlight: true,
    },
    {
      name: "Spaced Repetition",
      neuronLearn: true,
      udemy: false,
      frontendMasters: false,
      pluralsight: false,
      highlight: true,
    },
    {
      name: "1-on-1 Mentorship",
      neuronLearn: true,
      udemy: false,
      frontendMasters: false,
      pluralsight: false,
      highlight: true,
    },
    {
      name: "Code Reviews",
      neuronLearn: true,
      udemy: false,
      frontendMasters: false,
      pluralsight: false,
    },
    {
      name: "Project-Based",
      neuronLearn: true,
      udemy: true,
      frontendMasters: true,
      pluralsight: true,
    },
    {
      name: "Community",
      neuronLearn: "Engaged 24/7 peer & mentor support.",
      udemy: "Limited",
      frontendMasters: "Discord",
      pluralsight: "Forums",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto mt-20 mb-20"> {/* Added margin-top and margin-bottom */}
      <Compare
        firstImage={
          <NeuronLearnSide platforms={platforms} features={features} />
        }
        secondImage={
          <CompetitorsSide platforms={platforms} features={features} />
        }
        className="h-[700px] bg-[#01013a] rounded-xl shadow-xl border border-[#CBACF9]/20"
        slideMode="hover"
        showHandlebar={true}
        keepPosition={true}
      />
    </div>
  );
}

function NeuronLearnSide({
  platforms,
  features,
}: {
  platforms: any;
  features: any;
}) {
  return (
    <div className="h-full p-6 text-white">
      <div className="mb-8">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-2xl font-bold text-[#CBACF9] flex items-center gap-2">
              {platforms.neuronLearn.name}
              <Star className="w-5 h-5 fill-[#CBACF9] text-[#CBACF9]" />
            </h3>
            <p className="text-sm text-gray-300 mt-1">
              {platforms.neuronLearn.description}
            </p>
          </div>
          <div className="px-3 py-1 text-lg bg-[#CBACF9] text-[#01013a] rounded-lg font-semibold">
            Best Value
          </div>
        </div>
        <div className="mt-4 p-4 rounded-lg bg-[#CBACF9]/10 border border-[#CBACF9]/20">
          <div className="text-2xl font-bold text-[#CBACF9]">
            {platforms.neuronLearn.price}
          </div>
          <div className="text-sm text-[#CBACF9] mt-1">
            {platforms.neuronLearn.highlight}
          </div>
        </div>
      </div>

      <div className="border border-[#CBACF9]/20 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="border-b border-[#CBACF9]/20">
            <tr>
              <th className="text-left p-4 text-gray-300">Feature</th>
              <th className="text-left p-4 text-gray-300">Included</th>
            </tr>
          </thead>
          <tbody>
            {features.map(
              (
                feature: {
                  name: string;
                  neuronLearn: boolean | string;
                  highlight?: boolean;
                },
                index: number
              ) => (
                <tr key={index} className="border-b border-[#CBACF9]/20">
                  <td className="p-4 font-medium text-white">{feature.name}</td>
                  <td className="p-4">
                    {typeof feature.neuronLearn === "boolean" ? (
                      <div className="flex justify-center">
                        {feature.neuronLearn ? (
                          <Check className="w-5 h-5 text-[#CBACF9]" />
                        ) : (
                          <X className="w-5 h-5 text-red-500" />
                        )}
                      </div>
                    ) : (
                      <span
                        className={
                          feature.highlight
                            ? "text-[#CBACF9] font-semibold"
                            : "text-white"
                        }
                      >
                        {feature.neuronLearn}
                      </span>
                    )}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CompetitorsSide({
  platforms,
  features,
}: {
  platforms: { competitors: Competitor[] };
  features: any[];
}) {
  return (
    <div className="h-full p-6 text-white">
      <div className="grid gap-4 mb-8">
        {platforms.competitors.map((platform: Competitor, index: number) => (
          <div
            key={index}
            className="p-3 rounded-lg border border-white/10 bg-white/5"
          >
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-white">{platform.name}</h3>
              <div className="text-right">
                <div className="font-semibold text-white">{platform.price}</div>
                <div className="text-xs text-gray-300">
                  {platform.highlight}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border border-white/10 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="border-b border-white/10">
            <tr>
              <th className="text-left p-4 text-gray-300">Feature</th>
              <th className="text-center p-4 text-gray-300">Udemy</th>
              <th className="text-center p-4 text-gray-300">
                Frontend Masters
              </th>
              <th className="text-center p-4 text-gray-300">Pluralsight</th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index} className="border-b border-white/10">
                <td className="p-4 font-medium text-white">{feature.name}</td>
                {["udemy", "frontendMasters", "pluralsight"].map((platform) => (
                  <td key={platform} className="p-4 text-center">
                    {typeof feature[platform] === "boolean" ? (
                      <div className="flex justify-center">
                        {feature[platform] ? (
                          <Check className="w-5 h-5 text-[#CBACF9]" />
                        ) : (
                          <X className="w-5 h-5 text-red-500" />
                        )}
                      </div>
                    ) : (
                      <span className="text-gray-300">{feature[platform]}</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
