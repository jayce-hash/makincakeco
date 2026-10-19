// Starting content for the site. Once the owner saves anything in /admin,
// the saved version (stored in Netlify Blobs) is used instead of this file.

export const DEFAULT_CONTENT = {
  version: 1,
  business: {
    name: "MAKINCAKECo.",
    ownerName: "Sarah Carroll",
    tagline: "Pastry School Trained & Fueled by GOD",
    city: "North Richland Hills, TX",
    serviceArea: "the Dallas / Fort Worth area",
    phone: "(817) 456-8554",
    email: "makincakeco@gmail.com",
    instagram: "https://instagram.com/MAKINCAKECo",
    facebook: "https://www.facebook.com/profile.php?id=61565085347061",
  },
  announcement: {
    show: false,
    text: "Now booking holiday orders. Reach out early to save your date!",
  },
  about: {
    heading: "Meet Your Baker",
    title: "Hi, I'm Sarah Carroll!",
    body:
      "Welcome to MAKINCAKECo.! I am the owner, baker, and cake decorator based right here in North Richland Hills, serving the Dallas / Fort Worth area. I create custom cakes and cupcakes for any and all occasions.\n\n" +
      "Whether you are celebrating a birthday, graduation, baby shower, or just need a sweet treat, I've got you covered! **You name it, I do it!**",
    specialTitle: "Special Accommodations",
    specialBody:
      "Everyone deserves a delicious cake! I proudly offer specialty options to accommodate your dietary needs:",
    dietary: ["Gluten-Free", "Dairy-Free", "Dye-Free", "Sugar-Free", "Eggless"],
  },
  gallery: {
    heading: "Recent Creations",
    intro: "Every cake is made to order. Tap any photo to see it up close.",
    categories: [
      "Birthday",
      "Wedding & Showers",
      "Cupcakes",
      "Cookie Cakes",
      "Graduation",
      "Holiday & Seasonal",
      "Specialty",
    ],
  },
  menu: {
    heading: "Menu",
    items: [
      {
        title: "🍰 Cake Flavors",
        body:
          "## Traditional Flavors\n- Vanilla\n- Vanilla Almond\n- Strawberry\n- Chocolate\n- Red Velvet\n- Lemon\n- Carrot\n- Marble\n- Yellow Butter Cake\n- Birthday Confetti\n- Buttery Pecan\n\n" +
          "## Specialty Flavors\n- Key Lime Pie\n- Neapolitan\n- Orange Sherbet\n- White Chocolate Raspberry\n- Cinnamon Swirl\n- Lavender\n- Blueberry Pie\n- German Chocolate\n- Pineapple Upside Down",
        note: "✨ Create Your Own Flavor Available",
      },
      {
        title: "🍓 Fillings",
        body: "- Bavarian Cream\n- Strawberry\n- Raspberry\n- Lemon\n- Pineapple\n- Blueberry\n- German Chocolate\n- Caramel",
        note: "",
      },
      {
        title: "🧁 Buttercream Flavors",
        body: "- Vanilla\n- Vanilla Almond\n- Cream Cheese\n- Chocolate\n- Peanut Butter\n- Lemon\n- Strawberry\n- Coconut",
        note: "",
      },
      {
        title: "📩 Custom Cake & Cupcake Inquiries",
        body:
          "Prices vary depending on size, design, and level of detail. When inquiring, please include:\n- Event date\n- Cake flavor\n- Number of guests\n- Inspiration photos\n\n" +
          "*Edible images and detailed custom elements are available for an additional charge.*",
        note: "",
      },
    ],
  },
  reviews: {
    heading: "Sweet Words",
    items: [
      {
        text: "Sarah made a FANTASTIC cake for our 3 year old's birthday!! I inquired about a chocolate cake with a plain white frosting... Not only did she give us an incredible base & the decorated version turned out incredible, the cake was DELICIOUS! It was a huge hit!!",
        name: "Shelby G.",
      },
      {
        text: "Sarah did an AMAZING job with my cake for my daughter's graduation!! It was perfect, tasted awesome and beautiful. Highly recommend!!!",
        name: "Melissa L.",
      },
      {
        text: "My team tried the white chocolate raspberry cupcakes and they were delicious. Thank you Sarah for the delicious cupcakes.",
        name: "Brandy V.",
      },
    ],
  },
  policies: {
    heading: "Terms & Conditions",
    intro:
      "These Terms & Conditions serve as an agreement between the customer and MAKINCAKECo. By submitting payment, you acknowledge and agree to all policies listed below. Terms are subject to change at any time without prior notice.",
    items: [
      {
        title: "💳 Payments",
        body:
          "A 50% non-refundable retainer is required to secure your order and event date. Orders are not confirmed until the retainer is received.\n\n" +
          "**The remaining balance:**\n- Is due by the date listed on your invoice\n- Must be paid in full before pickup or delivery\n\n" +
          "**Please note:**\n- All sales are final\n- All payments are non-refundable\n- Store credit may be issued at the discretion of MAKINCAKECo\n\n" +
          "Any requests for adjustments must be submitted in writing via email. Please allow up to 14 days for review and response. Late payments may result in order cancellation or additional fees.",
      },
      {
        title: "💍 Wedding & Large Event Orders",
        body:
          "- A 50% non-refundable retainer is required to reserve your date\n- Final payment is due 14 days prior to the event\n\n" +
          "Orders placed within 14 days of the event require full payment upfront.\n\n" +
          "Changes to design, size, or flavors must be submitted at least 2 weeks before the event. Changes requested after this time are not guaranteed and may include additional fees.\n\n" +
          "All changes must be submitted via email. Requests sent through text or social media will not be accepted. Rescheduling may be subject to availability and additional fees.",
      },
      {
        title: "🎨 Design & Color Disclaimer",
        body:
          "Every cake is handcrafted, and slight variations in design, color, and decoration may occur.\n\n" +
          "While inspiration photos are helpful, MAKINCAKECo does not replicate cakes exactly but instead creates a custom version based on your request.\n\n" +
          "Color matching is not exact. Differences may occur due to lighting, ingredients, and screen displays. For best results, physical color references are recommended.\n\n" +
          "MAKINCAKECo reserves the right to make structural or design adjustments to ensure stability and quality.",
      },
      {
        title: "🏠 Setup & Environment",
        body:
          "Cakes must be placed in a cool, indoor environment (below 75°F).\n\n" +
          "MAKINCAKECo reserves the right to refuse setup if the environment is unsafe (excess heat, unstable surfaces, etc.).\n\n" +
          "**Once the cake is delivered and set up:**\n- It should not be moved\n- MAKINCAKECo is not responsible for damage caused afterward\n\n" +
          "If picking up your order, you assume full responsibility once the cake leaves the premises.",
      },
      {
        title: "⚠️ Allergy Notice",
        body:
          "Products may contain or come into contact with common allergens including:\n- Milk\n- Wheat\n- Nuts\n- Soy\n\n" +
          "It is the customer's responsibility to inform guests of any allergy risks.",
      },
      {
        title: "📸 Rights & Use",
        body: "MAKINCAKECo reserves the right to photograph and use images of all products for marketing and promotional purposes.",
      },
      {
        title: "⚖️ Disputes",
        body:
          "Any concerns must be submitted via email within 7 days of your event date.\n\n" +
          "All payments are non-refundable. Any resolution, if applicable, will be issued as store credit only.",
      },
      {
        title: "❌ Cancellations",
        body:
          "Cancellations must be submitted in writing at least 72 hours prior to the scheduled date.\n\n" +
          "Approved cancellations will receive store credit only. Retainers remain non-refundable.",
      },
    ],
    outro:
      "MAKINCAKECo is committed to providing high-quality, custom desserts and a professional experience for every order.",
  },
  contact: {
    heading: "Ready to Place an Order?",
    body: "My calendar fills up fast, so don't wait to secure your spot! Reach out today to discuss your custom cake or cupcake needs.",
    checklist: ["Event date", "Cake flavor", "Number of guests", "Inspiration photos"],
  },
};

const SEED = [
  ["Brown teddy bear cake with piped fur and a red bow", "Birthday"],
  ["Two-tier white cake with pearl piping and pastel flowers", "Wedding & Showers"],
  ["Two-tier white cake with red and white buttercream roses", "Wedding & Showers"],
  ["Textured white cake topped with fresh flowers and a sunflower", "Birthday"],
  ["Cow print \"First Rodeo\" birthday cake with a cowboy hat topper", "Birthday"],
  ["Navy blue cake with gold stars, yellow ribbon and figurines", "Birthday"],
  ["Teal two-tier character cake with purple mermaid scales", "Birthday"],
  ["Chocolate and cream cake topped with sugar orchids", "Specialty"],
  ["Two-tier sandcastle cake with seashells", "Birthday"],
  ["White drip cake with a lit candle", "Specialty"],
  ["Space-themed cake with an astronaut, rocket and planets", "Birthday"],
  ["Navy heart-shaped cake with shell piping and disco balls", "Birthday"],
  ["Happy Birthday cookie cake with leopard print and buttercream roses", "Cookie Cakes"],
  ["Light blue two-tier winter cake with snowflakes and woodland animals", "Holiday & Seasonal"],
  ["Vintage-style cake with blue lattice piping and bows", "Specialty"],
  ["Western cupcakes with cactus, cowboy boot and bow toppers", "Cupcakes"],
  ["Sculpted hen cake sitting on a nest of eggs", "Specialty"],
  ["Graduation cookie cake with a motorcycle design", "Graduation"],
  ["Pink and white cupcakes topped with tiaras and cherries", "Cupcakes"],
  ["Happy 6th Birthday cookie cake with a llama and balloons", "Cookie Cakes"],
  ["Pink heart-shaped vintage cake with bows", "Birthday"],
];

export const DEFAULT_PHOTOS = SEED.map(([alt, category], i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    id: `seed-${n}`,
    src: `/img/gallery/cake-${n}.jpg`,
    thumb: `/img/gallery/cake-${n}-sm.jpg`,
    alt,
    category,
    hidden: false,
  };
});
