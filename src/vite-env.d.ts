/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_PROJECTID: string
    readonly VITE_ENDPOINT: string

}

interface ImportMeta {
    readonly env: ImportMetaEnv
}