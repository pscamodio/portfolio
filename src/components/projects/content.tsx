export type ProjectContentProps = {
    content: string;
}

export function ProjectContent({content}: ProjectContentProps) {
   return <div dangerouslySetInnerHTML={{ __html: content }} />
}