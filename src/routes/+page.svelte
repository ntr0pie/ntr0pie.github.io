<script lang="ts">
  import { ArrowUpRight } from "lucide-svelte";

  import Seo from "$lib/components/Seo.svelte";

  type Project = {
    name: string;
    href: string;
    desc?: string;
    aside?: string;
  };

  const featuredProjects: Project[] = [
    // {
    //   name: "Bore",
    //   href: "/work#bore",
    //   desc: "bypass your NAT in just 400 lines of code",
    //   aside: "8500+ stars on GitHub",
    // },
  ];

  const projectCount = featuredProjects.length;
</script>

<Seo
  title="Shreesh Tripathi"
  description="Hardware engineer, researcher, and human."
/>

<p
  class="layout-md text-black text-xl leading-tight font-light mb-16"
  id="eric-is"
>
  <span class="neutral">is a</span>
  hardware engineer<span class="neutral">,</span><br />
  researcher<span class="neutral">, and</span><br />
  human<span class="neutral">.</span>
</p>

<div class="layout-md text-md md:text-lg space-y-14">
  <div
    class="flex flex-col md:flex-row items-center space-y-10 space-x-0 md:space-y-0 md:space-x-10"
  >
    <div class="w-1/2 md:w-1/3">
      <!-- <p>This is what I look like:</p> -->
      <img
        alt="Photograph of Shreesh Tripathi"
        src="/assets/images/profile.png"
        class="scale-105"
      />
    </div>
    <div class="md:w-2/3 space-y-5">
      <p />
      Hi, I’m Shreesh, and I love computers.

      <p>
        I’m primarily interested in computer architecture and digital design,
        but I also make time to study and appreciate physical design, machine
        learning, physics and technology businesses.
      </p>

      <p>
        But when I’m not working with computers, I read anything and everything
        — from the back of a shampoo bottle to mushy memoirs. I also love
        playing the guitar, playing video games, running and sleeping.
      </p>
    </div>
  </div>
  <hr />
  <!-- projects hidden -->
  {#if projectCount > 0}
    <div class="leading-snug space-y-4">
      <p class="pb-2">My work:</p>

      {#each featuredProjects as project}
        <a class="project-pair" href={project.href}>
          <div class="text-black font-medium">
            {project.name}
            <ArrowUpRight size={18} class="inline text-neutral-400" />
          </div>
          <div>
            <p>{project.desc}</p>
            {#if project.aside}
              <aside>{project.aside}</aside>
            {/if}
          </div>
        </a>
      {/each}
    </div>
  {/if}

  <div class="space-y-5 text-md md:text-lg">
    <p>
      <em><u>Now;</u></em>
      I am a graduate student at
      <em><strong class="text-[#C41230]">Carnegie Mellon University</strong></em
      >, majoring in Electrical and Computer Engineering. I will be interning
      with the GPU ASIC team at
      <em><strong class="text-[#76B900]">Nvidia</strong></em> in Santa Clara, California
      during the summer of 2025 🏄‍♂️
    </p>
    <p>
      <em><u>Then;</u></em> I graduated from
      <em
        ><strong class="text-[#f57025]">Manipal Institute of Technology</strong
        ></em
      >
      with a bachelors in Electronics and Communication Engineering and a minor in
      Computer Science. I was part of my university’s AI Robotics Team,
      <a href="https://projectmanas.in/" class="link">Project MANAS</a>, where
      we worked on a self-driving car and an autonomous robot that won the world
      grand prize at the
      <a href="http://www.igvc.org/" class="link"
        >Intelligent Ground Vehicle Competition</a
      >
      in Michigan in 2019. I was also on the founding team of Manipal's
      <a href="https://ieee-ras-manipal.github.io/Website/" class="link"
        >IEEE Robotics and Automation Society</a
      >, and served as the Chairperson for the chapter during 2021 - 2022.
    </p>
  </div>
</div>

<style lang="postcss">
  .neutral {
    @apply text-neutral-400;
  }

  em {
    @apply font-serif text-[110%] leading-[100%];
  }

  .project-pair {
    @apply grid sm:grid-cols-[1fr,2fr] gap-y-1 -mx-3 px-3 py-2 hover:bg-neutral-100 transition-colors;
  }

  aside {
    @apply mt-0.5 text-base text-neutral-500;
  }

  /* Correction for vertical navigation links on mobile. */
  @media (max-width: 420px) {
    #eric-is {
      @apply -mt-10;
    }
  }
</style>
