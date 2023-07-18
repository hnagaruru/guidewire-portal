package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/CPLine/coveragepatterns/CPBldgBusIncomeCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectBusIncomeOtherLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectBusIncomeOtherLimitType {
  public DirectBusIncomeOtherLimitTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.CPBldgBusIncomeCov getCPBldgBusIncomeCov() {
    return (productmodel.CPBldgBusIncomeCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.CPBldgBusIncomeCov getCoverage() {
    return (productmodel.CPBldgBusIncomeCov)getClause();
  }
  
  
}