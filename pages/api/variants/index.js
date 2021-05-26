
export default async (req,res) => {
    const {method,headers,query} = req;
    switch(method){
        case 'GET':
            try{
                res.status(200).json({success:true,products:{message:'testing GET'}})
            }catch(error){
                res.status(400).json({success:false})
            }
            break;
        case 'POST':
            try{
                res.status(201).json({success:true,products:{message:'testing GET'}})
            }catch(error){
                res.status(400).json({success:false,error:error})
            }
            break;
        default:
            res.status(400).json({success:false})
            break;
    }
}