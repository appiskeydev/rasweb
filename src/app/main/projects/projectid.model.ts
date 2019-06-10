export class Projectid {


    id: string;
   
    /**
     * Constructor
     *
     * @param Project
     */
    constructor(project?)
    {
      
        project = project || {};
        
        this.id = project.id || '';
       
    }
}
