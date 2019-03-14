import { FuseUtils } from "@fuse/utils";
import { Department } from "../departments/department.model";
import { Skill } from "../skills/skill.model";
import { Designation } from "../designations/designation.model";

export class Resource {

    id: string;
    name :string ;
    resourceCNIC : string  ;
    resourceDOB : string ;
    resourceEmail : string  ;
    resourceAddress : string  ;
    resourcePhone : string ;
    resourceReligion : string ;
    resourceBloodGroup : string  ;
    resourceNationality : string ;
    resourceEmergencyContactNo : string ;
    resourceMaritalStatus : string ;
    resourceDesignation : Designation ;
    resourceReportingTo : Resource ;
    resourceResume : string;
    resourceDateOfJoining : Date;
    resourceWorkingDays: number;
    resourceExperience : number  ;
    resourceSalaryPerMonth: number;
    resourcePerHourRate :number ;
    resourceShift : string ;
    resourceBenefits: String;
    resourceEmployeeType : String  ;    //Permanent, Temporary, Consultancy
    resourceJobType : String  ;    //Part time, fulll time
    resourcePartTime : boolean;
    resourceDepartment: Department;
    resourceSkills:Skill[];
    handle: string;
    updatedAt: string;
    createdAt: string;

   
    /**
     * Constructor
     *
     * @param Resource
     */
    constructor(resource?)
    {
      
        resource = resource || {};
        if (resource.name !== ''){
            this.handle = FuseUtils.handleize(resource.name  + '');
        }
        this.id = resource.id || '';
        this.name = resource.name || '';
        this.resourceCNIC = resource.resourceCNIC || '';
        this.resourceDOB = resource.resourceDOB || '';
        this.resourceEmail = resource.resourceEmail || '';
        this.resourceAddress = resource.resourceAddress || '';
        this.resourcePhone = resource.resourcePhone || '';
        this.resourceReligion = resource.resourceReligion || '';
        this.resourceBloodGroup = resource.resourceBloodGroup || '';
        this.resourceNationality = resource.resourceNationality || '';
        this.resourceEmergencyContactNo = resource.resourceEmergencyContactNo || '';
        this.resourceMaritalStatus = resource.resourceMaritalStatus || '';
        this.resourceDesignation = resource.resourceDesignation || null;
        this.resourceReportingTo = resource.resourceReportingTo || null;
        this.resourceResume = resource.resourceResume || '';
        this.resourceDateOfJoining = resource.resourceDateOfJoining || '';
        this.resourceWorkingDays = resource.resourceWorkingDays || '';
        this.resourceExperience = resource.resourceExperience || '';
        this.resourceSalaryPerMonth = resource.resourceSalaryPerMonth || '';
        this.resourcePerHourRate = resource.resourcePerHourRate || '';
        this.resourceShift = resource.resourceShift || '';
        this.resourceBenefits = resource.resourceBenefits || '';
        this.resourceEmployeeType = resource.resourceEmployeeType || '';
        this.resourceJobType = resource.resourceJobType || '';
        this.resourcePartTime = resource.resourcePartTime || '';
        this.resourceDepartment = resource.resourceDepartment || null;
        this.resourceSkills= resource.resourceSkills || null;
        this.updatedAt = resource.updatedAt || '';
        this.createdAt = resource.createdAt || '';
    }
}
