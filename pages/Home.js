import { Selector,t } from "testcafe";

class Home{
    constructor(){
        this.webEssentials = Selector('#header-content > div.header-left > div > ul > li:nth-child(1) > span > a > div')
        this.Cookies = Selector('.button')

    }

    async SelectDrop(Domains){
        const dropOption =this.webEssentials.find('a');
        await t
        .click(this.webEssentials)
        .click(dropOption.withText(Domains))
    }

    

}

export default new Home();

///balu mahendra new comment