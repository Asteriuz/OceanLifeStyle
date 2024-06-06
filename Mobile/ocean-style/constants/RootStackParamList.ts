export type RootStackParamList = {
    vehicleCard: undefined;
    details: {
        image: any;
        name: string;
        modelo: string;
        status: "Aprovado" | "Reprovado" | "Pendente";
        tie: string;
        noise: number;
        data: string;
    };
};