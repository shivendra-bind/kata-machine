export default function two_crystal_balls(breaks: boolean[]): number {
    const amtWalk = Math.floor(Math.sqrt(breaks.length))
    let s = amtWalk

    for(;s <breaks.length; s+=amtWalk){
        if(breaks[s]){
            break
        }
    }
    for(let i= s-amtWalk; i<=s; i++){
        if(breaks[i]){
            return i
        }
    }
    return -1
}
