"use client";

import { Logo } from "@/components/Logo";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

export function PlatformHeader() {
  const { t } = useLanguage();

  const renderName = () => {
    if (t.platform.name.split("أضواء").length > 1) {
      const parts = t.platform.name.split("أضواء");
      return (
        <>
          {parts[0]}
          <span className="text-asl-orange">أضواء</span>
          {parts[1]}
        </>
      );
    }
    if (t.platform.name.includes("Adwaa")) {
      const parts = t.platform.name.split("Adwaa");
      return (
        <>
          {parts[0]}
          <span className="text-asl-orange">Adwaa</span>
          {parts[1]}
        </>
      );
    }
    return t.platform.name;
  };

  const renderTagline = () => {
    const tagline = t.platform.tagline.replace(/^[\s—-]+|[\s—-]+$/g, "");
    if (tagline.includes("أضواء")) {
      const parts = tagline.split("أضواء");
      return (
        <>
          {parts[0]}
          <span className="text-asl-orange">أضواء</span>
          {parts[1]}
        </>
      );
    }
    return tagline;
  };

  return (
    <header className="relative z-10 flex flex-col items-center px-6 pt-8 md:pt-10">
      <div className="absolute end-6 top-6 md:end-10 md:top-8">
        <LanguageSwitcher />
      </div>

      <Logo className="mb-5" size="lg" />

      <h1 className="mb-2 text-center text-xl font-bold text-asl-navy md:text-2xl">
        {renderName()}
      </h1>

      <p className="mb-1 text-sm text-asl-navy/70 md:text-base">
        {renderTagline()}
      </p>

      <p className="mb-1 mt-5 text-base font-semibold text-asl-navy md:text-lg">
        {t.platform.welcome}
      </p>

      <p className="text-sm text-asl-navy/75 md:text-base">
        {t.platform.chooseLogin}
      </p>
    </header>
  );
}
