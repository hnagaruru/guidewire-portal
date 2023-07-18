package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PACollisionCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PACollisionCov extends entity.PersonalVehicleCov {
  protected PACollisionCov()  {
    super((java.lang.Void)null);
  }
  
  public PACollisionCov(entity.PolicyPeriod branch)  {
    super(branch, "PACollisionCov");
  }
  
  public PACollisionCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "PACollisionCov");
  }
  
  public boolean getHasPACollDeductibleTerm() {
    return hasCovTerm("PACollDeductible");
  }
  
  public boolean getHasPACollisionBroadTerm() {
    return hasCovTerm("PACollisionBroad");
  }
  
  public productmodel.OptionPACollDeductibleType getPACollDeductibleTerm() {
    return (productmodel.OptionPACollDeductibleType)getCovTerm("PACollDeductible");
  }
  
  public productmodel.GenericPACollisionBroadType getPACollisionBroadTerm() {
    return (productmodel.GenericPACollisionBroadType)getCovTerm("PACollisionBroad");
  }
  
  static {
    com.guidewire._generated.productmodel.PACollisionCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.PACollisionCov>() {
      public productmodel.PACollisionCov newEmptyInstance() {
        return new productmodel.PACollisionCov();
      }
      
      
    });
  }
}