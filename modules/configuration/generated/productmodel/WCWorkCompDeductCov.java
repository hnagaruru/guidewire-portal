package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/WorkersCompLine/coveragepatterns/WCWorkCompDeductCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class WCWorkCompDeductCov extends entity.WCStateCov {
  protected WCWorkCompDeductCov()  {
    super((java.lang.Void)null);
  }
  
  public WCWorkCompDeductCov(entity.PolicyPeriod branch)  {
    super(branch, "WCWorkCompDeductCov");
  }
  
  public WCWorkCompDeductCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "WCWorkCompDeductCov");
  }
  
  public boolean getHasWCDeductibleTerm() {
    return hasCovTerm("WCDeductible");
  }
  
  public productmodel.PackageWCDeductibleType getWCDeductibleTerm() {
    return (productmodel.PackageWCDeductibleType)getCovTerm("WCDeductible");
  }
  
  static {
    com.guidewire._generated.productmodel.WCWorkCompDeductCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.WCWorkCompDeductCov>() {
      public productmodel.WCWorkCompDeductCov newEmptyInstance() {
        return new productmodel.WCWorkCompDeductCov();
      }
      
      
    });
  }
}