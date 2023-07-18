package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PARentalCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PARentalCov extends entity.PersonalVehicleCov {
  protected PARentalCov()  {
    super((java.lang.Void)null);
  }
  
  public PARentalCov(entity.PolicyPeriod branch)  {
    super(branch, "PARentalCov");
  }
  
  public PARentalCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "PARentalCov");
  }
  
  public boolean getHasPARentalTerm() {
    return hasCovTerm("PARental");
  }
  
  public productmodel.PackagePARentalType getPARentalTerm() {
    return (productmodel.PackagePARentalType)getCovTerm("PARental");
  }
  
  static {
    com.guidewire._generated.productmodel.PARentalCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.PARentalCov>() {
      public productmodel.PARentalCov newEmptyInstance() {
        return new productmodel.PARentalCov();
      }
      
      
    });
  }
}