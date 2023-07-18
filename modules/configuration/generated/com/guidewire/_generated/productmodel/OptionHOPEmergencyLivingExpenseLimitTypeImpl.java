package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPEmergencyLivingExpense.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionHOPEmergencyLivingExpenseLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionHOPEmergencyLivingExpenseLimitType> implements productmodel.OptionHOPEmergencyLivingExpenseLimitType {
  public OptionHOPEmergencyLivingExpenseLimitTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.HOPEmergencyLivingExpense getCoverage() {
    return (productmodel.HOPEmergencyLivingExpense)getClause();
  }
  
  @java.lang.Override
  public productmodel.HOPEmergencyLivingExpense getHOPEmergencyLivingExpense() {
    return (productmodel.HOPEmergencyLivingExpense)getClause();
  }
  
  
}