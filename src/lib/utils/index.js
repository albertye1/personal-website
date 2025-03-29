export const fetchMarkdownPosts = async () => {
    const allPostFiles = import.meta.glob('/src/routes/blog/*.md');
    const iterablePostFiles = Object.entries(allPostFiles);

    const posts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const { metadata } = await resolver();
            const postPath = path.slice(11, -3);

            return {
                meta: metadata,
                path: postPath,
            };
        })
    );

    return posts;
}