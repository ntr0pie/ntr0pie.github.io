<script lang="ts">
  import { page } from "$app/stores";

  import Seo from "$lib/components/Seo.svelte";
  import Post from "./Post.svelte";

  const posts = import.meta.glob("../../posts/*.md", {
    eager: true,
  }) as any;

  const images = import.meta.glob("../../posts/*.{png,jpg,svg}", {
    eager: true,
  }) as any;

  function trimName(id: string) {
    return id.match(/\.\.\/posts\/(.*)\.md$/)?.[1];
  }

  $: postsByDate = Object.keys(posts).sort(
    (a, b) => posts[b].date - posts[a].date
  );
</script>

<Seo
  title="Shreesh Tripathi – Stream"
  description="Things I want to remember ∩ Things I don’t mind the internet knowing"
/>

<section class="layout-md">
  <p class="text-sm md:text-lg mb-4">
    <em>
      Things I want to remember ∩ Things I don’t mind the internet knowing
    </em>
  </p>
  <hr />
</section>

<div class="stream flex flex-col">
  {#each postsByDate as id (id)}
    <section class="py-10" id={trimName(id)}>
      <div class="mx-auto max-w-[1152px] px-4 sm:px-6">
        <Post data={posts[id]} {images} />
      </div>
    </section>
    <hr />
  {/each}
</div>

<style lang="postcss">
</style>
