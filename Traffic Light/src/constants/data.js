export const data = {
    name: "root",
    isFolders: true,
    items: [
        {
            name: "public",
            isFolders: true,
            items: [
                {
                    name: "index.html",
                    isFolders: false
                },
            ],
        },
        {
            name : "src",
            isFolders: true,
            items: [
                {
                    name: "App.js",
                    isFolders: false,
                },
                {
                    name: "index.js",
                    isFolders: false,
                },
                {
                    name: "styles.css",
                    isFolders: false,
                },
                {
                    name: "components",
                    isFolders: true,
                    items: [
                        {
                            name: "Explorer.jsx",
                            isFolders: false,
                        },
                    ],
                },
                {
                    name: "constants",
                    isFolders:true,
                    items: [
                        {
                            name: "data.js",
                            isFolders: false,
                        },
                    ],
                },
            ],
        },
        {
            name : "package.json",
            isFolders: false,
        },
    ],
};