package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPEmergencyLivingExpense.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPEmergencyLivingExpense extends entity.HOPDwellingCov {
  protected HOPEmergencyLivingExpense()  {
    super((java.lang.Void)null);
  }
  
  public HOPEmergencyLivingExpense(entity.PolicyPeriod branch)  {
    super(branch, "zvoiu1bhk3vs48lq0i2ef8fogfa");
  }
  
  public HOPEmergencyLivingExpense(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zvoiu1bhk3vs48lq0i2ef8fogfa");
  }
  
  public productmodel.OptionHOPEmergencyLivingExpenseLimitType getHOPEmergencyLivingExpenseLimitTerm() {
    return (productmodel.OptionHOPEmergencyLivingExpenseLimitType)getCovTerm("z2chk05cobia54qdqjoubspaqg9");
  }
  
  public boolean getHasHOPEmergencyLivingExpenseLimitTerm() {
    return hasCovTerm("z2chk05cobia54qdqjoubspaqg9");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPEmergencyLivingExpenseInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPEmergencyLivingExpense>() {
      public productmodel.HOPEmergencyLivingExpense newEmptyInstance() {
        return new productmodel.HOPEmergencyLivingExpense();
      }
      
      
    });
  }
}