<!-- /src/routes/bioregions/+page.svelte -->
<script lang="ts">
  import { fade } from 'svelte/transition';
  import { base } from '$app/paths';
  import SEO from '$lib/components/SEO.svelte';
  
  const regions = [
    {
      slug: 'baltic',
      name: 'Baltic Bioregion',
      countries: ['Estonia', 'Latvia', 'Lithuania'],
      status: 'active',
      description: 'Homesteading knowledge network for regenerative living in Baltic climate',
      coordinator: 'Open Position',
      contributors: '0',
      launched: '2025',
      icon: '🌊'
    },
    // Future regions will go here - examples commented out:
    // {
    //   slug: 'nordic',
    //   name: 'Nordic Bioregion',
    //   countries: ['Sweden', 'Norway', 'Finland', 'Denmark'],
    //   status: 'planned',
    //   description: 'Coming soon - pending Baltic network success',
    //   coordinator: 'TBD',
    //   contributors: '-',
    //   launched: 'TBD',
    //   icon: '🌲'
    // },
    // {
    //   slug: 'iberian',
    //   name: 'Iberian Bioregion',
    //   countries: ['Spain', 'Portugal'],
    //   status: 'planned',
    //   description: 'Mediterranean climate homesteading network',
    //   coordinator: 'TBD',
    //   contributors: '-',
    //   launched: 'TBD',
    //   icon: '☀️'
    // }
  ];
</script>

<SEO
  title="Bioregional Homesteading Networks - Communize"
  description="Peer-validated, bioregionally-specific homesteading knowledge networks. Starting with the Baltics, expanding globally."
  keywords="bioregional networks, homesteading, permaculture, regional knowledge, climate-specific agriculture"
/>

<div class="min-h-screen" in:fade>
  <!-- Hero -->
  <section class="relative overflow-hidden bg-gradient-to-br from-earth-50 via-moss-50 to-earth-100 py-20">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <h1 class="text-4xl md:text-5xl font-serif text-earth-900 mb-4 leading-tight">
        Bioregional Homesteading Networks
      </h1>
      <p class="text-xl text-earth-700 mb-6 leading-relaxed">
        Climate-specific, peer-validated knowledge for regenerative living. Because what works in Estonia doesn't work in Spain.
      </p>
      <p class="text-sm text-earth-600 font-medium">
        Community-driven • No bureaucracy • Failure-inclusive
      </p>
    </div>
  </section>

  <!-- Why Bioregional -->
  <section class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-4">
      <h2 class="text-3xl font-serif text-earth-900 mb-6">Why bioregional?</h2>
      
      <div class="grid md:grid-cols-3 gap-6 mb-8">
        <div class="p-6 bg-earth-50 rounded-lg">
          <div class="text-3xl mb-3">🌍</div>
          <h3 class="font-semibold text-earth-900 mb-2">Climate matters</h3>
          <p class="text-sm text-earth-700">Baltic frost dates, soil composition, and growing seasons are radically different from Mediterranean regions. Generic advice fails.</p>
        </div>

        <div class="p-6 bg-moss-50 rounded-lg">
          <div class="text-3xl mb-3">🗣️</div>
          <h3 class="font-semibold text-earth-900 mb-2">Language access</h3>
          <p class="text-sm text-earth-700">Knowledge in your native language, validated by practitioners in your region. No translation barriers to critical information.</p>
        </div>

        <div class="p-6 bg-clay-50 rounded-lg">
          <div class="text-3xl mb-3">🤝</div>
          <h3 class="font-semibold text-earth-900 mb-2">Local coordination</h3>
          <p class="text-sm text-earth-700">Bulk seed orders, tool sharing, and mentorship require geographic proximity. Regional networks enable practical cooperation.</p>
        </div>
      </div>

      <p class="text-earth-700 leading-relaxed">
        We're starting with the Baltic region to prove the model works. If successful, we'll replicate across bioregions globally - each maintaining its own knowledge base, coordinator, and community while sharing the infrastructure and principles.
      </p>
    </div>
  </section>

  <!-- Active & Planned Networks -->
  <section class="py-16 bg-earth-50">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-3xl font-serif text-earth-900 mb-3 text-center">Networks</h2>
      <p class="text-earth-600 text-center mb-12">Each network is independently coordinated but shares principles and infrastructure</p>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each regions as region}
          <a 
            href="{base}/bioregions/{region.slug}"
            class="group block bg-white rounded-xl p-6 border-2 {region.status === 'active' ? 'border-moss-400 hover:border-moss-500 hover:shadow-lg' : 'border-earth-200 opacity-60 cursor-not-allowed'} transition-all"
          >
            <!-- Header -->
            <div class="flex items-start justify-between mb-4">
              <div class="text-4xl">{region.icon}</div>
              <span class="px-3 py-1 rounded-full text-xs font-semibold {region.status === 'active' ? 'bg-moss-100 text-moss-700' : 'bg-earth-100 text-earth-600'}">
                {region.status === 'active' ? 'Active' : 'Planned'}
              </span>
            </div>

            <!-- Content -->
            <h3 class="text-xl font-serif text-earth-900 mb-2">{region.name}</h3>
            <p class="text-sm text-earth-600 mb-3">
              {region.countries.join(', ')}
            </p>
            <p class="text-sm text-earth-700 mb-4">{region.description}</p>

            <!-- Stats -->
            <div class="grid grid-cols-2 gap-3 text-xs">
              <div>
                <div class="text-earth-600">Coordinator</div>
                <div class="font-medium text-earth-800">{region.coordinator}</div>
              </div>
              <div>
                <div class="text-earth-600">Contributors</div>
                <div class="font-medium text-earth-800">{region.contributors}</div>
              </div>
            </div>

            {#if region.status === 'active'}
              <div class="mt-4 pt-4 border-t border-earth-100 text-moss-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
                Explore network →
              </div>
            {/if}
          </a>
        {/each}
      </div>
    </div>
  </section>

  <!-- How to Start Your Region -->
  <section class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-4">
      <h2 class="text-3xl font-serif text-earth-900 mb-6">Start a network in your bioregion</h2>
      
      <p class="text-lg text-earth-700 mb-6">
        If you're an experienced homesteader in a region not yet covered, you can replicate this model. We provide the infrastructure, you provide local expertise and coordination.
      </p>

      <div class="bg-moss-50 rounded-lg p-6 border-2 border-moss-200 mb-8">
        <h3 class="font-semibold text-earth-900 mb-3">Prerequisites:</h3>
        <ul class="space-y-2 text-sm">
          <li class="flex items-start">
            <svg class="w-5 h-5 text-moss-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="text-earth-700">5+ years homesteading experience in your bioregion</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-moss-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="text-earth-700">Connections to 10+ other experienced practitioners in region</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-moss-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="text-earth-700">5-10 hours/month to coordinate (initially volunteer)</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-moss-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="text-earth-700">Commitment to open knowledge sharing (no paywalls, no gatekeeping)</span>
          </li>
        </ul>
      </div>

      <div class="space-y-4 mb-8">
        <div class="border-l-4 border-moss-400 pl-6">
          <h3 class="font-semibold text-earth-900 mb-2">1. Prove local demand</h3>
          <p class="text-sm text-earth-700">Gather 10-15 committed contributors willing to share knowledge. Show there's genuine need in your region.</p>
        </div>

        <div class="border-l-4 border-earth-400 pl-6">
          <h3 class="font-semibold text-earth-900 mb-2">2. Adapt the template</h3>
          <p class="text-sm text-earth-700">We provide the Google Doc template, website structure, and coordination guidelines. You adapt for local climate, crops, and context.</p>
        </div>

        <div class="border-l-4 border-clay-400 pl-6">
          <h3 class="font-semibold text-earth-900 mb-2">3. Launch & iterate</h3>
          <p class="text-sm text-earth-700">Start simple, gather feedback, improve. We support you with technical infrastructure and lessons from existing networks.</p>
        </div>
      </div>

      <a 
        href="mailto:bjorn.kenneth.holmstrom@gmail.com?subject=New Bioregional Network Proposal"
        class="inline-block px-8 py-4 bg-moss-600 text-white rounded-lg hover:bg-moss-700 transition-colors font-semibold shadow-lg hover:shadow-xl"
      >
        Propose a new network
      </a>
    </div>
  </section>

  <!-- Principles -->
  <section class="py-16 bg-earth-50">
    <div class="max-w-4xl mx-auto px-4">
      <h2 class="text-3xl font-serif text-earth-900 mb-6">Core principles (all networks)</h2>
      
      <div class="space-y-3">
        {#each [
          "Bioregionally specific - what works here, not generic advice",
          "Peer-validated - real practitioners, real experience",
          "Failure-inclusive - document what doesn't work",
          "No paywalls, no gatekeeping - knowledge freely accessible",
          "Community-owned - contributors retain credit",
          "Start simple - prove it works before adding complexity",
          "Self-organizing - minimal bureaucracy, maximum coordination"
        ] as principle}
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

  <!-- Footer CTA -->
  <section class="py-12 bg-earth-900 text-earth-100">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <p class="mb-3">Part of the broader Communize ecosystem exploring commons-based resilience</p>
      <div class="mt-6">
        <a href="{base}/" class="text-moss-400 hover:text-moss-300 text-sm border-b border-moss-600 hover:border-moss-400">
          ← Back to Communize
        </a>
      </div>
    </div>
  </section>
</div>
