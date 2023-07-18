package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPVacancyCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPVacancyCov extends entity.BOPBuildingCov {
  protected BOPVacancyCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPVacancyCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPVacancyCov");
  }
  
  public BOPVacancyCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPVacancyCov");
  }
  
  public productmodel.GenericBOPSprinklerLeakType getBOPSprinklerLeakTerm() {
    return (productmodel.GenericBOPSprinklerLeakType)getCovTerm("BOPSprinklerLeak");
  }
  
  public productmodel.GenericBOPVacancyCovFromDateType getBOPVacancyCovFromDateTerm() {
    return (productmodel.GenericBOPVacancyCovFromDateType)getCovTerm("BOPVacancyCovFromDate");
  }
  
  public productmodel.GenericBOPVacancyCovToDateType getBOPVacancyCovToDateTerm() {
    return (productmodel.GenericBOPVacancyCovToDateType)getCovTerm("BOPVacancyCovToDate");
  }
  
  public productmodel.GenericBOPVandalismType getBOPVandalismTerm() {
    return (productmodel.GenericBOPVandalismType)getCovTerm("BOPVandalism");
  }
  
  public boolean getHasBOPSprinklerLeakTerm() {
    return hasCovTerm("BOPSprinklerLeak");
  }
  
  public boolean getHasBOPVacancyCovFromDateTerm() {
    return hasCovTerm("BOPVacancyCovFromDate");
  }
  
  public boolean getHasBOPVacancyCovToDateTerm() {
    return hasCovTerm("BOPVacancyCovToDate");
  }
  
  public boolean getHasBOPVandalismTerm() {
    return hasCovTerm("BOPVandalism");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPVacancyCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPVacancyCov>() {
      public productmodel.BOPVacancyCov newEmptyInstance() {
        return new productmodel.BOPVacancyCov();
      }
      
      
    });
  }
}