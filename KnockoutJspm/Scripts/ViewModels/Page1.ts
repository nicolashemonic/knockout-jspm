import * as _ from 'underscore';
import Interface1 from '../Interfaces/Interface1';
import Service1 from '../Services/Service1';

export default class Page1
{
    private model: Interface1 = {
        names: ['Olivier', 'Geoffroy', 'Nicolas', 'Stéphane']
    }

    constructor()
    {
        console.log(_.first(this.model.names));
        Service1.runMe();
    }
}