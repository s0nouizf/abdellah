"use client"

import { ArrowRight, Mail, Phone, MapPin, Download, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useState, useEffect } from "react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/80 backdrop-blur-md"
        } border-b border-slate-200`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-slate-800 animate-fade-in">Abdellah Rhiat</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: "about", label: "À propos" },
                { id: "gallery", label: "Galerie" },
                { id: "experience", label: "Expérience" },
                { id: "education", label: "Formation" },
                { id: "skills", label: "Compétences" },
                { id: "contact", label: "Contact" },
              ].map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-slate-600 hover:text-slate-900 transition-colors duration-200 hover:scale-105 transform"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <div className="py-4 space-y-2">
              {[
                { id: "about", label: "À propos" },
                { id: "gallery", label: "Galerie" },
                { id: "experience", label: "Expérience" },
                { id: "education", label: "Formation" },
                { id: "skills", label: "Compétences" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight animate-fade-in-up">
                  Abdellah <span className="text-blue-600 animate-pulse">Rhiat</span>
                </h1>
                <p
                  className="text-xl text-slate-600 leading-relaxed animate-fade-in-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  Responsable Commercial & Doctorant en Économie et Gestion
                </p>
                <p className="text-lg text-slate-500 max-w-lg animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                  Plus de 5 ans d'expertise dans le développement des ventes, la gestion d'équipe et la fidélisation
                  client. Spécialiste en stratégie commerciale et leadership.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
                  onClick={() => scrollToSection("contact")}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Me contacter
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="transform hover:scale-105 transition-all duration-200 bg-transparent"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Télécharger CV
                </Button>
              </div>

              <div
                className="flex items-center space-x-6 text-slate-600 animate-fade-in-up"
                style={{ animationDelay: "0.8s" }}
              >
                <div className="flex items-center space-x-2 hover:text-blue-600 transition-colors">
                  <MapPin className="w-4 h-4" />
                  <span>Rabat, Maroc</span>
                </div>
                <div className="flex items-center space-x-2 hover:text-blue-600 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+212-628862401</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end animate-slide-in-right">
              <div className="relative group">
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="/images/profile-main.jpg"
                    alt="Abdellah Rhiat - Responsable Commercial"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center shadow-lg animate-bounce-slow">
                  <span className="text-white font-bold text-lg">PhD</span>
                </div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">À propos de moi</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Professionnel expérimenté combinant expertise commerciale et recherche académique
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-in-left">
              <CardHeader>
                <CardTitle className="text-blue-600">Expertise Professionnelle</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">
                  Responsable commercial expérimenté avec plus de 5 ans d'expertise dans le développement des ventes, la
                  gestion d'équipe et la fidélisation client.
                </p>
                <div className="space-y-2">
                  {["Leadership et gestion d'équipe", "Développement commercial", "Stratégie de croissance"].map(
                    (item, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 animate-fade-in-right"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <ArrowRight className="w-4 h-4 text-blue-600" />
                        <span>{item}</span>
                      </div>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-in-right">
              <CardHeader>
                <CardTitle className="text-blue-600">Parcours Académique</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">
                  Actuellement doctorant en économie et gestion, je combine vision stratégique, leadership et pédagogie
                  pour atteindre les objectifs commerciaux.
                </p>
                <div className="space-y-2">
                  {[
                    "Recherche en Sciences Économiques",
                    "Enseignement universitaire",
                    "Formation en techniques de vente",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 animate-fade-in-left"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">En Action</h2>
            <p className="text-lg text-slate-600">Quelques moments de mon parcours professionnel et académique</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                src: "/images/presentation1.jpg",
                alt: "Formation et présentation commerciale",
                title: "Formation Commerciale",
                description: "Animation de formations en techniques de vente et stratégie commerciale",
              },
              {
                src: "/images/presentation2.jpg",
                alt: "Présentation académique - Conclusion",
                title: "Recherche Académique",
                description: "Présentation de travaux de recherche en économie et gestion",
              },
              {
                src: "/images/presentation3.jpg",
                alt: "Enseignement universitaire",
                title: "Enseignement",
                description: "Cours et travaux dirigés à l'université Mohammed V",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.src || "/placeholder.svg"}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}

            <Card
              className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 md:col-span-2 lg:col-span-3 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
                  <img
                    src="/images/bmci-office.jpg"
                    alt="Expérience BMCI - Chargé de clientèle"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Expérience Bancaire</h3>
                  <p className="text-slate-600 mb-4">
                    Durant mon passage chez BMCI Groupe BNP Paribas, j'ai développé une expertise solide en gestion de
                    portefeuille client et en conseil financier. Cette expérience m'a permis d'améliorer le NPS de 30%
                    grâce à une approche centrée sur la satisfaction client.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Gestion de portefeuille", "Conseil client", "Opérations bancaires"].map((badge, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="animate-fade-in-right hover:bg-blue-50 transition-colors"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Expérience Professionnelle</h2>
            <p className="text-lg text-slate-600">Mon parcours professionnel diversifié</p>
          </div>

          <div className="space-y-8">
            {[
              {
                title: "Professeur Vacataire – Travaux Dirigés",
                company: "FSJES – Université Mohammed V, Rabat",
                period: "Jan. 2025 – Aujourd'hui",
                current: true,
                tasks: [
                  "Animation de séances de travaux dirigés en gestion commerciale et management",
                  "Transmission des concepts clés de manière pédagogique et structurée",
                ],
              },
              {
                title: "Responsable Commercial",
                company: "IDEALRECOUVREMENT – Rabat",
                period: "Déc. 2020 – Avr. 2021",
                tasks: [
                  "Élaboration de la stratégie commerciale annuelle",
                  "Encadrement d'une équipe de 5 commerciaux",
                  "Mise en place de formations internes (techniques de vente)",
                  "Suivi de la performance et des indicateurs clés (CA, taux de recouvrement)",
                ],
                result: "Amélioration du taux de conversion de 18% en 3 mois",
              },
              {
                title: "Coordinateur de Projet IT",
                company: "Bugbusters France – Rabat",
                period: "Juil. 2019 – Nov. 2020",
                tasks: [
                  "Gestion de projets techniques B2B (IT – France)",
                  "Interface client – coordination d'équipes techniques",
                  "Analyse des besoins et reporting",
                ],
                result: "Réduction des délais de livraison projets de 25%",
              },
              {
                title: "Chargé de Clientèle",
                company: "BMCI Groupe BNP Paribas – Rabat",
                period: "Déc. 2017 – Juin 2019",
                tasks: [
                  "Gestion de portefeuille client (retail et pro)",
                  "Opérations bancaires : dépôts, virements, placements",
                  "Traitement des réclamations et conseil client",
                ],
                result: "Fidélisation renforcée avec un NPS amélioré de 30%",
                image: "/images/bmci-office.jpg",
              },
            ].map((job, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <CardTitle className="text-xl text-slate-900">{job.title}</CardTitle>
                      <CardDescription className="text-blue-600 font-medium">{job.company}</CardDescription>
                    </div>
                    <Badge
                      variant={job.current ? "default" : "secondary"}
                      className={`w-fit mt-2 sm:mt-0 ${job.current ? "bg-blue-600 animate-pulse" : ""}`}
                    >
                      {job.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className={job.image ? "grid md:grid-cols-2 gap-4 mb-4" : "mb-4"}>
                    <div>
                      <ul className="space-y-2 text-slate-600">
                        {job.tasks.map((task, taskIndex) => (
                          <li
                            key={taskIndex}
                            className="animate-fade-in-right"
                            style={{ animationDelay: `${taskIndex * 0.1}s` }}
                          >
                            • {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {job.image && (
                      <div className="flex justify-center">
                        <img
                          src={job.image || "/placeholder.svg"}
                          alt="Au bureau BMCI"
                          className="w-32 h-24 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
                        />
                      </div>
                    )}
                  </div>
                  {job.result && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 animate-fade-in-up">
                      <p className="text-green-800 font-medium">✅ Résultat : {job.result}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Formation</h2>
            <p className="text-lg text-slate-600">Mon parcours académique</p>
          </div>

          <div className="space-y-6">
            {[
              {
                degree: "Doctorat en Sciences Économiques et de Gestion",
                school: "FSJES – Rabat",
                period: "2021 – Aujourd'hui",
                current: true,
              },
              {
                degree: "Master Marketing & Management Commercial",
                school: "FSJES – Rabat",
                period: "2018 – 2020",
              },
              {
                degree: "Formation en Graphic Design",
                school: "Invyscode",
                period: "2022",
              },
              {
                degree: "Licence en Économie et Gestion",
                school: "FSJES – Rabat",
                period: "2014 – 2017",
              },
            ].map((education, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-slide-in-right"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <CardTitle className="text-xl text-slate-900">{education.degree}</CardTitle>
                      <CardDescription className="text-blue-600 font-medium">{education.school}</CardDescription>
                    </div>
                    <Badge
                      className={`w-fit mt-2 sm:mt-0 ${education.current ? "bg-blue-600 animate-pulse" : ""}`}
                      variant={education.current ? "default" : "secondary"}
                    >
                      {education.period}
                    </Badge>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Compétences</h2>
            <p className="text-lg text-slate-600">Mes domaines d'expertise</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-in-left">
              <CardHeader>
                <CardTitle className="text-blue-600">Logiciels Maîtrisés</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Excel (TCD, reporting)", "CRM (Salesforce)", "PowerPoint & Canva", "Outlook / Suite Office"].map(
                    (skill, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="animate-fade-in-up hover:bg-blue-50 transition-colors"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {skill}
                      </Badge>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>

            <Card
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <CardHeader>
                <CardTitle className="text-blue-600">Langues Parlées</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { lang: "Arabe", level: "Langue maternelle", primary: true },
                    { lang: "Français", level: "C1", primary: true },
                    { lang: "Anglais", level: "Intermédiaire", primary: false },
                  ].map((language, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center animate-fade-in-right"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span>{language.lang}</span>
                      <Badge variant={language.primary ? "default" : "outline"}>{language.level}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-in-right">
              <CardHeader>
                <CardTitle className="text-blue-600">Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    "Leadership et gestion d'équipe",
                    "Développement commercial",
                    "Gestion de la relation client",
                    "Stratégie commerciale",
                    "Formation en techniques de vente",
                  ].map((expertise, index) => (
                    <p
                      key={index}
                      className="text-sm text-slate-600 animate-fade-in-left hover:text-blue-600 transition-colors"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      • {expertise}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 animate-fade-in-up">Contactez-moi</h2>
          <p
            className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Intéressé par une collaboration ? N'hésitez pas à me contacter pour discuter de vos projets.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {[
              { icon: Mail, title: "Email", info: "abdellahrhiat48@gmail.com" },
              { icon: Phone, title: "Téléphone", info: "+212-628862401" },
              { icon: MapPin, title: "Localisation", info: "Rabat, Maroc" },
            ].map((contact, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 animate-fade-in-up hover:scale-105 transition-transform duration-200"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <contact.icon className="w-8 h-8 text-blue-400" />
                <span className="text-white font-medium">{contact.title}</span>
                <span className="text-slate-300">{contact.info}</span>
              </div>
            ))}
          </div>

          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
            onClick={() => (window.location.href = "mailto:abdellahrhiat48@gmail.com")}
          >
            <Mail className="w-4 h-4 mr-2" />
            Envoyer un message
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Separator className="mb-6 bg-slate-700" />
          <div className="flex flex-col sm:flex-row justify-between items-center animate-fade-in-up">
            <p className="text-slate-400 text-sm">© 2025 Abdellah Rhiat. Tous droits réservés.</p>
            <p className="text-slate-400 text-sm mt-2 sm:mt-0">Responsable Commercial & Doctorant</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
