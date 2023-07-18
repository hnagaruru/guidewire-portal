package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPY2KIncomeExpenseCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPY2KIncomeExpenseCov extends entity.BOPLocationCov {
  protected BOPY2KIncomeExpenseCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPY2KIncomeExpenseCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPY2KIncomeExpenseCov");
  }
  
  public BOPY2KIncomeExpenseCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPY2KIncomeExpenseCov");
  }
  
  public productmodel.OptionBOPY2KIncomeExpenseLimType getBOPY2KIncomeExpenseLimTerm() {
    return (productmodel.OptionBOPY2KIncomeExpenseLimType)getCovTerm("BOPY2KIncomeExpenseLim");
  }
  
  public boolean getHasBOPY2KIncomeExpenseLimTerm() {
    return hasCovTerm("BOPY2KIncomeExpenseLim");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPY2KIncomeExpenseCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPY2KIncomeExpenseCov>() {
      public productmodel.BOPY2KIncomeExpenseCov newEmptyInstance() {
        return new productmodel.BOPY2KIncomeExpenseCov();
      }
      
      
    });
  }
}