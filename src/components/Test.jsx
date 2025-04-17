import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
// import CommonMarkPreview from "./CommonMarkPreview"
// import ReactMarkdown from "react-markdown"
// import 'github-markdown-css/github-markdown.css'

const projects = [
    {
        id: "1",
        name: "Mohammed Khalid",
        readmeUrl: "https://raw.githubusercontent.com/thekhalidsha/php-mvc-simple-framework/refs/heads/main/README.md"
    },
    // Add more projects here
]

export default function ProjectDetailss() {
    
    
    const { id } = useParams()
    const [readme, setReadme] = useState("")
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const project = projects.find(p => p.id === id)

    useEffect(() => {
        if (project?.readmeUrl) {
            fetch(project.readmeUrl)
                .then(res => res.text())
                .then(data => {
                    setReadme(data)
                    setLoading(false)
                })
                .catch(err => {
                    console.error(err)
                    setError("Failed to load README")
                    setLoading(false)
                })
        } else {
            setError("Project not found")
            setLoading(false)
        }
    }, [project])
    

    if (loading) return <p>Loading README...</p>
    if (error) return <p>{error}</p>
    return (
        <div style={{ maxWidth: "800px", margin: "auto", padding: "2rem" }}>
            <h1>{project.name}</h1>
            {/* <div className="markdown-body"> */}
                {/* <ReactMarkdown> */}
                    {/* {readme} */}
                    {/* <CommonMarkPreview markdown={readme} /> */}
                    {/* </ReactMarkdown> */}
            {/* </div> */}

        </div>
    )
}
