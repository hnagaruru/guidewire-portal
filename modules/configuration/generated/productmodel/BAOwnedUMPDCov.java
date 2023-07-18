package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BAOwnedUMPDCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BAOwnedUMPDCov extends entity.BAStateCov {
  protected BAOwnedUMPDCov()  {
    super((java.lang.Void)null);
  }
  
  public BAOwnedUMPDCov(entity.PolicyPeriod branch)  {
    super(branch, "BAOwnedUMPDCov");
  }
  
  public BAOwnedUMPDCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BAOwnedUMPDCov");
  }
  
  public productmodel.OptionBAUMPDLimitType getBAUMPDLimitTerm() {
    return (productmodel.OptionBAUMPDLimitType)getCovTerm("BAUMPDLimit");
  }
  
  public boolean getHasBAUMPDLimitTerm() {
    return hasCovTerm("BAUMPDLimit");
  }
  
  static {
    com.guidewire._generated.productmodel.BAOwnedUMPDCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BAOwnedUMPDCov>() {
      public productmodel.BAOwnedUMPDCov newEmptyInstance() {
        return new productmodel.BAOwnedUMPDCov();
      }
      
      
    });
  }
}