import type{ NextApiRequest, NextApiResponse} from 'next'

type Data = {
  id: number
  Maquina:string
  Conjunto:string
  LinkDesenho:string
  Desenho:string
  LinkFoto:string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ 
        id: 1001,
        Maquina: "MTT99",
        Conjunto: "Conjunto Eixo Latão Caixa de Aquecimento",
        LinkDesenho: "https://drive.google.com/file/d/18dZ7IsPKS8voUtpDsHSwhoAWArOSfnND/view?usp=share_link",
        Desenho: "00040 - 00844 - RB",
        LinkFoto: "https://drive.google.com/uc?export=view&id=1MJXXAg2Dj1zBLEs2ELCbO-P7tpQkPTPb"
})
}