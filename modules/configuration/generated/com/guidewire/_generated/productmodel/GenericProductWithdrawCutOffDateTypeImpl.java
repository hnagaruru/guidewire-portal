package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ProductWithdrawalLtd.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericProductWithdrawCutOffDateTypeImpl extends com.guidewire.pc.api.domain.covterm.DateTimeCovTermInternal implements productmodel.GenericProductWithdrawCutOffDateType {
  public GenericProductWithdrawCutOffDateTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.ProductWithdrawalLtd getCoverage() {
    return (productmodel.ProductWithdrawalLtd)getClause();
  }
  
  @java.lang.Override
  public productmodel.ProductWithdrawalLtd getProductWithdrawalLtd() {
    return (productmodel.ProductWithdrawalLtd)getClause();
  }
  
  
}