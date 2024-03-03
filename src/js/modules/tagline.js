function tagline() {
	const closeTalineBtn=document.querySelector(".tagline__close");
    const tagline=document.querySelector(".tagline");

closeTalineBtn.onclick=()=>{
    tagline.remove();
}
}

export default tagline;