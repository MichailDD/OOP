function ErrorAPI(){
    return {
        info:[
            {
                user_name:'Donald',
                user_subName:'Duck',
                email:'disney@donald.com'
            },
            {
                user_name:'Mikki',
                user_subName:'Mouse',
                email:'disney@mikki.com'  
            }         
        ]
    }
}

function Adapter(response){
    return response.info.map((entry)=>({
        userName:info.user_name,
        userSubname:info.user_subName,
        userEmail:info.email
    }))
}
const response = ErrorAPI()
const cameCaseResponse = Adapter(response)