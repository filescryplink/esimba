import { ReactNode } from "react";

interface ContentPageProps {
  title: string;
  children: ReactNode;
}

export const ContentPage = ({ title, children }: ContentPageProps) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 pb-4 border-b border-gray-100">
          {title}
        </h1>
        <div className="prose prose-lg prose-blue max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
};
