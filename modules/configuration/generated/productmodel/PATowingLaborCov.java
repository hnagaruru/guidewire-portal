package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PATowingLaborCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PATowingLaborCov extends entity.PersonalVehicleCov {
  protected PATowingLaborCov()  {
    super((java.lang.Void)null);
  }
  
  public PATowingLaborCov(entity.PolicyPeriod branch)  {
    super(branch, "PATowingLaborCov");
  }
  
  public PATowingLaborCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "PATowingLaborCov");
  }
  
  public boolean getHasTowingAndLaborLimitTerm() {
    return hasCovTerm("TowingAndLaborLimit");
  }
  
  public productmodel.OptionTowingAndLaborLimitType getTowingAndLaborLimitTerm() {
    return (productmodel.OptionTowingAndLaborLimitType)getCovTerm("TowingAndLaborLimit");
  }
  
  static {
    com.guidewire._generated.productmodel.PATowingLaborCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.PATowingLaborCov>() {
      public productmodel.PATowingLaborCov newEmptyInstance() {
        return new productmodel.PATowingLaborCov();
      }
      
      
    });
  }
}