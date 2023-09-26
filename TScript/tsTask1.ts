interface info {
    desc: string,
    isActive: boolean,
}

interface someApi {
    userId: number,
    id: number,
    title: string,
    info: info,
    tags: tag[]
}
interface tag {
    name: string,
    value: number,
}