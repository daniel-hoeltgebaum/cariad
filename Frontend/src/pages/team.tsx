import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  github?: string;
  linkedin?: string;
  email?: string;
  website?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Lead Developer",
    bio: "Full-stack developer with expertise in React and Node.js",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    github: "https://github.com/alexjohnson",
    linkedin: "https://linkedin.com/in/alexjohnson",
    email: "alex@company.com",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "UI/UX Designer",
    bio: "Creative designer focused on user-centered design and accessibility",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    github: "https://github.com/sarahchen",
    linkedin: "https://linkedin.com/in/sarahchen",
    website: "https://sarahchen.design",
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    role: "Backend Engineer",
    bio: "System architect specializing in scalable cloud infrastructure",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    github: "https://github.com/mrodriguez",
    linkedin: "https://linkedin.com/in/mrodriguez",
    email: "michael@company.com",
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Product Manager",
    bio: "Strategic product leader with a passion for user-driven innovation",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/emilydavis",
    email: "emily@company.com",
    website: "https://emilydavis.io",
  },
  {
    id: 5,
    name: "David Kim",
    role: "DevOps Engineer",
    bio: "Infrastructure expert ensuring reliable and secure deployments",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    github: "https://github.com/davidkim",
    linkedin: "https://linkedin.com/in/davidkim",
    email: "david@company.com",
  },
  {
    id: 6,
    name: "Lisa Thompson",
    role: "QA Engineer",
    bio: "Quality assurance specialist ensuring robust and bug-free software",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    github: "https://github.com/lisathompson",
    linkedin: "https://linkedin.com/in/lisathompson",
    email: "lisa@company.com",
  },
];

export default function Team() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
          Meet Our Team
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          We're a passionate group of professionals dedicated to building
          exceptional software solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800"
          >
            <div className="text-center">
              <div className="relative mx-auto mb-4 h-32 w-32">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                {member.name}
              </h3>

              <div className="mb-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                {member.role}
              </div>

              <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                {member.bio}
              </p>

              <div className="flex justify-center space-x-3">
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all duration-200 hover:bg-gray-900 hover:text-white dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
                  >
                    <Github size={18} />
                  </a>
                )}

                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all duration-200 hover:bg-blue-600 hover:text-white dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-blue-600"
                  >
                    <Linkedin size={18} />
                  </a>
                )}

                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all duration-200 hover:bg-green-600 hover:text-white dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-green-600"
                  >
                    <Mail size={18} />
                  </a>
                )}

                {member.website && (
                  <a
                    href={member.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all duration-200 hover:bg-purple-600 hover:text-white dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-purple-600"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
