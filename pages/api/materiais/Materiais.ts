import type { NextApiRequest , NextApiResponse} from 'next';
  
type Data ={
    ID: string,
    CODIGO: String,
    MATERIAL: String,
    UTILIZADO: String,
    REFERENCIA: String,
    SALDOJN: String,
    VALOR: String
};
  
  export default function handler(
      req:NextApiRequest, 
      res:NextApiResponse<Data[]>
    ) {
  res.status(200).json(
   [
            {
                ID:"1001",
                CODIGO: "BR0552717",
                MATERIAL: "Parafuso m6x16",
                UTILIZADO: "",
                REFERENCIA: "",
                SALDOJN: "",
                VALOR: ""
            },
            {
                ID: "1002",
                CODIGO: "BR0552749",
                MATERIAL: "Parafuso m6x30",
                UTILIZADO: "",
                REFERENCIA: "",
                SALDOJN: "",
                VALOR: ""
            },
            {
                ID: "1001",
                CODIGO: "BMA1058428",
                MATERIAL: "Escovas",
                UTILIZADO: "",
                REFERENCIA: "",
                SALDOJN: "",
                VALOR: ""
            },
            {
                ID: "100133",
                CODIGO: "BMA1108180",
                MATERIAL: "Tampa",
                UTILIZADO: "",
                REFERENCIA: "",
                SALDOJN: "",
                VALOR: ""
            },
            {
                ID: "1001",
                CODIGO: "BR8549071",
                MATERIAL: "EIXO DESENHO 1\/00506-00059-RB REV.J DETALHE A7",
                UTILIZADO: "",
                REFERENCIA: "",
                SALDOJN: "",
                VALOR: ""
            },
            {
                ID: "1001",
                CODIGO: "BR8549177",
                MATERIAL: "BUCHA",
                UTILIZADO: "",
                REFERENCIA: "",
                SALDOJN: "",
                VALOR: ""
            },
            {
                ID: "1001",
                CODIGO: "BRA80820X",
                MATERIAL: "ROLAMENTO 25X52X15 6205 2RS1",
                UTILIZADO: "",
                REFERENCIA: "",
                SALDOJN: "",
                VALOR: ""
            },
            {
                ID: "1001",
                CODIGO: "BRA510075",
                MATERIAL: "ROLAMENTO 25X47X12(6005)",
                UTILIZADO: "",
                REFERENCIA: "",
                SALDOJN: "",
                VALOR: ""
            },
            {
                ID: "1001",
                CODIGO: "BR8549201",
                MATERIAL: "BUCHA POSI\u00c7\u00c3O N\u00b05",
                UTILIZADO: "",
                REFERENCIA: "",
                SALDOJN: "",
                VALOR: ""
            },
            {
                ID: "1089",
                CODIGO: "BR0159048",
                MATERIAL: "JUNTA DE LABIO SIMPLES COM REFORCO REVESTIDO PARA EIXO GIRATORIO, , 90.0 MM70.0 MM, 12.0 MM, MATERIA=RUBBER , DUREZA",
                UTILIZADO: "",
                REFERENCIA: "",
                SALDOJN: "",
                VALOR: ""
            },
            {
                ID: "1089",
                CODIGO: "BR0174800",
                MATERIAL: "CE, , MATERIA=, ALTURA=0.0 , 0.0 , 1.25 MMCARGA=0.0",
                UTILIZADO: "",
                REFERENCIA: "",
                SALDOJN: "",
                VALOR: ""
            },
            {
                ID: "1089",
                CODIGO: "BR8958691",
                MATERIAL: "REVESTIMENTO INTERNO DE COMERCIO,",
                UTILIZADO: "",
                REFERENCIA: "",
                SALDOJN: "",
                VALOR: ""
            },
            {
                ID: "1089",
                CODIGO: "BR0543991",
                MATERIAL: "FREIO DE PORCA DE LINGUETA, 60.0 MM, MATERIA=, DUREZA",
                UTILIZADO: "",
                REFERENCIA: "",
                SALDOJN: "",
                VALOR: ""
            },
            {
                ID: "1089",
                CODIGO: "BR8935126",
                MATERIAL: "ANEL DIVERSO DO COMERCIO, , DIAM EXTERNO=70.0 MM60.0 MM",
                UTILIZADO: "",
                REFERENCIA: "",
                SALDOJN: "",
                VALOR: ""
            },
            {
                ID: "1089",
                CODIGO: "BR8959409",
                MATERIAL: "JUNTA TORICA, 174.5 MM, 3.0 MM, DUREZA, MATERIA=",
                UTILIZADO: "",
                REFERENCIA: "",
                SALDOJN: "",
                VALOR: ""
            },
            {
                ID: "1089",
                CODIGO: "BR0225149",
                MATERIAL: "DISTRIBUIDOR DE COMANDO PNEUMATICO, , TAMANHO=42.0 MM, #POSIC=2.0 , #ORIFICI=5.0",
                UTILIZADO: "",
                REFERENCIA: "",
                SALDOJN: "",
                VALOR: ""
            },
            {
                ID: "1089",
                CODIGO: "BR8934891",
                MATERIAL: "BUCHA DE AGULHA, 60.0 MM, 70.0 MM, 25.0 MM, PROTEC=, #FILAS=1.0 , ANEL INTERNO=YES",
                UTILIZADO: "",
                REFERENCIA: "",
                SALDOJN: "",
                VALOR: ""
            },
            {
                ID: "1089",
                CODIGO: "BR0156512",
                MATERIAL: "BUCHA DE AGULHA, 60.0 MM, 85.0 MM, ANEL INTERNO=YES, #FILAS=1.0 , LARGURA=25.0 MM, PROTEC=",
                UTILIZADO: "",
                REFERENCIA: "",
                SALDOJN: "",
                VALOR: ""
            },
            {
                ID: "1090",
                CODIGO: "BR0159048",
                MATERIAL: "JUNTA DE LABIO SIMPLES COM REFORCO REVESTIDO PARA EIXO GIRATORIO, , 90.0 MM70.0 MM, 12.0 MM, MATERIA=RUBBER , DUREZA",
                UTILIZADO: "",
                REFERENCIA: "",
                SALDOJN: "",
                VALOR: ""
            },
            {
                ID: "1090",
                CODIGO: "BR0174800",
                MATERIAL: "CE, , MATERIA=, ALTURA=0.0 , 0.0 , 1.25 MMCARGA=0.0",
                UTILIZADO: "",
                REFERENCIA: "",
                SALDOJN: "",
                VALOR: ""
            },
            {
                ID: "1090",
                CODIGO: "BR8958691",
                MATERIAL: "REVESTIMENTO INTERNO DE COMERCIO,",
                UTILIZADO: "",
                REFERENCIA: "",
                SALDOJN: "",
                VALOR: ""
            },
            {
                ID: "1090",
                CODIGO: "BR0543991",
                MATERIAL: "FREIO DE PORCA DE LINGUETA, 60.0 MM, MATERIA=, DUREZA",
                UTILIZADO: "",
                REFERENCIA: "",
                SALDOJN: "",
                VALOR: ""
            },
            {
                ID: "1090",
                CODIGO: "BR8935126",
                MATERIAL: "ANEL DIVERSO DO COMERCIO, , DIAM EXTERNO=70.0 MM60.0 MM",
                UTILIZADO: "",
                REFERENCIA: "",
                SALDOJN: "",
                VALOR: ""
            },
            {
                ID: "1090",
                CODIGO: "BR8959409",
                MATERIAL: "JUNTA TORICA, 174.5 MM, 3.0 MM, DUREZA, MATERIA=",
                UTILIZADO: "",
                REFERENCIA: "",
                SALDOJN: "",
                VALOR: ""
            },
            {
                ID: "1090",
                CODIGO: "BR0225149",
                MATERIAL: "DISTRIBUIDOR DE COMANDO PNEUMATICO, , TAMANHO=42.0 MM, #POSIC=2.0 , #ORIFICI=5.0",
                UTILIZADO: "",
                REFERENCIA: "",
                SALDOJN: "",
                VALOR: ""
            },
            {
                ID: "1090",
                CODIGO: "BR8934891",
                MATERIAL: "BUCHA DE AGULHA, 60.0 MM, 70.0 MM, 25.0 MM, PROTEC=, #FILAS=1.0 , ANEL INTERNO=YES",
                UTILIZADO: "",
                REFERENCIA: "",
                SALDOJN: "",
                VALOR: ""
            },
            {
                ID: "1090",
                CODIGO: "BR0156512",
                MATERIAL: "BUCHA DE AGULHA, LARGURA=25.0 MM",
                UTILIZADO: "",
                REFERENCIA: "",
                SALDOJN: "",
                VALOR: ""
            }
        ]);
}