

const members = [
  {
    name: "Imran",
    role: "Full Stack Developer",
    avatar: "/team/imran.jpg",
  },
  {
      name: "Anas",
      role: "Full Stack Developer",
      avatar: "/team/ans.jpg",
    },
    {
      name: "Zohaib",
      role: "Frontend Developer",
      avatar: "/team/zohaib.jpg",
    },
  {
    name: "Ahsan",
    role: "UI & UX Designer",
    avatar: "/team/ahsan.jpg",
  },
  {
    name: "Muhammad",
    role: "Performance Marketer",
    avatar: "/team/muhammad.jpeg",
  },
  {
    name: "Saad",
    role: "UI & UX Designer",
    avatar: "/team/saad.jpg",
  },
  {
    name: "Hassan",
    role: "UI & UX Designer",
    avatar: "/team/hassan.jpg",
  },
  {
    name: "Zinnia",
    role: "UI & UX Designer",
    avatar: "/team/zinnia.jpg",
  },
]

export default function TeamSection() {
  return (
    <section className="py-16 md:py-20 dark:bg-transparent">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
          <div className="sm:w-2/5">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Our <span className="text-blue-400">TEAM</span>
            </h2>
          </div>
          <div className="mt-6 sm:mt-0">
            <p>
              Our team is a group of dedicated professionals committed to
              delivering excellence in every project. With diverse expertise
              and a passion for innovation.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="mt-12 md:mt-24">
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member, index) => (
              <div
                key={index}
                className="group  transition-shadow duration-300 hover:shadow-xl"
              >
                {/* IMAGE */}
                <img
                  src={member.avatar}
                  alt={member.name}
                  width={826}
                  height={1239}
                  className="
                    h-96 w-full rounded-lg
                    object-cover object-cover
                    transition-transform duration-500
                    group-hover:scale-105
                    will-change-transform
                    [image-rendering:auto] 
                  "
                />

                {/* CONTENT */}
                <div className="px-2 pt-3">
                  <h3 className="text-base font-medium transition-all duration-300 group-hover:tracking-wider">
                    {member.name}
                  </h3>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    {member.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
