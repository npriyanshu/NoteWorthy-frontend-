import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface LottieProps {
  // Define specific props for your Lottie component here
  animationData: object; // Example required prop
  loop?: boolean;        // Example optional prop
}

type LottieCardProps = {
  LottieComponent: React.ComponentType<LottieProps>;
  heading: string;
  subtext: string;
};

export default function LottieCard({ LottieComponent, heading, subtext }: LottieCardProps) {
  return (
    <Card className="lottie-card w-full max-w-sm flex justify-center items-center flex-col">
      <CardContent className="pt-6">
        {/* <div className="aspect-square w-full mb-4 bg-muted rounded-lg overflow-hidden"> */}
          <LottieComponent animationData={{ /* your animation data */ }} />
        {/* </div> */}
      </CardContent>
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-center">{heading}</CardTitle>
        <CardDescription className="text-center">{subtext}</CardDescription>
      </CardHeader>
    </Card>
  );
}
