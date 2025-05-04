import fs from "fs/promises"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

const docsDirectory = path.join(process.cwd(), "docs")

export async function getDocContent(filename: string) {
  const fullPath = path.join(docsDirectory, filename)
  const fileContents = await fs.readFile(fullPath, "utf8")
  const { content } = matter(fileContents)
  const processedContent = await remark().use(html).process(content)
  return processedContent.toString()
}
