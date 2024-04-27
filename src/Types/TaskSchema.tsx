type taskProps = {
    id:Number;
    title:String;
    description?:String;
    priority:"Baixa" | "Média" | "Alta";
    startDate:Date | null;
    endDate:Date | null;
}

export default taskProps