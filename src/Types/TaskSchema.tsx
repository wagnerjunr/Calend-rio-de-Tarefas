type taskProps = {
    id:number;
    title:string;
    description?:string;
    priority:"Baixa" | "Média" | "Alta";
    startDate:Date | null | string | undefined;
    endDate:Date | null | string| undefined;
}

export type dataProps = {
    id:string;
    title: string;
    start: string;
    end: string;
}

export default taskProps