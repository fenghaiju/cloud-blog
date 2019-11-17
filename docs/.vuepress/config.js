module.exports = {
    title: '猿先生',
    description: "在不断地学习和实践后所整理记录的个人笔记",
    lastUpdated: '最近更新',
    port: 8082,
    themeConfig: {
        nav: [
            {text: '主页', link: '/'},
            {text: '学习笔记',
                items: [
                    { text: 'Java', link: '/study/java/' },
                    { text: 'SpringBoot', link: '/study/springboot/' },
                    { text: 'SpringCloud', link: '/study/springcloud/' },
                    { text: 'Linux', link: '/study/linux/' },
                    { text: 'Javascript', link: '/study/javascript/' },
                    { text: 'Vue', link: '/study/vue/' },
                    { text: 'Docker', link: '/study/docker/' },
                    { text: 'other', link: '/study/other/' },
                ]
            },
            {text: '收藏工具', link: '/favorite/'},
            {text: '关于我', link: '/guide/'},
            {text: '我的博客', items: [
                    { text: 'csdn', link: 'https://blog.csdn.net/m0_37903882' },
                    { text: '掘金', link: 'https://juejin.im/user/5aa1029c51882555770c0603' },
                    { text: '简书', link: 'https://www.jianshu.com/u/6740c2a5866d' },
                    { text: '码云', link: 'https://gitee.com/DuebassLei' },
                    { text: '个人网站', link: 'https://duebasslei.gitee.io' }
                ] },
        ],
        sidebar: {
            '/study/java/': getJavaSidebar("Java Sheet","More"),
            '/study/docker/': getDockerSidebar("Docker Sheet","More"),
            '/study/javascript/': getJavascriptSidebar("Javascript Sheet","More"),
            '/study/linux/': getLinuxSidebar("Linux Sheet","More"),
            '/study/springboot/': getSBSidebar("SpringBoot Sheet","More"),
            '/study/springcloud/': getSCSidebar("SpringCloud Sheet","More"),
            '/study/vue/': getVueSidebar("Vue Sheet","More"),
            '/study/other/': getOtherSidebar("Other Sheet","More"),
            '/favorite/': ['']
        },
        base: '/',
        dest: './docs/.vuepress/dist',
        // 假定 GitHub。也可以是一个完整的 GitLab URL。
        repo: 'https://github.com/DuebassLei/vuepress-blog',
        // 自定义项目git remote add origin https://github.com/DuebassLei/vuepress-blog.git仓库链接文字
        // 默认根据 `themeConfig.repo` 中的 URL 来自动匹配是 "GitHub"/"GitLab"/"Bitbucket" 中的哪个，如果不设置时是 "Source"。
        repoLabel: '贡献代码！',
        // 以下为可选的 "Edit this page" 链接选项
        editLinks: true,
        // 自定义编辑链接的文本。默认是 "Edit this page"
        editLinkText: '帮助我们改进页面内容1111！'
    }
}
function getDockerSidebar (groupA,groupB) {
    return [
        {
            title: groupA,
            collapsable: false,
            children: [
                ''
            ]
        },
        {
            title: groupB,
            collapsable: false,
            children: [
                'About'
            ]
        }
    ]
}
function getJavaSidebar (groupA,groupB) {
    return [
        {
            title: groupA,
            collapsable: false,
            children: [
                ''
            ]
        },
        {
            title: groupB,
            collapsable: false,
            children: [
                'About'
            ]
        }
    ]
}
function getJavascriptSidebar (groupA,groupB) {
    return [
        {
            title: groupA,
            collapsable: false,
            children: [
                ''
            ]
        },
        {
            title: groupB,
            collapsable: false,
            children: [
                'About'
            ]
        }]
}
function getLinuxSidebar (groupA,groupB) {
    return [
        {
            title: groupA,
            collapsable: false,
            children: [
                '',
                'SetProxy',
                'Git-Qs'
            ]
        },
        {
            title: groupB,
            collapsable: false,
            children: [
                'About'
            ]
        }]
}
function getSBSidebar (groupA,groupB) {
    return [
        {
            title: groupA,
            collapsable: false,
            children: [
                '',
                'poi-excel'
            ]
        },
        {
            title: groupB,
            collapsable: false,
            children: [
                'About'
            ]
        }]
}
function getSCSidebar (groupA,groupB) {
    return [
        {
            title: groupA,
            collapsable: false,
            children: [
                ''
            ]
        },
        {
            title: groupB,
            collapsable: false,
            children: [
                'About'
            ]
        }]
}
function getVueSidebar (groupA,groupB) {
    return [
        {
            title: groupA,
            collapsable: false,
            children: [
                '',
                'Moment',
                'arrayConvertTree'
            ]
        },
        {
            title: groupB,
            collapsable: false,
            children: [
                'About'
            ]
        }]
}
function getOtherSidebar (groupA,groupB) {
    return [
        {
            title: groupA,
            collapsable: false,
            children: [
                ''
            ]
        },
        {
            title: groupB,
            collapsable: false,
            children: [
                'About'
            ]
        }]
}
