interface NetflixSubject{
    registerNetflix(observer:UserObserver):void
    removeNetflix(observer:UserObserver):void
    notifyNetflix():void
}

interface UserObserver{
    update(newProduct:NetflixSubject):void
}

