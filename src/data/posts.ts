export interface BlogPost {
    id: string;
    title: string;
    date: string;
    tags: string[];
    content: string;
}

// Custom browser-safe frontmatter parser
function parseFrontmatter(raw: string) {
    const frontmatterRegex = /^---\s*([\s\S]*?)\s*---\s*([\s\S]*)$/;
    const match = raw.match(frontmatterRegex);

    if (!match) {
        return {
            data: {},
            content: raw
        };
    }

    const frontmatterBlock = match[1];
    const content = match[2];
    
    const data: Record<string, string | string[]> = {};
    
    frontmatterBlock.split('\n').forEach(line => {
        const [key, ...valueParts] = line.split(':');
        if (key && valueParts.length) {
            const cleanKey = key.trim();
            const cleanValue = valueParts.join(':').trim();
            
            // Handle basic arrays like ['tag1', 'tag2']
            if (cleanValue.startsWith('[') && cleanValue.endsWith(']')) {
                data[cleanKey] = cleanValue
                    .slice(1, -1)
                    .split(',')
                    .map(v => v.trim().replace(/^['"]|['"]$/g, ''));
            } else {
                // Remove quotes if present
                data[cleanKey] = cleanValue.replace(/^['"]|['"]$/g, '');
            }
        }
    });

    return { data, content };
}

// Load all markdown files from the content directory
const postFiles = import.meta.glob('../content/posts/*.md', { 
    eager: true, 
    query: '?raw', 
    import: 'default' 
});

export const posts: BlogPost[] = Object.entries(postFiles).map(([path, rawContent]) => {
    // Parse frontmatter
    const { data, content } = parseFrontmatter(rawContent as string);
    
    // Extract filename as ID (e.g., /path/to/intro-to-mcp.md -> intro-to-mcp)
    const id = path.split('/').pop()?.replace('.md', '') || 'unknown';

    return {
        id,
        title: typeof data.title === 'string' ? data.title : 'Untitled',
        date: typeof data.date === 'string' ? data.date : 'Unknown Date',
        tags: Array.isArray(data.tags) ? data.tags : [],
        content
    };
}).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());


