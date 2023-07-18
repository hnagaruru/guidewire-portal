package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/IMLine/coveragepatterns/IMSignCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class IMSignCov extends entity.IMSignCov {
  protected IMSignCov()  {
    super((java.lang.Void)null);
  }
  
  public IMSignCov(entity.PolicyPeriod branch)  {
    super(branch, "IMSignCov");
  }
  
  public IMSignCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "IMSignCov");
  }
  
  public boolean getHasIMSignDeductibleTerm() {
    return hasCovTerm("IMSignDeductible");
  }
  
  public boolean getHasIMSignLimitTerm() {
    return hasCovTerm("IMSignLimit");
  }
  
  public productmodel.OptionIMSignDeductibleType getIMSignDeductibleTerm() {
    return (productmodel.OptionIMSignDeductibleType)getCovTerm("IMSignDeductible");
  }
  
  public productmodel.DirectIMSignLimitType getIMSignLimitTerm() {
    return (productmodel.DirectIMSignLimitType)getCovTerm("IMSignLimit");
  }
  
  static {
    com.guidewire._generated.productmodel.IMSignCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.IMSignCov>() {
      public productmodel.IMSignCov newEmptyInstance() {
        return new productmodel.IMSignCov();
      }
      
      
    });
  }
}