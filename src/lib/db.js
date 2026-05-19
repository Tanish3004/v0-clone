import {PrismaClient} from "@prisma/client"

const db = globalThis.prisma || new PrismaClient({
    log:['query','info','warn','error'],
})

if(process.env.NODE_ENV === "developement"){
    globalThis.prisma = db
}

export default db;