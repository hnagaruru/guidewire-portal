package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/IMLine/coveragepatterns/IMAccountReceivableCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class IMAccountReceivableCov extends entity.IMAccountsRecCov {
  protected IMAccountReceivableCov()  {
    super((java.lang.Void)null);
  }
  
  public IMAccountReceivableCov(entity.PolicyPeriod branch)  {
    super(branch, "IMAccountReceivableCov");
  }
  
  public IMAccountReceivableCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "IMAccountReceivableCov");
  }
  
  public boolean getHasIMAccountsReceivableLimitTerm() {
    return hasCovTerm("IMAccountsReceivableLimit");
  }
  
  public productmodel.DirectIMAccountsReceivableLimitType getIMAccountsReceivableLimitTerm() {
    return (productmodel.DirectIMAccountsReceivableLimitType)getCovTerm("IMAccountsReceivableLimit");
  }
  
  static {
    com.guidewire._generated.productmodel.IMAccountReceivableCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.IMAccountReceivableCov>() {
      public productmodel.IMAccountReceivableCov newEmptyInstance() {
        return new productmodel.IMAccountReceivableCov();
      }
      
      
    });
  }
}