import { Advantage } from "../domain/Advantage";
import UsersIcon from "../../../public/assets/icons/users.svg";
import AwardIcon from "../../../public/assets/icons/award.svg";
import ProgressIcon from "../../../public/assets/icons/bar-chart.svg";

export const advantages: Advantage[] = [
  {
    icon: ProgressIcon,
    name: "Learn by doing",
    description:
      "Building real apps and websites for non-profits, NGOs & startups. Gain real-world skills and build your portfolio",
  },
  {
    icon: UsersIcon,
    name: "Join a team",
    description:
      "Projects for non-profits & startups are built together in a team of 2-4 developers so that you can build your network.",
  },
  {
    icon: AwardIcon,
    name: "Land your first software engineering job",
    description:
      "Get official certifications for completing our projects and challenges.",
  },
];
