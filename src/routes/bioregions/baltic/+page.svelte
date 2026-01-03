<!-- /src/routes/bioregions/baltic/+page.svelte -->
<script lang="ts">
  import { fade } from 'svelte/transition';
  import { base } from '$app/paths';
  import SEO from '$lib/components/SEO.svelte';
  
  let selectedLang = $state('en');
  
  const translations = {
    en: {
      meta: {
        title: "Baltic Homesteading Network - Find Regenerative Practitioners",
        description: "Connect with experienced homesteaders across Estonia, Latvia, and Lithuania. Like WWOOF, but for neighbors who stay."
      },
      hero: {
        title: "Baltic Homesteading Network",
        subtitle: "Find regenerative practitioners in your bioregion",
        tagline: "Like WWOOF, but for neighbors who stay. Connect with experienced homesteaders across Estonia, Latvia, and Lithuania."
      },
      langSelector: "Language:",
      why: {
        title: "Why bioregional?",
        intro: "Generic permaculture advice fails in the Baltics. What works in California doesn't work in clay-rich Estonian soil. What works in sunny Portugal fails during Baltic winters.",
        points: [
          "Climate matters - frost dates, growing seasons, and soil composition vary drastically across bioregions",
          "Language access - knowledge in your native language, validated by local practitioners",
          "Practical coordination - seed sharing and tool libraries require geographic proximity",
          "Contextual wisdom - learn from people solving the exact problems you face, in the exact place you live"
        ]
      },
      how: {
        title: "How it works",
        steps: [
          {
            icon: "📝",
            title: "Add yourself",
            description: "Submit your profile with your location, skills, and what you can offer or teach."
          },
          {
            icon: "🗺️",
            title: "Explore the map",
            description: "Find nearby practitioners. See who's working with similar challenges in your area."
          },
          {
            icon: "🤝",
            title: "Connect offline",
            description: "Reach out directly. Visit their homestead. Share knowledge face-to-face."
          }
        ]
      },
      join: {
        title: "Join the network",
        description: "Add yourself to the map so other Baltic homesteaders can find you.",
        formButton: "Submit your profile",
        emailButton: "Email instead",
        note: "We review all submissions within 2-3 days and add approved profiles to the map."
      },
      profiles: {
        title: "What you'll find",
        intro: "Profiles include:",
        items: [
          "Location (approximate - privacy preserved)",
          "Bio and experience level",
          "What they offer (knowledge, tools, skills)",
          "What they're learning (current challenges)",
          "How to contact them (email, website, or visit)"
        ],
        examples: "Examples: 'Permaculture design in clay soil', 'Tractor sharing', 'Season extension techniques', 'Natural building mentorship'"
      },
      wwoof: {
        title: "Like WWOOF, but different",
        intro: "You might know WWOOF (World Wide Opportunities on Organic Farms) - volunteers travel to work on farms in exchange for food and shelter.",
        differences: [
          {
            wwoof: "For travelers and short-term volunteers",
            baltic: "For neighbors and long-term residents"
          },
          {
            wwoof: "Work exchange (labor for accommodation)",
            baltic: "Knowledge exchange (peer-to-peer learning)"
          },
          {
            wwoof: "Farms host visiting volunteers",
            baltic: "Practitioners connect as equals"
          },
          {
            wwoof: "Great for learning while traveling",
            baltic: "Great for building resilient bioregional networks"
          }
        ],
        complement: "These complement each other. WWOOF is excellent for exploration. The Baltic Network is for putting down roots and building community where you live."
      },
      principles: {
        title: "Core principles",
        items: [
          "Bioregionally specific - what works here, not generic advice",
          "Peer-to-peer - no experts, just experienced practitioners",
          "Privacy-respecting - you control what you share",
          "No paywalls, no gatekeeping - knowledge freely accessible",
          "Offline-first - connections happen face-to-face",
          "Community-owned - you retain ownership of your knowledge",
          "Start simple - prove it works before adding complexity"
        ]
      },
      map: {
        title: "The map (coming soon)",
        description: "We're building an interactive map showing all network members. You'll be able to:",
        features: [
          "Filter by skills, crops, techniques",
          "See approximate locations (privacy-preserved)",
          "Find practitioners within your travel range",
          "Discover what's possible in your microclimate"
        ],
        timeline: "Map launches when we have 10+ profiles. Be one of the first!"
      },
      contact: {
        title: "Questions or feedback?",
        creator: "Network founded by:",
        name: "Björn Kenneth Holmström",
        role: "Building coordination infrastructure for bioregional resilience. Based in Sweden, working across Nordic/Baltic regions.",
        email: "Email:",
        note: "Not on social media? Just email. I read everything."
      },
      footer: {
        integration: "Part of the broader Communize ecosystem exploring commons-based resilience.",
        license: "Network infrastructure open-source (AGPL-3.0). Your knowledge remains yours."
      }
    },
    // Placeholder for other languages - all link to English for now
    et: { /* Same structure, Estonian translations */ },
    lv: { /* Same structure, Latvian translations */ },
    lt: { /* Same structure, Lithuanian translations */ }
  };

  // For now, all languages show English content
  const t = $derived(translations.en);
</script>

<SEO
  title={t.meta.title}
  description={t.meta.description}
  keywords="Baltic homesteading, permaculture, Estonia, Latvia, Lithuania, bioregional, regenerative agriculture, WWOOF alternative"
/>

<div class="min-h-screen" in:fade>
  <!-- Hero Section -->
  <section class="relative overflow-hidden bg-gradient-to-br from-earth-50 via-moss-50 to-earth-100 py-20">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <!-- Language Selector -->
      <div class="flex justify-center items-center gap-2 mb-8">
        <span class="text-sm text-earth-700 font-medium">{t.langSelector}</span>
        <div class="flex gap-2">
          {#each ['en', 'et', 'lv', 'lt'] as lang}
            <button
              onclick={() => selectedLang = lang}
              class="px-3 py-1.5 rounded-lg text-sm font-medium transition-all {selectedLang === lang ? 'bg-moss-600 text-white' : 'bg-white text-earth-700 hover:bg-moss-50'}"
              title={lang === 'en' ? 'English' : lang === 'et' ? 'Eesti' : lang === 'lv' ? 'Latviešu' : 'Lietuvių'}
            >
              {lang === 'en' ? 'EN' : lang === 'et' ? 'EST' : lang === 'lv' ? 'LAT' : 'LIT'}
            </button>
          {/each}
        </div>
      </div>

      <h1 class="text-4xl md:text-5xl font-serif text-earth-900 mb-4 leading-tight">
        {t.hero.title}
      </h1>
      
      <!-- Bioregional Map SVG -->
      <div class="max-w-md mx-auto mb-6">
        <svg viewBox="0 0 300 200" class="w-full h-auto opacity-90">
          <!-- Baltic Sea -->
          <path 
            d="M 50 20 Q 80 10, 120 15 T 200 30 Q 230 45, 250 80 T 240 140 Q 220 170, 180 180 T 100 175 Q 60 165, 40 130 T 50 20 Z" 
            fill="#93c5fd" 
            fill-opacity="0.3"
            stroke="#567d56" 
            stroke-width="1.5"
            stroke-dasharray="3,3"
          />
          
          <!-- Estonia -->
          <path 
            d="M 140 35 L 180 30 L 190 50 L 165 55 L 140 50 Z" 
            fill="#567d56" 
            fill-opacity="0.6"
          />
          <text x="160" y="45" font-size="9" fill="#2d4a2d" font-weight="600" text-anchor="middle">EST</text>
          
          <!-- Latvia -->
          <path 
            d="M 130 60 L 175 58 L 180 90 L 145 92 L 125 80 Z" 
            fill="#567d56" 
            fill-opacity="0.5"
          />
          <text x="150" y="77" font-size="9" fill="#2d4a2d" font-weight="600" text-anchor="middle">LAT</text>
          
          <!-- Lithuania -->
          <path 
            d="M 115 95 L 155 93 L 160 120 L 130 125 L 110 110 Z" 
            fill="#567d56" 
            fill-opacity="0.4"
          />
          <text x="135" y="110" font-size="9" fill="#2d4a2d" font-weight="600" text-anchor="middle">LIT</text>
        </svg>
      </div>
      
      <p class="text-xl text-earth-700 mb-4 leading-relaxed">
        {t.hero.subtitle}
      </p>
      <p class="text-earth-600 max-w-2xl mx-auto">
        {t.hero.tagline}
      </p>
    </div>
  </section>

  <!-- Why Bioregional -->
  <section class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-4">
      <h2 class="text-3xl font-serif text-earth-900 mb-6">{t.why.title}</h2>
      <p class="text-lg text-earth-700 mb-6 leading-relaxed">
        {t.why.intro}
      </p>
      <ul class="space-y-3">
        {#each t.why.points as point}
          <li class="flex items-start">
            <svg class="w-6 h-6 text-moss-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="text-earth-700">{point}</span>
          </li>
        {/each}
      </ul>
    </div>
  </section>

  <!-- How It Works -->
  <section class="py-16 bg-gradient-to-br from-moss-50 to-earth-50">
    <div class="max-w-5xl mx-auto px-4">
      <h2 class="text-3xl font-serif text-earth-900 mb-12 text-center">{t.how.title}</h2>
      <div class="grid md:grid-cols-3 gap-8">
        {#each t.how.steps as step, i}
          <div class="text-center">
            <div class="text-5xl mb-4">{step.icon}</div>
            <div class="inline-block px-4 py-1 bg-moss-600 text-white rounded-full text-sm font-semibold mb-4">
              Step {i + 1}
            </div>
            <h3 class="text-xl font-semibold text-earth-900 mb-3">{step.title}</h3>
            <p class="text-earth-700">{step.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Join the Network (Main CTA) -->
  <section class="py-20 bg-gradient-to-br from-moss-600 to-moss-700 text-white">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <h2 class="text-3xl font-serif mb-4">{t.join.title}</h2>
      <p class="text-lg mb-8 opacity-95">
        {t.join.description}
      </p>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center mb-6">
        <a 
          href="https://airtable.com/appO2W0t9LlEmW7Nr/pagC6JZgNgB1pii12/form"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center px-8 py-4 bg-white text-moss-700 rounded-lg hover:bg-moss-50 transition-colors font-semibold shadow-lg text-lg"
        >
          📋 {t.join.formButton}
        </a>
        
        <a 
          href="mailto:bjorn.kenneth.holmstrom@gmail.com?subject=Baltic Homesteading Network Profile"
          class="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-moss-600 transition-colors font-semibold"
        >
          ✉️ {t.join.emailButton}
        </a>
      </div>
      
      <p class="text-sm opacity-90">
        {t.join.note}
      </p>
    </div>
  </section>

  <!-- What You'll Find -->
  <section class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-4">
      <h2 class="text-3xl font-serif text-earth-900 mb-6">{t.profiles.title}</h2>
      <p class="text-earth-700 mb-4">{t.profiles.intro}</p>
      <ul class="space-y-2 mb-6">
        {#each t.profiles.items as item}
          <li class="flex items-start">
            <span class="text-moss-600 mr-3">•</span>
            <span class="text-earth-700">{item}</span>
          </li>
        {/each}
      </ul>
      <p class="text-sm text-earth-600 italic">
        {t.profiles.examples}
      </p>
    </div>
  </section>

  <!-- WWOOF Comparison -->
  <section class="py-16 bg-earth-50">
    <div class="max-w-4xl mx-auto px-4">
      <h2 class="text-3xl font-serif text-earth-900 mb-6">{t.wwoof.title}</h2>
      <p class="text-earth-700 mb-8">{t.wwoof.intro}</p>
      
      <div class="space-y-4 mb-8">
        {#each t.wwoof.differences as diff}
          <div class="grid md:grid-cols-2 gap-4">
            <div class="p-4 bg-white rounded-lg border-2 border-earth-200">
              <div class="text-sm text-earth-600 mb-1">WWOOF</div>
              <div class="text-earth-800">{diff.wwoof}</div>
            </div>
            <div class="p-4 bg-moss-50 rounded-lg border-2 border-moss-300">
              <div class="text-sm text-moss-700 mb-1">Baltic Network</div>
              <div class="text-earth-900 font-medium">{diff.baltic}</div>
            </div>
          </div>
        {/each}
      </div>
      
      <p class="text-earth-700 bg-moss-50 p-6 rounded-lg border-l-4 border-moss-500">
        <strong>Not competitors, complements.</strong> {t.wwoof.complement}
      </p>
    </div>
  </section>

  <!-- Map Preview -->
  <section class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-4">
      <h2 class="text-3xl font-serif text-earth-900 mb-6">{t.map.title}</h2>
      <p class="text-earth-700 mb-4">{t.map.description}</p>
      <ul class="space-y-2 mb-6">
        {#each t.map.features as feature}
          <li class="flex items-start">
            <svg class="w-5 h-5 text-moss-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="text-earth-700">{feature}</span>
          </li>
        {/each}
      </ul>
      <p class="text-moss-700 font-semibold">
        {t.map.timeline}
      </p>
    </div>
  </section>

  <!-- Core Principles -->
  <section class="py-12 bg-earth-50">
    <div class="max-w-4xl mx-auto px-4">
      <h2 class="text-2xl font-serif text-earth-900 mb-6">{t.principles.title}</h2>
      <div class="space-y-3">
        {#each t.principles.items as principle}
          <div class="flex items-start">
            <svg class="w-5 h-5 text-moss-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <span class="text-earth-700">{principle}</span>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Contact -->
  <section class="py-16 bg-white border-t-2 border-earth-200">
    <div class="max-w-4xl mx-auto px-4">
      <h2 class="text-3xl font-serif text-earth-900 mb-8">{t.contact.title}</h2>
      
      <div class="border-l-4 border-moss-400 pl-6">
        <p class="text-sm text-earth-600 mb-1">{t.contact.creator}</p>
        <p class="text-lg text-earth-800 font-semibold mb-2">{t.contact.name}</p>
        <p class="text-sm text-earth-700 mb-3">{t.contact.role}</p>
        <div class="flex items-center gap-2 text-sm">
          <span class="text-earth-600">{t.contact.email}</span>
          <a href="mailto:bjorn.kenneth.holmstrom@gmail.com" class="text-moss-600 hover:text-moss-700 font-medium border-b border-moss-300 hover:border-moss-500">
            bjorn.kenneth.holmstrom@gmail.com
          </a>
        </div>
        <p class="text-xs text-earth-600 mt-2 italic">{t.contact.note}</p>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <section class="py-12 bg-earth-900 text-earth-100">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <p class="mb-3">{t.footer.integration}</p>
      <p class="text-sm text-earth-300 mb-6">{t.footer.license}</p>
      <div class="mt-6">
        <a href="{base}/" class="text-moss-400 hover:text-moss-300 text-sm border-b border-moss-600 hover:border-moss-400">
          ← Back to Communize
        </a>
      </div>
    </div>
  </section>
</div>
