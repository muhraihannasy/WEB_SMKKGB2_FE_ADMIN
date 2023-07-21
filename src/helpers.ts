
export function getPreloader(isLoading:boolean) 
{
    const preloader:any = document.getElementById("preloader");
    preloader.style.display = "";

    if (isLoading) preloader.style.display = "none";
}

export function getToken() 
{
    return localStorage.getItem("acctkn");
}

