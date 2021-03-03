module.exports = {
    title: 'Memo',
    theme: '@vuepress/theme-blog',
    dest: 'docs/',
    base: '/',
    themeConfig: {
        
    },
    plugins: [
        ['@vite/vuepress-plugin-mathjax', {}],
        ['@vuepress/search', {
            searchMaxSuggestions: 32
        }]
    ],
    head: [
        ['link', {            
            rel: 'stylesheet',
            type: 'text/css',
            href: '/katex.min.css'
        }]
    ]
}
