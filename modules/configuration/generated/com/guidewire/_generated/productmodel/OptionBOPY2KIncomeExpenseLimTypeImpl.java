package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPY2KIncomeExpenseCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionBOPY2KIncomeExpenseLimTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionBOPY2KIncomeExpenseLimType> implements productmodel.OptionBOPY2KIncomeExpenseLimType {
  public OptionBOPY2KIncomeExpenseLimTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPY2KIncomeExpenseCov getBOPY2KIncomeExpenseCov() {
    return (productmodel.BOPY2KIncomeExpenseCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPY2KIncomeExpenseCov getCoverage() {
    return (productmodel.BOPY2KIncomeExpenseCov)getClause();
  }
  
  
}