package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPMortgageClosingCostExpense.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPMortgageClosingCostExpense extends entity.HOPDwellingCov {
  protected HOPMortgageClosingCostExpense()  {
    super((java.lang.Void)null);
  }
  
  public HOPMortgageClosingCostExpense(entity.PolicyPeriod branch)  {
    super(branch, "zilgk228c95qt3ob6v9s6na08ab");
  }
  
  public HOPMortgageClosingCostExpense(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zilgk228c95qt3ob6v9s6na08ab");
  }
  
  public productmodel.OptionHOPMortgageClosingCostExpenseLimitType getHOPMortgageClosingCostExpenseLimitTerm() {
    return (productmodel.OptionHOPMortgageClosingCostExpenseLimitType)getCovTerm("z4ti6io51subg14r1j2vdh6if89");
  }
  
  public boolean getHasHOPMortgageClosingCostExpenseLimitTerm() {
    return hasCovTerm("z4ti6io51subg14r1j2vdh6if89");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPMortgageClosingCostExpenseInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPMortgageClosingCostExpense>() {
      public productmodel.HOPMortgageClosingCostExpense newEmptyInstance() {
        return new productmodel.HOPMortgageClosingCostExpense();
      }
      
      
    });
  }
}