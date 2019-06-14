export class Dashboard {
    to: String;
    from: String;


    /**
    * Constructor
    *
    * @param Dashboard
    */
    constructor(dashboard?) {

        dashboard = dashboard || {};
        
        this.to = dashboard.id || '';
        this.from = dashboard.name || '';
    }
}
