package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BATowingLaborCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BATowingLaborCov extends entity.BusinessVehicleCov {
  protected BATowingLaborCov()  {
    super((java.lang.Void)null);
  }
  
  public BATowingLaborCov(entity.PolicyPeriod branch)  {
    super(branch, "BATowingLaborCov");
  }
  
  public BATowingLaborCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BATowingLaborCov");
  }
  
  public productmodel.OptionBATowType getBATowTerm() {
    return (productmodel.OptionBATowType)getCovTerm("BATow");
  }
  
  public boolean getHasBATowTerm() {
    return hasCovTerm("BATow");
  }
  
  static {
    com.guidewire._generated.productmodel.BATowingLaborCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BATowingLaborCov>() {
      public productmodel.BATowingLaborCov newEmptyInstance() {
        return new productmodel.BATowingLaborCov();
      }
      
      
    });
  }
}