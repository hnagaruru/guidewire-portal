package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BAOwnedUIMPDCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BAOwnedUIMPDCov extends entity.BAStateCov {
  protected BAOwnedUIMPDCov()  {
    super((java.lang.Void)null);
  }
  
  public BAOwnedUIMPDCov(entity.PolicyPeriod branch)  {
    super(branch, "BAOwnedUIMPDCov");
  }
  
  public BAOwnedUIMPDCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BAOwnedUIMPDCov");
  }
  
  public productmodel.OptionBAUIMPDLimitType getBAUIMPDLimitTerm() {
    return (productmodel.OptionBAUIMPDLimitType)getCovTerm("BAUIMPDLimit");
  }
  
  public boolean getHasBAUIMPDLimitTerm() {
    return hasCovTerm("BAUIMPDLimit");
  }
  
  static {
    com.guidewire._generated.productmodel.BAOwnedUIMPDCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BAOwnedUIMPDCov>() {
      public productmodel.BAOwnedUIMPDCov newEmptyInstance() {
        return new productmodel.BAOwnedUIMPDCov();
      }
      
      
    });
  }
}