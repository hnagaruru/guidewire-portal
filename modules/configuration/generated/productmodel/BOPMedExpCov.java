package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPMedExpCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPMedExpCov extends entity.BusinessOwnersCov {
  protected BOPMedExpCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPMedExpCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPMedExpCov");
  }
  
  public BOPMedExpCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPMedExpCov");
  }
  
  public productmodel.OptionBOPMedExpenseLimitType getBOPMedExpenseLimitTerm() {
    return (productmodel.OptionBOPMedExpenseLimitType)getCovTerm("BOPMedExpenseLimit");
  }
  
  public boolean getHasBOPMedExpenseLimitTerm() {
    return hasCovTerm("BOPMedExpenseLimit");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPMedExpCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPMedExpCov>() {
      public productmodel.BOPMedExpCov newEmptyInstance() {
        return new productmodel.BOPMedExpCov();
      }
      
      
    });
  }
}