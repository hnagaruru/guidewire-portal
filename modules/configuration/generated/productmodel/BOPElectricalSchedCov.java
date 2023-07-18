package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPElectricalSchedCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPElectricalSchedCov extends entity.BOPBuildingCov {
  protected BOPElectricalSchedCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPElectricalSchedCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPElectricalSchedCov");
  }
  
  public BOPElectricalSchedCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPElectricalSchedCov");
  }
  
  public productmodel.DirectBOPElectricalSchedLimitType getBOPElectricalSchedLimitTerm() {
    return (productmodel.DirectBOPElectricalSchedLimitType)getCovTerm("BOPElectricalSchedLimit");
  }
  
  public boolean getHasBOPElectricalSchedLimitTerm() {
    return hasCovTerm("BOPElectricalSchedLimit");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPElectricalSchedCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPElectricalSchedCov>() {
      public productmodel.BOPElectricalSchedCov newEmptyInstance() {
        return new productmodel.BOPElectricalSchedCov();
      }
      
      
    });
  }
}