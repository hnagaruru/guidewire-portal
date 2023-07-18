package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BACollisionCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BACollisionCov extends entity.BusinessVehicleCov {
  protected BACollisionCov()  {
    super((java.lang.Void)null);
  }
  
  public BACollisionCov(entity.PolicyPeriod branch)  {
    super(branch, "BACollisionCov");
  }
  
  public BACollisionCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BACollisionCov");
  }
  
  public productmodel.GenericBACollisionBroadType getBACollisionBroadTerm() {
    return (productmodel.GenericBACollisionBroadType)getCovTerm("BACollisionBroad");
  }
  
  public productmodel.OptionBACollisionDeductType getBACollisionDeductTerm() {
    return (productmodel.OptionBACollisionDeductType)getCovTerm("BACollisionDeduct");
  }
  
  public boolean getHasBACollisionBroadTerm() {
    return hasCovTerm("BACollisionBroad");
  }
  
  public boolean getHasBACollisionDeductTerm() {
    return hasCovTerm("BACollisionDeduct");
  }
  
  static {
    com.guidewire._generated.productmodel.BACollisionCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BACollisionCov>() {
      public productmodel.BACollisionCov newEmptyInstance() {
        return new productmodel.BACollisionCov();
      }
      
      
    });
  }
}