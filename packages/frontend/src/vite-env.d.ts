/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_PROJECTID: string
    readonly VITE_ENDPOINT: string
    readonly VITE_RUNPODKEY: string

}

interface ImportMeta {
    readonly env: ImportMetaEnv
}