import { remark } from "remark";
import html from "remark-html";

export async function markdownToHtml(source: string) : Promise<string> {
    return (await remark().use(html).process(source)).toString();
}