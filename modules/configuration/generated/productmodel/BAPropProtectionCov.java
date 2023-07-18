package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BAPropProtectionCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BAPropProtectionCov extends entity.BAStateCov {
  protected BAPropProtectionCov()  {
    super((java.lang.Void)null);
  }
  
  public BAPropProtectionCov(entity.PolicyPeriod branch)  {
    super(branch, "BAPropProtectionCov");
  }
  
  public BAPropProtectionCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BAPropProtectionCov");
  }
  
  public productmodel.OptionBAPropProtectLimitType getBAPropProtectLimitTerm() {
    return (productmodel.OptionBAPropProtectLimitType)getCovTerm("BAPropProtectLimit");
  }
  
  public boolean getHasBAPropProtectLimitTerm() {
    return hasCovTerm("BAPropProtectLimit");
  }
  
  static {
    com.guidewire._generated.productmodel.BAPropProtectionCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BAPropProtectionCov>() {
      public productmodel.BAPropProtectionCov newEmptyInstance() {
        return new productmodel.BAPropProtectionCov();
      }
      
      
    });
  }
}