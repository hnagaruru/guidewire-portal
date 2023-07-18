package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BARentalCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BARentalCov extends entity.BusinessVehicleCov {
  protected BARentalCov()  {
    super((java.lang.Void)null);
  }
  
  public BARentalCov(entity.PolicyPeriod branch)  {
    super(branch, "BARentalCov");
  }
  
  public BARentalCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BARentalCov");
  }
  
  public productmodel.PackageBARentalType getBARentalTerm() {
    return (productmodel.PackageBARentalType)getCovTerm("BARental");
  }
  
  public boolean getHasBARentalTerm() {
    return hasCovTerm("BARental");
  }
  
  static {
    com.guidewire._generated.productmodel.BARentalCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BARentalCov>() {
      public productmodel.BARentalCov newEmptyInstance() {
        return new productmodel.BARentalCov();
      }
      
      
    });
  }
}