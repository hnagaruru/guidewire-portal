package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/CPLine/coveragepatterns/CPBldgExtraExpenseCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectCPBldgExtraExpenseCovLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectCPBldgExtraExpenseCovLimitType {
  public DirectCPBldgExtraExpenseCovLimitTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.CPBldgExtraExpenseCov getCPBldgExtraExpenseCov() {
    return (productmodel.CPBldgExtraExpenseCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.CPBldgExtraExpenseCov getCoverage() {
    return (productmodel.CPBldgExtraExpenseCov)getClause();
  }
  
  
}