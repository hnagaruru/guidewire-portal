package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PATapeDiscMediaCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PATapeDiscMediaCov extends entity.PersonalVehicleCov {
  protected PATapeDiscMediaCov()  {
    super((java.lang.Void)null);
  }
  
  public PATapeDiscMediaCov(entity.PolicyPeriod branch)  {
    super(branch, "PATapeDiscMediaCov");
  }
  
  public PATapeDiscMediaCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "PATapeDiscMediaCov");
  }
  
  public boolean getHasPATapeDiscMediaLimitTerm() {
    return hasCovTerm("PATapeDiscMediaLimit");
  }
  
  public productmodel.OptionPATapeDiscMediaLimitType getPATapeDiscMediaLimitTerm() {
    return (productmodel.OptionPATapeDiscMediaLimitType)getCovTerm("PATapeDiscMediaLimit");
  }
  
  static {
    com.guidewire._generated.productmodel.PATapeDiscMediaCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.PATapeDiscMediaCov>() {
      public productmodel.PATapeDiscMediaCov newEmptyInstance() {
        return new productmodel.PATapeDiscMediaCov();
      }
      
      
    });
  }
}