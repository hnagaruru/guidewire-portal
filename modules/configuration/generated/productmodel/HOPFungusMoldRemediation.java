package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPFungusMoldRemediation.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPFungusMoldRemediation extends entity.HOPDwellingCov {
  protected HOPFungusMoldRemediation()  {
    super((java.lang.Void)null);
  }
  
  public HOPFungusMoldRemediation(entity.PolicyPeriod branch)  {
    super(branch, "zjjh6939q3g4n4k900psm1l21o9");
  }
  
  public HOPFungusMoldRemediation(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zjjh6939q3g4n4k900psm1l21o9");
  }
  
  public productmodel.OptionHOPFungusMoldRemediationLimitType getHOPFungusMoldRemediationLimitTerm() {
    return (productmodel.OptionHOPFungusMoldRemediationLimitType)getCovTerm("zn3h08rtlfpde43obiudbq09ja9");
  }
  
  public boolean getHasHOPFungusMoldRemediationLimitTerm() {
    return hasCovTerm("zn3h08rtlfpde43obiudbq09ja9");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPFungusMoldRemediationInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPFungusMoldRemediation>() {
      public productmodel.HOPFungusMoldRemediation newEmptyInstance() {
        return new productmodel.HOPFungusMoldRemediation();
      }
      
      
    });
  }
}