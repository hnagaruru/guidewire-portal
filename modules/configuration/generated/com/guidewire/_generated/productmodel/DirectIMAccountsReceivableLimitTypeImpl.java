package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/IMLine/coveragepatterns/IMAccountReceivableCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectIMAccountsReceivableLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectIMAccountsReceivableLimitType {
  public DirectIMAccountsReceivableLimitTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.IMAccountReceivableCov getCoverage() {
    return (productmodel.IMAccountReceivableCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.IMAccountReceivableCov getIMAccountReceivableCov() {
    return (productmodel.IMAccountReceivableCov)getClause();
  }
  
  
}