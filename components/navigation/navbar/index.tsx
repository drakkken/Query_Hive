import Image from "next/image";
import Link from "next/link";
import { auth } from "@/auth";
import GlobalSearch from "@/components/search/GlobalSearch";
import UserAvatar from "@/components/UserAvatar";
import ROUTES from "@/constants/routes";
import MobileNavigation from "./MobileNavigation";
import Theme from "./Theme";

const Navbar = async () => {
  const session = await auth();

  return (
    <nav className="flex-between background-light850_dark300 fixed z-50 w-full gap-5 p-6 shadow-light-200 dark:shadow-dark-100 sm:px-12 border-b border-light-800 dark:border-dark-400">
      <Link href={ROUTES.HOME} className="flex items-center gap-1">
        <Image
          src="/images/site-logo.svg"
          width={50}
          height={50}
          alt="Dev Overflow Logo"
        />
        <p className="h2-bold font-space-grotesk text-dark-200 dark:text-light-800 max-sm:hidden">
          Code<span className="text-accent-blue">Stack</span>
        </p>
      </Link>

      <GlobalSearch />

      <div className="flex-between gap-5">
        <Theme />
        {session?.user?.id && (
          <UserAvatar
            id={session.user.id}
            name={session.user.name!}
            imageUrl={session.user?.image}
          />
        )}
        <MobileNavigation />
      </div>
    </nav>
  );
};

export default Navbar;
