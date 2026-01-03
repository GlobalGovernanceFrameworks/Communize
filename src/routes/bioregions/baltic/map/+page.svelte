<!-- src/routes/bioregions/baltic/map/+page.svelte -->
<script lang="ts">
  import { fade } from 'svelte/transition';
  import { base } from '$app/paths';
  import SEO from '$lib/components/SEO.svelte';
  
  let shareButtonText = $state('🔗 Share with others');
  
  async function shareNetwork() {
    const url = `${window.location.origin}${base}/bioregions/baltic`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Baltic Homesteading Network',
          url: url
        });
        shareButtonText = '✓ Shared!';
      } catch (err) {
        // User cancelled share - do nothing
      }
    } else {
      await navigator.clipboard.writeText(url);
      shareButtonText = '✓ Link copied!';
    }
    
    // Reset button text after 2 seconds
    setTimeout(() => {
      shareButtonText = '🔗 Share with others';
    }, 2000);
  }
</script>

<SEO
  title="Baltic Network Map - Coming Soon"
  description="Interactive map of Baltic homesteaders launching soon"
/>

<div class="min-h-screen bg-gradient-to-br from-earth-50 via-moss-50 to-earth-100" in:fade>
  <div class="max-w-4xl mx-auto px-4 py-20">
    
    <!-- Header -->
    <div class="text-center mb-12">
      <div class="text-6xl mb-4">🗺️</div>
      <h1 class="text-4xl md:text-5xl font-serif text-earth-900 mb-4">
        Map coming soon
      </h1>
      <p class="text-xl text-earth-700">
        We're building the interactive map. It launches when we have 10+ profiles.
      </p>
    </div>

    <!-- Current Status -->
    <div class="bg-white rounded-xl p-8 shadow-lg mb-8 border-2 border-moss-300">
      <h2 class="text-2xl font-serif text-earth-900 mb-4">Current status</h2>
      <div class="grid md:grid-cols-3 gap-6 text-center mb-6">
        <div>
          <div class="text-3xl font-bold text-moss-600 mb-1">0</div>
          <div class="text-sm text-earth-600">Profiles submitted</div>
        </div>
        <div>
          <div class="text-3xl font-bold text-earth-400 mb-1">10</div>
          <div class="text-sm text-earth-600">Needed to launch</div>
        </div>
        <div>
          <div class="text-3xl font-bold text-earth-700 mb-1">~2 weeks</div>
          <div class="text-sm text-earth-600">Estimated timeline</div>
        </div>
      </div>
      <div class="w-full bg-earth-200 rounded-full h-3">
        <div class="bg-moss-600 h-3 rounded-full transition-all duration-500" style="width: 0%"></div>
      </div>
      <p class="text-xs text-earth-600 text-center mt-2">0% of minimum profiles</p>
    </div>

    <!-- What to Expect -->
    <div class="bg-moss-50 rounded-xl p-8 mb-8 border-2 border-moss-200">
      <h2 class="text-2xl font-serif text-earth-900 mb-4">What the map will show</h2>
      <ul class="space-y-3">
        <li class="flex items-start">
          <svg class="w-6 h-6 text-moss-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span class="text-earth-700"><strong>Interactive map</strong> of Baltic region (Estonia, Latvia, Lithuania)</span>
        </li>
        <li class="flex items-start">
          <svg class="w-6 h-6 text-moss-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span class="text-earth-700"><strong>Clickable markers</strong> showing each homesteader's approximate location</span>
        </li>
        <li class="flex items-start">
          <svg class="w-6 h-6 text-moss-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span class="text-earth-700"><strong>Profile cards</strong> with bio, skills offered, contact info</span>
        </li>
        <li class="flex items-start">
          <svg class="w-6 h-6 text-moss-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span class="text-earth-700"><strong>Search/filter</strong> by skills, location, or what they're learning</span>
        </li>
      </ul>
    </div>

    <!-- Help Launch Faster -->
    <div class="bg-white rounded-xl p-8 mb-8 border-2 border-earth-200">
      <h2 class="text-2xl font-serif text-earth-900 mb-4">Help us launch faster</h2>
      <p class="text-earth-700 mb-4">
        The more profiles we get, the sooner the map launches. Know someone who should join?
      </p>
      <div class="flex flex-col sm:flex-row gap-4">
        <a 
          href="{base}/bioregions/baltic"
          class="inline-flex items-center justify-center px-6 py-3 bg-moss-600 text-white rounded-lg hover:bg-moss-700 transition-colors font-semibold"
        >
          📋 Submit another profile
        </a>
        <button
          onclick={shareNetwork}
          class="inline-flex items-center justify-center px-6 py-3 border-2 border-moss-600 text-moss-700 rounded-lg hover:bg-moss-50 transition-colors font-semibold"
        >
          {shareButtonText}
        </button>
      </div>
    </div>

    <!-- While You Wait -->
    <div class="text-center">
      <h2 class="text-2xl font-serif text-earth-900 mb-4">While you wait</h2>
      <p class="text-earth-700 mb-6">
        Explore Communize
      </p>
      <a 
        href="{base}/"
        class="inline-flex items-center text-moss-600 hover:text-moss-700 font-medium border-b-2 border-moss-300 hover:border-moss-500"
      >
        ← Back to Communize
      </a>
    </div>

  </div>
</div>
