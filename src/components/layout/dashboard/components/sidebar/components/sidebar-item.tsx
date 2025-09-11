import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

type SidebarItemProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  href: string;
  isActive?: boolean;
};

export function SidebarItem({ item }: { item: SidebarItemProps }) {
  const navigate = useNavigate();

  return (
    <motion.button
      onClick={() => navigate(item?.href)}
      className={clsx(
        "relative w-full h-12 cursor-pointer transition-all rounded-full p-[3px] overflow-hidden",
        !item?.isActive && "hover:!bg-bg-gray-shade"
      )}
      initial={false}
      animate={{
        background: item?.isActive
          ? "linear-gradient(90deg, #00ff9d, #77EDB4)"
          : "linear-gradient(90deg, transparent, transparent)",
        boxShadow: item?.isActive
          ? "0 0 15px rgba(0, 255, 157, 0.6), 0 0 30px rgba(119, 237, 180, 0.4)"
          : "0 0 0 rgba(0,0,0,0)",
      }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
    >
      <motion.div
        className={clsx(
          "w-full flex items-center gap-x-2 bg-white px-1 rounded-full h-full relative z-10",
          !item?.isActive && "!bg-transparent"
        )}
        layout
      >
        <div className="w-[2.375rem] h-[2.375rem] rounded-full bg-bg-primary flex items-center justify-center">
          <item.icon
            className={clsx(
              "w-5 h-5",
              item?.isActive ? "text-green-primary" : "text-[#E1E1E1]"
            )}
          />
        </div>

        <span
          className={clsx(
            "text-sm font-medium text-white transition-colors duration-500",
            item?.isActive && "!font-semibold !text-bg-primary"
          )}
        >
          {item?.label}
        </span>
      </motion.div>

      <motion.div
        className="absolute inset-0 rounded-full"
        initial={false}
        animate={{
          scale: item?.isActive ? 1.02 : 1,
          opacity: item?.isActive ? 0.8 : 0,
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(circle at center, rgba(0,255,157,0.25), transparent 70%)",
          filter: "blur(12px)",
        }}
      />
    </motion.button>
  );
}
