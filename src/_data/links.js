let thisGitHubRepo = "jacebenson/sn-11ty";
module.exports = {
    docs: {
        tag: "docs",
        url: "/docs",
        name: "Docs",
        viewbox: "0 0 16 16",
        svg: '<path d="M14 2v13h-10.5c-0.829 0-1.5-0.672-1.5-1.5s0.671-1.5 1.5-1.5h9.5v-12h-10c-1.1 0-2 0.9-2 2v12c0 1.1 0.9 2 2 2h12v-14h-1z"></path><path d="M3.501 13v0c-0 0-0.001 0-0.001 0-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0 0 0.001-0 0.001-0v0h9.498v-1h-9.498z"></path>',
        alt: "Read the Docs"
    },
    access: {
        tag: "access",
        url: "/access",
        name: "Access",
        viewbox: "0 0 16 16",
        svg: '<path d="M7 2l2 2h7v11h-16v-13z"></path>',
        alt: "See the structure"
    },
    automations: {
        tag: "automations",
        url: "/automations",
        name: "Automations",
        viewbox: "0 0 16 16",
        svg: '<path d="M7 2l2 2h7v11h-16v-13z"></path>',
        alt: "See the structure"
    },
    userexperience: {
        tag: "ux",
        url: "/ux",
        name: "UX",
        viewbox: "0 0 16 16",
        svg: '<path d="M7 2l2 2h7v11h-16v-13z"></path>',
        alt: "See the structure"
    },
    reference: {
        tag: "reference",
        url: "/reference",
        name: "Reference",
        viewbox: "0 0 12 16",
        svg: '<path fill-rule="evenodd" d="M6 15c-3.31 0-6-.9-6-2v-2c0-.17.09-.34.21-.5.67.86 3 1.5 5.79 1.5s5.12-.64 5.79-1.5c.13.16.21.33.21.5v2c0 1.1-2.69 2-6 2zm0-4c-3.31 0-6-.9-6-2V7c0-.11.04-.21.09-.31.03-.06.07-.13.12-.19C.88 7.36 3.21 8 6 8s5.12-.64 5.79-1.5c.05.06.09.13.12.19.05.1.09.21.09.31v2c0 1.1-2.69 2-6 2zm0-4c-3.31 0-6-.9-6-2V3c0-1.1 2.69-2 6-2s6 .9 6 2v2c0 1.1-2.69 2-6 2zm0-5c-2.21 0-4 .45-4 1s1.79 1 4 1 4-.45 4-1-1.79-1-4-1z"></path>',
        
        alt: "See the starting schema"
    },
    about: {
        url: "/about",
        name: "About",
        viewbox: "0 0 24 24",
        svg: '<path d="M0 0h24v24H0V0z" fill="none"></path><path d="M5 18.31l3-1.16V5.45L5 6.46zm11 .24l3-1.01V5.69l-3 1.17z" opacity=".3"></path><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM8 17.15l-3 1.16V6.46l3-1.01v11.7zm6 1.38l-4-1.4V5.47l4 1.4v11.66zm5-.99l-3 1.01V6.86l3-1.16v11.84z"></path>',
        alt: "Path to 1.0"
    },
    rest: {
        url: "/rest",
        name: "Rest API",
    },
    news: {
        url: "/news",
        name: "News",
        viewbox: "0 0 24 24",
        svg: '<g><rect fill="none" height="24" width="24"></rect></g><g><path d="M21,5c-1.11-0.35-2.33-0.5-3.5-0.5c-1.95,0-4.05,0.4-5.5,1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45,4.9,1,6v14.65 c0,0.25,0.25,0.5,0.5,0.5c0.1,0,0.15-0.05,0.25-0.05C3.1,20.45,5.05,20,6.5,20c1.95,0,4.05,0.4,5.5,1.5c1.35-0.85,3.8-1.5,5.5-1.5 c1.65,0,3.35,0.3,4.75,1.05c0.1,0.05,0.15,0.05,0.25,0.05c0.25,0,0.5-0.25,0.5-0.5V6C22.4,5.55,21.75,5.25,21,5z M3,18.5V7 c1.1-0.35,2.3-0.5,3.5-0.5c1.34,0,3.13,0.41,4.5,0.99v11.5C9.63,18.41,7.84,18,6.5,18C5.3,18,4.1,18.15,3,18.5z M21,18.5 c-1.1-0.35-2.3-0.5-3.5-0.5c-1.34,0-3.13,0.41-4.5,0.99V7.49c1.37-0.59,3.16-0.99,4.5-0.99c1.2,0,2.4,0.15,3.5,0.5V18.5z"></path><path d="M11,7.49C9.63,6.91,7.84,6.5,6.5,6.5C5.3,6.5,4.1,6.65,3,7v11.5C4.1,18.15,5.3,18,6.5,18 c1.34,0,3.13,0.41,4.5,0.99V7.49z" opacity=".3"></path></g><g><path d="M17.5,10.5c0.88,0,1.73,0.09,2.5,0.26V9.24C19.21,9.09,18.36,9,17.5,9c-1.28,0-2.46,0.16-3.5,0.47v1.57 C14.99,10.69,16.18,10.5,17.5,10.5z"></path><path d="M17.5,13.16c0.88,0,1.73,0.09,2.5,0.26V11.9c-0.79-0.15-1.64-0.24-2.5-0.24c-1.28,0-2.46,0.16-3.5,0.47v1.57 C14.99,13.36,16.18,13.16,17.5,13.16z"></path><path d="M17.5,15.83c0.88,0,1.73,0.09,2.5,0.26v-1.52c-0.79-0.15-1.64-0.24-2.5-0.24c-1.28,0-2.46,0.16-3.5,0.47v1.57 C14.99,16.02,16.18,15.83,17.5,15.83z"></path></g>',
        alt: "Someone wrote about us!"
    },
    logos: { 
        url: "/logos", 
        name: "Logos",
        alt: "logo download and usage"
    },
    cookbooks: { 
        tag: "cookbooks",
        url: "/cookbooks", 
        name: "Cookbooks",
        viewbox: "0 0 18 16",
        svg: '<path d="M3.5 2h-3c-0.275 0-0.5 0.225-0.5 0.5v11c0 0.275 0.225 0.5 0.5 0.5h3c0.275 0 0.5-0.225 0.5-0.5v-11c0-0.275-0.225-0.5-0.5-0.5zM3 5h-2v-1h2v1z"></path><path d="M8.5 2h-3c-0.275 0-0.5 0.225-0.5 0.5v11c0 0.275 0.225 0.5 0.5 0.5h3c0.275 0 0.5-0.225 0.5-0.5v-11c0-0.275-0.225-0.5-0.5-0.5zM8 5h-2v-1h2v1z"></path><path d="M11.954 2.773l-2.679 1.35c-0.246 0.124-0.345 0.426-0.222 0.671l4.5 8.93c0.124 0.246 0.426 0.345 0.671 0.222l2.679-1.35c0.246-0.124 0.345-0.426 0.222-0.671l-4.5-8.93c-0.124-0.246-0.426-0.345-0.671-0.222z"></path><path d="M14.5 13.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"></path>',
        alt: "Learn how to cook, erm make stuff!"
    },
    proptery: { 
        tag: "property",
        url: "/property", 
        name: "Property",
        viewbox: "0 0 18 16",
        svg: '<path d="M3.5 2h-3c-0.275 0-0.5 0.225-0.5 0.5v11c0 0.275 0.225 0.5 0.5 0.5h3c0.275 0 0.5-0.225 0.5-0.5v-11c0-0.275-0.225-0.5-0.5-0.5zM3 5h-2v-1h2v1z"></path><path d="M8.5 2h-3c-0.275 0-0.5 0.225-0.5 0.5v11c0 0.275 0.225 0.5 0.5 0.5h3c0.275 0 0.5-0.225 0.5-0.5v-11c0-0.275-0.225-0.5-0.5-0.5zM8 5h-2v-1h2v1z"></path><path d="M11.954 2.773l-2.679 1.35c-0.246 0.124-0.345 0.426-0.222 0.671l4.5 8.93c0.124 0.246 0.426 0.345 0.671 0.222l2.679-1.35c0.246-0.124 0.345-0.426 0.222-0.671l-4.5-8.93c-0.124-0.246-0.426-0.345-0.671-0.222z"></path><path d="M14.5 13.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"></path>',
        alt: "Properties in ServiceNow!"
    },
    scriptInclude: { 
        tag: "scriptinclude",
        url: "/script-include", 
        name: "Script Include",
        viewbox: "0 0 18 16",
        svg: '<path d="M3.5 2h-3c-0.275 0-0.5 0.225-0.5 0.5v11c0 0.275 0.225 0.5 0.5 0.5h3c0.275 0 0.5-0.225 0.5-0.5v-11c0-0.275-0.225-0.5-0.5-0.5zM3 5h-2v-1h2v1z"></path><path d="M8.5 2h-3c-0.275 0-0.5 0.225-0.5 0.5v11c0 0.275 0.225 0.5 0.5 0.5h3c0.275 0 0.5-0.225 0.5-0.5v-11c0-0.275-0.225-0.5-0.5-0.5zM8 5h-2v-1h2v1z"></path><path d="M11.954 2.773l-2.679 1.35c-0.246 0.124-0.345 0.426-0.222 0.671l4.5 8.93c0.124 0.246 0.426 0.345 0.671 0.222l2.679-1.35c0.246-0.124 0.345-0.426 0.222-0.671l-4.5-8.93c-0.124-0.246-0.426-0.345-0.671-0.222z"></path><path d="M14.5 13.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"></path>',
        alt: "Script Includes in ServiceNow!"
    },
    videos: { 
        tag: "videos",
        url: "/videos", 
        name: "Videos",
        viewbox: "0 0 24 24",
        svg: '<path d="M0 0h24v24H0V0z" fill="none"></path><path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm6 10h-4V5h4v14zm4-2h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path><path d="M10 5h4v14h-4z" opacity=".3"></path>',
        alt: "Videos!"
    },
    contributing: { url: "/contributing", name: "Contributing" },
    tutorials: {
        url: "https://youtube.com",
        name: "Tutorial",
        viewbox: "0 0 24 24",
        svg: '<path d="M0 0h24v24H0V0z" fill="none"></path><path d="M4 5h16v11H4z" opacity=".3"></path><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2h-4zM4 5h16v11H4V5zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path>'
    },
    shop: { url: "https://shop.example.com/", name: "Shop" },
    community: {
        url: "https://community.example.com/",
        name: "Community",
        alt: "Visit the Community",
        tooltip: "<strong>Discourse Forums</strong><br>Long-form discussions, troubleshooting, show & tell",
        viewbox: "0 0 32 32",
        svg: '<path d="M16.1357143,0 C7.37857143,0 0,7.03571429 0,15.7214286 C0,16 0.00714285714,32 0.00714285714,32 L16.1357143,31.9857143 C24.9,31.9857143 32,24.6785714 32,15.9928571 C32,7.30714286 24.9,0 16.1357143,0 Z M16,25.1428571 C14.6142857,25.1428571 13.2928571,24.8357143 12.1142857,24.2785714 L6.32142857,25.7142857 L7.95714286,20.3571429 C7.25714286,19.0642857 6.85714286,17.5785714 6.85714286,16 C6.85714286,10.95 10.95,6.85714286 16,6.85714286 C21.05,6.85714286 25.1428571,10.95 25.1428571,16 C25.1428571,21.05 21.05,25.1428571 16,25.1428571 Z"/>'
    },
    github: {
        url: `https://github.com/${thisGitHubRepo}`,
        name: "GitHub",
        alt: "Go to the GitHub repo",
        tooltip: "<strong>GitHub</strong><br>Go to the GitHub repo",
        stargazersApi:       `https://api.github.com/repos/${thisGitHubRepo}`,
        releasesApi:         `https://api.github.com/repos/${thisGitHubRepo}/releases?per_page=1`,
        contributorsApi:     `https://api.github.com/repos/${thisGitHubRepo}/contributors`,
        docsContributorsApi: `https://api.github.com/repos/${thisGitHubRepo}/docs/contributors`,
        allReleases:         `https://github.com/${thisGitHubRepo}/releases/`,
        docs: `https://github.com/repos/${thisGitHubRepo}/docs/`
    },
    twitter: {
        url: "https://twitter.com/jacebenson",
        name: "Twitter",
        alt: "Follow me on Twitter",
        tooltip: "<strong>Twitter</strong><br>Follow me on Twitter",
    },
    discord: {
        url: "https://discord.gg",
        name: "Discord",
        alt: "Join the Discord",
        tooltip: "<strong>Discord Chat</strong><br>Watercooler, relationship building, quick discussion",
        svg: '<path d="M29.9699 7.7544C27.1043 5.44752 22.5705 5.05656 22.3761 5.04288C22.2284 5.03072 22.0806 5.0648 21.9531 5.1404C21.8257 5.216 21.7249 5.32937 21.6647 5.4648C21.5783 5.65936 21.5049 5.85949 21.4451 6.06384C23.3409 6.38424 25.6694 7.02864 27.7761 8.33616C27.8565 8.38604 27.9262 8.45126 27.9814 8.52809C28.0366 8.60493 28.0761 8.69187 28.0976 8.78397C28.1192 8.87607 28.1224 8.97151 28.1071 9.06485C28.0917 9.15819 28.0582 9.24759 28.0083 9.32796C27.9584 9.40833 27.8932 9.47809 27.8164 9.53325C27.7395 9.58842 27.6526 9.62791 27.5605 9.64947C27.4684 9.67103 27.373 9.67424 27.2796 9.65892C27.1863 9.6436 27.0969 9.61004 27.0165 9.56016C23.3949 7.3116 18.8719 7.2 17.9999 7.2C17.1287 7.2 12.6028 7.31232 8.98338 9.55944C8.90301 9.60932 8.81361 9.64288 8.72027 9.6582C8.62693 9.67352 8.53149 9.67031 8.43939 9.64875C8.25339 9.6052 8.09231 9.48955 7.99158 9.32724C7.89085 9.16493 7.85873 8.96925 7.90227 8.78325C7.94582 8.59725 8.06147 8.43617 8.22378 8.33544C10.3305 7.03152 12.659 6.38424 14.5547 6.06672C14.4453 5.7096 14.3459 5.48424 14.3387 5.4648C14.2788 5.32841 14.1776 5.2143 14.0493 5.13859C13.921 5.06288 13.7721 5.0294 13.6238 5.04288C13.4294 5.05728 8.89554 5.44752 5.99034 7.78536C4.47474 9.18792 1.43994 17.3894 1.43994 24.48C1.43994 24.6067 1.47378 24.7277 1.5357 24.8371C3.62802 28.5163 9.3405 29.4775 10.6423 29.52H10.6646C10.7782 29.5203 10.8903 29.4937 10.9916 29.4424C11.093 29.3911 11.1808 29.3165 11.2478 29.2248L12.5632 27.4133C9.01146 26.4967 7.19706 24.9386 7.09338 24.8458C6.95017 24.7194 6.86303 24.5412 6.85115 24.3506C6.83927 24.1599 6.90361 23.9723 7.03002 23.8291C7.15643 23.6859 7.33456 23.5988 7.52522 23.5869C7.71588 23.575 7.90345 23.6394 8.04666 23.7658C8.08842 23.8054 11.4299 26.64 17.9999 26.64C24.5807 26.64 27.9223 23.7938 27.9561 23.7658C28.0998 23.6403 28.2874 23.5769 28.4777 23.5896C28.668 23.6023 28.8456 23.69 28.9713 23.8334C29.0335 23.9042 29.0812 23.9864 29.1117 24.0756C29.1421 24.1647 29.1546 24.259 29.1486 24.353C29.1426 24.447 29.1181 24.5389 29.0766 24.6235C29.035 24.708 28.9772 24.7836 28.9065 24.8458C28.8028 24.9386 26.9884 26.4967 23.4367 27.4133L24.7528 29.2248C24.8198 29.3164 24.9074 29.3909 25.0087 29.4422C25.1099 29.4935 25.2218 29.5202 25.3353 29.52H25.3569C26.6601 29.4775 32.3719 28.5156 34.4649 24.8371C34.5261 24.7277 34.5599 24.6067 34.5599 24.48C34.5599 17.3894 31.5251 9.18864 29.9699 7.7544V7.7544ZM13.3199 21.6C11.9275 21.6 10.7999 20.3112 10.7999 18.72C10.7999 17.1288 11.9275 15.84 13.3199 15.84C14.7124 15.84 15.8399 17.1288 15.8399 18.72C15.8399 20.3112 14.7124 21.6 13.3199 21.6ZM22.6799 21.6C21.2875 21.6 20.1599 20.3112 20.1599 18.72C20.1599 17.1288 21.2875 15.84 22.6799 15.84C24.0724 15.84 25.1999 17.1288 25.1999 18.72C25.1999 20.3112 24.0724 21.6 22.6799 21.6Z" />'
    },
    youtube: {
        url: "https://youtube.com/",
        name: "YouTube",
        alt: "Watch YouTube",
        tooltip: "<strong>YouTube</strong><br>Watch YouTube",
        viewbox: "0 0 310 310",
        svg: '<path d="M297.917, 64.645c-11.19-13.302-31.85-18.728-71.306-18.728H83.386c-40.359, 0-61.369, 5.776-72.517, 19.938 C0,79.663,0,100.008,0,128.166v53.669c0,54.551,12.896,82.248,83.386,82.248h143.226c34.216,0,53.176-4.788,65.442-16.527 C304.633,235.518,310,215.863,310,181.835v-53.669C310,98.471,309.159,78.006,297.917,64.645z M199.021,162.41l-65.038,33.991 c-1.454,0.76-3.044,1.137-4.632,1.137c-1.798,0-3.592-0.484-5.181-1.446c-2.992-1.813-4.819-5.056-4.819-8.554v-67.764 c0-3.492,1.822-6.732,4.808-8.546c2.987-1.814,6.702-1.938,9.801-0.328l65.038,33.772c3.309,1.718,5.387,5.134,5.392,8.861	C204.394,157.263,202.325,160.684,199.021,162.41z"/>'
    },
    license: {
        url: `https://github.com/${thisGitHubRepo}/blob/main/LICENSE`,
        name: "MIT License",
        alt: "MIT License",
    },
    netlify: {
        url: `https://app.netlify.com/start/deploy?repository=https://github.com/${thisGitHubRepo}`,
        name: "Deploy to Netlify",
        alt: "Deploy to Netlify",
    }
}