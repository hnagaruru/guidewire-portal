package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPropProtectionCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PAPropProtectionCov extends entity.PersonalAutoCov {
  protected PAPropProtectionCov()  {
    super((java.lang.Void)null);
  }
  
  public PAPropProtectionCov(entity.PolicyPeriod branch)  {
    super(branch, "PAPropProtectionCov");
  }
  
  public PAPropProtectionCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "PAPropProtectionCov");
  }
  
  public boolean getHasPAPropProtectLimitTerm() {
    return hasCovTerm("PAPropProtectLimit");
  }
  
  public productmodel.OptionPAPropProtectLimitType getPAPropProtectLimitTerm() {
    return (productmodel.OptionPAPropProtectLimitType)getCovTerm("PAPropProtectLimit");
  }
  
  static {
    com.guidewire._generated.productmodel.PAPropProtectionCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.PAPropProtectionCov>() {
      public productmodel.PAPropProtectionCov newEmptyInstance() {
        return new productmodel.PAPropProtectionCov();
      }
      
      
    });
  }
}