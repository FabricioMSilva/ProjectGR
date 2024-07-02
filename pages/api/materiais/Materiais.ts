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
              ID: "1001",
              CODIGO: "BCU88148",
              MATERIAL: "EIXO DESENHO 1/00506-00059-RB REV.J DETALHE A7",
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
            CODIGO: "BRA538264",
            MATERIAL: "PORCA MODELO NOVO",
            UTILIZADO: "1",
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
              MATERIAL: "BUCHA POSIÇÃO N°5",
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
              MATERIAL: "BUCHA DE AGULHA, 60.0 MM, 85.0 MM, ANEL INTERNO=YES, #FILAS=1.0 , LARGURA=25.0 MM, PROTEC=",
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
              ID: "1018",
              CODIGO: "BR8332632",
              MATERIAL: "isolante b14",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1018",
              CODIGO: "BR8332618",
              MATERIAL: "ESPAÇADOR B12",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1018",
              CODIGO: "",
              MATERIAL: "ISOLANTE B113",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1018",
              CODIGO: "BR8331004",
              MATERIAL: "JUNTA A89",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1018",
              CODIGO: "BR8331011",
              MATERIAL: "ISOLANTE A90",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1018",
              CODIGO: "BR8330917",
              MATERIAL: "BUCHA A42",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1018",
              CODIGO: "BR833402X",
              MATERIAL: "TUBO ",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1018",
              CODIGO: "BR8984204",
              MATERIAL: "parafuso m10 x 50 inox",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1018",
              CODIGO: "BR8980746",
              MATERIAL: "Porca m10",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1018",
              CODIGO: "BR8981683",
              MATERIAL: "Arruela",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1017",
              CODIGO: "BRVA13505",
              MATERIAL: "mancal 6 mm",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1014",
              CODIGO: "BR8330191",
              MATERIAL: "mancal 11MM",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1014",
              CODIGO: "BR0550149",
              MATERIAL: "parafuso cab sext. M5x20 ",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1014",
              CODIGO: "BR0541828",
              MATERIAL: "arruela lisa m5",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1014",
              CODIGO: "BR8330307",
              MATERIAL: "isolamento",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1014",
              CODIGO: "BR8330233",
              MATERIAL: "eixo",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1014",
              CODIGO: "BR8330240",
              MATERIAL: "camisa",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1014",
              CODIGO: "BR0544258",
              MATERIAL: "porca skf 015",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1014",
              CODIGO: "BR833041X",
              MATERIAL: "isolante interno",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1017",
              CODIGO: "br8330402",
              MATERIAL: "celeron",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1017",
              CODIGO: "br9033434",
              MATERIAL: "a4",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1017",
              CODIGO: "br8330434",
              MATERIAL: "camisa",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1017",
              CODIGO: "br9033427",
              MATERIAL: "a3",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1017",
              CODIGO: "br8330177",
              MATERIAL: "a5 ",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1017",
              CODIGO: "BR0550149",
              MATERIAL: "parafuso cab sext. M5x20 ",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1017",
              CODIGO: "BR0541828",
              MATERIAL: "arruela lisa m5",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1017",
              CODIGO: "BR8330307",
              MATERIAL: "isolamento",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1017",
              CODIGO: "BR8330233",
              MATERIAL: "eixo",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1017",
              CODIGO: "BR8330240",
              MATERIAL: "camisa",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1017",
              CODIGO: "BR0544258",
              MATERIAL: "porca skf 015",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1017",
              CODIGO: "BR833041X",
              MATERIAL: "isolante interno",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1066",
              CODIGO: "BR8959247",
              MATERIAL: "ANEL ORING 167X3,53",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1066",
              CODIGO: "BR0235475",
              MATERIAL: "ANEL ORING PARAFUSO",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1066",
              CODIGO: "BR0132134",
              MATERIAL: "ROLAMENTO 40X90X23",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1066",
              CODIGO: "BR0132127",
              MATERIAL: "ROLAMENTO 40X80X18",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1066",
              CODIGO: "BR0159129",
              MATERIAL: "RETENTOR 80X100X13",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1067",
              CODIGO: "BR0133755",
              MATERIAL: "ROLAMENTO",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1067",
              CODIGO: "BR8937412",
              MATERIAL: "ANILOS",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1067",
              CODIGO: "BR8327368",
              MATERIAL: "isolante branco",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1067",
              CODIGO: "BRA676793",
              MATERIAL: "eixo",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1067",
              CODIGO: "BR8321165",
              MATERIAL: "tubo isolante eixo",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1067",
              CODIGO: "BR8321119",
              MATERIAL: "Camisa tornet Prata",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1067",
              CODIGO: "BR8321101",
              MATERIAL: "Camisa tornet Bronze",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1067",
              CODIGO: "BR8323243",
              MATERIAL: "Bolacha isolante externa",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1067",
              CODIGO: "BR8321084",
              MATERIAL: "20 SULFATE",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1067",
              CODIGO: "BR8321091",
              MATERIAL: "20 SULFATE",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1067",
              CODIGO: "BR0236207",
              MATERIAL: "27",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1067",
              CODIGO: "BR4847599",
              MATERIAL: "21",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1069",
              CODIGO: "BR0133755",
              MATERIAL: "ROLAMENTO",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1069",
              CODIGO: "BR8937412",
              MATERIAL: "ANILOS",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1069",
              CODIGO: "BR8327368",
              MATERIAL: "isolante branco",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1069",
              CODIGO: "BRA676793",
              MATERIAL: "eixo",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1069",
              CODIGO: "BR8321165",
              MATERIAL: "tubo isolante eixo",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1069",
              CODIGO: "BR8321119",
              MATERIAL: "Camisa tornet Prata",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1069",
              CODIGO: "BR8321101",
              MATERIAL: "Camisa tornet Bronze",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1069",
              CODIGO: "BR8323243",
              MATERIAL: "Bolacha isolante externa",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1069",
              CODIGO: "BR8321084",
              MATERIAL: "20 SULFATE",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1069",
              CODIGO: "BR8321091",
              MATERIAL: "20 SULFATE",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1069",
              CODIGO: "BR0236207",
              MATERIAL: "27",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1069",
              CODIGO: "BR4847599",
              MATERIAL: "21",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1029",
              CODIGO: "BRA850385",
              MATERIAL: "ROLO LAMINADOR",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1029",
              CODIGO: "BR893612X",
              MATERIAL: "RLT AXIAL ",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1029",
              CODIGO: "BR8934764 ",
              MATERIAL: "EIXO COM ROLETES ",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
            ID: "1077",
            CODIGO: "BR017224X ",
            MATERIAL: "CORRENTE ",
            UTILIZADO: "",
            REFERENCIA: "",
            SALDOJN: "",
            VALOR: ""
        },
        {
            ID: "1077",
            CODIGO: "BR0172698 ",
            MATERIAL: "EMENDA DE CORRENTE ",
            UTILIZADO: "",
            REFERENCIA: "",
            SALDOJN: "",
            VALOR: ""
        },
        {
            ID: "1077",
            CODIGO: "BR0173444",
            MATERIAL: "ESTICADOR",
            UTILIZADO: "",
            REFERENCIA: "",
            SALDOJN: "",
            VALOR: ""
        },
        {
            ID: "1077",
            CODIGO: "BR8396675",
            MATERIAL: "ROSETA",
            UTILIZADO: "",
            REFERENCIA: "",
            SALDOJN: "",
            VALOR: ""
        },
          {
              ID: "1091",
              CODIGO: "BR8550285",
              MATERIAL: "TAMPA FRONTAL",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1091",
              CODIGO: "BRA661204",
              MATERIAL: "ROLAMENTO 6206 C3",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1091",
              CODIGO: "BR5110166",
              MATERIAL: "ROLAMENTO 6006 C3",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1091",
              CODIGO: "BR8935172",
              MATERIAL: "ANEL aco",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1091",
              CODIGO: "BRA604196",
              MATERIAL: "ANEL ORING",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1091",
              CODIGO: "BRA317152",
              MATERIAL: "RETENTOR",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1091",
              CODIGO: "BR0543906",
              MATERIAL: "ARRUELA PORCA KM6",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1091",
              CODIGO: "BR0544402",
              MATERIAL: "PORCA KM6",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1091",
              CODIGO: "BR8550302",
              MATERIAL: "EIXO",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1091",
              CODIGO: "BR0235725",
              MATERIAL: "JUNTA TORICA, 59.69 MM, 5.33 MM, MATERIA=, DUREZA",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1092",
              CODIGO: "BR8550285",
              MATERIAL: "TAMPA FRONTAL",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1092",
              CODIGO: "BRA661204",
              MATERIAL: "ROLAMENTO 6206 C3",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1092",
              CODIGO: "BR5110166",
              MATERIAL: "ROLAMENTO 6006 C3",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1092",
              CODIGO: "BR8935172",
              MATERIAL: "ANEL aco",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1092",
              CODIGO: "BRA604196",
              MATERIAL: "ANEL ORING",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1092",
              CODIGO: "BRA317152",
              MATERIAL: "RETENTOR",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1092",
              CODIGO: "BR0543906",
              MATERIAL: "ARRUELA PORCA KM6",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1092",
              CODIGO: "BR0544402",
              MATERIAL: "PORCA KM6",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1092",
              CODIGO: "BR8550302",
              MATERIAL: "EIXO",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1092",
              CODIGO: "BR0235725",
              MATERIAL: "JUNTA TORICA, 59.69 MM, 5.33 MM, MATERIA=, DUREZA",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1107",
              CODIGO: "BR8550285",
              MATERIAL: "TAMPA FRONTAL",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1107",
              CODIGO: "BRA661204",
              MATERIAL: "ROLAMENTO 6206 C3",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1107",
              CODIGO: "BR5110166",
              MATERIAL: "ROLAMENTO 6006 C3",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1107",
              CODIGO: "BR8935172",
              MATERIAL: "ANEL aco",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1107",
              CODIGO: "BRA604196",
              MATERIAL: "ANEL ORING",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1107",
              CODIGO: "BRA317152",
              MATERIAL: "RETENTOR",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1107",
              CODIGO: "BR0543906",
              MATERIAL: "ARRUELA PORCA KM6",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1107",
              CODIGO: "BR0544402",
              MATERIAL: "PORCA KM6",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1107",
              CODIGO: "BR8550302",
              MATERIAL: "EIXO",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1107",
              CODIGO: "BR0235725",
              MATERIAL: "JUNTA TORICA, 59.69 MM, 5.33 MM, MATERIA=, DUREZA",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1108",
              CODIGO: "BR8550285",
              MATERIAL: "TAMPA FRONTAL",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1108",
              CODIGO: "BRA661204",
              MATERIAL: "ROLAMENTO 6206 C3",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1108",
              CODIGO: "BR5110166",
              MATERIAL: "ROLAMENTO 6006 C3",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1108",
              CODIGO: "BR8935172",
              MATERIAL: "ANEL aco",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1108",
              CODIGO: "BRA604196",
              MATERIAL: "ANEL ORING",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1108",
              CODIGO: "BRA317152",
              MATERIAL: "RETENTOR",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1108",
              CODIGO: "BR0543906",
              MATERIAL: "ARRUELA PORCA KM6",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1108",
              CODIGO: "BR0544402",
              MATERIAL: "PORCA KM6",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1108",
              CODIGO: "BR8550302",
              MATERIAL: "EIXO",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1108",
              CODIGO: "BR0235725",
              MATERIAL: "JUNTA TORICA, 59.69 MM, 5.33 MM, MATERIA=, DUREZA",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1078",
              CODIGO: "BR8672808",
              MATERIAL: "ROLO",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1078",
              CODIGO: "BR013191X",
              MATERIAL: "ROLAMENTO 6203",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1078",
              CODIGO: "BR055095X",
              MATERIAL: "EIXO B4",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1078",
              CODIGO: "BR0170228",
              MATERIAL: "ANEL ELASTICO EXTERNO",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1078",
              CODIGO: "BR8672727",
              MATERIAL: "BUCHA",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1078",
              CODIGO: "BR8672766",
              MATERIAL: "MANCAL",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1079",
              CODIGO: "BR8397887",
              MATERIAL: "ROLO",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1079",
              CODIGO: "BRA527858",
              MATERIAL: "ROLAMENTO",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1079",
              CODIGO: "BR839787X",
              MATERIAL: "EIXO",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1079",
              CODIGO: "BR017106X",
              MATERIAL: "ANEL ELASTICO EXTERNO",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1079",
              CODIGO: "BR0552562",
              MATERIAL: "PARAFUSO DE CABECA CILINDRICA COM SEXTAVADO INTERNO, DIA=5.0 MM, COMP CABECA=10.0 MM",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1079",
              CODIGO: "BR0541828",
              MATERIAL: "ARRUELA PLANA, DIAM_INT= 5 MM, DIAM_EXT= 10 MM,",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1079",
              CODIGO: "BR0544882",
              MATERIAL: "PORCA SEXTAVADA, , CLASSE=0.0 , M8 ",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1110",
              CODIGO: "BR8397887",
              MATERIAL: "ROLO",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1110",
              CODIGO: "BRA527858",
              MATERIAL: "ROLAMENTO",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1110",
              CODIGO: "BR839787X",
              MATERIAL: "EIXO",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1110",
              CODIGO: "BR017106X",
              MATERIAL: "ANEL ELASTICO EXTERNO",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1110",
              CODIGO: "BR0552562",
              MATERIAL: "PARAFUSO DE CABECA CILINDRICA COM SEXTAVADO INTERNO, DIA=5.0 MM, COMP CABECA=10.0 MM",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1110",
              CODIGO: "BR0541828",
              MATERIAL: "ARRUELA PLANA, DIAM_INT= 5 MM, DIAM_EXT= 10 MM,",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1110",
              CODIGO: "BR0544882",
              MATERIAL: "PORCA SEXTAVADA, , CLASSE=0.0 , M8 ",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1111",
              CODIGO: "BR8672808",
              MATERIAL: "ROLO",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1111",
              CODIGO: "BR013191X",
              MATERIAL: "ROLAMENTO 6203",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1111",
              CODIGO: "BR055095X",
              MATERIAL: "EIXO B4",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1111",
              CODIGO: "BR0170228",
              MATERIAL: "ANEL ELASTICO EXTERNO",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1111",
              CODIGO: "BR8672727",
              MATERIAL: "BUCHA",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          },
          {
              ID: "1111",
              CODIGO: "BR8672766",
              MATERIAL: "MANCAL",
              UTILIZADO: "",
              REFERENCIA: "",
              SALDOJN: "",
              VALOR: ""
          }

      ]

  );
}