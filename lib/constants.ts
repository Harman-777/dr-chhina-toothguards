// ============================================
// Dr. Chhina's Tooth Guards — Site Constants
// ============================================

export const CLINIC = {
  name: "Dr. Chhina's Tooth Guards",
  tagline: "Beyond Sterility — Your Smile, Our Priority",
  shortName: "Tooth Guards",
  description:
    "Multi-speciality Dental Clinic in Amritsar offering painless treatments, family-like care, and a warm, comforting dental experience.",
  phone: "9877773046",
  phoneFormatted: "+91 98777 73046",
  whatsapp: "919877773046",
  whatsappLink: "https://wa.me/919877773046",
  email: "info@drchinnastoothguards.com",
  address: {
    line1: "Grand Trunk Rd, opp. Alpha City Colony",
    line2: "Daburji, Amritsar, Punjab 143022",
    full: "Grand Trunk Rd, opp. Alpha City Colony, Daburji, Amritsar, Punjab 143022",
  },
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.5!2d74.85!3d31.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39101b6b770f41ef%3A0xdc0578e3a59ad55e!2sDr.%20Chhina's%20Tooth%20Guards!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  googleMapsLink:
    "https://maps.google.com/?q=Dr+Chhina+Tooth+Guards+Daburji+Amritsar",
  instagram: "https://www.instagram.com/dr.chhinas_tg_dentalclinic/",
  instagramHandle: "@dr.chhinas_tg_dentalclinic",
  invisalignProfile: "https://providerbio-apac.invisalign.com/sv/487053",
  rating: 4.9,
  reviewCount: 65,
  foundedYear: 2020,
} as const;

export const HOURS = [
  { day: "Monday", open: "10:00 AM", close1: "2:00 PM", open2: "4:00 PM", close2: "7:00 PM", isOpen: true },
  { day: "Tuesday", open: "10:00 AM", close1: "2:00 PM", open2: "4:00 PM", close2: "7:00 PM", isOpen: true },
  { day: "Wednesday", open: "10:00 AM", close1: "2:00 PM", open2: "4:00 PM", close2: "7:00 PM", isOpen: true },
  { day: "Thursday", open: "10:00 AM", close1: "2:00 PM", open2: "4:00 PM", close2: "7:00 PM", isOpen: true },
  { day: "Friday", open: "10:00 AM", close1: "2:00 PM", open2: "4:00 PM", close2: "7:00 PM", isOpen: true },
  { day: "Saturday", open: "10:00 AM", close1: "2:00 PM", open2: "4:00 PM", close2: "7:00 PM", isOpen: true },
  { day: "Sunday", open: "", close1: "", open2: "", close2: "", isOpen: false },
] as const;

export const SERVICES = [
  {
    id: "general-dentistry",
    title: "General Dentistry",
    shortDesc: "Comprehensive dental check-ups, cleanings, and preventive care for the whole family.",
    fullDesc:
      "Our general dentistry services include routine check-ups, professional cleanings, dental X-rays, cavity fillings, and preventive treatments. We focus on maintaining your oral health with regular care and early detection of potential issues.",
    icon: "🦷",
    priceRange: "₹500 – ₹2,000",
    category: "General",
  },
  {
    id: "root-canal",
    title: "Root Canal Treatment (RCT)",
    shortDesc: "Painless root canal therapy to save your natural teeth with modern techniques.",
    fullDesc:
      "Our advanced root canal treatments use modern rotary instruments and digital imaging to ensure a painless experience. We preserve your natural tooth structure while eliminating infection, followed by durable crown restoration.",
    icon: "🔬",
    priceRange: "₹3,000 – ₹8,000",
    category: "Endodontics",
  },
  {
    id: "pediatric-dentistry",
    title: "Pediatric & Child Dentistry",
    shortDesc: "Gentle, child-friendly dental care in a warm, non-intimidating environment.",
    fullDesc:
      "Our child-friendly spaces are designed to make dental visits fun and stress-free. We offer fluoride treatments, sealants, cavity fillings, and preventive education tailored for young patients.",
    icon: "👶",
    priceRange: "₹500 – ₹3,000",
    category: "Pediatric",
  },
  {
    id: "orthodontics",
    title: "Orthodontics & Clear Aligners",
    shortDesc: "Braces, clear aligners, and smile correction for perfectly aligned teeth.",
    fullDesc:
      "As certified PhiAligner and Invisalign providers, we offer both traditional braces and modern clear aligner therapy. Our orthodontic treatments correct misaligned teeth, overcrowding, and bite issues for patients of all ages.",
    icon: "😁",
    priceRange: "₹25,000 – ₹1,50,000",
    category: "Orthodontics",
  },
  {
    id: "tooth-guards",
    title: "Custom Tooth Guards & Retainers",
    shortDesc: "Custom-fitted night guards for bruxism and protective sports mouth guards.",
    fullDesc:
      "We craft custom-fitted tooth guards using precise dental impressions. Our guards protect against teeth grinding (bruxism), sports injuries, and post-orthodontic tooth movement with maximum comfort.",
    icon: "🛡️",
    priceRange: "₹2,000 – ₹5,000",
    category: "Protective",
  },
  {
    id: "cosmetic-dentistry",
    title: "Cosmetic & Smile Makeover",
    shortDesc: "Teeth whitening, veneers, and complete smile transformations.",
    fullDesc:
      "Transform your smile with professional teeth whitening, porcelain veneers, dental bonding, and complete smile makeovers. Our cosmetic treatments combine aesthetics with functionality for natural-looking results.",
    icon: "✨",
    priceRange: "₹3,000 – ₹30,000",
    category: "Cosmetic",
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    shortDesc: "Permanent tooth replacement solutions with titanium implants and crowns.",
    fullDesc:
      "Our dental implant procedures provide permanent, natural-looking tooth replacements. Using high-quality titanium implants and precision-crafted crowns, we restore both function and aesthetics.",
    icon: "🏗️",
    priceRange: "₹20,000 – ₹50,000",
    category: "Implantology",
  },
  {
    id: "halitosis-treatment",
    title: "Halitosis (Bad Breath) Treatment",
    shortDesc: "Diagnosis and treatment of chronic bad breath with specialized care.",
    fullDesc:
      "We identify the root causes of halitosis — from gum disease to digestive issues — and provide targeted treatments including deep cleaning, medicated rinses, and ongoing care plans.",
    icon: "🌿",
    priceRange: "₹500 – ₹3,000",
    category: "Specialized",
  },
] as const;

export const REVIEWS = [
  {
    id: 1,
    name: "Harpreet",
    rating: 5,
    text: "Dr. Jaskaran Chhina is an amazing dentist. Got my root canal treatment done here and it was completely painless. The clinic environment is super hygienic and clean.",
    date: "1 month ago",
  },
  {
    id: 2,
    name: "Gurpreet",
    rating: 5,
    text: "Best dental clinic in Amritsar! Very professional staff and Dr. Chhina explains every procedure clearly before starting. Highly recommended for any dental issues.",
    date: "2 months ago",
  },
  {
    id: 3,
    name: "Simran",
    rating: 5,
    text: "I had a great experience at The Tooth Guards. The clinic is equipped with modern laser dentistry technology and the staff is very polite and helpful.",
    date: "3 months ago",
  },
  {
    id: 4,
    name: "Navjot",
    rating: 5,
    text: "Visited Dr. Chhina for teeth cleaning and cavity filling. Painless treatment and very hygienic setup. 5 stars for the quality of care.",
    date: "4 months ago",
  },
  {
    id: 5,
    name: "Manpreet",
    rating: 5,
    text: "Extremely satisfied with the dental service provided here. Dr. Chhina is very gentle, professional, and patient-focused.",
    date: "5 months ago",
  },
  {
    id: 6,
    name: "Karan",
    rating: 4,
    text: "Very good experience overall. Dr. Chhina handled my wisdom tooth pain with great care. Clinic is clean and well organized.",
    date: "6 months ago",
  },
  {
    id: 7,
    name: "Aman",
    rating: 5,
    text: "Top-notch hygiene and modern dental equipment. Dr. Jaskaran Chhina took good time to explain the alignment options for my teeth.",
    date: "8 months ago",
  },
  {
    id: 8,
    name: "Rajwinder",
    rating: 5,
    text: "Excellent dental care in Daburji area, Amritsar. The root canal treatment was smooth and painless. Very supportive clinic staff.",
    date: "10 months ago",
  },
  {
    id: 9,
    name: "Jasleen",
    rating: 5,
    text: "The Tooth Guards clinic provides the best service in Amritsar. Dr. Chhina is very friendly and skilled. Clean environment and reasonable charges.",
    date: "1 year ago",
  },
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const BLOG_POSTS = [
  {
    slug: "importance-of-regular-dental-checkups",
    title: "Why Regular Dental Check-ups Are Essential for Your Health",
    excerpt:
      "Regular dental visits are about more than just cleaning your teeth. Learn how routine check-ups can prevent serious health issues and save you money in the long run.",
    content: `Regular dental check-ups are one of the most important things you can do for your oral and overall health. At Dr. Chhina's Tooth Guards, we recommend visiting your dentist every 6 months for a routine examination and professional cleaning.

## Why Are Regular Check-ups Important?

### Early Detection of Problems
Many dental issues, including cavities, gum disease, and even oral cancer, don't show obvious symptoms in their early stages. Regular check-ups allow your dentist to catch these problems early when they're easier and less expensive to treat.

### Professional Cleaning
Even with excellent brushing and flossing habits, plaque and tartar can build up in hard-to-reach areas. Professional cleaning removes this buildup, helping prevent cavities and gum disease.

### Gum Disease Prevention
Gum disease is one of the leading causes of tooth loss in adults. Regular dental visits help monitor your gum health and catch signs of gum disease before it progresses.

### Overall Health Connection
Research has shown strong links between oral health and overall health conditions like heart disease, diabetes, and respiratory infections. Maintaining good oral health through regular check-ups can contribute to better overall health.

## What Happens During a Dental Check-up?

1. **Visual Examination** — Your dentist examines your teeth, gums, tongue, and mouth for any signs of problems
2. **X-rays** — Dental X-rays help detect issues that aren't visible to the naked eye
3. **Professional Cleaning** — Removal of plaque, tartar, and stains
4. **Oral Cancer Screening** — A quick check for any signs of oral cancer
5. **Treatment Planning** — Discussion of any issues found and recommended treatments

## Tips for Maintaining Oral Health Between Visits

- Brush twice daily with fluoride toothpaste
- Floss at least once a day
- Limit sugary foods and drinks
- Don't use tobacco products
- Replace your toothbrush every 3-4 months

*Book your next dental check-up at Dr. Chhina's Tooth Guards today. Call us at +91 98777 73046.*`,
    category: "Preventive Care",
    date: "2024-08-01",
    readTime: "5 min read",
  },
  {
    slug: "painless-root-canal-what-to-expect",
    title: "Painless Root Canal: What to Expect at Dr. Chhina's Tooth Guards",
    excerpt:
      "Root canal treatment has a scary reputation, but modern techniques make it virtually painless. Here's what you can expect during your RCT procedure.",
    content: `If your dentist has recommended a root canal treatment (RCT), you might feel anxious. But at Dr. Chhina's Tooth Guards, we use modern techniques and equipment that make root canal treatment virtually painless.

## What Is a Root Canal?

A root canal is a treatment to repair and save a severely damaged or infected tooth. During the procedure, the infected pulp (the soft tissue inside the tooth) is removed, and the inside of the tooth is cleaned, disinfected, and sealed.

## When Do You Need a Root Canal?

- Severe toothache when chewing or applying pressure
- Prolonged sensitivity to hot or cold temperatures
- Darkening or discoloration of the tooth
- Swelling and tenderness in nearby gums
- A persistent pimple on the gums

## Modern Root Canal — Virtually Painless

Gone are the days when root canals were dreaded procedures. At our clinic, we use:

### Advanced Rotary Instruments
Our modern rotary instruments are more precise and efficient than traditional hand files, making the procedure faster and more comfortable.

### Digital Imaging
Digital X-rays provide clear, detailed images while exposing you to minimal radiation, allowing for more accurate treatment.

### Effective Anaesthesia
Modern local anaesthetics ensure you feel little to no pain during the procedure. Most patients compare the sensation to getting a simple filling.

## What to Expect After Treatment

- Mild discomfort for 1-2 days (manageable with over-the-counter painkillers)
- Avoid chewing on the treated tooth until the permanent crown is placed
- A follow-up visit to place a crown for long-term protection

## The Alternative: Tooth Extraction

If left untreated, an infected tooth may need to be extracted. A root canal saves your natural tooth, which is always the best option for your oral health.

*Don't let fear stop you from getting the treatment you need. Contact Dr. Chhina's Tooth Guards at +91 98777 73046.*`,
    category: "Treatments",
    date: "2024-07-15",
    readTime: "4 min read",
  },
  {
    slug: "dental-care-tips-for-children",
    title: "Dental Care Tips for Children: A Parent's Complete Guide",
    excerpt:
      "Good dental habits start early. Learn essential tips to keep your child's teeth healthy and make dental visits stress-free.",
    content: `As parents, we want the best for our children's health — and that includes their dental health. At Dr. Chhina's Tooth Guards, our child-friendly environment makes dental visits a positive experience for young patients.

## When Should My Child First Visit the Dentist?

The American Academy of Pediatric Dentistry recommends a child's first dental visit by their first birthday or within 6 months of the first tooth appearing.

## Essential Dental Care Tips for Children

### For Babies (0-2 years)
- Clean gums with a soft, damp cloth after feeding
- Start brushing with a soft-bristled baby toothbrush when the first tooth appears
- Use a rice-grain-sized amount of fluoride toothpaste
- Avoid putting baby to bed with a bottle (prevents baby bottle tooth decay)

### For Toddlers (2-6 years)
- Use a pea-sized amount of fluoride toothpaste
- Brush twice a day — parents should assist or supervise
- Start teaching proper brushing technique
- Begin flossing when teeth touch each other

### For School-Age Children (6-12 years)
- Encourage independent brushing with supervision
- Consider dental sealants for permanent molars
- Limit sugary snacks and drinks
- Use a mouthguard for sports activities

## Making Dental Visits Fun

At Dr. Chhina's Tooth Guards, we believe dental visits should be positive experiences for children:

1. **Warm, Non-Intimidating Environment** — Our clinic is designed to feel welcoming, not scary
2. **Gentle Approach** — We take extra time with young patients to explain everything in child-friendly language
3. **Positive Reinforcement** — We celebrate brave behaviour and good dental habits

## Common Dental Issues in Children

- **Cavities** — The most common childhood disease
- **Thumb Sucking** — Can affect tooth alignment if it continues past age 4-5
- **Early Tooth Loss** — May require space maintainers
- **Teeth Grinding** — Common in young children, usually outgrown

*Schedule your child's dental visit at Dr. Chhina's Tooth Guards. Our child-friendly approach ensures a stress-free experience. Call +91 98777 73046.*`,
    category: "Pediatric Care",
    date: "2024-07-01",
    readTime: "6 min read",
  },
  {
    slug: "clear-aligners-vs-traditional-braces",
    title: "Clear Aligners vs. Traditional Braces: Which Is Right for You?",
    excerpt:
      "Considering orthodontic treatment? Compare clear aligners and traditional braces to find the best option for your smile.",
    content: `Choosing between clear aligners and traditional braces is one of the most common questions we hear at Dr. Chhina's Tooth Guards. As certified PhiAligner and Invisalign providers, we can help you make the right choice.

## Clear Aligners

### How They Work
Clear aligners are custom-made, nearly invisible plastic trays that gradually move your teeth into the desired position. You receive a series of aligners, wearing each set for about 2 weeks before moving to the next.

### Advantages
- **Nearly invisible** — Most people won't notice you're wearing them
- **Removable** — Take them out to eat, drink, and brush
- **Comfortable** — No metal wires or brackets that can irritate your cheeks
- **Fewer dental visits** — Less time in the chair

### Best For
- Mild to moderate crowding
- Spacing issues
- Adults and teens who want a discreet option

## Traditional Braces

### How They Work
Metal or ceramic brackets are bonded to your teeth, connected by wires that apply gentle pressure to move teeth over time.

### Advantages
- **Effective for complex cases** — Can handle severe misalignment
- **No compliance required** — They work 24/7 since they're fixed
- **Cost-effective** — Generally less expensive than clear aligners
- **Predictable results** — Time-tested technology

### Best For
- Severe crowding or spacing
- Complex bite issues
- Patients who may not wear removable aligners consistently

## Factors to Consider

| Factor | Clear Aligners | Traditional Braces |
|--------|---------------|-------------------|
| Appearance | Nearly invisible | Visible (metal) or semi-visible (ceramic) |
| Comfort | Generally more comfortable | May cause initial irritation |
| Maintenance | Easy — remove to clean | Requires special cleaning techniques |
| Treatment Time | 6-18 months (mild-moderate) | 12-36 months |
| Cost | ₹50,000 – ₹1,50,000 | ₹25,000 – ₹80,000 |

## Our Recommendation

The best choice depends on your specific dental needs, lifestyle, and budget. At Dr. Chhina's Tooth Guards, we offer a free orthodontic consultation to help you decide.

*Book your free orthodontic consultation today. Call +91 98777 73046 or WhatsApp us.*`,
    category: "Orthodontics",
    date: "2024-06-15",
    readTime: "5 min read",
  },
] as const;

export const TIME_SLOTS = {
  morning: [
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
  ],
  evening: [
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
  ],
} as const;
