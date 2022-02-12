import { company } from "@utils/config";
import { navigation } from "@utils/Mocks/FooterData";
import dayjs from "dayjs";

export const Footer = () => {
  return (
    <footer className="bg-indigo-600">
      <div className="mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-gray-200 hover:[${item.hoverColor}]`}
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-100">
            &copy; {dayjs().year()} {company.name}, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
