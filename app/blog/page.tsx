import Header from "@/components/header"
import Footer from "@/components/footer"
import { BlogCard } from "@/components/blog-card"
import { AnimateIn } from "@/components/animate-in"
import { getAllBlogPosts } from "@/lib/blog"

export const metadata = {
  title: "Blog | Discord Justice",
  description: "Latest news, guides, and insights about Discord security and moderation",
}

export default function BlogPage() {
  const blogPosts = getAllBlogPosts()

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <AnimateIn from="bottom">
          <h1 className="text-4xl font-bold mb-4 text-gradient">Blog</h1>
          <p className="text-xl mb-12 text-gray-300">
            Latest news, guides, and insights about Discord security and moderation
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard
                key={index}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                readTime={post.readTime}
                image={post.image}
                slug={post.slug}
              />
            ))}
          </div>
        </AnimateIn>
      </main>
      <Footer />
    </div>
  )
}
