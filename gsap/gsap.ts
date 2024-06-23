import gsap from "gsap";

export const popUp=(id:string)=>{

    gsap.set(id,{
        y:30,
        opacity:0
    })
    gsap.to(id,{
        y:0,
        opacity:1,
        ease:'expo.out',
        stagger:{
            each: .3,
            from:'start',
        }
    })
}