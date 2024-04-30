type taskProps = {
    id:number;
    title:string;
    description?:string;
    priority:"Baixa" | "Média" | "Alta";
    startDate:Date | null | string | undefined;
    endDate:Date | null | string| undefined;
}

export default taskProps