package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPMortgageClosingCostExpense.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionHOPMortgageClosingCostExpenseLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionHOPMortgageClosingCostExpenseLimitType> implements productmodel.OptionHOPMortgageClosingCostExpenseLimitType {
  public OptionHOPMortgageClosingCostExpenseLimitTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.HOPMortgageClosingCostExpense getCoverage() {
    return (productmodel.HOPMortgageClosingCostExpense)getClause();
  }
  
  @java.lang.Override
  public productmodel.HOPMortgageClosingCostExpense getHOPMortgageClosingCostExpense() {
    return (productmodel.HOPMortgageClosingCostExpense)getClause();
  }
  
  
}