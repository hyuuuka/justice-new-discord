import Header from "../../components/header"
import Footer from "../../components/footer"
import { AnimateIn } from "../../components/animate-in"
import { Shield, Users, Scale, Gavel } from "lucide-react"

export const metadata = {
  title: "Learn More",
}

const LearnMore = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <AnimateIn from="bottom">
            <h1 className="text-4xl font-bold mb-8 text-gradient">About Discord Justice</h1>

            <div className="grid gap-12">
              <section className="space-y-6">
                <h2 className="text-3xl font-semibold">Our Mission</h2>
                <p className="text-lg text-muted-foreground">
                  Discord Justice is dedicated to creating a safer Discord environment by combating scammers, protecting
                  communities, and ensuring fair treatment for all users. We leverage advanced systems and experienced
                  moderators to maintain the integrity of Discord communities.
                </p>
              </section>

              <section className="space-y-6 my-12">
                <h2 className="text-3xl font-semibold">Our Core Principles</h2>
                <div className="glassmorphism p-8 rounded-lg">
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#4752c4]/20 flex items-center justify-center">
                        <Shield className="w-8 h-8 text-[#4752c4]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Protection</h3>
                        <p className="text-muted-foreground">
                          We safeguard Discord communities from scammers, malicious bots, and harmful content through
                          advanced detection systems. Our proactive approach identifies threats before they can cause
                          harm, creating a protective shield around your community.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#4752c4]/20 flex items-center justify-center">
                        <Scale className="w-8 h-8 text-[#4752c4]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Fairness</h3>
                        <p className="text-muted-foreground">
                          We ensure every case is handled with impartiality and transparency, giving all parties a
                          chance to be heard. Our justice system is built on the foundation of fairness, with clear
                          processes and consistent application of rules.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#4752c4]/20 flex items-center justify-center">
                        <Users className="w-8 h-8 text-[#4752c4]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Community</h3>
                        <p className="text-muted-foreground">
                          We foster a collaborative network of server owners and moderators dedicated to maintaining
                          safe spaces. By sharing information and best practices, we strengthen the entire Discord
                          ecosystem against common threats.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#4752c4]/20 flex items-center justify-center">
                        <Gavel className="w-8 h-8 text-[#4752c4]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                        <p className="text-muted-foreground">
                          We continuously improve our systems to stay ahead of evolving threats and provide cutting-edge
                          protection. Our team researches emerging scam techniques and develops new countermeasures to
                          ensure our protection remains effective.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="grid md:grid-cols-2 gap-8">
                <div className="glassmorphism p-6 rounded-lg space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="w-8 h-8 text-blue-400" />
                    <h3 className="text-xl font-semibold">Protection Systems</h3>
                  </div>
                  <p>
                    Our advanced protection systems monitor Discord servers 24/7, detecting and preventing potential
                    scams before they can harm users. We use pattern recognition and behavior analysis to identify
                    suspicious activities.
                  </p>
                </div>

                <div className="glassmorphism p-6 rounded-lg space-y-4">
                  <div className="flex items-center gap-3">
                    <Users className="w-8 h-8 text-blue-400" />
                    <h3 className="text-xl font-semibold">Community Support</h3>
                  </div>
                  <p>
                    Our team of experienced moderators provides round-the-clock support to Discord communities. We help
                    establish security protocols, train moderators, and respond quickly to incidents.
                  </p>
                </div>

                <div className="glassmorphism p-6 rounded-lg space-y-4">
                  <div className="flex items-center gap-3">
                    <Scale className="w-8 h-8 text-blue-400" />
                    <h3 className="text-xl font-semibold">Fair Resolution</h3>
                  </div>
                  <p>
                    Every case is handled with utmost care and fairness. We follow a transparent process to investigate
                    incidents, gather evidence, and make informed decisions to resolve conflicts.
                  </p>
                </div>

                <div className="glassmorphism p-6 rounded-lg space-y-4">
                  <div className="flex items-center gap-3">
                    <Gavel className="w-8 h-8 text-blue-400" />
                    <h3 className="text-xl font-semibold">Case Management</h3>
                  </div>
                  <p>
                    Our sophisticated case management system ensures that every reported incident is tracked,
                    documented, and resolved efficiently. We maintain detailed records for accountability and reference.
                  </p>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-semibold">How We Work</h2>
                <div className="glassmorphism p-8 rounded-lg">
                  <ol className="space-y-4">
                    <li className="flex items-start gap-4">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-400 text-white font-bold">
                        1
                      </span>
                      <div>
                        <h4 className="text-lg font-semibold">Report Submission</h4>
                        <p className="text-muted-foreground">
                          Users or moderators submit reports through our system, providing details about the incident.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-400 text-white font-bold">
                        2
                      </span>
                      <div>
                        <h4 className="text-lg font-semibold">Investigation</h4>
                        <p className="text-muted-foreground">
                          Our team investigates the report, gathering evidence and documenting findings.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-400 text-white font-bold">
                        3
                      </span>
                      <div>
                        <h4 className="text-lg font-semibold">Action Taken</h4>
                        <p className="text-muted-foreground">
                          Based on the investigation, appropriate action is taken to resolve the situation and protect
                          users.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-400 text-white font-bold">
                        4
                      </span>
                      <div>
                        <h4 className="text-lg font-semibold">Follow-up</h4>
                        <p className="text-muted-foreground">
                          We monitor the situation and provide follow-up support to ensure the resolution is effective.
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>
              </section>
            </div>
          </AnimateIn>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default LearnMore
