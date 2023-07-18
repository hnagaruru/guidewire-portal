package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPOrdinanceCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionBOPOrdLawIncomeExpenseDeductTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionBOPOrdLawIncomeExpenseDeductType> implements productmodel.OptionBOPOrdLawIncomeExpenseDeductType {
  public OptionBOPOrdLawIncomeExpenseDeductTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPOrdinanceCov getBOPOrdinanceCov() {
    return (productmodel.BOPOrdinanceCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPOrdinanceCov getCoverage() {
    return (productmodel.BOPOrdinanceCov)getClause();
  }
  
  
}