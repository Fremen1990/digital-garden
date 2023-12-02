import { pathToRoot } from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function PageTitle({ fileData, cfg, displayClass }: QuartzComponentProps) {
  const title = cfg?.pageTitle ?? "Untitled Quartz"
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <>
      <h1 class={`page-title ${displayClass ?? ""}`}>
        <a href={baseDir}>{title}</a>
        <p style={{ marginTop: 0, marginLeft: "20px", fontSize: "12px" }}>by DevThomas</p>
      </h1>
    </>
  )
}

PageTitle.css = `
.page-title {
  margin: 0;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
